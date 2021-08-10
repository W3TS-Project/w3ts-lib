/** @noSelfInFile **/
//@ts-nocheck

import { Order } from "../../../../Order"
import { AbilityRawCode } from "../../../rawCode/AbilityRawCode"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetOrderedUnit(): unit
declare function GetIssuedOrderId(): integer

export class PlayerUnitIssuedOrderEventResponse extends PlayerUnitEventResponse {
    unit = Unit.fromHandle(GetOrderedUnit())
    order: Order
    orderCode = AbilityRawCode.get("")

    constructor() {
        super()
        this.order = Order.get(GetIssuedOrderId())
        if (this.order.getStr() == "") {
            this.orderCode = AbilityRawCode.get(this.order.getId())
        }
    }
}
