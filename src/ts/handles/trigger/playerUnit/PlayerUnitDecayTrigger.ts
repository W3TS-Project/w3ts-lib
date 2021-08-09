// import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent"
// import { PlayerUnitEvents } from "../../../fields/events/PlayerUnitEvents"
// import { MapPlayer } from "../../MapPlayer"
// import { PlayerUnitTrigger, PlayerUnitTriggerCallback } from "./PlayerUnitTrigger"
// import { PlayerUnitDecayTriggerCallback } from "./response/PlayerUnitDecayEventResponse"

// export class PlayerUnitDecayTrigger extends PlayerUnitTrigger {
//     public register(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitDecayTriggerCallback
//     ) {
//         return super.register(
//             whichPlayer,
//             PlayerUnitEvents.DECAY,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitDecayTriggerCallback
//     ) {
//         super(
//             whichPlayer,
//             PlayerUnitEvents.DECAY,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public addEventListener(callback: PlayerUnitDecayTriggerCallback) {
//         super.addEventListener(callback as PlayerUnitTriggerCallback)
//     }
// }
