import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareResponseLocalsXFlowsTokenRecords: RequestHandler =
  (_req, res, next) => {
    const {
      xFlowTokenRecords: { account: xFlowTokenRecordsAccount },
    } = res.locals;

    if (
      xFlowTokenRecordsAccount &&
      "value" in xFlowTokenRecordsAccount &&
      "key" in xFlowTokenRecordsAccount
    ) {
      next();
      return;
    }

    res.status(404).send({ error: "response-locals-xFlowTokenDecoded" });
  };
