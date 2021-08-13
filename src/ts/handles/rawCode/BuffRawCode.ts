import { RawCode } from "../../RawCode"

export type BuffRawCodeType = BuffRawCode | rawcode

export class BuffRawCode extends RawCode {
    static readonly ERROR_MESSAGE = "Равкод не является равкодом заклинания"

    constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            BuffRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
    }

    static get(rawCode: BuffRawCodeType, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return RawCode.get(rawCode, isBasicCheck) as BuffRawCode
    }

    static check(id: BuffRawCodeType): boolean {
        if (!RawCode.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: BuffRawCodeType) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
