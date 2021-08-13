/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetSellingUnit(): unit
declare function GetSoldUnit(): unit
declare function GetBuyingUnit(): unit

export class UnitSellEventResponse extends UnitEventResponse {
    sellingUnit = Unit.fromHandle(GetSellingUnit())
    soldUnit = Unit.fromHandle(GetSoldUnit())
    buyingUnit = Unit.fromHandle(GetBuyingUnit())
}
