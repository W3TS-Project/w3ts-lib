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
            CreateDestructable(rawCode.getId(), x, y, face, scale, Math.floor(variation))
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
            CreateDestructableZ(rawCode.getId(), x, y, z, face, scale, Math.floor(variation))
        )
    }

    public static createPos(
        rawCode: RawCode,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createZCoords(rawCode, p.getX(), p.getY(), p.getZ(), face, scale, variation)
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
            CreateDeadDestructable(rawCode.getId(), x, y, face, scale, Math.floor(variation))
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
            CreateDeadDestructableZ(rawCode.getId(), x, y, z, face, scale, Math.floor(variation))
        )
    }

    public static createDeadPos(
        rawCode: RawCode,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createDeadZCoords(rawCode, p.getX(), p.getY(), p.getZ(), face, scale, variation)
    }

    public setInvulnerable(flag: boolean) {
        SetDestructableInvulnerable(this.getHandle() as destructable, flag)
        return this
    }

    public getInvulnerable() {
        return IsDestructableInvulnerable(this.getHandle() as destructable)
    }

    public getLife(): real {
        return GetDestructableLife(this.getHandle() as destructable)
    }

    public setLife(value: real) {
        SetDestructableLife(this.getHandle() as destructable, value)
        return this
    }

    public getMaxLife(): real {
        return GetDestructableMaxLife(this.getHandle() as destructable)
    }

    public setMaxLife(value: real) {
        SetDestructableMaxLife(this.getHandle() as destructable, value)
        return this
    }

    public getName() {
        return GetDestructableName(this.getHandle() as destructable)
    }

    public getOccluderHeight(): real {
        return GetDestructableOccluderHeight(this.getHandle() as destructable)
    }

    public setOccluderHeight(value: real) {
        SetDestructableOccluderHeight(this.getHandle() as destructable, value)
        return this
    }

    public getTypeId(): integer {
        return GetDestructableTypeId(this.getHandle() as destructable)
    }

    public getRawCode() {
        return new RawCode(this.getTypeId())
    }

    public getX(): real {
        return GetDestructableX(this.getHandle() as destructable)
    }

    public getY(): real {
        return GetDestructableY(this.getHandle() as destructable)
    }

    public remove() {
        RemoveDestructable(this.getHandle() as destructable)
        return this
    }

    public restoreLife(life: real, birth: boolean) {
        DestructableRestoreLife(this.getHandle() as destructable, life, birth)
        return this
    }

    public kill() {
        KillDestructable(this.getHandle() as destructable)
        return this
    }

    public queueAnimation(whichAnimation: string) {
        QueueDestructableAnimation(this.getHandle() as destructable, whichAnimation)
        return this
    }

    public setAnimation(whichAnimation: string) {
        SetDestructableAnimation(this.getHandle() as destructable, whichAnimation)
        return this
    }

    public setAnimationSpeed(speedFactor: real) {
        SetDestructableAnimationSpeed(this.getHandle() as destructable, speedFactor)
        return this
    }

    public show(flag: boolean) {
        ShowDestructable(this.getHandle() as destructable, flag)
        return this
    }

    public static fromHandle(handle: destructable) {
        return this.getObject(handle) as Destructable
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
}
