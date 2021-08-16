/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"

declare function CreateForce(): force
declare function DestroyForce(whichForce: force): void
declare function ForceAddPlayer(whichForce: force, whichPlayer: player): void
declare function ForceRemovePlayer(whichForce: force, whichPlayer: player): void
declare function BlzForceHasPlayer(whichForce: force, whichPlayer: player): boolean
declare function ForceClear(whichForce: force): void
declare function ForceEnumPlayers(whichForce: force, filter: boolexpr | null): void
declare function ForceEnumPlayersCounted(
    whichForce: force,
    filter: boolexpr | null,
    countLimit: integer
): void
declare function ForceEnumAllies(
    whichForce: force,
    whichPlayer: player,
    filter: boolexpr | null
): void
declare function ForceEnumEnemies(
    whichForce: force,
    whichPlayer: player,
    filter: boolexpr | null
): void
declare function ForForce(whichForce: force, callback: code): void
declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean

export class ForceFilterResponse {
    force: Force
    player = MapPlayer.fromFilter()

    constructor(force: Force) {
        this.force = force
    }
}

export type ForceFilterCallback = ((response: ForceFilterResponse) => boolean) | null | undefined

export class ForceEnumResponse {
    force: Force
    player = MapPlayer.fromEnum()

    constructor(force: Force) {
        this.force = force
    }
}

export type ForceEnumCallback = ((response: ForceEnumResponse) => void) | null | undefined

export class Force extends Handle<force> {
    cleared = false
    size: integer = 0

    constructor() {
        super(CreateForce())
    }

    addPlayer(whichPlayer: MapPlayer) {
        ForceAddPlayer(this.getHandle() as force, whichPlayer.getHandle() as player)
        this.size++
        this.cleared = false
        return this
    }

    clear() {
        ForceClear(this.getHandle() as force)
        this.size = 0
        this.cleared = true
        return this
    }

    destroy() {
        DestroyForce(this.getHandle() as force)
        super.destroy()
    }

    private getFilter(func: ForceFilterCallback) {
        if (func) {
            return Condition(() => func(new ForceFilterResponse(this)))
        } else {
            return Condition(func)
        }
    }

    private enumCall(func: ForceFilterCallback, call: (filter: conditionfunc) => void) {
        const filter = this.getFilter(func)
        call(filter)
        DestroyCondition(filter)
        this.size = this.getCount()
        this.cleared = this.size > 0
    }

    enumAllies(whichPlayer: MapPlayer, func: ForceFilterCallback) {
        this.enumCall(func, filter =>
            ForceEnumAllies(this.getHandle() as force, whichPlayer.getHandle() as player, filter)
        )
        return this
    }

    enumEnemies(whichPlayer: MapPlayer, func: ForceFilterCallback) {
        this.enumCall(func, filter =>
            ForceEnumEnemies(this.getHandle() as force, whichPlayer.getHandle() as player, filter)
        )
        return this
    }

    enumPlayers(func: ForceFilterCallback) {
        this.enumCall(func, filter => ForceEnumPlayers(this.getHandle() as force, filter))
        return this
    }

    enumPlayersCounted(countLimit: integer, func: ForceFilterCallback) {
        this.enumCall(func, filter =>
            ForceEnumPlayersCounted(this.getHandle() as force, filter, Math.floor(countLimit))
        )
        return this
    }

    private getEnumCallback(func: ForceEnumCallback) {
        if (func) {
            return () => func(new ForceEnumResponse(this))
        }
        return null
    }

    forEach(func: ForceEnumCallback) {
        ForForce(this.getHandle() as force, this.getEnumCallback(func))
        return this
    }

    getCount() {
        let size = 0
        this.forEach(() => size++)
        return size
    }

    hasPlayer(whichPlayer: MapPlayer) {
        return IsPlayerInForce(whichPlayer.getHandle() as player, this.getHandle() as force)
    }

    has(whichPlayer: MapPlayer) {
        return BlzForceHasPlayer(this.getHandle() as force, whichPlayer.getHandle() as player)
    }

    removePlayer(whichPlayer: MapPlayer) {
        ForceRemovePlayer(this.getHandle() as force, whichPlayer.getHandle() as player)
        this.cleared = --this.size == 0
        return this
    }

    static fromHandle(handle: force) {
        return this.getObject(handle) as Force
    }
}
