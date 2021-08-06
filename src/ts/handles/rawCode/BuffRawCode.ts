import { RawCode } from "../../RawCode"

export class BuffRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом заклинания"

    public constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            BuffRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
    }

    public static get(rawCode: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return super.get(rawCode, isBasicCheck) as BuffRawCode
    }

    protected static check(id: rawcode): boolean {
        if (!super.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: rawcode) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
