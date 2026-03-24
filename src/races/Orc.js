import { BaseEntity } from "../BaseEntity";

export class Orc extends BaseEntity {
  constructor() {
    super();
    this.raceName = "Orc";
    this.str = 5;
    this.int = -3;
  }
}
