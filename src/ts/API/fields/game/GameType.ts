/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameType(i: integer): gametype
declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void
declare function IsGameTypeSupported(whichGameType: gametype): boolean
declare function GetGameTypeSelected(): gametype

export class GameType extends Field<gametype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertGameType(id), id)
    }

    public setSupported(value: boolean) {
        SetGameTypeSupported(this.getHandle, value)
        return this
    }

    public isSupported() {
        return IsGameTypeSupported(this.getHandle)
    }

    public static getSelected() {
        return this.fromHandle(GetGameTypeSelected())
    }

    public static fromHandle(handle: gametype): GameType {
        return this.getObject(handle)
    }

    public static fromObject(object: GameType): gametype {
        return this.getHandle(object)
    }
}
