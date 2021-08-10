// import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
// import { PlayerEvents } from "../../../fields/events/PlayerEvents"
// import { PlayerStates } from "../../../fields/player/PlayerStates"
// import { MapPlayer } from "../../MapPlayer"
// import { PlayerTrigger, PlayerTriggerCallback } from "./PlayerTrigger"
// import { PlayerMouseTriggerCallback } from "./response/PlayerMouseEventResponse"

// export class PlayerMouseUpTrigger extends PlayerTrigger {
//     public register(
//         whichPlayer: MapPlayer,
//         _?: PlayerEvent,
//         callback?: PlayerMouseTriggerCallback
//     ) {
//         return super.register(whichPlayer, PlayerEvents.MOUSE_UP, callback as PlayerTriggerCallback)
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         _?: PlayerEvent,
//         callback?: PlayerMouseTriggerCallback
//     ) {
//         super(whichPlayer, PlayerEvents.MOUSE_UP, callback as PlayerTriggerCallback)
//     }

//     public addEventListener(callback: PlayerMouseTriggerCallback) {
//         super.addEventListener(callback as PlayerTriggerCallback)
//     }
// }