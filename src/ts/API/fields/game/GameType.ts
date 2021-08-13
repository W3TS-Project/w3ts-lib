/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameType(i: integer): gametype
declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void
declare function IsGameTypeSupported(whichGameType: gametype): boolean
declare function GetGameTypeSelected(): gametype

export class GameType extends Field<gametype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertGameType, id)
    }

    setSupported(value: boolean) {
        SetGameTypeSupported(this.getHandle() as gametype, value)
        return this
    }

    isSupported() {
        return IsGameTypeSupported(this.getHandle() as gametype)
    }

    static fromHandle(handle: gametype) {
        return this.getObject(handle) as GameType
    }

    static getSelected() {
        return this.fromHandle(GetGameTypeSelected())
    }
}
