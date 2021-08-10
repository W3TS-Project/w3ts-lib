// import { PlayerEvent } from "../../../API/fields/events/PlayerEvent";
// import { PlayerEvents } from "../../../fields/events/PlayerEvents";
// import { MapPlayer } from "../../MapPlayer";
// import { PlayerTrigger, PlayerTriggerCallback } from "./PlayerTrigger";
// import { PlayerStateTriggerCallback } from "./response/PlayerStateEventResponse";

// export class PlayerStateLimitTrigger extends PlayerTrigger {
//     public register(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerStateTriggerCallback) {
//         return super.register(whichPlayer, PlayerEvents.STATE_LIMIT, callback as PlayerTriggerCallback)
//     }

//     public constructor(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerStateTriggerCallback) {
//         super(whichPlayer, PlayerEvents.STATE_LIMIT, callback as PlayerTriggerCallback)
//     }

//     public addEventListener(callback: PlayerStateTriggerCallback) {
//         super.addEventListener(callback as PlayerTriggerCallback)
//     }
// }