/** @noSelfInFile **/
// @ts-nocheck

declare function SetBlight(
    whichPlayer: player,
    x: real,
    y: real,
    radius: real,
    addBlight: boolean
): void
declare function SetBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void
declare function SetBlightLoc(
    whichPlayer: player,
    whichLocation: location,
    radius: real,
    addBlight: boolean
): void
declare function SetBlightPoint(whichPlayer: player, x: real, y: real, addBlight: boolean): void
declare function CreateBlightedGoldmine(id: player, x: real, y: real, face: real): unit
declare function IsPointBlighted(x: real, y: real): boolean

import { MapPlayer } from "../handles/player"
import { MapLocation } from "../handles/location"
import { Rectangle } from "../handles/rect"
import { Position, real } from "../Utils"

export abstract class Blight {
    public static setAreaCoords(
        whichPlayer: MapPlayer,
        x: real,
        y: real,
        radius: real,
        addBlight: boolean
    ) {
        SetBlight(whichPlayer.getHandle, x, y, radius, addBlight)
        return this
    }

    public static setAreaPos(whichPlayer: MapPlayer, p: Position, radius: real, addBlight: boolean) {
        return this.setAreaCoords(whichPlayer.getHandle, p.x, p.y, radius, addBlight)
    }

    public static setArea(
        whichPlayer: MapPlayer,
        loc: MapLocation,
        radius: real,
        addBlight: boolean
    ) {
        SetBlightLoc(whichPlayer.getHandle, loc.getHandle, radius, addBlight)
        return this
    }

    public static setRect(whichPlayer: MapPlayer, r: Rectangle, addBlight: boolean) {
        SetBlightRect(whichPlayer.getHandle, r.getHandle, addBlight)
        return this
    }

    public static setCoords(whichPlayer: MapPlayer, x: real, y: real, addBlight: boolean) {
        SetBlightPoint(whichPlayer.getHandle, x, y, addBlight)
        return this
    }

    public static setPos(whichPlayer: MapPlayer, p: Position, addBlight: boolean) {
        return this.setCoords(whichPlayer.getHandle, p.x, p.y, addBlight)
    }

    public static setLoc(whichPlayer: MapPlayer, loc: MapLocation, addBlight: boolean) {
        return this.setCoords(whichPlayer.getHandle, loc.x, loc.y, addBlight)
    }
}
