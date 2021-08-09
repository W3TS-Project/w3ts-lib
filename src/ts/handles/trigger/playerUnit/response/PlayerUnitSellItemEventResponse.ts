/** @noSelfInFile **/
//@ts-nocheck

import { Item } from "../../../Item"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetSoldItem(): item

export class PlayerUnitSellItemEventResponse extends PlayerUnitEventResponse {
    soldItem = Item.fromHandle(GetSoldItem())
}
