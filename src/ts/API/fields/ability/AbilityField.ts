import { integer } from "../../../utils"
import { Field } from "../Field"

export abstract class AbilityField<T extends handle> extends Field<T> {
  protected title?: string
  protected readonly desc?: string

  protected constructor(field: T, id: integer, title?: string, desc?: string) {
    super(field, id)
    this.title = title
    this.desc = desc
  }

  public getTitle(): string | undefined {
    return this.title
  }

  public getDesc(): string | undefined {
    return this.desc
  }
}