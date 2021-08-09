/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../../MapPlayer"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetChangingUnit(): unit
declare function GetChangingUnitPrevOwner(): player

export class PlayerUnitChangeOwnerEventResponse extends PlayerUnitEventResponse {
    changing = Unit.fromHandle(GetChangingUnit())
    prevOwner = MapPlayer.fromHandle(GetChangingUnitPrevOwner())
}
