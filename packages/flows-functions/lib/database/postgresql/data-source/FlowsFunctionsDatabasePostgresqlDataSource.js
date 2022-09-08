"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsDatabasePostgresqlDataSource = void 0;
const flows_models_1 = require("@wavesrcool/flows-models");
const typeorm_1 = require("typeorm");
const FlowsFunctionsDatabasePostgresqlDataSource = ({ migrations, }) => {
    const url = process.env.FLOWS_GLOBAL_POSTGRES_URL;
    if (!url) {
        throw new Error(`[flows-database] Error. FlowsFunctionsDatabasePostgresqlDataSource. process.env.FLOWS_GLOBAL_POSTGRES_URL`);
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
    const ds = new typeorm_1.DataSource(options);
    return ds;
};
exports.FlowsFunctionsDatabasePostgresqlDataSource = FlowsFunctionsDatabasePostgresqlDataSource;
