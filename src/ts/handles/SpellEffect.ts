/** @noSelfInFile **/
//@ts-nocheck

import { EffectType } from "../API/fields/other/EffectType"
import { AnimType } from "../API/fields/unit/AnimType"
import { SubAnimType } from "../API/fields/unit/SubAnimType"
import { Position } from "../Package"
import { RawCode } from "../RawCode"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"
import { MapPlayer } from "./MapPlayer"
import { Widget } from "./Widget"

declare function AddSpellEffect(abilityString: string, t: effecttype, x: real, y: real): effect
declare function AddSpellEffectLoc(abilityString: string, t: effecttype, where: location): effect
declare function AddSpellEffectById(abilityId: integer, t: effecttype, x: real, y: real): effect
declare function AddSpellEffectByIdLoc(abilityId: integer, t: effecttype, where: location): effect
declare function AddSpellEffectTarget(
    modelName: string,
    t: effecttype,
    targetWidget: widget,
    attachPoint: string
): effect
declare function AddSpellEffectTargetById(
    abilityId: integer,
    t: effecttype,
    targetWidget: widget,
    attachPoint: string
): effect
declare function DestroyEffect(whichEffect: effect): void
declare function BlzGetSpecialEffectScale(whichEffect: effect): real
declare function BlzSetSpecialEffectMatrixScale(
    whichEffect: effect,
    x: real,
    y: real,
    z: real
): void
declare function BlzResetSpecialEffectMatrix(whichEffect: effect): void
declare function BlzSetSpecialEffectColorByPlayer(whichEffect: effect, whichPlayer: player): void
declare function BlzSetSpecialEffectColor(whichEffect: effect, r: real, g: real, b: real): void
declare function BlzSetSpecialEffectAlpha(whichEffect: effect, alpha: integer): void
declare function BlzSetSpecialEffectScale(whichEffect: effect, scale: real): void
declare function BlzSetSpecialEffectPosition(whichEffect: effect, x: real, y: real, z: real): void
declare function BlzSetSpecialEffectHeight(whichEffect: effect, height: real): void
declare function BlzSetSpecialEffectTimeScale(whichEffect: effect, timeScale: real): void
declare function BlzSetSpecialEffectTime(whichEffect: effect, time: real): void
declare function BlzSetSpecialEffectOrientation(
    whichEffect: effect,
    yaw: real,
    pitch: real,
    roll: real
): void
declare function BlzSetSpecialEffectYaw(whichEffect: effect, yaw: real): void
declare function BlzSetSpecialEffectPitch(whichEffect: effect, pitch: real): void
declare function BlzSetSpecialEffectRoll(whichEffect: effect, roll: real): void
declare function BlzSetSpecialEffectX(whichEffect: effect, x: real): void
declare function BlzSetSpecialEffectY(whichEffect: effect, y: real): void
declare function BlzSetSpecialEffectZ(whichEffect: effect, z: real): void
declare function BlzSetSpecialEffectPositionLoc(whichEffect: effect, loc: location): void
declare function BlzGetLocalSpecialEffectX(whichEffect: effect): real
declare function BlzGetLocalSpecialEffectY(whichEffect: effect): real
declare function BlzGetLocalSpecialEffectZ(whichEffect: effect): real
declare function BlzSpecialEffectClearSubAnimations(whichEffect: effect): void
declare function BlzSpecialEffectRemoveSubAnimation(
    whichEffect: effect,
    whichSubAnim: subanimtype
): void
declare function BlzSpecialEffectAddSubAnimation(
    whichEffect: effect,
    whichSubAnim: subanimtype
): void
declare function BlzPlaySpecialEffect(whichEffect: effect, whichAnim: animtype): void
declare function BlzPlaySpecialEffectWithTimeScale(
    whichEffect: effect,
    whichAnim: animtype,
    timeScale: real
): void

export class SpellEffect extends Handle<effect> {
    public static addCoords(abilityString: string, t: EffectType, x: real, y: real) {
        return new this(AddSpellEffect(abilityString, t.getHandle, x, y))
    }

    public static addPos(abilityString: string, t: EffectType, p: Position) {
        return this.addCoords(abilityString, t, p.getX(), p.getY())
    }

    public static addLoc(abilityString: string, t: EffectType, loc: MapLocation) {
        return new this(AddSpellEffectLoc(abilityString, t.getHandle, loc.getHandle))
    }

    public static addCoordsByCode(rawCode: RawCode, t: EffectType, x: real, y: real) {
        return new this(AddSpellEffectById(rawCode.getId(), t.getHandle, x, y))
    }

    public static addPosById(rawCode: RawCode, t: EffectType, p: Position) {
        return this.addCoordsByCode(rawCode, t, p.getX(), p.getY())
    }

