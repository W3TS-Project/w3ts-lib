/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetDyingUnit(): unit
declare function GetKillingUnit(): unit

export class PlayerUnitDeathEventResponse extends PlayerUnitEventResponse {
    dying = Unit.fromHandle(GetDyingUnit())
    killer = Unit.fromHandle(GetKillingUnit())
}
