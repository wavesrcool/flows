import {
  FlowsFunctionsIoControllersBreathe,
  FlowsFunctionsIoControllersIndexSimple,
  FlowsFunctionsIoControllersKeysAccessSign,
} from "@wavesrcool/flows-functions";

export const controllers = {
  index: FlowsFunctionsIoControllersIndexSimple,
  breathe: FlowsFunctionsIoControllersBreathe,
  keys: {
    access: {
      sign: FlowsFunctionsIoControllersKeysAccessSign,
    },
  },
};
