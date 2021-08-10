// import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
// import { PlayerEvents } from "../../../fields/events/PlayerEvents"
// import { MapPlayer } from "../../MapPlayer"
// import { PlayerTrigger, PlayerTriggerCallback } from "./PlayerTrigger"
// import { PlayerSyncTriggerCallback } from "./response/PlayerSyncDataEventResponse"

// export class PlayerSyncDataTrigger extends PlayerTrigger {
//     public register(whichPlayer: MapPlayer, _?: PlayerEvent, callback?: PlayerSyncTriggerCallback) {
//         return super.register(
//             whichPlayer,
//             PlayerEvents.SYNC_DATA,
//             callback as PlayerTriggerCallback
//         )
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         _?: PlayerEvent,
//         callback?: PlayerSyncTriggerCallback
//     ) {
//         super(whichPlayer, PlayerEvents.SYNC_DATA, callback as PlayerTriggerCallback)
//     }

//     public addEventListener(callback: PlayerSyncTriggerCallback) {
//         super.addEventListener(callback as PlayerTriggerCallback)
//     }
// }
