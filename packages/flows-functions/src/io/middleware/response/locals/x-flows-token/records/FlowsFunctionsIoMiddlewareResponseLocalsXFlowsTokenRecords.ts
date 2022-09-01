import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareResponseLocalsXFlowsTokenRecords: RequestHandler =
  (_req, res, next) => {
    const {
      xFlowsTokenRecords: { account: xFlowsTokenRecordsAccount },
    } = res.locals;

    if (
      xFlowsTokenRecordsAccount &&
      "value" in xFlowsTokenRecordsAccount &&
      "key" in xFlowsTokenRecordsAccount
    ) {
      next();
      return;
    }

    res.status(404).send({ error: "response-locals-xFlowsTokenRecords" });
  };
