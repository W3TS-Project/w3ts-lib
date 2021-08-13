/** @noSelfInFile **/
//@ts-nocheck

import { PlayerState } from "../../../../API/fields/player/PlayerState"
import { PlayerEventResponse } from "./PlayerEventResponse"

declare function GetEventPlayerState(): playerstate

export class PlayerStateEventResponse extends PlayerEventResponse {
    state = PlayerState.fromHandle(GetEventPlayerState())
}
