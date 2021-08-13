/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function GetEventGameState(): gamestate

export class GameState<T extends handle> extends Field<T> {
    static fromEvent() {
        return this.getObject(GetEventGameState()) as GameState<gamestate>
    }

    static fromHandle(handle: gamestate) {
        return this.getObject(handle) as GameState<gamestate>
    }
}
