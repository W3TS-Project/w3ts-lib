import { RawCode } from "../../../RawCode"
import { Field } from "../Field"

export abstract class ItemField<T extends handle> extends Field<T> {
    protected rawCode: RawCode
    protected title?: string

    protected constructor(field: T, rawCode: RawCode, title?: string) {
        super(field, rawCode.getId())
        this.rawCode = rawCode
        this.title = title
    }

    public getRawCode(): RawCode {
        return this.rawCode
    }

    public getTitle(): string | undefined {
        return this.title
    }
}
