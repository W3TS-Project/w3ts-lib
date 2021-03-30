/** @noSelfInFile **/
// @ts-nocheck

import { code, codeboolexpr, integer } from "../main"
import { Handle } from "./handle"
import { MapPlayer } from "./player"

declare function Condition(func: code): conditionfunc
declare function DestroyCondition(c: conditionfunc): void
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

export class Force extends Handle<force> {
    public constructor() {
        super(Handle.initFromHandle() ? undefined : CreateForce())
    }

    public addPlayer(whichPlayer: MapPlayer) {
        ForceAddPlayer(this.handle, whichPlayer.handle)
    }

    clear() {
        ForceClear(this.handle)
    }

    destroy() {
        DestroyForce(this.handle)
    }

    enumAllies(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumAllies(this.handle, whichPlayer.handle, filter)
        DestroyCondition(filter)
        return this
    }

    enumEnemies(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumEnemies(this.handle, whichPlayer.handle, filter)
        DestroyCondition(filter)
        return this
    }

    enumPlayers(filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumPlayers(this.handle, filter)
        DestroyCondition(filter)
        return this
    }

    enumPlayersCounted(countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumPlayersCounted(this.handle, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    for(callback: code) {
        ForForce(this.handle, callback)
    }

    hasPlayer(whichPlayer: MapPlayer) {
        return IsPlayerInForce(whichPlayer.handle, this.handle)
    }

    removePlayer(whichPlayer: MapPlayer) {
        ForceRemovePlayer(this.handle, whichPlayer.handle)
    }

    static fromHandle(handle: force): Force {
        return this.getObject(handle)
    }
}
