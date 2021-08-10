/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetTransportUnit(): unit
declare function GetLoadedUnit(): unit

export class UnitLoadedEventResponse extends UnitEventResponse {
    transportUnit = Unit.fromHandle(GetTransportUnit())
    loadedUnit = Unit.fromHandle(GetLoadedUnit())
}
