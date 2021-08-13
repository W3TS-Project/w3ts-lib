/** @noSelfInFile **/
//@ts-nocheck

import { TechRawCode } from "../../../rawCode/TechRawCode"
import { Unit } from "../../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetResearchingUnit(): unit
declare function GetResearched(): integer

export class UnitResearchEventResponse extends UnitEventResponse {
    researching = Unit.fromHandle(GetResearchingUnit())
    researched = TechRawCode.get(GetResearched())
}
