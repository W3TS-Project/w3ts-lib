/** @noSelfInFile **/
//@ts-nocheck

import { Order } from "../../../../Order"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetOrderedUnit(): unit
declare function GetIssuedOrderId(): integer

export class PlayerUnitIssuedOrderEventResponse extends PlayerUnitEventResponse {
    orderedUnit = Unit.fromHandle(GetOrderedUnit())
    issuedOrder = Order.get(GetIssuedOrderId())
}
