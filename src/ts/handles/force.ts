/** @noSelfInFile **/
//@ts-nocheck

import { code, codeboolexpr, integer } from "../utils"
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
        super(CreateForce())
    }

    public addPlayer(whichPlayer: MapPlayer) {
        ForceAddPlayer(this.getHandle, whichPlayer.getHandle)
    }

    public clear() {
        ForceClear(this.getHandle)
    }

    public destroy() {
        DestroyForce(this.getHandle)
    }

    public enumAllies(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumAllies(this.getHandle, whichPlayer.getHandle, filter)
        DestroyCondition(filter)
        return this
    }

    public enumEnemies(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumEnemies(this.getHandle, whichPlayer.getHandle, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPlayers(filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumPlayers(this.getHandle, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPlayersCounted(countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumPlayersCounted(this.getHandle, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    public forEach(callback: code) {
        ForForce(this.getHandle, callback)
    }

    public hasPlayer(whichPlayer: MapPlayer) {
        return IsPlayerInForce(whichPlayer.getHandle, this.getHandle)
    }

    public removePlayer(whichPlayer: MapPlayer) {
        ForceRemovePlayer(this.getHandle, whichPlayer.getHandle)
    }

    public static fromHandle(handle: force): Force {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: Force): force {
        return this.getHandle(handleObject)
    }
}
