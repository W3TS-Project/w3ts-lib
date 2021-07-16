import { RawCode } from "../../../RawCode"
import { Field } from "../Field"

export abstract class AbilityField<T extends handle> extends Field<T> {
    protected rawCode: RawCode
    protected title?: string
    protected readonly desc?: string

    protected constructor(field: T, rawCode: RawCode, title?: string, desc?: string) {
        super(field, rawCode.getId())
        this.rawCode = rawCode
        this.title = title
        this.desc = desc
    }

    public getRawCode(): RawCode {
        return this.rawCode
    }

    public getTitle(): string | undefined {
        return this.title
    }

    public getDesc(): string | undefined {
        return this.desc
    }
}
