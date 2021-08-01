/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameType(i: integer): gametype
declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void
declare function IsGameTypeSupported(whichGameType: gametype): boolean
declare function GetGameTypeSelected(): gametype

export class GameType extends Field<gametype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertGameType(id), id)
    }

    public setSupported(value: boolean) {
        SetGameTypeSupported(this.getHandle() as gametype, value)
        return this
    }

    public isSupported() {
        return IsGameTypeSupported(this.getHandle() as gametype)
    }

    public static fromHandle(handle: gametype) {
        return this.getObject(handle) as GameType
    }

    public static getSelected() {
        return this.fromHandle(GetGameTypeSelected())
    }
}
