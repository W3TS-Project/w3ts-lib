// import { GameEvent } from "../../../API/fields/events/GameEvent"
// import { GameEvents } from "../../../fields/events/GameEvents"
// import { GameTrigger, GameTriggerCallback } from "./GameTrigger"
// import { GameTrackableTrackEventResponse } from "./response/GameTrackableTrackEventResponse"

// export type GameTrackableTrackTriggerCallback = (response: GameTrackableTrackEventResponse) => void

// export class GameTrackableTrackTrigger extends GameTrigger {
//     public register(_?: GameEvent, callback?: GameTrackableTrackTriggerCallback) {
//         return super.register(GameEvents.TRACKABLE_TRACK, callback as GameTriggerCallback)
//     }

//     public constructor(_?: GameEvent, callback?: GameTrackableTrackTriggerCallback) {
//         super(GameEvents.TRACKABLE_TRACK, callback as GameTriggerCallback)
//     }

//     public addEventListener(callback: GameTrackableTrackTriggerCallback) {
//         super.addEventListener(callback as GameTriggerCallback)
//     }
// }
