// import { GameEvent } from "../../../API/fields/events/GameEvent"
// import { GameEvents } from "../../../fields/events/GameEvents"
// import { GameTrigger, GameTriggerCallback } from "./GameTrigger"
// import { GameStateEventResponse } from "./response/GameStateEventResponse"

// export type GameStateLimitTriggerCallback = (response: GameStateEventResponse) => void

// export class GameStateLimitTrigger extends GameTrigger {
//     public register(_?: GameEvent, callback?: GameStateLimitTriggerCallback) {
//         return super.register(GameEvents.STATE_LIMIT, callback as GameTriggerCallback)
//     }

//     public constructor(_?: GameEvent, callback?: GameStateLimitTriggerCallback) {
//         super(GameEvents.STATE_LIMIT, callback as GameTriggerCallback)
//     }

//     public addEventListener(callback: GameStateLimitTriggerCallback) {
//         super.addEventListener(callback as GameTriggerCallback)
//     }
// }
