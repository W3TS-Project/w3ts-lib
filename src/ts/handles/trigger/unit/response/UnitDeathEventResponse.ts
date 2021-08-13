/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetDyingUnit(): unit
declare function GetKillingUnit(): unit

export class UnitDeathEventResponse extends UnitEventResponse {
    dying = Unit.fromHandle(GetDyingUnit())
    killer = Unit.fromHandle(GetKillingUnit())
}
