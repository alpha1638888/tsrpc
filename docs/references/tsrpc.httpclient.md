<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tsrpc](./tsrpc.md) &gt; [HttpClient](./tsrpc.httpclient.md)

## HttpClient class

<b>Signature:</b>

```typescript
export declare class HttpClient<ServiceType extends BaseServiceType> extends BaseClient<ServiceType> 
```
<b>Extends:</b> BaseClient&lt;ServiceType&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(proto, options)](./tsrpc.httpclient._constructor_.md) |  | Constructs a new instance of the <code>HttpClient</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [lastReceivedBuf?](./tsrpc.httpclient.lastreceivedbuf.md) |  | Uint8Array | <i>(Optional)</i> |
|  [options](./tsrpc.httpclient.options.md) |  | HttpClientOptions |  |
|  [type](./tsrpc.httpclient.type.md) |  | (not declared) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_encodeApiReq(service, req, pendingItem)](./tsrpc.httpclient._encodeapireq.md) |  |  |
|  [\_encodeClientMsg(service, msg)](./tsrpc.httpclient._encodeclientmsg.md) |  |  |
|  [\_sendBuf(buf, options, serviceId, pendingApiItem)](./tsrpc.httpclient._sendbuf.md) |  |  |
