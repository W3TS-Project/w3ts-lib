/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit";
import { UnitEventResponse } from "./UnitEventResponse";

declare function GetAttacker(): unit

export class UnitAttackedEventResponse extends UnitEventResponse {
    attacker = Unit.fromHandle(GetAttacker())
}