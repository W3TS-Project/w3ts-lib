import { RawCode } from "../../RawCode"

export type TechRawCodeType = TechRawCode | rawcode

export class TechRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом улучшения"

    constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            TechRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
    }

    static get(rawCode: TechRawCodeType, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return RawCode.get(rawCode, isBasicCheck) as TechRawCode
    }

    static check(id: TechRawCodeType): boolean {
        if (!RawCode.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: TechRawCodeType) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
