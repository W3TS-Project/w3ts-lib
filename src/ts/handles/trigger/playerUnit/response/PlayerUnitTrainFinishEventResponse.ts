/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetTrainedUnit(): unit

export class PlayerUnitTrainFinishEventResponse extends PlayerUnitEventResponse {
    trained = Unit.fromHandle(GetTrainedUnit())
}
