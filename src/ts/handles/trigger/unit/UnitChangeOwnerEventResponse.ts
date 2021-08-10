/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../MapPlayer"
import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetChangingUnit(): unit
declare function GetChangingUnitPrevOwner(): player

export class UnitChangeOwnerEventResponse extends UnitEventResponse {
    changing = Unit.fromHandle(GetChangingUnit())
    prevOwner = MapPlayer.fromHandle(GetChangingUnitPrevOwner())
}
