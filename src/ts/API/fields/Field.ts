import { Handle } from "../../handles/handle";
import { integer } from "../../utils";

export abstract class Field<T extends handle> extends Handle<T> {
  protected readonly id: integer

  protected constructor(field: T, id: integer) {
    super(field)
    this.id = id
  }

  public getId(): integer {
    return this.id
  }
}