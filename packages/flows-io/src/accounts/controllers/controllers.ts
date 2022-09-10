import {
  FlowsFunctionsIoControllersAccountsCreate,
  FlowsFunctionsIoControllersBreathe,
  FlowsFunctionsIoControllersIndexSimple,
} from "@wavesrcool/flows-functions";

export const controllers = {
  index: FlowsFunctionsIoControllersIndexSimple,
  breathe: FlowsFunctionsIoControllersBreathe,
  accounts: {
    create: FlowsFunctionsIoControllersAccountsCreate,
  },
};
