import { PlayerState } from "../../../../API/fields/player/PlayerState"
import { PlayerEventResponse } from "./PlayerEventResponse"

declare function GetEventPlayerState(): playerstate

export type PlayerStateTriggerCallback = (response: PlayerStateEventResponse) => void

export class PlayerStateEventResponse extends PlayerEventResponse {
    protected state: PlayerState

    public constructor() {
        super()
        this.state = PlayerState.fromHandle(GetEventPlayerState())
    }

    public getState() {
        return this.state
    }
}
