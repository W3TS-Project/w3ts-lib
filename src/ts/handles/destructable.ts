/** @noSelfInFile **/
//@ts-nocheck

import { Position, SETTING_SOME_PROPERTIES } from "../Package"
import { Point } from "./Point"
import { DestructableRawCode, DestructableRawCodeType } from "./rawCode/DestructableRawCode"
import { Widget } from "./Widget"

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
declare function EnumDestructablesInRect(r: rect, filter: boolexpr | null, actionFunc: code): void
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

export class Destructable extends Widget {
    invulnerable?: boolean
    life?: real
    maxLife?: real
    name?: string
    occluderHeight?: real
    rawCode?: DestructableRawCode
    point?: Point
    isKilled = false
    animation = "stand"
    animationSpeed: real = 1.0
    isHidden = false

    constructor(handle: destructable) {
        super(handle)
        if (SETTING_SOME_PROPERTIES) {
            this.invulnerable = this.isInvulnerable()
            this.life = this.getLife()
            this.maxLife = this.getMaxLife()
            this.name = this.getName()
            this.occluderHeight = this.getOccluderHeight()
            this.rawCode = this.getRawCode()
            this.point = this.getPoint()
        }
    }

    static createCoords(
        rawCode: DestructableRawCodeType,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDestructable(
                DestructableRawCode.toId(rawCode),
                x,
                y,
                face,
                scale,
                Math.floor(variation)
            )
        )
    }

    static createZCoords(
        rawCode: DestructableRawCodeType,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDestructableZ(
                DestructableRawCode.toId(rawCode),
                x,
                y,
                z,
                face,
                scale,
                Math.floor(variation)
            )
        )
    }

    static createPos(
        rawCode: DestructableRawCodeType,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createZCoords(rawCode, p.x, p.y, p.z, face, scale, variation)
    }

    static createDeadCoords(
        rawCode: DestructableRawCodeType,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDeadDestructable(
                DestructableRawCode.toId(rawCode),
                x,
                y,
                face,
                scale,
                Math.floor(variation)
            )
        )
    }

    static createDeadZCoords(
        rawCode: DestructableRawCodeType,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ) {
        return new this(
            CreateDeadDestructableZ(
                DestructableRawCode.toId(rawCode),
                x,
                y,
                z,
                face,
                scale,
                Math.floor(variation)
            )
        )
    }

    static createDeadPos(
        rawCode: DestructableRawCodeType,
        p: Position,
        face: real,
        scale: real,
        variation: integer
    ) {
        return this.createDeadZCoords(rawCode, p.x, p.y, p.z, face, scale, variation)
    }

    setInvulnerable(flag: boolean) {
        SetDestructableInvulnerable(this.getHandle() as destructable, flag)
        if (SETTING_SOME_PROPERTIES) this.invulnerable = flag
        return this
    }

    isInvulnerable() {
        return IsDestructableInvulnerable(this.getHandle() as destructable)
    }

    getLife(): real {
        return GetDestructableLife(this.getHandle() as destructable)
    }

    setLife(value: real) {
        SetDestructableLife(this.getHandle() as destructable, value)
        if (SETTING_SOME_PROPERTIES) this.life = value
        return this
    }

    getMaxLife(): real {
        return GetDestructableMaxLife(this.getHandle() as destructable)
    }

    setMaxLife(value: real) {
        SetDestructableMaxLife(this.getHandle() as destructable, value)
        if (SETTING_SOME_PROPERTIES) this.maxLife = value
        return this
    }

    getName() {
        return GetDestructableName(this.getHandle() as destructable)
    }

    getOccluderHeight(): real {
        return GetDestructableOccluderHeight(this.getHandle() as destructable)
    }

    setOccluderHeight(value: real) {
        SetDestructableOccluderHeight(this.getHandle() as destructable, value)
        if (SETTING_SOME_PROPERTIES) this.occluderHeight = value
        return this
    }

    getTypeId(): integer {
        return GetDestructableTypeId(this.getHandle() as destructable)
    }

    getRawCode() {
        return DestructableRawCode.get(this.getTypeId())
    }

    getX(): real {
        return GetDestructableX(this.getHandle() as destructable)
    }

    getY(): real {
        return GetDestructableY(this.getHandle() as destructable)
    }

    getPoint() {
        return new Point(this.getX(), this.getY())
    }

    remove() {
        RemoveDestructable(this.getHandle() as destructable)
        super.destroy()
    }

    restoreLife(life: real, birth: boolean) {
        DestructableRestoreLife(this.getHandle() as destructable, life, birth)
        if (SETTING_SOME_PROPERTIES) this.life = life
        return this
    }

    kill() {
        KillDestructable(this.getHandle() as destructable)
        this.isKilled = true
        return this
    }

    queueAnimation(whichAnimation: string) {
        QueueDestructableAnimation(this.getHandle() as destructable, whichAnimation)
        return this
    }

    setAnimation(whichAnimation: string) {
        SetDestructableAnimation(this.getHandle() as destructable, whichAnimation)
        this.animation = whichAnimation
        return this
    }

    setAnimationSpeed(speedFactor: real) {
        SetDestructableAnimationSpeed(this.getHandle() as destructable, speedFactor)
        this.animationSpeed = speedFactor
        return this
    }

    show(flag: boolean) {
        ShowDestructable(this.getHandle() as destructable, flag)
        this.isHidden = !flag
        return this
    }

    static fromHandle(handle: destructable) {
        return this.getObject(handle) as Destructable
    }

    static fromEvent() {
        return this.fromHandle(GetTriggerDestructable())
    }

    static fromFilter() {
        return this.fromHandle(GetFilterDestructable())
    }

    static fromEnum() {
        return this.fromHandle(GetEnumDestructable())
    }
}
