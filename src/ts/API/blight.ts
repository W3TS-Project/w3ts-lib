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

export const Blight = {
    setCoords(whichPlayer: player, x: real, y: real, radius: real, addBlight: boolean) {
        SetBlight(whichPlayer, x, y, radius, addBlight)
    },

}

import { MapPlayer } from "../handles/player"
import { MapLocation, Point } from "../handles/location"
import { Rectangle } from "../handles/rect"
import { real } from "../utils"

export class Blight {
    private constructor() {}

    public static setArea(
        whichPlayer: MapPlayer,
        x: number,
        y: number,
        radius: number,
        addBlight: boolean
    ) {
        SetBlight(whichPlayer.handle, x, y, radius, addBlight)
        return this
    }

    public static setArea(whichPlayer: MapPlayer, p: Point, radius: number, addBlight: boolean) {
        return this.setArea(whichPlayer, p.x, p.y, radius, addBlight)
    }

    public static setArea(
        whichPlayer: MapPlayer,
        loc: MapLocation,
        radius: number,
        addBlight: boolean
    ) {
        SetBlightLoc(whichPlayer.handle, loc.handle, radius, addBlight)
        return this
    }

    public static setRect(whichPlayer: MapPlayer, r: Rectangle, addBlight: boolean) {
        SetBlightRect(whichPlayer.handle, r.handle, addBlight)
        return this
    }

    public static setCoords(whichPlayer: MapPlayer, x: number, y: number, addBlight: boolean) {
        SetBlightPoint(whichPlayer.handle, x, y, addBlight)
        return this
    }

    public static setPoint(whichPlayer: MapPlayer, p: Point, addBlight: boolean) {
        return this.setCoords(whichPlayer, p.x, p.y, addBlight)
    }

    public static setLoc(whichPlayer: MapPlayer, loc: MapLocation, addBlight: boolean) {
        return this.setCoords(whichPlayer, loc.x, loc.y, addBlight)
    }
}
