"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsCoreDatabasePostgreSQL = void 0;
const FlowsCoreDatabasePostgreSQLConnection_1 = require("./connection/FlowsCoreDatabasePostgreSQLConnection");
class FlowsCoreDatabasePostgreSQL {
    constructor({ figureConnection }) {
        this.conn = new FlowsCoreDatabasePostgreSQLConnection_1.FlowsCoreDatabasePostgreSQLConnection(figureConnection);
    }
    get connection() {
        return this.conn;
    }
}
exports.FlowsCoreDatabasePostgreSQL = FlowsCoreDatabasePostgreSQL;
