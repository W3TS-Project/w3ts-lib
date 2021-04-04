/** @noSelfInFile **/
//@ts-nocheck

import { formatCC, integer, Position, RawCode, real } from "../utils"
import { Handle } from "./handle"

declare function CreateDestructable(
    objectid: integer,
    x: real,
    y: real,
    face: real,
    scale: real,
    variation: integer
): destructable
declare function CreateDestructableZ(
    objectid: integer,
    x: real,
    y: real,
    z: real,
    face: real,
    scale: real,
    variation: integer
): destructable
declare function CreateDeadDestructable(
    objectid: integer,
    x: real,
    y: real,
    face: real,
    scale: real,
    variation: integer
): destructable
declare function CreateDeadDestructableZ(
    objectid: integer,
    x: real,
    y: real,
    z: real,
    face: real,
    scale: real,
    variation: integer
): destructable
declare function RemoveDestructable(d: destructable): void
declare function KillDestructable(d: destructable): void
declare function SetDestructableInvulnerable(d: destructable, flag: boolean): void
declare function IsDestructableInvulnerable(d: destructable): boolean
declare function EnumDestructablesInRect(
    r: rect,
    filter: boolexpr | null,
    actionFunc: () => void
): void
declare function GetDestructableTypeId(d: destructable): integer
declare function GetDestructableX(d: destructable): real
declare function GetDestructableY(d: destructable): real
declare function SetDestructableLife(d: destructable, life: real): void
declare function GetDestructableLife(d: destructable): real
declare function SetDestructableMaxLife(d: destructable, max: real): void
declare function GetDestructableMaxLife(d: destructable): number
declare function DestructableRestoreLife(d: destructable, life: real, birth: boolean): void
declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): void
declare function SetDestructableAnimation(d: destructable, whichAnimation: string): void
declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: real): void
declare function ShowDestructable(d: destructable, flag: boolean): void
declare function GetDestructableOccluderHeight(d: destructable): real
declare function SetDestructableOccluderHeight(d: destructable, height: real): void
declare function GetDestructableName(d: destructable): string
declare function GetTriggerDestructable(): destructable

export class Destructable extends Handle<destructable> {
    public static createCoords(
        objectid: RawCode,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(CreateDestructable(formatCC(objectid), x, y, face, scale, variation))
    }

    public static createZCoords(
        objectid: RawCode,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(CreateDestructableZ(formatCC(objectid), x, y, z, face, scale, variation))
    }

    public static createPos(
        objectid: RawCode,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createZCoords(objectid, p.x, p.y, p.z, face, scale, variation)
    }

    public static createDeadCoords(
        objectid: RawCode,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(CreateDeadDestructable(formatCC(objectid), x, y, face, scale, variation))
    }

    public static createDeadZCoords(
        objectid: RawCode,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDeadDestructableZ(formatCC(objectid), x, y, z, face, scale, variation)
        )
    }

    public static createDeadPos(
        objectid: RawCode,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createDeadZCoords(objectid, p.x, p.y, p.z, face, scale, variation)
    }

    public set invulnerable(flag: boolean) {
        SetDestructableInvulnerable(this.getHandle, flag)
    }

    public get invulnerable() {
        return IsDestructableInvulnerable(this.getHandle)
    }

    public get life() {
        return GetDestructableLife(this.getHandle)
    }

    public set life(value: real) {
        SetDestructableLife(this.getHandle, value)
    }

    public get maxLife() {
        return GetDestructableMaxLife(this.getHandle)
    }

    public set maxLife(value: real) {
        SetDestructableMaxLife(this.getHandle, value)
    }

    public get name() {
        return GetDestructableName(this.getHandle)
    }

    public get occluderHeight() {
        return GetDestructableOccluderHeight(this.getHandle)
    }

    public set occluderHeight(value: real) {
        SetDestructableOccluderHeight(this.getHandle, value)
    }

    public get typeId() {
        return GetDestructableTypeId(this.getHandle)
    }

    public get x() {
        return GetDestructableX(this.getHandle)
    }

    public get y() {
        return GetDestructableY(this.getHandle)
    }

    public destroy() {
        RemoveDestructable(this.getHandle)
    }

    public heal(life: number, birth: boolean) {
        DestructableRestoreLife(this.getHandle, life, birth)
    }

    public kill() {
        KillDestructable(this.getHandle)
    }

    public queueAnim(whichAnimation: string) {
        QueueDestructableAnimation(this.getHandle, whichAnimation)
    }

    public setAnim(whichAnimation: string) {
        SetDestructableAnimation(this.getHandle, whichAnimation)
    }

    public setAnimSpeed(speedFactor: real) {
        SetDestructableAnimationSpeed(this.getHandle, speedFactor)
    }

    public show(flag: boolean) {
        ShowDestructable(this.getHandle, flag)
    }

    public static fromHandle(handle: destructable): Destructable {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggerDestructable())
    }

    public static fromObject(handleObject: Destructable): destructable {
        return this.getHandle(handleObject)
    }
}
