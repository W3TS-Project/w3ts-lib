/** @noSelfInFile **/
// @ts-nocheck

import { Handle } from "./handle"
import { MapPlayer } from "./player"
import { Widget } from "./widget"
import { formatCC, integer, Position, RawCode, real } from "../main"
import { Location } from "./location"
import { Point } from "./point"

declare function AddSpecialEffect(modelName: string, x: real, y: real): effect
declare function AddSpecialEffectLoc(modelName: string, where: location): effect
declare function AddSpecialEffectTarget(
    modelName: string,
    targetWidget: widget,
    attachPointName: string
): effect
declare function DestroyEffect(whichEffect: effect): void
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

export class Effect extends Handle<effect> {
    public constructor(handle: effect) {
        super(Handle.initialized(handle))
    }

    public static addSpecialCoords(modelName: string, x: real, y: real) {
        return new this(AddSpecialEffect(modelName, x, y))
    }

    public static addSpecialPos(modelName: string, p: Position) {
        p = <Point>p
        return this.addSpecialCoords(modelName, p.x, p.y)
    }

    public static addSpecialLoc(modelName: string, loc: Location) {
        return new this(AddSpecialEffectLoc(modelName, loc.handle))
    }

    public static addSpecialTarget(
        modelName: string,
        targetWidget: Widget,
        attachPointName: string
    ) {
        return new this(AddSpecialEffectTarget(modelName, targetWidget.handle, attachPointName))
    }

    public static addSpellCoords(abilityString: string, t: effecttype, x: real, y: real) {
        return new this(AddSpellEffect(abilityString, t, x, y))
    }

    public static addSpellPos(abilityString: string, t: effecttype, p: Position) {
        p = <Point>p
        return this.addSpellCoords(abilityString, t, p.x, p.y)
    }

    public static addSpellLoc(abilityString: string, t: effecttype, loc: Location) {
        return new this(AddSpellEffectLoc(abilityString, t, loc.handle))
    }

    public static addSpellByIdCoords(abilityId: RawCode, t: effecttype, x: real, y: real) {
        return new this(AddSpellEffectById(formatCC(abilityId), t, x, y))
    }

    public static addSpellByIdPos(abilityId: RawCode, t: effecttype, p: Position) {
        p = <Point>p
        return this.addSpellByIdCoords(abilityId, t, p.x, p.y)
    }

    public static addSpellByIdLoc(abilityId: RawCode, t: effecttype, loc: Location) {
        return new this(AddSpellEffectByIdLoc(formatCC(abilityId), t, loc.handle))
    }

    public static addSpellTarget(
        modelName: string,
        t: effecttype,
        targetWidget: Widget,
        attachPoint: string
    ) {
        return new this(AddSpellEffectTarget(modelName, t, targetWidget.handle, attachPoint))
    }

    public static addSpellByIdTarget(
        abilityId: RawCode,
        t: effecttype,
        targetWidget: Widget,
        attachPoint: string
    ) {
        return new this(
            AddSpellEffectTargetById(formatCC(abilityId), t, targetWidget.handle, attachPoint)
        )
    }

    public get scale(): real {
        return BlzGetSpecialEffectScale(this.handle)
    }

    public set scale(scale: real) {
        BlzSetSpecialEffectScale(this.handle, scale)
    }

    /**
     * Warning: asynchronous
     */
    public get x(): real {
        return BlzGetLocalSpecialEffectX(this.handle)
    }

    public set x(x: real) {
        BlzSetSpecialEffectX(this.handle, x)
    }

    /**
     * Warning: asynchronous
     */
    public get y(): real {
        return BlzGetLocalSpecialEffectY(this.handle)
    }

    public set y(y: real) {
        BlzSetSpecialEffectY(this.handle, y)
    }

    /**
     * Warning: asynchronous
     */
    public get z(): real {
        return BlzGetLocalSpecialEffectZ(this.handle)
    }

    public set z(z: real) {
        BlzSetSpecialEffectZ(this.handle, z)
    }

    public addSubAnimation(subAnim: subanimtype) {
        BlzSpecialEffectAddSubAnimation(this.handle, subAnim)
        return this
    }

    public clearSubAnimations() {
        BlzSpecialEffectClearSubAnimations(this.handle)
        return this
    }

    public destroy() {
        DestroyEffect(this.handle)
    }

    public playAnimation(animType: animtype) {
        BlzPlaySpecialEffect(this.handle, animType)
        return this
    }

    public playWithTimeScale(animType: animtype, timeScale: real) {
        BlzPlaySpecialEffectWithTimeScale(this.handle, animType, timeScale)
        return this
    }

    public removeSubAnimation(subAnim: subanimtype) {
        BlzSpecialEffectRemoveSubAnimation(this.handle, subAnim)
        return this
    }

    public resetScaleMatrix() {
        BlzResetSpecialEffectMatrix(this.handle)
        return this
    }

    public setAlpha(alpha: integer) {
        BlzSetSpecialEffectAlpha(this.handle, alpha)
        return this
    }

    public setColor(red: real, green: real, blue: real) {
        BlzSetSpecialEffectColor(this.handle, red, green, blue)
        return this
    }

    public setColorByPlayer(whichPlayer: MapPlayer) {
        BlzSetSpecialEffectColorByPlayer(this.handle, whichPlayer.handle)
        return this
    }

    public setHeight(height: real) {
        BlzSetSpecialEffectHeight(this.handle, height)
        return this
    }

    public setOrientation(yaw: real, pitch: real, roll: real) {
        BlzSetSpecialEffectOrientation(this.handle, yaw, pitch, roll)
        return this
    }

    public setPitch(pitch: real) {
        BlzSetSpecialEffectPitch(this.handle, pitch)
        return this
    }

    public setLoc(p: Location) {
        BlzSetSpecialEffectPositionLoc(this.handle, p.handle)
        return this
    }

    public setCoords(x: real, y: real, z: real) {
        BlzSetSpecialEffectPosition(this.handle, x, y, z)
        return this
    }

    public setPos(p: Position) {
        p = <Point>p
        this.setCoords(p.x, p.y, p.z)
        return this
    }

    public setRoll(roll: real) {
        BlzSetSpecialEffectRoll(this.handle, roll)
        return this
    }

    public setScaleMatrix(x: real, y: real, z: real) {
        BlzSetSpecialEffectMatrixScale(this.handle, x, y, z)
        return this
    }

    public setTime(value: real) {
        BlzSetSpecialEffectTime(this.handle, value)
        return this
    }

    public setTimeScale(timeScale: real) {
        BlzSetSpecialEffectTimeScale(this.handle, timeScale)
        return this
    }

    public setYaw(y: real) {
        BlzSetSpecialEffectYaw(this.handle, y)
        return this
    }

    public static fromHandle(handle: effect): Effect {
        return this.getObject(handle)
    }
}
