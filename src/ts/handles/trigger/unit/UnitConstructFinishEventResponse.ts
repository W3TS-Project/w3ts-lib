/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetConstructedStructure(): unit

export class UnitConstructFinishEventResponse extends UnitEventResponse {
    constructedStructure = Unit.fromHandle(GetConstructedStructure())
}
