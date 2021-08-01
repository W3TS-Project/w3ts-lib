/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"
import { Unit } from "./Unit"

declare function ReloadGameCachesFromDisk(): boolean
declare function InitGameCache(campaignFile: string): gamecache
declare function SaveGameCache(whichCache: gamecache): boolean
declare function StoreInteger(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: integer
): void
declare function StoreReal(cache: gamecache, missionKey: string, key: string, value: real): void
declare function StoreBoolean(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: boolean
): void
declare function StoreUnit(
    cache: gamecache,
    missionKey: string,
    key: string,
    whichUnit: unit
): boolean
declare function StoreString(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: string
): boolean
declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): void
declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): void
declare function HaveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredReal(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean
declare function HaveStoredString(cache: gamecache, missionKey: string, key: string): boolean
declare function FlushGameCache(cache: gamecache): void
declare function FlushStoredMission(cache: gamecache, missionKey: string): void
declare function FlushStoredInteger(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredReal(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredBoolean(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredUnit(cache: gamecache, missionKey: string, key: string): void
declare function FlushStoredString(cache: gamecache, missionKey: string, key: string): void
declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): integer
declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): real
declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean
declare function GetStoredString(cache: gamecache, missionKey: string, key: string): string
declare function RestoreUnit(
    cache: gamecache,
    missionKey: string,
    key: string,
    forWhichPlayer: player,
    x: real,
    y: real,
    facing: real
): unit

export type StoreValueType = integer | real | boolean | string | Unit

export type StoreType = "integer" | "real" | "boolean" | "string" | "unit"

export const formatStoreType = (value: StoreValueType, type?: StoreType): StoreType => {
    if (type) {
        return type
    } else {
        if (typeof value === "number") {
            return "real"
        } else if (typeof value === "boolean") {
            return "boolean"
        } else {
            return "string"
        }
    }
}

export class GameCache extends Handle<gamecache> {
    protected readonly filename: string

    public constructor(campaignFile: string) {
        super(InitGameCache(campaignFile))
        this.filename = campaignFile
    }

    public getFilename() {
        return this.filename
    }

    public save(): boolean {
        return SaveGameCache(this.getHandle() as gamecache)
    }

    public storeInteger(missionKey: string, key: string, value: integer) {
        StoreInteger(this.getHandle() as gamecache, missionKey, key, Math.floor(value))
        return this
    }

    public storeReal(missionKey: string, key: string, value: real) {
        StoreReal(this.getHandle() as gamecache, missionKey, key, value)
        return this
    }

    public storeBoolean(missionKey: string, key: string, value: boolean) {
        StoreBoolean(this.getHandle() as gamecache, missionKey, key, value)
        return this
    }

    public storeUnit(missionKey: string, key: string, whichUnit: Unit) {
        return StoreUnit(
            this.getHandle() as gamecache,
            missionKey,
            key,
            whichUnit.getHandle() as unit
        )
    }

    public storeString(missionKey: string, key: string, value: string) {
        return StoreString(this.getHandle() as gamecache, missionKey, key, value)
    }

    public store(missionKey: string, key: string, value: StoreValueType, type?: StoreType) {
        type = formatStoreType(value, type)
        if (type === "string") {
            return this.storeString(missionKey, key, <string>value)
        } else if (type === "integer") {
            return this.storeInteger(missionKey, key, <integer>value)
        } else if (type === "real") {
            return this.storeReal(missionKey, key, <real>value)
        } else if (type === "boolean") {
            return this.storeBoolean(missionKey, key, <boolean>value)
        } else {
            return this.storeUnit(missionKey, key, <Unit>value)
        }
    }

    public syncInteger(missionKey: string, key: string) {
        SyncStoredInteger(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public syncReal(missionKey: string, key: string) {
        SyncStoredReal(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public syncBoolean(missionKey: string, key: string) {
        SyncStoredBoolean(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public syncUnit(missionKey: string, key: string) {
        SyncStoredUnit(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public syncString(missionKey: string, key: string) {
        SyncStoredString(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public sync(missionKey: string, key: string, type: StoreType) {
        if (type === "integer") {
            return this.syncInteger(missionKey, key)
        } else if (type === "real") {
            return this.syncReal(missionKey, key)
        } else if (type === "boolean") {
            return this.syncBoolean(missionKey, key)
        } else if (type === "string") {
            return this.syncString(missionKey, key)
        } else {
            return this.syncUnit(missionKey, key)
        }
    }

    public hasInteger(missionKey: string, key: string): boolean {
        return HaveStoredInteger(this.getHandle() as gamecache, missionKey, key)
    }

    public hasReal(missionKey: string, key: string): boolean {
        return HaveStoredReal(this.getHandle() as gamecache, missionKey, key)
    }

    public hasBoolean(missionKey: string, key: string): boolean {
        return HaveStoredBoolean(this.getHandle() as gamecache, missionKey, key)
    }

    public hasUnit(missionKey: string, key: string): boolean {
        return HaveStoredUnit(this.getHandle() as gamecache, missionKey, key)
    }

    public hasString(missionKey: string, key: string): boolean {
        return HaveStoredString(this.getHandle() as gamecache, missionKey, key)
    }

    public has(missionKey: string, key: string, type: StoreType): boolean {
        if (type === "boolean") {
            return this.hasBoolean(missionKey, key)
        } else if (type === "integer") {
            return this.hasInteger(missionKey, key)
        } else if (type === "real") {
            return this.hasReal(missionKey, key)
        } else if (type === "string") {
            return this.hasString(missionKey, key)
        } else {
            return this.hasUnit(missionKey, key)
        }
    }

    public destroy() {
        FlushGameCache(this.getHandle() as gamecache)
        return this
    }

    public flushMission(missionKey: string) {
        FlushStoredMission(this.getHandle() as gamecache, missionKey)
        return this
    }

    public flushInteger(missionKey: string, key: string) {
        FlushStoredInteger(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public flushReal(missionKey: string, key: string) {
        FlushStoredReal(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public flushBoolean(missionKey: string, key: string) {
        FlushStoredBoolean(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public flushUnit(missionKey: string, key: string) {
        FlushStoredUnit(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public flushString(missionKey: string, key: string) {
        FlushStoredString(this.getHandle() as gamecache, missionKey, key)
        return this
    }

    public flush(missionKey: string, key: string, type: StoreType) {
        if (type === "boolean") {
            return this.flushBoolean(missionKey, key)
        } else if (type === "integer") {
            return this.flushInteger(missionKey, key)
        } else if (type === "real") {
            return this.flushReal(missionKey, key)
        } else if (type === "string") {
            return this.flushString(missionKey, key)
        } else {
            return this.flushUnit(missionKey, key)
        }
    }

    public getInteger(missionKey: string, key: string): integer {
        return GetStoredInteger(this.getHandle() as gamecache, missionKey, key)
    }

    public getReal(missionKey: string, key: string): real {
        return GetStoredReal(this.getHandle() as gamecache, missionKey, key)
    }

    public getBoolean(missionKey: string, key: string): boolean {
        return GetStoredBoolean(this.getHandle() as gamecache, missionKey, key)
    }

    public getString(missionKey: string, key: string): string {
        return GetStoredString(this.getHandle() as gamecache, missionKey, key)
    }

    public get(missionKey: string, key: string, type: StoreType): Primitive {
        if (type === "boolean") {
            return this.getBoolean(missionKey, key)
        } else if (type === "integer") {
            return this.getInteger(missionKey, key)
        } else if (type === "real") {
            return this.getReal(missionKey, key)
        } else {
            return this.getString(missionKey, key)
        }
    }

    public restoreUnitCoords(
        missionKey: string,
        key: string,
        forWhichPlayer: MapPlayer,
        x: real,
        y: real,
        face: real
    ) {
        return Unit.fromHandle(
            RestoreUnit(
                this.getHandle() as gamecache,
                missionKey,
                key,
                forWhichPlayer.getHandle() as player,
                x,
                y,
                face
            )
        )
    }

    public restoreUnitPos(
        missionKey: string,
        key: string,
        forWhichPlayer: MapPlayer,
        p: Position,
        face: real
    ) {
        this.restoreUnitCoords(missionKey, key, forWhichPlayer, p.getX(), p.getY(), face)
    }

    public static fromHandle(handle: gamecache) {
        return this.getObject(handle) as GameCache
    }

    public static reloadFromDisk() {
        return ReloadGameCachesFromDisk()
    }
}
