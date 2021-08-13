/** @noSelfInFile **/
// @ts-nocheck

import { GameState } from "./GameState"

declare function ConvertIGameState(i: integer): igamestate
declare function GetEventGameState(): gamestate

export class GameIntegerState extends GameState<igamestate> {
    static convert(id: integer) {
        return this.proto_convert(ConvertIGameState, id)
    }

    static fromEvent() {
        return this.getObject(GetEventGameState()) as GameIntegerState
    }

    static fromHandle(handle: igamestate) {
        return this.getObject(handle) as GameIntegerState
    }
}
