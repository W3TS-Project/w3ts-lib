/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetSellingUnit(): unit
declare function GetSoldUnit(): unit
declare function GetBuyingUnit(): unit

export class PlayerUnitSellEventResponse extends PlayerUnitEventResponse {
    sellingUnit = Unit.fromHandle(GetSellingUnit())
    soldUnit = Unit.fromHandle(GetSoldUnit())
    buyingUnit = Unit.fromHandle(GetBuyingUnit())
}
