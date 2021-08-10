/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetTrainedUnit(): unit

export class UnitTrainFinishEventResponse extends UnitEventResponse {
    trained = Unit.fromHandle(GetTrainedUnit())
}
