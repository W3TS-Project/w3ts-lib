import { RawCode } from "../../RawCode"

export type DestructableRawCodeType = DestructableRawCode | rawcode

export class DestructableRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом разрушаемого объекта"

    constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            DestructableRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
    }

    static get(rawCode: DestructableRawCodeType, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return RawCode.get(rawCode, isBasicCheck) as DestructableRawCode
    }

    static check(id: DestructableRawCodeType): boolean {
        if (!RawCode.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: DestructableRawCodeType) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
