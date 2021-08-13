import { ErrorHandling } from "./ErrorHandling"

export type RawCodeType = RawCode | rawcode

export class RawCode {
    readonly id: integer
    readonly chars: string
    protected static readonly map: Map<integer, RawCode> = new Map<integer, RawCode>()
    protected static RANGE_ERROR_MESSAGE = "Недопустимое значение равкода"

    constructor(id: rawcode, isBasicCheck: boolean = true) {
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        this.id = RawCode.toId(id, !isBasicCheck)
        this.chars = RawCode.toChars(id, !isBasicCheck)
        if (!RawCode.map.has(this.id)) {
            RawCode.map.set(this.id, this)
        }
    }

    static get(rawCode: RawCodeType, isBasicCheck: boolean = true) {
        if (isBasicCheck) {
            this.checkAnError(rawCode)
        }
        rawCode = this.toId(rawCode, !isBasicCheck)
        if (this.map.has(rawCode)) {
            return this.map.get(rawCode) as RawCode
        } else {
            return new this(rawCode, !isBasicCheck)
        }
    }

    static toId(id: RawCodeType, isBasicCheck: boolean = true): integer {
        if (typeof id === "string" || typeof id === "number") {
            if (isBasicCheck) {
                this.checkAnError(id)
            }
            if (typeof id === "number") {
                return Math.floor(id)
            } else {
                return FourCC(id)
            }
        } else {
            return id.id
        }
    }

    static toChars(id: RawCodeType, isBasicCheck: boolean = true): string {
        if (typeof id === "string" || typeof id === "number") {
            if (isBasicCheck) {
                this.checkAnError(id)
            }
            if (typeof id === "string") {
                return id
            } else {
                return string.pack(">I4", Math.floor(id))
            }
        } else {
            return id.chars
        }
    }

    static toLetter(id: RawCodeType, index: integer, isBasicCheck: boolean = false): string {
        if (isBasicCheck) {
            this.checkAnError(id)
        }
        if (index < 0 || index > 4) {
            ErrorHandling.error("Индекс равкода не верен")
        }
        return this.toChars(id, !isBasicCheck).charAt(index)
    }

    static check(id: RawCodeType): boolean {
        const chars = this.toChars(id, false)
        if (chars.length !== 4) {
            return false
        }
        const inRange1 = (charCode: integer) => charCode < "0".charCodeAt(0)
        const inRange2 = (charCode: integer) =>
            charCode > "9".charCodeAt(0) && charCode < "A".charCodeAt(0)
        const inRange3 = (charCode: integer) =>
            charCode > "Z".charCodeAt(0) && charCode < "a".charCodeAt(0)
        const inRange4 = (charCode: integer) => charCode > "z".charCodeAt(0)
        for (let i = 0; i < chars.length; i++) {
            const charCode = chars[i].charCodeAt(0)
            if (
                inRange1(charCode) ||
                inRange2(charCode) ||
                inRange3(charCode) ||
                inRange4(charCode)
            ) {
                return false
            }
        }
        return true
    }

    protected static checkAnError(id: RawCodeType) {
        if (!this.check(id)) {
            ErrorHandling.error(this.RANGE_ERROR_MESSAGE)
        }
    }
}
