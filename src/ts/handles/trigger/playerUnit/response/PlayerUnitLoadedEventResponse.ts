/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetTransportUnit(): unit
declare function GetLoadedUnit(): unit

export class PlayerUnitLoadedEventResponse extends PlayerUnitEventResponse {
    transportUnit = Unit.fromHandle(GetTransportUnit())
    loadedUnit = Unit.fromHandle(GetLoadedUnit())
}
