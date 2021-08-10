// import { GameEvent } from "../../../API/fields/events/GameEvent"
// import { GameEvents } from "../../../fields/events/GameEvents"
// import { GameTrigger, GameTriggerCallback } from "./GameTrigger"
// import { GameTrackableHitEventResponse } from "./response/GameTrackableHitEventResponse"

// export type GameTrackableHitTriggerCallback = (response: GameTrackableHitEventResponse) => void

// export class GameTrackableHitTrigger extends GameTrigger {
//     public register(_?: GameEvent, callback?: GameTrackableHitTriggerCallback) {
//         return super.register(GameEvents.TRACKABLE_HIT, callback as GameTriggerCallback)
//     }

//     public constructor(_?: GameEvent, callback?: GameTrackableHitTriggerCallback) {
//         super(GameEvents.TRACKABLE_HIT, callback as GameTriggerCallback)
//     }

//     public addEventListener(callback: GameTrackableHitTriggerCallback) {
//         super.addEventListener(callback as GameTriggerCallback)
//     }
// }
