// import { GameEvent } from "../../../API/fields/events/GameEvent";
// import { GameEvents } from "../../../fields/events/GameEvents";
// import { GameTrigger, GameTriggerCallback } from "./GameTrigger";
// import { GameTournamentFinishNowEventResponse } from "./response/GameTournamentFinishNowEventResponse";

// export type GameTournamentFinishNowTriggerCallback = (response: GameTournamentFinishNowEventResponse) => void

// export class GameTournamentFinishNowTrigger extends GameTrigger {
//     public register(_?: GameEvent, callback?: GameTournamentFinishNowTriggerCallback) {
//         return super.register(GameEvents.TOURNAMENT_FINISH_NOW, callback as GameTriggerCallback)
//     }

//     public constructor(_?: GameEvent, callback?: GameTournamentFinishNowTriggerCallback) {
//         super(GameEvents.TOURNAMENT_FINISH_NOW, callback as GameTriggerCallback)
//     }

//     public addEventListener(callback: GameTournamentFinishNowTriggerCallback) {
//         super.addEventListener(callback as GameTriggerCallback)
//     }
// }