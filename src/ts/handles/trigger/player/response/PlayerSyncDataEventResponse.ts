import { Synchronizing } from "../../../../API/Synchronizing"
import { PlayerEventResponse } from "./PlayerEventResponse"

export class PlayerSyncDataEventResponse extends PlayerEventResponse {
    prefix = Synchronizing.getEventPrefix()
    data = Synchronizing.getEventData()
}
