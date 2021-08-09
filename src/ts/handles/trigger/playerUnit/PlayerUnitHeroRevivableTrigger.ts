// import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent"
// import { PlayerUnitEvents } from "../../../fields/events/PlayerUnitEvents"
// import { MapPlayer } from "../../MapPlayer"
// import { PlayerUnitTrigger, PlayerUnitTriggerCallback } from "./PlayerUnitTrigger"
// import { PlayerUnitHeroRevivableTriggerCallback } from "./response/PlayerUnitHeroRevivableEventResponse"

// export class PlayerUnitHeroRevivableTrigger extends PlayerUnitTrigger {
//     public register(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitHeroRevivableTriggerCallback
//     ) {
//         return super.register(
//             whichPlayer,
//             PlayerUnitEvents.HERO_REVIVABLE,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitHeroRevivableTriggerCallback
//     ) {
//         super(
//             whichPlayer,
//             PlayerUnitEvents.HERO_REVIVABLE,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public addEventListener(callback: PlayerUnitHeroRevivableTriggerCallback) {
//         super.addEventListener(callback as PlayerUnitTriggerCallback)
//     }
// }
