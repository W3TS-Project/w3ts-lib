/** @noSelfInFile **/
//@ts-nocheck

import { OsKeyType } from "../../../../API/fields/other/OsKeyType"
import { PlayerEventResponse } from "./PlayerEventResponse"

declare function BlzGetTriggerPlayerKey(): oskeytype
declare function BlzGetTriggerPlayerMetaKey(): integer
declare function BlzGetTriggerPlayerIsKeyDown(): boolean
declare function BlzGetLocale(): string

export class PlayerKeyEventResponse extends PlayerEventResponse {
    protected key: OsKeyType
    protected metaKey: integer
    protected isKeyDown: boolean
    protected locale: string

    public constructor() {
        super()
        this.key = OsKeyType.fromHandle(BlzGetTriggerPlayerKey())
        this.metaKey = BlzGetTriggerPlayerMetaKey()
        this.isKeyDown = BlzGetTriggerPlayerIsKeyDown()
        this.locale = BlzGetLocale()
    }

    public getKey() {
        return this.key
    }

    public getMetaKey() {
        return this.metaKey
    }

    public getLocale() {
        return this.locale
    }
}
