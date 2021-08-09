/** @noSelfInFile **/
//@ts-nocheck

import { Destructable } from "../../../Destructable"
import { Item } from "../../../Item"
import { Unit } from "../../../Unit"
import { Widget } from "../../../Widget"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetOrderTarget(): widget
declare function GetOrderTargetDestructable(): destructable
declare function GetOrderTargetItem(): item
declare function GetOrderTargetUnit(): unit

export class PlayerUnitIssuedTargetOrderEventResponse extends PlayerUnitEventResponse {
    target = Widget.fromHandle(GetOrderTarget())
    destructable = Destructable.fromHandle(GetOrderTargetDestructable())
    item = Item.fromHandle(GetOrderTargetItem())
    unit = Unit.fromHandle(GetOrderTargetUnit())
}
