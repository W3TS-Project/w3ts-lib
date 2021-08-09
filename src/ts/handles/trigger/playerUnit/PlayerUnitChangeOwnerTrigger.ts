// import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent"
// import { PlayerUnitEvents } from "../../../fields/events/PlayerUnitEvents"
// import { MapPlayer } from "../../MapPlayer"
// import { PlayerUnitTrigger, PlayerUnitTriggerCallback } from "./PlayerUnitTrigger"
// import { PlayerUnitChangeOwnerTriggerCallback } from "./response/PlayerUnitChangeOwnerEventResponse"

// export class PlayerUnitChangeOwnerTrigger extends PlayerUnitTrigger {
//     public register(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitChangeOwnerTriggerCallback
//     ) {
//         return super.register(
//             whichPlayer,
//             PlayerUnitEvents.CHANGE_OWNER,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitChangeOwnerTriggerCallback
//     ) {
//         super(
//             whichPlayer,
//             PlayerUnitEvents.CHANGE_OWNER,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public addEventListener(callback: PlayerUnitChangeOwnerTriggerCallback) {
//         super.addEventListener(callback as PlayerUnitTriggerCallback)
//     }
// }