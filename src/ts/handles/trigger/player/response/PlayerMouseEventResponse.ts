/** @noSelfInFile **/
//@ts-nocheck

import { MouseButtonType } from "../../../../API/fields/player/MouseButtonType"
import { Position } from "../../../../Package"
import { MapLocation } from "../../../MapLocation"
import { Point } from "../../../Point"
import { PlayerEventResponse } from "./PlayerEventResponse"

declare function BlzGetTriggerPlayerMouseX(): real
declare function BlzGetTriggerPlayerMouseY(): real
declare function BlzGetTriggerPlayerMousePosition(): location
declare function BlzGetTriggerPlayerMouseButton(): mousebuttontype

export type PlayerMouseTriggerCallback = (response: PlayerMouseEventResponse) => void

export class PlayerMouseEventResponse extends PlayerEventResponse {
    protected mousePos: Position
    protected mouseLoc: MapLocation
    protected mouseButtonType: MouseButtonType

    public constructor() {
        super()
        this.mousePos = new Point(BlzGetTriggerPlayerMouseX(), BlzGetTriggerPlayerMouseY())
        this.mouseLoc = MapLocation.fromHandle(BlzGetTriggerPlayerMousePosition())
        this.mouseButtonType = MouseButtonType.fromHandle(BlzGetTriggerPlayerMouseButton())
    }

    public getMousePos() {
        return this.mousePos
    }

    public getMouseLoc() {
        return this.mouseLoc
    }

    public getMouseButtonType() {
        return this.mouseButtonType
    }
}
