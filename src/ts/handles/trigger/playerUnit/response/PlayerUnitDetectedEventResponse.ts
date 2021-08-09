/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetDetectedUnit(): unit

export class PlayerUnitDetectedEventResponse extends PlayerUnitEventResponse {
    detectedUnit = Unit.fromHandle(GetDetectedUnit())
}
