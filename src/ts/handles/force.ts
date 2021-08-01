/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"

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

    public enumAllies(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumAllies(this.getHandle() as force, whichPlayer.getHandle() as player, filter)
        DestroyCondition(filter)
        return this
    }

    public enumEnemies(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumEnemies(this.getHandle() as force, whichPlayer.getHandle() as player, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPlayers(filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumPlayers(this.getHandle() as force, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPlayersCounted(countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        ForceEnumPlayersCounted(this.getHandle() as force, filter, Math.floor(countLimit))
        DestroyCondition(filter)
        return this
    }

    public forEach(callback: code) {
        ForForce(this.getHandle() as force, callback)
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
