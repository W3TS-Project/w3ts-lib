import { RawCode, RawCodeType } from "../../../RawCode"
import { Field } from "../Field"

export abstract class AbilityField<T extends handle> extends Field<T> {
    rawCode: RawCode
    title?: string
    readonly desc?: string

    protected constructor(field: (id: integer) => T, rawCode: RawCodeType, title?: string, desc?: string) {
        const id = RawCode.toId(rawCode)
        super(field(id))
        this.rawCode = RawCode.get(id)
        this.title = title
        this.desc = desc
    }
}
