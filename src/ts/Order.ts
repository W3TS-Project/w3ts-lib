export class Order {
    protected readonly id: integer
    protected readonly str: string

    public constructor(id: order) {
        this.id = Order.toId(id)
        this.str = Order.toStr(id)
    }

    public getId() {
        return this.id
    }

    public getStr() {
        return this.str
    }

    public static toId(id: order) {
        if (typeof id === "number") {
            return Math.round(id)
        } else {
            return OrderId(id)
        }
    }

    public static toStr(id: order) {
        if (typeof id === "string") {
            return id
        } else {
            return OrderId2String(Math.round(id))
        }
    }
}
