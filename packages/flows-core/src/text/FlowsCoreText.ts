import { FlowsCoreTextHash } from "./hash/FlowsCoreTextHash";

export class FlowsCoreText {
  private fcHash: FlowsCoreTextHash;

  constructor(hashSecret: string) {
    this.fcHash = new FlowsCoreTextHash(hashSecret);
  }

  public get hash() {
    return this.fcHash;
  }
}
