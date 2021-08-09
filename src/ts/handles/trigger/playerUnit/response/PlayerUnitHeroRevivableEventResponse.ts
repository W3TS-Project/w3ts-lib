/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetRevivableUnit(): unit

export class PlayerUnitHeroRevivableEventResponse extends PlayerUnitEventResponse {
    revivable = Unit.fromHandle(GetRevivableUnit())
}
