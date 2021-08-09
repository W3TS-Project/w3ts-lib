// // /** @noSelfInFile **/
// // //@ts-nocheck

// import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent"
// import { MapPlayer } from "../../MapPlayer"
// import { Trigger } from "../Trigger"
// import { PlayerUnitAttackedEventResponse } from "./response/PlayerUnitAttackedEventResponse"
// import { PlayerUnitEventResponse } from "./response/PlayerUnitEventResponse"
// import { PlayerUnitHeroReviveEventResponse } from "./response/PlayerUnitHeroReviveEventResponse"

// declare function TriggerRegisterPlayerUnitEvent(
//     whichTrigger: trigger,
//     whichPlayer: player,
//     whichPlayerUnitEvent: playerunitevent,
//     filter: boolexpr | null
// ): event

// export type PlayerUnitEventResponseType = PlayerUnitEventResponse | PlayerUnitAttackedEventResponse | PlayerUnitHeroReviveEventResponse

// export type PlayerUnitTriggerCallback = (response: PlayerUnitEventResponseType) => void

// export class PlayerUnitTrigger extends Trigger {
//     protected event: PlayerUnitEvent

//     public register(
//         whichPlayer: MapPlayer,
//         whichPlayerUnitEvent: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitTriggerCallback
//     ) {
//         if (callback) {
//             this.addEventListener(callback)
//         }
//         const filter = Condition(filterFunc)
//         const event = PlayerUnitEvent.fromHandle(
//             (<unknown>(
//                 TriggerRegisterPlayerUnitEvent(
//                     this.getHandle() as trigger,
//                     whichPlayer.getHandle() as player,
//                     whichPlayerUnitEvent.getHandle() as playerunitevent,
//                     filter
//                 )
//             )) as playerunitevent
//         )
//         DestroyCondition(filter)
//         return event
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         whichPlayerUnitEvent: PlayerUnitEvent,
//         filterFunc: codeboolexpr,
//         callback?: PlayerUnitTriggerCallback
//     ) {
//         super()
//         this.event = whichPlayerUnitEvent
//         if (callback) {
//             this.register(whichPlayer, whichPlayerUnitEvent, filterFunc, callback)
//         }
//     }

//     public getEvent() {
//         return this.event
//     }

//     public addEventListener(callback: PlayerUnitTriggerCallback) {
//         let response: PlayerUnitEventResponseType
//         this.addAction(() => callback(response))
//     }
// }
