/** @noSelfInFile **/
//@ts-nocheck

import { Item } from "../../Item"
import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetManipulatingUnit(): unit
declare function GetManipulatedItem(): item

export class UnitItemEventResponse extends UnitEventResponse {
    manipulatingUnit = Unit.fromHandle(GetManipulatingUnit())
    manipulatedItem = Item.fromHandle(GetManipulatedItem())
}
