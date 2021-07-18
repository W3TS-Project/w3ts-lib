/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { RawCode } from "../RawCode"
import { Handle } from "./Handle"

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
declare function GetDestructableMaxLife(d: destructable): real
declare function DestructableRestoreLife(d: destructable, life: real, birth: boolean): void
declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): void
declare function SetDestructableAnimation(d: destructable, whichAnimation: string): void
declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: real): void
declare function ShowDestructable(d: destructable, flag: boolean): void
declare function GetDestructableOccluderHeight(d: destructable): real
declare function SetDestructableOccluderHeight(d: destructable, height: real): void
declare function GetDestructableName(d: destructable): string
declare function GetTriggerDestructable(): destructable
declare function GetFilterDestructable(): destructable
declare function GetEnumDestructable(): destructable

export class Destructable extends Handle<destructable> {
    public static createCoords(
        rawCode: RawCode,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDestructable(rawCode.getId(), x, y, face, scale, Math.round(variation))
        )
    }

    public static createZCoords(
        rawCode: RawCode,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDestructableZ(rawCode.getId(), x, y, z, face, scale, Math.round(variation))
        )
    }

    public static createPos(
        rawCode: RawCode,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createZCoords(rawCode, p.x, p.y, p.z, face, scale, variation)
    }

    public static createDeadCoords(
        rawCode: RawCode,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDeadDestructable(rawCode.getId(), x, y, face, scale, Math.round(variation))
        )
    }

    public static createDeadZCoords(
        rawCode: RawCode,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDeadDestructableZ(rawCode.getId(), x, y, z, face, scale, Math.round(variation))
        )
    }

    public static createDeadPos(
        rawCode: RawCode,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createDeadZCoords(rawCode, p.x, p.y, p.z, face, scale, variation)
    }

    public setInvulnerable(flag: boolean) {
        SetDestructableInvulnerable(this.getHandle, flag)
        return this
    }

    public getInvulnerable() {
        return IsDestructableInvulnerable(this.getHandle)
    }

    public getLife(): real {
        return GetDestructableLife(this.getHandle)
    }

    public setLife(value: real) {
        SetDestructableLife(this.getHandle, value)
        return this
    }

    public getMaxLife(): real {
        return GetDestructableMaxLife(this.getHandle)
    }

    public setMaxLife(value: real) {
        SetDestructableMaxLife(this.getHandle, value)
        return this
    }

    public getName() {
        return GetDestructableName(this.getHandle)
    }

    public getOccluderHeight(): real {
        return GetDestructableOccluderHeight(this.getHandle)
    }

    public setOccluderHeight(value: real) {
        SetDestructableOccluderHeight(this.getHandle, value)
        return this
    }

    public getTypeId(): integer {
        return GetDestructableTypeId(this.getHandle)
    }

    public getRawCode() {
        return new RawCode(this.getTypeId())
    }

    public getX(): real {
        return GetDestructableX(this.getHandle)
    }

    public getY(): real {
        return GetDestructableY(this.getHandle)
    }

    public remove() {
        RemoveDestructable(this.getHandle)
        return this
    }

    public restoreLife(life: real, birth: boolean) {
        DestructableRestoreLife(this.getHandle, life, birth)
        return this
    }

    public kill() {
        KillDestructable(this.getHandle)
        return this
    }

    public queueAnimation(whichAnimation: string) {
        QueueDestructableAnimation(this.getHandle, whichAnimation)
        return this
    }

    public setAnimation(whichAnimation: string) {
        SetDestructableAnimation(this.getHandle, whichAnimation)
        return this
    }

    public setAnimationSpeed(speedFactor: real) {
        SetDestructableAnimationSpeed(this.getHandle, speedFactor)
        return this
    }

    public show(flag: boolean) {
        ShowDestructable(this.getHandle, flag)
        return this
    }

    public static fromHandle(handle: destructable): Destructable {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggerDestructable())
    }

    public static fromFilter() {
        return this.fromHandle(GetFilterDestructable())
    }

    public static fromEnum() {
        return this.fromHandle(GetEnumDestructable())
    }

    public static fromObject(handleObject: Destructable): destructable {
        return this.getHandle(handleObject)
    }
}
