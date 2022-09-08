"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsCoreDatabasePostgreSQLConnection = void 0;
const flows_functions_1 = require("@wavesrcool/flows-functions");
class FlowsCoreDatabasePostgreSQLConnection {
    constructor(f) {
        const db = (0, flows_functions_1.FlowsFunctionsDatabaseConnection)(f);
        this.db = db;
    }
}
exports.FlowsCoreDatabasePostgreSQLConnection = FlowsCoreDatabasePostgreSQLConnection;
