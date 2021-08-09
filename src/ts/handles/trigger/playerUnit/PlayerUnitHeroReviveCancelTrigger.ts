// import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent"
// import { PlayerUnitEvents } from "../../../fields/events/PlayerUnitEvents"
// import { MapPlayer } from "../../MapPlayer"
// import { PlayerUnitTrigger, PlayerUnitTriggerCallback } from "./PlayerUnitTrigger"
// import { PlayerUnitHeroReviveTriggerCallback } from "./response/PlayerUnitHeroReviveEventResponse"

// export class PlayerUnitHeroReviveCancelTrigger extends PlayerUnitTrigger {
//     public register(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitHeroReviveTriggerCallback
//     ) {
//         return super.register(
//             whichPlayer,
//             PlayerUnitEvents.RESEARCH_CANCEL,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitHeroReviveTriggerCallback
//     ) {
//         super(
//             whichPlayer,
//             PlayerUnitEvents.HERO_REVIVE_CANCEL,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public addEventListener(callback: PlayerUnitHeroReviveTriggerCallback) {
//         super.addEventListener(callback as PlayerUnitTriggerCallback)
//     }
// }
