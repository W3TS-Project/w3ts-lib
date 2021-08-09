// import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent"
// import { PlayerUnitEvents } from "../../../fields/events/PlayerUnitEvents"
// import { MapPlayer } from "../../MapPlayer"
// import { PlayerUnitTrigger, PlayerUnitTriggerCallback } from "./PlayerUnitTrigger"
// import { PlayerUnitHeroSkillTriggerCallback } from "./response/PlayerUnitHeroSkillEventResponse"

// export class PlayerUnitHeroSkillTrigger extends PlayerUnitTrigger {
//     public register(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitHeroSkillTriggerCallback
//     ) {
//         return super.register(
//             whichPlayer,
//             PlayerUnitEvents.HERO_SKILL,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public constructor(
//         whichPlayer: MapPlayer,
//         _?: PlayerUnitEvent,
//         filterFunc?: codeboolexpr,
//         callback?: PlayerUnitHeroSkillTriggerCallback
//     ) {
//         super(
//             whichPlayer,
//             PlayerUnitEvents.HERO_SKILL,
//             filterFunc,
//             callback as PlayerUnitTriggerCallback
//         )
//     }

//     public addEventListener(callback: PlayerUnitHeroSkillTriggerCallback) {
//         super.addEventListener(callback as PlayerUnitTriggerCallback)
//     }
// }
