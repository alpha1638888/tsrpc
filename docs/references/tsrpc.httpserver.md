<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tsrpc](./tsrpc.md) &gt; [HttpServer](./tsrpc.httpserver.md)

## HttpServer class

<b>Signature:</b>

```typescript
export declare class HttpServer<ServiceType extends BaseServiceType> extends BaseServer<ServiceType> 
```
<b>Extends:</b> [BaseServer](./tsrpc.baseserver.md)<!-- -->&lt;ServiceType&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(proto, options)](./tsrpc.httpserver._constructor_.md) |  | Constructs a new instance of the <code>HttpServer</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [ApiCallClass](./tsrpc.httpserver.apicallclass.md) |  | typeof [ApiCallHttp](./tsrpc.apicallhttp.md) |  |
|  [httpServer?](./tsrpc.httpserver.httpserver.md) |  | http.Server | <i>(Optional)</i> |
|  [MsgCallClass](./tsrpc.httpserver.msgcallclass.md) |  | typeof [MsgCallHttp](./tsrpc.msgcallhttp.md) |  |
|  [options](./tsrpc.httpserver.options.md) |  | [HttpServerOptions](./tsrpc.httpserveroptions.md)<!-- -->&lt;ServiceType&gt; |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_makeCall(conn, input)](./tsrpc.httpserver._makecall.md) |  |  |
|  [\_onRecvJSON(conn, jsonStr)](./tsrpc.httpserver._onrecvjson.md) |  |  |
|  [\_returnJSON(conn, ret)](./tsrpc.httpserver._returnjson.md) |  |  |
|  [start()](./tsrpc.httpserver.start.md) |  |  |
|  [stop()](./tsrpc.httpserver.stop.md) |  |  |
