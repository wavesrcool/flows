import {
  FlowsFunctionsIoControllersBreathe,
  FlowsFunctionsIoControllersIndexSimple,
  FlowsFunctionsIoControllersKeysAccessSign,
  FlowsFunctionsIoControllersKeysAccessVerify,
} from "@wavesrcool/flows-functions";

export const controllers = {
  index: FlowsFunctionsIoControllersIndexSimple,
  breathe: FlowsFunctionsIoControllersBreathe,
  keys: {
    access: {
      sign: FlowsFunctionsIoControllersKeysAccessSign,
      verify: FlowsFunctionsIoControllersKeysAccessVerify,
    },
  },
};
