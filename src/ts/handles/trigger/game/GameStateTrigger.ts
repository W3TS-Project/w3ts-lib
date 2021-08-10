// /** @noSelfInFile **/
// //@ts-nocheck

// import { LimitOperation } from "../../../API/fields/events/LimitOperation"
// import { GameFloatState } from "../../../API/fields/game/GameFloatState"
// import { GameIntegerState } from "../../../API/fields/game/GameIntegerState"
// import { GameFloatStateEventResponse } from "./response/GameFloatStateEventResponse"
// import { GameIntegerStateEventResponse } from "./response/GameIntegerStateEventResponse"
// import { Trigger } from "../Trigger"
// import { GameEvent } from "../../../API/fields/events/GameEvent"

// declare function TriggerRegisterGameStateEvent(
//     whichTrigger: trigger,
//     whichState: gamestate,
//     opcode: limitop,
//     limitval: real
// ): event

// type Callback = (response: GameIntegerStateEventResponse | GameFloatStateEventResponse) => void

// export class GameStateTrigger extends Trigger {
//     state?: GameIntegerState | GameFloatState

//     public register(
//         whichState: GameIntegerState | GameFloatState,
//         opcode: LimitOperation,
//         limitval: real,
//         callback?: Callback
//     ) {
//         this.state = whichState
//         if (callback) {
//             this.addEventListener(callback)
//         }
//         return GameEvent.fromHandle(
//             (<unknown>(
//                 TriggerRegisterGameStateEvent(
//                     this.getHandle() as trigger,
//                     whichState.getHandle() as gamestate,
//                     opcode.getHandle() as limitop,
//                     limitval
//                 )
//             )) as gameevent
//         )
//     }

//     public constructor(
//         whichState?: GameIntegerState | GameFloatState,
//         opcode?: LimitOperation,
//         limitval?: real,
//         callback?: Callback
//     ) {
//         super()
//         if (whichState && opcode && limitval && callback) {
//             this.register(whichState, opcode, limitval, callback)
//         }
//     }

//     public addEventListener(callback: Callback) {
//         this.addAction(() => {
//             let response
//             if (this.state instanceof GameIntegerState) {
//                 response = new GameIntegerStateEventResponse()
//             } else {
//                 response = new GameFloatStateEventResponse()
//             }
//             callback(response)
//         })
//     }
// }
