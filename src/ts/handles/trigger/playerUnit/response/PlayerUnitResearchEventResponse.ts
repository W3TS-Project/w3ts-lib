/** @noSelfInFile **/
//@ts-nocheck

import { UnitRawCode } from "../../../rawCode/UnitRawCode"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetResearchingUnit(): unit
declare function GetResearched(): integer

export class PlayerUnitResearchEventResponse extends PlayerUnitEventResponse {
    researching = Unit.fromHandle(GetResearchingUnit())
    researched = UnitRawCode.get(GetResearched())
}
