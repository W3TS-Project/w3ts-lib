/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetAttacker(): unit

export class PlayerUnitAttackedEventResponse extends PlayerUnitEventResponse {
    attacker = Unit.fromHandle(GetAttacker())
}
