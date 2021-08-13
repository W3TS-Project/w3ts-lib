/** @noSelfInFile **/
//@ts-nocheck

import { OsKeyType } from "../../../../API/fields/other/OsKeyType"
import { PlayerEventResponse } from "./PlayerEventResponse"

declare function BlzGetTriggerPlayerKey(): oskeytype
declare function BlzGetTriggerPlayerMetaKey(): integer
declare function BlzGetTriggerPlayerIsKeyDown(): boolean
declare function BlzGetLocale(): string

export class PlayerKeyEventResponse extends PlayerEventResponse {
    key = OsKeyType.fromHandle(BlzGetTriggerPlayerKey())
    metaKey: integer = BlzGetTriggerPlayerMetaKey()
    isKeyDown = BlzGetTriggerPlayerIsKeyDown()
    locale = BlzGetLocale()
}
