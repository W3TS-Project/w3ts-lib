/** @noSelfInFile **/
// @ts-nocheck

declare function Cheat(cheatStr: string): void
declare function IsNoVictoryCheat(): boolean
declare function IsNoDefeatCheat(): boolean

export abstract class MapCheat {
    static cheat(cheatStr: string) {
        Cheat(cheatStr)
        return this
    }

    static isNoVictoryCheat() {
        return IsNoVictoryCheat()
    }

    static isNoDefeatCheat() {
        return IsNoDefeatCheat()
    }
}
