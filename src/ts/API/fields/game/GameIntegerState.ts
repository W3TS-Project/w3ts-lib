/** @noSelfInFile **/
// @ts-nocheck

import { GameState } from "./GameState"

declare function ConvertIGameState(i: integer): igamestate
declare function GetEventGameState(): gamestate

export class GameIntegerState extends GameState<igamestate> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertIGameState(id), id)
    }

    public static fromEvent() {
        return this.getObject(GetEventGameState()) as GameIntegerState
    }

    public static fromHandle(handle: igamestate) {
        return this.getObject(handle) as GameIntegerState
    }
}
