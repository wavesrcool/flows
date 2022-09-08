"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsIoAccounts = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = require("./routes/routes");
const FlowsIoAccounts = ({ env, corsOrigin, port, datasource, }) => __awaiter(void 0, void 0, void 0, function* () {
    const PROD = env === "production";
    yield datasource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("[flow-accounts] Database initialization complete.");
    }));
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    if (PROD) {
        app.set("trust proxy", 1);
    }
    const corsOptions = {
        origin: corsOrigin,
        credentials: true,
    };
    app.use((0, cors_1.default)(corsOptions));
    (0, routes_1.routes)(app);
    app.listen(port, () => {
        console.log(`[flow-accounts] (env) ${env}`);
        console.log(`[flow-accounts] (port) ${port}`);
    });
    return app;
});
exports.FlowsIoAccounts = FlowsIoAccounts;
