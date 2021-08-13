import { RawCode, RawCodeType } from "../../../RawCode"
import { Field } from "../Field"

export abstract class ItemField<T extends handle> extends Field<T> {
    rawCode: RawCode
    title?: string

    protected constructor(field: (id: integer) => T, rawCode: RawCodeType, title?: string) {
        const id = RawCode.toId(rawCode)
        super(field(id))
        this.id = id
        this.rawCode = RawCode.get(id)
        this.title = title
    }
}
