/** @noSelfInFile **/
// @ts-nocheck

import { formatCC, integer, Position, rawcode, real } from "../main"
import { Handle } from "./handle"
import { Location } from "./location"
import { Point } from "./point"
import { Widget } from "./widget"

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

export class Destructable<T extends destructable> extends Handle<widget> {
    public readonly handle!: destructable

    constructor(handle: T) {
        super(Handle.initFromHandle() ? undefined : handle)
    }

    static createCoords(
        objectid: rawcode,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(CreateDestructable(formatCC(objectid), x, y, face, scale, variation))
    }

    static createZCoords(
        objectid: rawcode,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(CreateDestructableZ(formatCC(objectid), x, y, z, face, scale, variation))
    }

    static createPos(objectid: rawcode, p: Position, face: real, scale: real, variation: integer) {
        return this.createZCoords(objectid, p.x, p.y, p.z, face, scale, variation)
    }

    static createDeadCoords(
        objectid: rawcode,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(CreateDeadDestructable(formatCC(objectid), x, y, face, scale, variation))
    }

    static createDeadZCoords(
        objectid: rawcode,
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

    static createDeadPos(
        objectid: rawcode,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createDeadZCoords(objectid, p.x, p.y, p.z, face, scale, variation)
    }

    set invulnerable(flag: boolean) {
        SetDestructableInvulnerable(this.handle, flag)
    }

    get invulnerable() {
        return IsDestructableInvulnerable(this.handle)
    }

    get life() {
        return GetDestructableLife(this.handle)
    }

    set life(value: real) {
        SetDestructableLife(this.handle, value)
    }

    get maxLife() {
        return GetDestructableMaxLife(this.handle)
    }

    set maxLife(value: real) {
        SetDestructableMaxLife(this.handle, value)
    }

    get name() {
        return GetDestructableName(this.handle)
    }

    get occluderHeight() {
        return GetDestructableOccluderHeight(this.handle)
    }

    set occluderHeight(value: real) {
        SetDestructableOccluderHeight(this.handle, value)
    }

    get typeId() {
        return GetDestructableTypeId(this.handle)
    }

    get x() {
        return GetDestructableX(this.handle)
    }

    get y() {
        return GetDestructableY(this.handle)
    }

    destroy() {
        RemoveDestructable(this.handle)
    }

    heal(life: number, birth: boolean) {
        DestructableRestoreLife(this.handle, life, birth)
    }

    kill() {
        KillDestructable(this.handle)
    }

    queueAnim(whichAnimation: string) {
        QueueDestructableAnimation(this.handle, whichAnimation)
    }

    setAnim(whichAnimation: string) {
        SetDestructableAnimation(this.handle, whichAnimation)
    }

    setAnimSpeed(speedFactor: real) {
        SetDestructableAnimationSpeed(this.handle, speedFactor)
    }

    show(flag: boolean) {
        ShowDestructable(this.handle, flag)
    }

    static fromEvent(): ThisType<destructable> {
        return this.fromHandle(GetTriggerDestructable())
    }

    static fromHandle(handle: destructable): ThisType<destructable> {
        return this.getObject(handle)
    }
}
