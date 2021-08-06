export class RawCode {
    protected readonly id: integer
    protected readonly chars: string
    protected static readonly map: Map<integer, RawCode> = new Map<integer, RawCode>()
    protected static RANGE_ERROR_MESSAGE = "Недопустимое значение равкода"

    public constructor(id: rawcode, isBasicCheck: boolean = true) {
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        this.id = RawCode.toId(id, !isBasicCheck)
        this.chars = RawCode.toChars(id, !isBasicCheck)
        if (!RawCode.map.has(this.id)) {
            RawCode.map.set(this.id, this)
        }
    }

    public static get(rawCode: rawcode, isBasicCheck: boolean = true) {
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

    public getId(): integer {
        return this.id
    }

    public getChars() {
        return this.chars
    }

    public static toId(id: RawCode | rawcode, isBasicCheck: boolean = true): integer {
        if (id instanceof this) {
            return id.getId()
        } else {
            if (isBasicCheck) {
                this.checkAnError(id)
            }
            if (typeof id === "number") {
                return Math.floor(id)
            } else {
                return FourCC(id)
            }
        }
    }

    public static toChars(id: RawCode | rawcode, isBasicCheck: boolean = true): string {
        if (id instanceof this) {
            return id.getChars()
        } else {
            if (isBasicCheck) {
                this.checkAnError(id)
            }
            if (typeof id === "string") {
                return id
            } else {
                return string.pack(">I4", Math.floor(id))
            }
        }
    }

    protected static toLetter(id: rawcode, index: integer, isBasicCheck: boolean = false): string {
        if (isBasicCheck) {
            this.checkAnError(id)
        }
        if (index < 0 || index > 4) {
            error("Индекс равкода не верен", 2)
        }
        return this.toChars(id, !isBasicCheck).charAt(index)
    }

    protected static check(id: rawcode): boolean {
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

    protected static checkAnError(id: rawcode) {
        if (!this.check(id)) {
            error(this.RANGE_ERROR_MESSAGE, 2)
        }
    }
}