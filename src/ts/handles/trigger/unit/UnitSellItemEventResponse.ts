/** @noSelfInFile **/
//@ts-nocheck

import { Item } from "../../Item"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetSoldItem(): item

export class UnitSellItemEventResponse extends UnitEventResponse {
    soldItem = Item.fromHandle(GetSoldItem())
}
