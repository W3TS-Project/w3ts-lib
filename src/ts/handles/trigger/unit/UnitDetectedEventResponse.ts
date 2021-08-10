/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../MapPlayer"
import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetDetectedUnit(): unit
declare function GetEventDetectingPlayer(): player

export class UnitDetectedEventResponse extends UnitEventResponse {
    detectedUnit = Unit.fromHandle(GetDetectedUnit())
    detectingPlayer = MapPlayer.fromHandle(GetEventDetectingPlayer())
}
