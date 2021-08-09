/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetConstructedStructure(): unit

export class PlayerUnitConstructFinishEventResponse extends PlayerUnitEventResponse {
    constructedStructure = Unit.fromHandle(GetConstructedStructure())
}
