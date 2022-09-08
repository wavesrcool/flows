"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsDatabaseConnection = void 0;
const flows_models_1 = require("@wavesrcool/flows-models");
const typeorm_1 = require("typeorm");
const FlowsFunctionsDatabaseConnection = ({ migrations, }) => {
    const url = process.env.FLOWS_GLOBAL_POSTGRES_URL;
    if (!url) {
        throw new Error(`[flows-database] Error. FlowsFunctionsDatabaseConnection. process.env.FLOWS_GLOBAL_POSTGRES_URL`);
    }
    const options = {
        name: "default",
        type: "postgres",
        url,
        synchronize: false,
        logging: !(process.env.NODE_ENV === `production`),
        subscribers: [],
        dropSchema: false,
        entities: [
            flows_models_1.FlowsModelsAccount,
            flows_models_1.FlowsModelsEmailAddress,
            flows_models_1.FlowsModelsEmailLocal,
            flows_models_1.FlowsModelsEmailMessage,
        ],
        migrations,
        migrationsRun: true,
        migrationsTableName: "history",
        ssl: true,
    };
    const connection = new typeorm_1.DataSource(options);
    return connection;
};
exports.FlowsFunctionsDatabaseConnection = FlowsFunctionsDatabaseConnection;
