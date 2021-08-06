import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { PlayerEvents } from "../../../fields/events/PlayerEvents"
import { MapPlayer } from "../../MapPlayer"
import { PlayerTrigger, PlayerTriggerCallback } from "./PlayerTrigger"

export class PlayerArrowLeftUpTrigger extends PlayerTrigger {
    public register(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerTriggerCallback) {
        return super.register(whichPlayer, PlayerEvents.ARROW_LEFT_UP, callback)
    }

    public constructor(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerTriggerCallback) {
        super(whichPlayer, PlayerEvents.ARROW_LEFT_UP, callback)
    }
}
