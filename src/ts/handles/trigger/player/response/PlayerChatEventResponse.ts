/** @noSelfInFile **/
//@ts-nocheck

import { PlayerEventResponse } from "./PlayerEventResponse"

declare function GetEventPlayerChatString(): string
declare function GetEventPlayerChatStringMatched(): string

export class PlayerChatEventResponse extends PlayerEventResponse {
    /**
     * returns the actual string they typed in ( same as what you registered for
     * if you required exact match )
     */
    str = GetEventPlayerChatString()
    strMatched = GetEventPlayerChatStringMatched()
}
