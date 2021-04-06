import * as http from "http";
import { BaseServiceType } from "tsrpc-proto";
import { ApiCall } from "../base/ApiCall";
import { BaseConnection, BaseConnectionOptions, ConnectionStatus } from '../base/BaseConnection';
import { ApiCallHttp } from "./ApiCallHttp";
import { HttpServer } from './HttpServer';
import { MsgCallHttp } from "./MsgCallHttp";

export interface HttpConnectionOptions<ServiceType extends BaseServiceType> extends BaseConnectionOptions<ServiceType> {
    server: HttpServer<ServiceType>,
    httpReq: http.IncomingMessage,
    httpRes: http.ServerResponse
}

export class HttpConnection<ServiceType extends BaseServiceType> extends BaseConnection<ServiceType> {
    readonly type = 'SHORT';

    readonly httpReq: http.IncomingMessage;
    readonly httpRes: http.ServerResponse;

    call?: ApiCallHttp | MsgCallHttp;

    constructor(options: HttpConnectionOptions<ServiceType>) {
        super(options);

        this.httpReq = options.httpReq;
        this.httpRes = options.httpRes;
    }


    public get status(): ConnectionStatus {
        // TODO
        if (this.httpRes.writableFinished) {
            return ConnectionStatus.Closed;
        }
        else if (this.httpRes.writableEnded) {
            return ConnectionStatus.Closing;
        }
        else {
            return ConnectionStatus.Opened;
        }
    }

    async sendBuf(buf: Uint8Array, call?: ApiCall): Promise<{ isSucc: true; } | { isSucc: false; errMsg: string; }> {
        // Pre Flow
        let pre = await this.server.flows.preSendBufferFlow.exec({ conn: this, buf: buf, call: call }, call?.logger || this.logger);
        if (!pre) {
            return { isSucc: false, errMsg: 'preSendBufferFlow Error' };
        }
        buf = pre.buf;

        this.server.options.debugBuf && this.logger.debug('[SendBuf]', buf);
        this.httpRes.end(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength));

        return { isSucc: true }
    }

    close(reason?: string) {
        if (this.status !== ConnectionStatus.Opened) {
            return;
        }

        // 有Reason代表是异常关闭
        if (reason) {
            this.logger.warn(`Conn closed unexpectly. method=${this.httpReq.method}, url=${this.httpReq.url}, reason=${reason}`);
        }
        this.httpRes.end(reason);
    }
}