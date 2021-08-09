/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetRevivingUnit(): unit

export class PlayerUnitHeroReviveEventResponse extends PlayerUnitEventResponse {
    revivingUnit = Unit.fromHandle(GetRevivingUnit())
}
