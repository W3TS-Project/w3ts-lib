/** @noSelfInFile **/
// @ts-nocheck

declare function SetBlight(whichPlayer: player, x: number, y: number, radius: number, addBlight: boolean): void
declare function SetBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void
declare function SetBlightLoc(whichPlayer: player, whichLocation: location, radius: number, addBlight: boolean): void
declare function SetBlightPoint(whichPlayer: player, x: number, y: number, addBlight: boolean): void

import { MapPlayer } from "../handles/player";
import { Location, Point } from "../handles/location";
import { Rectangle } from "../handles/rect";

export class Blight {
    private constructor() {}

    static setArea(whichPlayer: MapPlayer, x: number, y: number, radius: number, addBlight: boolean) {
        SetBlight(whichPlayer.handle, x, y, radius, addBlight)
        return this
    }

    static setArea(whichPlayer: MapPlayer, p: Point, radius: number, addBlight: boolean) {
        return this.setArea(whichPlayer, p.x, p.y, radius, addBlight)
    }

    static setArea(whichPlayer: MapPlayer, loc: Location, radius: number, addBlight: boolean) {
        SetBlightLoc(whichPlayer.handle, loc.handle, radius, addBlight)
        return this
    }

    static setRect(whichPlayer: MapPlayer, r: Rectangle, addBlight: boolean) {
        SetBlightRect(whichPlayer.handle, r.handle, addBlight)
        return this
    }

    static setCoords(whichPlayer: MapPlayer, x: number, y: number, addBlight: boolean) {
        SetBlightPoint(whichPlayer.handle, x, y, addBlight)
        return this
    }

    static setPoint(whichPlayer: MapPlayer, p: Point, addBlight: boolean) {
        return this.setCoords(whichPlayer, p.x, p.y, addBlight)
    }

    static setLoc(whichPlayer: MapPlayer, loc: Location, addBlight: boolean) {
        return this.setCoords(whichPlayer, loc.x, loc.y, addBlight)
    }
}