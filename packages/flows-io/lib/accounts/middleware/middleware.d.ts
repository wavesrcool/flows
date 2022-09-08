/// <reference types="qs" />
/// <reference types="express" />
export declare const middleware: {
    request: {
        ipAddress: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    };
    response: {
        locals: {
            ipAddress: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
        };
    };
};
//# sourceMappingURL=middleware.d.ts.map