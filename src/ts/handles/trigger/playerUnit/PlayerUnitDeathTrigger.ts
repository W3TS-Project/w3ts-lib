// import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent";
// import { PlayerUnitEvents } from "../../../fields/events/PlayerUnitEvents";
// import { MapPlayer } from "../../MapPlayer";
// import { PlayerUnitTrigger, PlayerUnitTriggerCallback } from "./PlayerUnitTrigger";
// import { PlayerUnitDeathTriggerCallback } from "./response/PlayerUnitDeathEventResponse";

// export class PlayerUnitDeathTrigger extends PlayerUnitTrigger {
//     public register(whichPlayer: MapPlayer, _?: PlayerUnitEvent, filterFunc?: codeboolexpr, callback?: PlayerUnitDeathTriggerCallback) {
//         return super.register(whichPlayer, PlayerUnitEvents.DEATH, filterFunc, callback as PlayerUnitTriggerCallback)
//     }

//     public constructor(whichPlayer: MapPlayer, _?: PlayerUnitEvent, filterFunc?: codeboolexpr, callback?: PlayerUnitDeathTriggerCallback) {
//         super(whichPlayer, PlayerUnitEvents.DEATH, filterFunc, callback as PlayerUnitTriggerCallback)
//     }

//     public addEventListener(callback: PlayerUnitDeathTriggerCallback) {
//         super.addEventListener(callback as PlayerUnitTriggerCallback)
//     }
// }