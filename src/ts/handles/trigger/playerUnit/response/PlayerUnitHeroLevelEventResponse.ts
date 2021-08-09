/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetLevelingUnit(): unit

export class PlayerUnitHeroLevelEventResponse extends PlayerUnitEventResponse {
    leveling = Unit.fromHandle(GetLevelingUnit())
}
