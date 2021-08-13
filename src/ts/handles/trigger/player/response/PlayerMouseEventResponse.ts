/** @noSelfInFile **/
//@ts-nocheck

import { MouseButtonType } from "../../../../API/fields/player/MouseButtonType"
import { MapLocation } from "../../../MapLocation"
import { Point } from "../../../Point"
import { PlayerEventResponse } from "./PlayerEventResponse"

declare function BlzGetTriggerPlayerMouseX(): real
declare function BlzGetTriggerPlayerMouseY(): real
declare function BlzGetTriggerPlayerMousePosition(): location
declare function BlzGetTriggerPlayerMouseButton(): mousebuttontype

export class PlayerMouseEventResponse extends PlayerEventResponse {
    mousePos = new Point(BlzGetTriggerPlayerMouseX(), BlzGetTriggerPlayerMouseY())
    mouseLoc = MapLocation.fromHandle(BlzGetTriggerPlayerMousePosition())
    mouseButtonType = MouseButtonType.fromHandle(BlzGetTriggerPlayerMouseButton())
}
