/** @noSelfInFile **/
// @ts-nocheck

import { integer, real } from "../main"
import { Handle } from "./handle"
import { MapPlayer } from "./player"
import { Unit } from "./unit"

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
    x: number,
    y: number,
    facing: number
): unit

export type StoreValueType = integer | real | boolean | string | Unit

export type StoreType = "integer" | "real" | "boolean" | "string" | "unit"

export const formatStoreType = (value: StoreValueType, type?: StoreType): StoreType => {
    return (
        type ||
        (typeof value === "number" ? "real" : typeof value === "boolean" ? "boolean" : "string")
    )
}

export class GameCache extends Handle<gamecache> {
    readonly filename: string

    constructor(campaignFile: string) {
        super(Handle.initFromHandle() ? undefined : InitGameCache(campaignFile))
        this.filename = campaignFile
    }

    save(): boolean {
        return SaveGameCache(this.handle)
    }

    storeInteger(missionKey: string, key: string, value: integer) {
        StoreInteger(this.handle, missionKey, key, value)
        return this
    }

    storeReal(missionKey: string, key: string, value: real) {
        StoreReal(this.handle, missionKey, key, value)
        return this
    }

    storeBoolean(missionKey: string, key: string, value: boolean) {
        StoreBoolean(this.handle, missionKey, key, value)
        return this
    }

    storeUnit(missionKey: string, key: string, whichUnit: Unit) {
        return StoreUnit(this.handle, missionKey, key, whichUnit.handle)
    }

    storeString(missionKey: string, key: string, value: string) {
        return StoreString(this.handle, missionKey, key, value)
    }

    store(missionKey: string, key: string, value: StoreValueType, type?: StoreType) {
        type = formatStoreType(value, type)
        return type === "string"
            ? this.storeString(missionKey, key, <string>value)
            : type === "integer"
            ? this.storeInteger(missionKey, key, <integer>value)
            : type === "real"
            ? this.storeReal(missionKey, key, <real>value)
            : type === "boolean"
            ? this.storeBoolean(missionKey, key, <boolean>value)
            : this.storeUnit(missionKey, key, <Unit>value)
    }

    syncInteger(missionKey: string, key: string) {
        SyncStoredInteger(this.handle, missionKey, key)
        return this
    }

    syncReal(missionKey: string, key: string) {
        SyncStoredReal(this.handle, missionKey, key)
        return this
    }

    syncBoolean(missionKey: string, key: string) {
        SyncStoredBoolean(this.handle, missionKey, key)
        return this
    }

    syncUnit(missionKey: string, key: string) {
        SyncStoredUnit(this.handle, missionKey, key)
        return this
    }

    syncString(missionKey: string, key: string) {
        SyncStoredString(this.handle, missionKey, key)
        return this
    }

    sync(missionKey: string, key: string, type: StoreType) {
        const f =
            type === "integer"
                ? this.syncInteger
                : type === "real"
                ? this.syncReal
                : type === "boolean"
                ? this.syncBoolean
                : type === "string"
                ? this.syncString
                : this.syncString
        return f(missionKey, key)
    }

    hasInteger(missionKey: string, key: string): boolean {
        return HaveStoredInteger(this.handle, missionKey, key)
    }

    hasReal(missionKey: string, key: string): boolean {
        return HaveStoredReal(this.handle, missionKey, key)
    }

    hasBoolean(missionKey: string, key: string): boolean {
        return HaveStoredBoolean(this.handle, missionKey, key)
    }

    hasUnit(missionKey: string, key: string): boolean {
        return HaveStoredUnit(this.handle, missionKey, key)
    }

    hasString(missionKey: string, key: string): boolean {
        return HaveStoredString(this.handle, missionKey, key)
    }

    has(missionKey: string, key: string, type: StoreType): boolean {
        const f =
            type === "boolean"
                ? this.hasBoolean
                : type === "integer"
                ? this.hasInteger
                : type === "real"
                ? this.hasReal
                : type === "string"
                ? this.hasString
                : this.hasUnit
        return f(missionKey, key)
    }

    destroy() {
        FlushGameCache(this.handle)
    }

    flushMission(missionKey: string) {
        FlushStoredMission(this.handle, missionKey)
        return this
    }

    flushInteger(missionKey: string, key: string) {
        FlushStoredInteger(this.handle, missionKey, key)
        return this
    }

    flushReal(missionKey: string, key: string) {
        FlushStoredReal(this.handle, missionKey, key)
        return this
    }

    flushBoolean(missionKey: string, key: string) {
        FlushStoredBoolean(this.handle, missionKey, key)
        return this
    }

    flushUnit(missionKey: string, key: string) {
        FlushStoredUnit(this.handle, missionKey, key)
        return this
    }

    flushString(missionKey: string, key: string) {
        FlushStoredString(this.handle, missionKey, key)
        return this
    }

    flush(missionKey: string, key: string, type: StoreType) {
        const f =
            type === "boolean"
                ? this.flushBoolean
                : type === "integer"
                ? this.flushInteger
                : type === "real"
                ? this.flushReal
                : type === "string"
                ? this.flushString
                : this.flushUnit
        return f(missionKey, key)
    }

    getInteger(missionKey: string, key: string): integer {
        return GetStoredInteger(this.handle, missionKey, key)
    }

    getReal(missionKey: string, key: string): real {
        return GetStoredReal(this.handle, missionKey, key)
    }

    getBoolean(missionKey: string, key: string): boolean {
        return GetStoredBoolean(this.handle, missionKey, key)
    }

    getString(missionKey: string, key: string): string {
        return GetStoredString(this.handle, missionKey, key)
    }

    get(missionKey: string, key: string, type: StoreType): integer | real | boolean | string {
        const f =
            type === "boolean"
                ? this.getBoolean
                : type === "integer"
                ? this.getInteger
                : type === "real"
                ? this.getReal
                : this.getString
        return f(missionKey, key)
    }

    restoreUnit(
        missionKey: string,
        key: string,
        forWhichPlayer: MapPlayer,
        x: real,
        y: real,
        face: real
    ) {
        return Unit.fromHandle(
            RestoreUnit(this.handle, missionKey, key, forWhichPlayer.handle, x, y, face)
        )
    }

    static fromHandle(handle: gamecache): GameCache {
        return this.getObject(handle)
    }

    static reloadFromDisk() {
        return ReloadGameCachesFromDisk()
    }
}