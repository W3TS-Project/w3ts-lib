import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { PlayerEvents } from "../../../fields/events/PlayerEvents"
import { MapPlayer } from "../../MapPlayer"
import { PlayerTrigger, PlayerTriggerCallback } from "./PlayerTrigger"

export class PlayerEndCinematicTrigger extends PlayerTrigger {
    public register(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerTriggerCallback) {
        return super.register(whichPlayer, PlayerEvents.END_CINEMATIC, callback)
    }

    public constructor(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerTriggerCallback) {
        super(whichPlayer, PlayerEvents.END_CINEMATIC, callback)
    }
}
