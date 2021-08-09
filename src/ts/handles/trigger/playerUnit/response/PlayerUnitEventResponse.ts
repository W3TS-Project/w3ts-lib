/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerEventResponse } from "../../player/response/PlayerEventResponse"

export class PlayerUnitEventResponse extends PlayerEventResponse {
    unit = Unit.fromEvent()
}
