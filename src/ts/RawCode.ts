export class RawCode {
    protected readonly id: integer
    protected readonly chars: string

    public constructor(id: rawcode) {
        this.id = RawCode.toId(id)
        this.chars = RawCode.toChars(id)
    }

    public getId() {
        return this.id
    }

    public getChars() {
        return this.chars
    }

    public static toId(id: rawcode): integer {
        if (typeof id === "number") {
            return Math.round(id)
        } else {
            return FourCC(id)
        }
    }

    public static toChars(id: rawcode): string {
        if (typeof id === "string") {
            return id
        } else {
            return string.pack(">I4", Math.round(id))
        }
    }
}
