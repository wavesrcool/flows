import { FlowsFunctionsHashText } from "@wavesrcool/flows-functions";

export class FlowsCoreTextHash {
  private hashSecret: string;

  constructor(hashSecret: string) {
    this.hashSecret = hashSecret;
  }

  public hashText(text: string) {
    const hash = FlowsFunctionsHashText({ text, secret: this.hashSecret });
    return hash;
  }
}
