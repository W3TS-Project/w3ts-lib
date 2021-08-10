/** @noSelfInFile **/
//@ts-nocheck

import { TechRawCode } from "../../../rawCode/TechRawCode"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetResearchingUnit(): unit
declare function GetResearched(): integer

export class PlayerUnitResearchEventResponse extends PlayerUnitEventResponse {
    researching = Unit.fromHandle(GetResearchingUnit())
    researched = TechRawCode.get(GetResearched())
}
