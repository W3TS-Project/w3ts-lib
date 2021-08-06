import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { PlayerEvents } from "../../../fields/events/PlayerEvents"
import { MapPlayer } from "../../MapPlayer"
import { PlayerTrigger, PlayerTriggerCallback } from "./PlayerTrigger"

export class PlayerDefeatTrigger extends PlayerTrigger {
    public register(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerTriggerCallback) {
        return super.register(whichPlayer, PlayerEvents.DEFEAT, callback)
    }

    public constructor(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerTriggerCallback) {
        super(whichPlayer, PlayerEvents.DEFEAT, callback)
    }
}