import { Field } from "../Field";

export abstract class ItemField<T extends handle> extends Field<T> {
  protected title?: string

  protected constructor(field: T, id: integer, title?: string) {
    super(field, id)
    this.title = title
  }

  public getTitle(): string | undefined {
    return this.title
  }
}