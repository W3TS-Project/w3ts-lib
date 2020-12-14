/** @noSelfInFile **/
// @ts-nocheck

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
    countLimit: number
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
declare function ForForce(whichForce: force, callback: () => void): void
declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean

export class Force extends Handle<force> {
    constructor() {
        if (Handle.initFromHandle()) {
            super()
        } else {
            super(CreateForce())
        }
    }

    public addPlayer(whichPlayer: MapPlayer) {
        ForceAddPlayer(this.handle, whichPlayer.handle)
    }

    public clear() {
        ForceClear(this.handle)
    }

    public destroy() {
        DestroyForce(this.handle)
    }

    public enumAllies(whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)) {
        ForceEnumAllies(this.handle, whichPlayer.handle, filter)
    }

    public enumEnemies(whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)) {
        ForceEnumEnemies(this.handle, whichPlayer.handle, filter)
    }

    public enumPlayers(filter: boolexpr | (() => boolean)) {
        ForceEnumPlayers(this.handle, filter)
    }

    public enumPlayersCounted(filter: boolexpr | (() => boolean), countLimit: number) {
        ForceEnumPlayersCounted(this.handle, filter, countLimit)
    }

    public for(callback: () => void) {
        ForForce(this.handle, callback)
    }

    public hasPlayer(whichPlayer: MapPlayer) {
        return IsPlayerInForce(whichPlayer.handle, this.handle)
    }

    public removePlayer(whichPlayer: MapPlayer) {
        ForceRemovePlayer(this.handle, whichPlayer.handle)
    }

    public static fromHandle(handle: force): Force {
        return this.getObject(handle)
    }
}
