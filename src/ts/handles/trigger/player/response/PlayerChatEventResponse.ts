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
    protected str: string
    protected strMatched: string

    public constructor() {
        super()
        this.str = GetEventPlayerChatString()
        this.strMatched = GetEventPlayerChatStringMatched()
    }

    public getStr() {
        return this.str
    }

    public getStrMatched() {
        return this.strMatched
    }
}
