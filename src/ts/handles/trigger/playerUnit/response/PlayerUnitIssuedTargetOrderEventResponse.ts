/** @noSelfInFile **/
//@ts-nocheck

import { Destructable } from "../../../Destructable"
import { Item } from "../../../Item"
import { Unit } from "../../../Unit"
import { Widget } from "../../../Widget"
import { PlayerUnitIssuedOrderEventResponse } from "./PlayerUnitIssuedOrderEventResponse"

declare function GetOrderTarget(): widget
declare function GetOrderTargetDestructable(): destructable
declare function GetOrderTargetItem(): item
declare function GetOrderTargetUnit(): unit

export class PlayerUnitIssuedTargetOrderEventResponse extends PlayerUnitIssuedOrderEventResponse {
    target = Widget.fromHandle(GetOrderTarget())
    targetDestructable = Destructable.fromHandle(GetOrderTargetDestructable())
    targetItem = Item.fromHandle(GetOrderTargetItem())
    targetUnit = Unit.fromHandle(GetOrderTargetUnit())
}
