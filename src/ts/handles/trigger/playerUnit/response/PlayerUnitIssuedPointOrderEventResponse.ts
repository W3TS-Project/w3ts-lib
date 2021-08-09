/** @noSelfInFile **/
//@ts-nocheck

import { MapLocation } from "../../../MapLocation"
import { Point } from "../../../Point"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetOrderPointX(): real
declare function GetOrderPointY(): real
declare function GetOrderPointLoc(): location

export class PlayerUnitIssuedPointOrderEventResponse extends PlayerUnitEventResponse {
    x: real = GetOrderPointX()
    y: real = GetOrderPointY()
    loc = MapLocation.fromHandle(GetOrderPointLoc())
    point = new Point(this.x, this.y)
}
