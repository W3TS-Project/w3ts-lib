// /** @noSelfInFile **/
// //@ts-nocheck

// import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
// import { PlayerEvents } from "../../../fields/events/PlayerEvents"
// import { MapPlayer } from "../../MapPlayer"
// import { Trigger } from "../Trigger"
// import { PlayerEventResponse } from "./response/PlayerEventResponse"
// import { PlayerMouseEventResponse } from "./response/PlayerMouseEventResponse"
// import { PlayerStateEventResponse } from "./response/PlayerStateEventResponse"
// import { PlayerSyncDataEventResponse } from "./response/PlayerSyncDataEventResponse"

// declare function TriggerRegisterPlayerEvent(
//     whichTrigger: trigger,
//     whichPlayer: player,
//     whichPlayerEvent: playerevent
// ): event

// export type PlayerEventResponseType =
//     | PlayerEventResponse
//     | PlayerMouseEventResponse
//     | PlayerStateEventResponse
//     | PlayerSyncDataEventResponse

// export type PlayerTriggerCallback = (response: PlayerEventResponseType) => void

// export class PlayerTrigger extends Trigger {
//     protected event: PlayerEvent

//     public register(
//         whichPlayer: MapPlayer,
//         whichPlayerEvent: PlayerEvent,
//         callback?: PlayerTriggerCallback
//     ): PlayerEvent {
//         if (callback) {
//             this.addEventListener(callback)
//         }
//         return PlayerEvent.fromHandle(
//             (<unknown>(
//                 TriggerRegisterPlayerEvent(
//                     this.getHandle() as trigger,
//                     whichPlayer.getHandle() as player,
//                     whichPlayerEvent.getHandle() as playerevent
//                 )
//             )) as playerevent
//         )
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         whichPlayerEvent: PlayerEvent,
//         callback?: PlayerTriggerCallback
//     ) {
//         super()
//         this.event = whichPlayerEvent
//         if (callback) {
//             this.register(whichPlayer, whichPlayerEvent, callback)
//         }
//     }

//     public getEvent() {
//         return this.event
//     }

//     public addEventListener(callback: PlayerTriggerCallback) {
//         let response: PlayerEventResponseType
//         if (
//             this.event === PlayerEvents.MOUSE_DOWN ||
//             this.event === PlayerEvents.MOUSE_MOVE ||
//             this.event === PlayerEvents.MOUSE_UP
//         ) {
//             response = new PlayerMouseEventResponse()
//         } else if (this.event === PlayerEvents.STATE_LIMIT) {
//             response = new PlayerStateEventResponse()
//         } else if (this.event === PlayerEvents.SYNC_DATA) {
//             response = new PlayerSyncDataEventResponse()
//         } else {
//             response = new PlayerEventResponse()
//         }
//         this.addAction(() => callback(response))
//     }
// }
