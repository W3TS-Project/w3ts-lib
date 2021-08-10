/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetRevivableUnit(): unit

export class UnitHeroRevivableEventResponse extends UnitEventResponse {
    revivable = Unit.fromHandle(GetRevivableUnit())
}
