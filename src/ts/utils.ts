//@ts-nocheck

import { MapLocation } from "./handles/location"
import { Point } from "./handles/point"

export type integer = number
export type real = number
export type code = () => void
export type codeboolexpr = () => boolean | null
export type RawCode = integer | string
export type Order = integer | string | "attack"
export type Coords = {
    x: real
    y: real
    z: real
}
export type Position = Coords | MapLocation | Point
export type Primitive = boolean | integer | real | string

export abstract class Utils {
    public static formatCC(id: RawCode): integer {
        if (typeof id === "number") {
            return id
        } else {
            return FourCC(id)
        }
    }

    public static formatOrder(order: Order): integer {
        if (typeof order === "number") {
            return order
        } else {
            return OrderId(order)
        }
    }
}