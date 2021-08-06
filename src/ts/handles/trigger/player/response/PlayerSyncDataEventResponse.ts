import { Synchronizing } from "../../../../API/Synchronizing"
import { PlayerEventResponse } from "./PlayerEventResponse"

export type PlayerSyncTriggerCallback = (response: PlayerSyncDataEventResponse) => void

export class PlayerSyncDataEventResponse extends PlayerEventResponse {
    protected prefix: string
    protected data: string

    public constructor() {
        super()
        this.prefix = Synchronizing.getEventPrefix()
        this.data = Synchronizing.getEventData()
    }

    public getPrefix() {
        return this.prefix
    }

    public getData() {
        return this.data
    }
}
