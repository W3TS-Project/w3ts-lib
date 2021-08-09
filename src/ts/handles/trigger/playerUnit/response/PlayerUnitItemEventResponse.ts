/** @noSelfInFile **/
//@ts-nocheck

import { Item } from "../../../Item"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetManipulatingUnit(): unit
declare function GetManipulatedItem(): item

export class PlayerUnitItemEventResponse extends PlayerUnitEventResponse {
    manipulatingUnit = Unit.fromHandle(GetManipulatingUnit())
    manipulatedItem = Item.fromHandle(GetManipulatedItem())
}
