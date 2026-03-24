import { BaseEntity } from "./BaseEntity";

export class Elf extends BaseEntity {
  constructor() {
    super();
    this.raceName = "Elf";
    this.int = 3;
    this.dex = 5;
    this.str = -2;
  }
}
