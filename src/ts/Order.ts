export class Order {
    protected readonly id: integer
    protected readonly str: string
    protected static readonly map: Map<integer, Order> = new Map<integer, Order>()

    public constructor(id: order) {
        this.id = Order.toId(id)
        this.str = Order.toStr(id)
        if (!Order.map.has(this.id)) {
            Order.map.set(this.id, this)
        }
    }

    public getId() {
        return this.id
    }

    public getStr() {
        return this.str
    }

    public static get(id: order) {
        id = this.toId(id)
        if (this.map.has(id)) {
            return this.map.get(id) as Order
        } else {
            return new this(id)
        }
    }

    public static toId(id: Order | order) {
        if (id instanceof Order) {
            return id.getId()
        } else if (typeof id === "number") {
            return Math.floor(id)
        } else {
            return OrderId(id)
        }
    }

    public static toStr(id: Order | order) {
        if (id instanceof Order) {
            return id.getStr()
        } else if (typeof id === "string") {
            return id
        } else {
            return OrderId2String(Math.floor(id))
        }
    }
}
