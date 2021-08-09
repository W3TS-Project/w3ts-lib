/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetDecayingUnit(): unit

export class PlayerUnitDecayEventResponse extends PlayerUnitEventResponse {
    decaying = Unit.fromHandle(GetDecayingUnit())
}
