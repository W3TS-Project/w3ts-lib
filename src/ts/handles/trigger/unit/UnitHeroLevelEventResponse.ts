/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetLevelingUnit(): unit

export class UnitHeroLevelEventResponse extends UnitEventResponse {
    leveling = Unit.fromHandle(GetLevelingUnit())
}
