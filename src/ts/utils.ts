//@ts-nocheck

import { MapLocation } from "./handles/location"
import { Point } from "./handles/point"
import { Timer } from "./handles/timer"

export type integer = number
export type real = number
export type code = () => void
export type codeboolexpr = () => boolean | null

export const getExpiredTimer = Timer.fromExpired
export const setTimeout = (time: real, call: code, isDestroy: boolean = false): Timer => {
    return new Timer().start(time, false, () => {
        call()
        if (isDestroy) {
            getExpiredTimer()
                .pause()
                .destroy()
        }
    })
}

export const setInterval = (time: real, call: code): Timer => {
    return new Timer().start(time, true, call)
}

export type RawCode = integer | string

export type Order = integer | string | "attack"

export const formatCC = (id: RawCode): integer => {
    if (typeof id === "number") {
        return id
    } else {
        return FourCC(id)
    }
}

export const formatOrder = (order: Order): integer => {
    if (typeof order === "number") {
        return order
    } else {
        return OrderId(order)
    }
}

export type Coords = {
    x: real
    y: real
    z: real
}

export type Position = Coords | MapLocation | Point

export type Primitive = boolean | integer | real | string

// function forHandle(handle: handle) {
//     print(handle)
// }

// function forAgent(concrectHandle: agent) {
//     print(concrectHandle)
// }

// declare function getHandle(): handle
// declare function getAgent(): agent

// let h: handle = getHandle()
// let ag: agent = getAgent()

// forHandle(ag)
// forAgent(ag)

// class Handle<T extends handle> {
//     public readonly handle: T
//     private static initHandle: handle | undefined

//     protected constructor(handle?: T) {
//         this.handle = handle === undefined ? (Handle.initHandle as T) : handle
//     }
// }

// class Agent extends Handle<agent> {
//     private constructor() {
//         super(getAgent())
//     }
// }
