/** @noSelfInFile **/
// @ts-nocheck

import { GameState } from "./GameState"

declare function ConvertFGameState(i: integer): fgamestate
declare function GetEventGameState(): gamestate

export class GameFloatState extends GameState<fgamestate> {
    static convert(id: integer) {
        return this.proto_convert(ConvertFGameState, id)
    }

    static fromEvent() {
        return this.getObject(GetEventGameState()) as GameFloatState
    }

    static fromHandle(handle: fgamestate) {
        return this.getObject(handle) as GameFloatState
    }
}
