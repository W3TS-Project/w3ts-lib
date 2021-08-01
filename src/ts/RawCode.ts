const map: Map<integer, RawCode> = new Map<integer, RawCode>()

export class RawCode {
    protected readonly id: integer
    protected readonly chars: string
    protected static readonly map: Map<integer, RawCode> = new Map<integer, RawCode>()

    public constructor(id: rawcode) {
        this.id = RawCode.toId(id)
        this.chars = RawCode.toChars(id)
        if (!RawCode.map.has(this.id)) {
            RawCode.map.set(this.id, this)
        }
    }

    public static get(rawCode: rawcode) {
        rawCode = this.toId(rawCode)
        if (map.has(rawCode)) {
            return RawCode.map.get(rawCode)
        } else {
            return new this(rawCode)
        }
    }

    public getId() {
        return this.id
    }

    public getChars() {
        return this.chars
    }

    public static toId(id: rawcode): integer {
        if (typeof id === "number") {
            return Math.floor(id)
        } else {
            return FourCC(id)
        }
    }

    public static toChars(id: rawcode): string {
        if (typeof id === "string") {
            return id
        } else {
            return string.pack(">I4", Math.floor(id))
        }
    }
}
