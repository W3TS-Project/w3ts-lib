/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"
import { Widget } from "./Widget"
import { MapLocation } from "./MapLocation"
import { Point } from "./Point"
import { Position } from "../Package"
import { SubAnimType } from "../API/fields/unit/SubAnimType"
import { AnimType } from "../API/fields/unit/AnimType"

declare function AddSpecialEffect(modelName: string, x: real, y: real): effect
declare function AddSpecialEffectLoc(modelName: string, where: location): effect
declare function AddSpecialEffectTarget(
    modelName: string,
    targetWidget: widget,
    attachPointName: string
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

export class SpecialEffect extends Handle<effect> {
    public static addCoords(modelName: string, x: real, y: real) {
        return new this(AddSpecialEffect(modelName, x, y))
    }

    public static addPos(modelName: string, p: Position) {
        return this.addCoords(modelName, p.getX(), p.getY())
    }

    public static addLoc(modelName: string, loc: MapLocation) {
        return new this(AddSpecialEffectLoc(modelName, loc.getHandle))
    }

    public static addTarget(modelName: string, targetWidget: Widget, attachPointName: string) {
        return new this(AddSpecialEffectTarget(modelName, targetWidget.getHandle, attachPointName))
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

    public static fromHandle(handle: effect): SpecialEffect {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: SpecialEffect): effect {
        return this.getHandle(handleObject)
    }
}