    public static addLocById(rawCode: RawCode, t: EffectType, loc: MapLocation) {
        return new this(AddSpellEffectByIdLoc(rawCode.getId(), t.getHandle, loc.getHandle))
    }

    public static addTarget(
        modelName: string,
        t: EffectType,
        targetWidget: Widget,
        attachPoint: string
    ) {
        return new this(
            AddSpellEffectTarget(modelName, t.getHandle, targetWidget.getHandle, attachPoint)
        )
    }

    public static addTargetByCode(
        rawCode: RawCode,
        t: EffectType,
        targetWidget: Widget,
        attachPoint: string
    ) {
        return new this(
            AddSpellEffectTargetById(
                rawCode.getId(),
                t.getHandle,
                targetWidget.getHandle,
                attachPoint
            )
        )
    }

    public getScale(): real {
        return BlzGetSpecialEffectScale(this.getHandle)
    }

    public setScale(scale: real) {
        BlzSetSpecialEffectScale(this.getHandle, scale)
        return this
    }

    /**
     * Warning: asynchronous
     */
    public getX(): real {
        return BlzGetLocalSpecialEffectX(this.getHandle)
    }

    public setX(x: real) {
        BlzSetSpecialEffectX(this.getHandle, x)
        return this
    }

    /**
     * Warning: asynchronous
     */
    public getY(): real {
        return BlzGetLocalSpecialEffectY(this.getHandle)
    }

    public setY(y: real) {
        BlzSetSpecialEffectY(this.getHandle, y)
        return this
    }

    /**
     * Warning: asynchronous
     */
    public getZ(): real {
        return BlzGetLocalSpecialEffectZ(this.getHandle)
    }

    public setZ(z: real) {
        BlzSetSpecialEffectZ(this.getHandle, z)
        return this
    }

    public addSubAnimation(subAnim: SubAnimType) {
        BlzSpecialEffectAddSubAnimation(this.getHandle, subAnim.getHandle)
        return this
    }

    public clearSubAnimations() {
        BlzSpecialEffectClearSubAnimations(this.getHandle)
        return this
    }

    public destroy() {
        DestroyEffect(this.getHandle)
        return this
    }

    public playAnimation(animType: AnimType) {
        BlzPlaySpecialEffect(this.getHandle, animType.getHandle)
        return this
    }

    public playWithTimeScale(animType: AnimType, timeScale: real) {
        BlzPlaySpecialEffectWithTimeScale(this.getHandle, animType.getHandle, timeScale)
        return this
    }

    public removeSubAnimation(subAnim: SubAnimType) {
        BlzSpecialEffectRemoveSubAnimation(this.getHandle, subAnim.getHandle)
        return this
    }

    public resetScaleMatrix() {
        BlzResetSpecialEffectMatrix(this.getHandle)
        return this
    }

    public setAlpha(alpha: integer) {
        BlzSetSpecialEffectAlpha(this.getHandle, Math.round(alpha))
        return this
    }

    public setColor(red: real, green: real, blue: real) {
        BlzSetSpecialEffectColor(this.getHandle, red, green, blue)
        return this
    }

    public setColorByPlayer(whichPlayer: MapPlayer) {
        BlzSetSpecialEffectColorByPlayer(this.getHandle, whichPlayer.getHandle)
        return this
    }

    public setHeight(height: real) {
        BlzSetSpecialEffectHeight(this.getHandle, height)
        return this
    }

    public setOrientation(yaw: real, pitch: real, roll: real) {
        BlzSetSpecialEffectOrientation(this.getHandle, yaw, pitch, roll)
        return this
    }

    public setPitch(pitch: real) {
        BlzSetSpecialEffectPitch(this.getHandle, pitch)
        return this
    }

    public setLoc(p: MapLocation) {
        BlzSetSpecialEffectPositionLoc(this.getHandle, p.getHandle)
        return this
    }

    public setCoords(x: real, y: real, z: real) {
        BlzSetSpecialEffectPosition(this.getHandle, x, y, z)
        return this
    }

    public setPos(p: Position) {
        this.setCoords(p.getX(), p.getY(), p.getZ())
        return this
    }

    public setRoll(roll: real) {
        BlzSetSpecialEffectRoll(this.getHandle, roll)
        return this
    }

    public setScaleMatrix(x: real, y: real, z: real) {
        BlzSetSpecialEffectMatrixScale(this.getHandle, x, y, z)
        return this
    }

    public setTime(value: real) {
        BlzSetSpecialEffectTime(this.getHandle, value)
        return this
    }

    public setTimeScale(timeScale: real) {
        BlzSetSpecialEffectTimeScale(this.getHandle, timeScale)
        return this
    }

    public setYaw(y: real) {
        BlzSetSpecialEffectYaw(this.getHandle, y)
        return this
    }

    public static fromHandle(handle: effect): SpellEffect {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: SpellEffect): effect {
        return this.getHandle(handleObject)
    }
}
