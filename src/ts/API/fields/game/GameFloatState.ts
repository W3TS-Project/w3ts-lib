/** @noSelfInFile **/
// @ts-nocheck

import { GameState } from "./GameState"

declare function ConvertFGameState(i: integer): fgamestate
declare function GetEventGameState(): gamestate

export class GameFloatState extends GameState<fgamestate> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertFGameState(id), id)
    }

    public static fromEvent() {
        return this.getObject(GetEventGameState()) as GameFloatState
    }

    public static fromHandle(handle: fgamestate) {
        return this.getObject(handle) as GameFloatState
    }
}
