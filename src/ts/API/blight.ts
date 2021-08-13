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
declare function IsPointBlighted(x: real, y: real): boolean

import { MapPlayer } from "../handles/MapPlayer"
import { MapLocation } from "../handles/MapLocation"
import { Rectangle } from "../handles/Rectangle"
import { Position } from "../Package"

export abstract class Blight {
    static setAreaCoords(
        whichPlayer: MapPlayer,
        x: real,
        y: real,
        radius: real,
        addBlight: boolean
    ) {
        SetBlight(whichPlayer.getHandle() as player, x, y, radius, addBlight)
        return this
    }

    static setAreaPos(
        whichPlayer: MapPlayer,
        p: Position,
        radius: real,
        addBlight: boolean
    ) {
        return this.setAreaCoords(whichPlayer, p.getX(), p.getY(), radius, addBlight)
    }

    static setArea(
        whichPlayer: MapPlayer,
        loc: MapLocation,
        radius: real,
        addBlight: boolean
    ) {
        SetBlightLoc(
            whichPlayer.getHandle() as player,
            loc.getHandle() as location,
            radius,
            addBlight
        )
        return this
    }

    static setRect(whichPlayer: MapPlayer, r: Rectangle, addBlight: boolean) {
        SetBlightRect(whichPlayer.getHandle() as player, r.getHandle() as rect, addBlight)
        return this
    }

    static setCoords(whichPlayer: MapPlayer, x: real, y: real, addBlight: boolean) {
        SetBlightPoint(whichPlayer.getHandle() as player, x, y, addBlight)
        return this
    }

    static setPos(whichPlayer: MapPlayer, p: Position, addBlight: boolean) {
        return this.setCoords(whichPlayer, p.getX(), p.getY(), addBlight)
    }

    static setLoc(whichPlayer: MapPlayer, loc: MapLocation, addBlight: boolean) {
        return this.setCoords(whichPlayer, loc.getX(), loc.getY(), addBlight)
    }

    static isBlightedCoords(x: real, y: real) {
        return IsPointBlighted(x, y)
    }

    static isBlightedPos(p: Position) {
        return this.isBlightedCoords(p.getX(), p.getY())
    }
}
