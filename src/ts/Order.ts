export type OrderArgType = Order | order

export class Order {
    readonly id: integer
    readonly str: string
    protected static readonly map: Map<integer, Order> = new Map<integer, Order>()

    constructor(id: order) {
        this.id = Order.toId(id)
        this.str = Order.toStr(id)
        if (!Order.map.has(this.id)) {
            Order.map.set(this.id, this)
        }
    }

    static get(id: order) {
        id = this.toId(id)
        if (this.map.has(id)) {
            return this.map.get(id) as Order
        } else {
            return new this(id)
        }
    }

    static toId(id: OrderArgType) {
        if (typeof id === "number") {
            return Math.floor(id)
        } else if (typeof id === "string") {
            return OrderId(id)
        } else {
            return id.id
        }
    }

    static toStr(id: OrderArgType) {
        if (typeof id === "string") {
            return id
        } else if (typeof id === "number") {
            return OrderId2String(id)
        } else {
            return id.str
        }
    }
}
