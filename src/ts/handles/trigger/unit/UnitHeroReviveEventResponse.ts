/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetRevivingUnit(): unit

export class UnitHeroReviveEventResponse extends UnitEventResponse {
    revivingUnit = Unit.fromHandle(GetRevivingUnit())
}
