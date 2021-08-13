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
    public constructor() {
        super(CreateForce())
    }

    public addPlayer(whichPlayer: MapPlayer) {
        ForceAddPlayer(this.getHandle() as force, whichPlayer.getHandle() as player)
        return this
    }

    public clear() {
        ForceClear(this.getHandle() as force)
        return this
    }

    public destroy() {
        DestroyForce(this.getHandle() as force)
        return this
    }

    private getFilter(func: ForceFilterCallback) {
        if (func) {
            return Condition(() => func(new ForceFilterResponse(this)))
        } else {
            return Condition(func)
        }
    }

    public enumAllies(whichPlayer: MapPlayer, func: ForceFilterCallback) {
        const filter = this.getFilter(func)
        ForceEnumAllies(this.getHandle() as force, whichPlayer.getHandle() as player, filter)
        DestroyCondition(filter)
        return this
    }

    public enumEnemies(whichPlayer: MapPlayer, func: ForceFilterCallback) {
        const filter = this.getFilter(func)
        ForceEnumEnemies(this.getHandle() as force, whichPlayer.getHandle() as player, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPlayers(func: ForceFilterCallback) {
        const filter = this.getFilter(func)
        ForceEnumPlayers(this.getHandle() as force, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPlayersCounted(countLimit: integer, func: ForceFilterCallback) {
        const filter = this.getFilter(func)
        ForceEnumPlayersCounted(this.getHandle() as force, filter, Math.floor(countLimit))
        DestroyCondition(filter)
        return this
    }

    private getEnumCallback(func: ForceEnumCallback) {
        if (func) {
            return () => func(new ForceEnumResponse(this))
        }
        return undefined
    }

    public forEach(func: ForceEnumCallback) {
        ForForce(this.getHandle() as force, this.getEnumCallback(func))
        return this
    }

    public hasPlayer(whichPlayer: MapPlayer) {
        return IsPlayerInForce(whichPlayer.getHandle() as player, this.getHandle() as force)
    }

    public has(whichPlayer: MapPlayer) {
        return BlzForceHasPlayer(this.getHandle() as force, whichPlayer.getHandle() as player)
    }

    public removePlayer(whichPlayer: MapPlayer) {
        ForceRemovePlayer(this.getHandle() as force, whichPlayer.getHandle() as player)
    }

    public static fromHandle(handle: force) {
        return this.getObject(handle) as Force
    }
}
