/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../Utils"
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
    private readonly filename: string

    public constructor(campaignFile: string) {
        super(InitGameCache(campaignFile))
        this.filename = campaignFile
    }

    public save(): boolean {
        return SaveGameCache(this.getHandle)
    }

    public storeInteger(missionKey: string, key: string, value: integer) {
        StoreInteger(this.getHandle, missionKey, key, value)
        return this
    }

    public storeReal(missionKey: string, key: string, value: real) {
        StoreReal(this.getHandle, missionKey, key, value)
        return this
    }

    public storeBoolean(missionKey: string, key: string, value: boolean) {
        StoreBoolean(this.getHandle, missionKey, key, value)
        return this
    }

    public storeUnit(missionKey: string, key: string, whichUnit: Unit) {
        return StoreUnit(this.getHandle, missionKey, key, whichUnit.getHandle)
    }

    public storeString(missionKey: string, key: string, value: string) {
        return StoreString(this.getHandle, missionKey, key, value)
    }

    public store(missionKey: string, key: string, value: StoreValueType, type?: StoreType) {
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

    public syncInteger(missionKey: string, key: string) {
        SyncStoredInteger(this.getHandle, missionKey, key)
        return this
    }

    public syncReal(missionKey: string, key: string) {
        SyncStoredReal(this.getHandle, missionKey, key)
        return this
    }

    public syncBoolean(missionKey: string, key: string) {
        SyncStoredBoolean(this.getHandle, missionKey, key)
        return this
    }

    public syncUnit(missionKey: string, key: string) {
        SyncStoredUnit(this.getHandle, missionKey, key)
        return this
    }

    public syncString(missionKey: string, key: string) {
        SyncStoredString(this.getHandle, missionKey, key)
        return this
    }

    public sync(missionKey: string, key: string, type: StoreType) {
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

    public hasInteger(missionKey: string, key: string): boolean {
        return HaveStoredInteger(this.getHandle, missionKey, key)
    }

    public hasReal(missionKey: string, key: string): boolean {
        return HaveStoredReal(this.getHandle, missionKey, key)
    }

    public hasBoolean(missionKey: string, key: string): boolean {
        return HaveStoredBoolean(this.getHandle, missionKey, key)
    }

    public hasUnit(missionKey: string, key: string): boolean {
        return HaveStoredUnit(this.getHandle, missionKey, key)
    }

    public hasString(missionKey: string, key: string): boolean {
        return HaveStoredString(this.getHandle, missionKey, key)
    }

    public has(missionKey: string, key: string, type: StoreType): boolean {
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

    public destroy() {
        FlushGameCache(this.getHandle)
    }

    public flushMission(missionKey: string) {
        FlushStoredMission(this.getHandle, missionKey)
        return this
    }

    public flushInteger(missionKey: string, key: string) {
        FlushStoredInteger(this.getHandle, missionKey, key)
        return this
    }

    public flushReal(missionKey: string, key: string) {
        FlushStoredReal(this.getHandle, missionKey, key)
        return this
    }

    public flushBoolean(missionKey: string, key: string) {
        FlushStoredBoolean(this.getHandle, missionKey, key)
        return this
    }

    public flushUnit(missionKey: string, key: string) {
        FlushStoredUnit(this.getHandle, missionKey, key)
        return this
    }

    public flushString(missionKey: string, key: string) {
        FlushStoredString(this.getHandle, missionKey, key)
        return this
    }

    public flush(missionKey: string, key: string, type: StoreType) {
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

    public getInteger(missionKey: string, key: string): integer {
        return GetStoredInteger(this.getHandle, missionKey, key)
    }

    public getReal(missionKey: string, key: string): real {
        return GetStoredReal(this.getHandle, missionKey, key)
    }

    public getBoolean(missionKey: string, key: string): boolean {
        return GetStoredBoolean(this.getHandle, missionKey, key)
    }

    public getString(missionKey: string, key: string): string {
        return GetStoredString(this.getHandle, missionKey, key)
    }

    public get(
        missionKey: string,
        key: string,
        type: StoreType
    ): integer | real | boolean | string {
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

    public restoreUnit(
        missionKey: string,
        key: string,
        forWhichPlayer: MapPlayer,
        x: real,
        y: real,
        face: real
    ) {
        return Unit.fromHandle(
            RestoreUnit(this.getHandle, missionKey, key, forWhichPlayer.getHandle, x, y, face)
        )
    }

    public static fromHandle(handle: gamecache): GameCache {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: GameCache): gamecache {
        return this.getHandle(handleObject)
    }

    public static reloadFromDisk() {
        return ReloadGameCachesFromDisk()
    }
}
