import { Handle } from "../../handles/handle";

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