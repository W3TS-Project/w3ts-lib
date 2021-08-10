// import { GameEvent } from "../../../API/fields/events/GameEvent";
// import { GameEvents } from "../../../fields/events/GameEvents";
// import { GameTrigger, GameTriggerCallback } from "./GameTrigger";
// import { GameVictoryEventResponse } from "./response/GameVictoryEventResponse";

// export type GameVictoryTriggerCallback = (response: GameVictoryEventResponse) => void

// export class GameVictoryTrigger extends GameTrigger {
//     public register(_?: GameEvent, callback?: GameVictoryTriggerCallback) {
//         return super.register(GameEvents.VICTORY, callback as GameTriggerCallback)
//     }

//     public constructor(_?: GameEvent, callback?: GameVictoryTriggerCallback) {
//         super(GameEvents.VICTORY, callback as GameTriggerCallback)
//     }

//     public addEventListener(callback: GameVictoryTriggerCallback) {
//         super.addEventListener(callback as GameTriggerCallback)
//     }
// }