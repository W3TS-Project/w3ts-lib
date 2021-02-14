/** @noSelfInFile **/
// @ts-nocheck

import { BoolExpr, CodeBoolExpr, formatBoolExpr } from "../API/boolean expr"
import { code, integer } from "../main"
import { Handle } from "./handle"
import { MapPlayer } from "./player"

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
    constructor() {
        super(Handle.initFromHandle() ? undefined : CreateForce())
    }

    addPlayer(whichPlayer: MapPlayer) {
        ForceAddPlayer(this.handle, whichPlayer.handle)
    }

    clear() {
        ForceClear(this.handle)
    }

    destroy() {
        DestroyForce(this.handle)
    }

    enumAllies(whichPlayer: MapPlayer, filter: CodeBoolExpr) {
        ForceEnumAllies(this.handle, whichPlayer.handle, formatBoolExpr(filter))
    }

    enumEnemies(whichPlayer: MapPlayer, filter: CodeBoolExpr) {
        ForceEnumEnemies(this.handle, whichPlayer.handle, formatBoolExpr(filter))
    }

    enumPlayers(filter: CodeBoolExpr) {
        ForceEnumPlayers(this.handle, formatBoolExpr(filter))
    }

    enumPlayersCounted(countLimit: integer, filter: CodeBoolExpr) {
        ForceEnumPlayersCounted(this.handle, formatBoolExpr(filter), countLimit)
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
