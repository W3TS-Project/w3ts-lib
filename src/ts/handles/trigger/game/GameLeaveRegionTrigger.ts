// import { GameEvent } from "../../../API/fields/events/GameEvent"
// import { GameEvents } from "../../../fields/events/GameEvents"
// import { GameTrigger, GameTriggerCallback } from "./GameTrigger"
// import { GameLeaveRegionEventResponse } from "./response/GameLeaveRegionEventResponse"

// export type GameLeaveRegionTriggerCallback = (response: GameLeaveRegionEventResponse) => void

// export class GameLeaveRegionTrigger extends GameTrigger {
//     public register(_?: GameEvent, callback?: GameLeaveRegionTriggerCallback) {
//         return super.register(GameEvents.LEAVE_REGION, callback as GameTriggerCallback)
//     }

//     public constructor(_?: GameEvent, callback?: GameLeaveRegionTriggerCallback) {
//         super(GameEvents.LEAVE_REGION, callback as GameTriggerCallback)
//     }

//     public addEventListener(callback: GameLeaveRegionTriggerCallback) {
//         super.addEventListener(callback as GameTriggerCallback)
//     }
// }
