/** @noSelfInFile **/
// @ts-nocheck

import { Handle } from "../handles/handle"
import { MapLocation, Point } from "../handles/location"
import { Unit } from "../handles/unit"
import { Position, real } from "../utils"

declare function SetCameraPosition(x: real, y: real): void
declare function SetCameraQuickPosition(x: real, y: real): void
declare function SetCameraBounds(
    x1: real,
    y1: real,
    x2: real,
    y2: real,
    x3: real,
    y3: real,
    x4: real,
    y4: real
): void
declare function StopCamera(): void
declare function ResetToGameCamera(duration: real): void
declare function PanCameraTo(x: real, y: real): void
declare function PanCameraToTimed(x: real, y: real, duration: real): void
declare function PanCameraToWithZ(x: real, y: real, zOffsetDest: real): void
declare function PanCameraToTimedWithZ(
    x: real,
    y: real,
    zOffsetDest: real,
    duration: real
): void
declare function SetCinematicCamera(cameraModelFile: string): void
declare function SetCameraRotateMode(
    x: number,
    y: number,
    radiansToSweep: number,
    duration: number
): void
declare function SetCameraField(whichField: camerafield, value: number, duration: number): void
declare function AdjustCameraField(whichField: camerafield, offset: number, duration: number): void
declare function SetCameraTargetController(
    whichUnit: unit,
    xoffset: number,
    yoffset: number,
    inheritOrientation: boolean
): void
declare function SetCameraOrientController(whichUnit: unit, xoffset: number, yoffset: number): void
declare function CreateCameraSetup(): camerasetup
declare function CameraSetupSetField(
    whichSetup: camerasetup,
    whichField: camerafield,
    value: number,
    duration: number
): void
declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): number
declare function CameraSetupSetDestPosition(
    whichSetup: camerasetup,
    x: number,
    y: number,
    duration: number
): void
declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location
declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): number
declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): number
declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void
declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: number): void
declare function CameraSetupApplyForceDuration(
    whichSetup: camerasetup,
    doPan: boolean,
    forceDuration: number
): void
declare function CameraSetupApplyForceDurationWithZ(
    whichSetup: camerasetup,
    zDestOffset: number,
    forceDuration: number
): void
declare function BlzCameraSetupSetLabel(whichSetup: camerasetup, label: string): void
declare function BlzCameraSetupGetLabel(whichSetup: camerasetup): string
// declare function CameraSetTargetNoise(mag: number, velocity: number): void
// declare function CameraSetSourceNoise(mag: number, velocity: number): void
declare function CameraSetTargetNoiseEx(mag: number, velocity: number, vertOnly: boolean): void
declare function CameraSetSourceNoiseEx(mag: number, velocity: number, vertOnly: boolean): void
declare function CameraSetSmoothingFactor(factor: number): void
declare function CameraSetFocalDistance(distance: number): void
declare function CameraSetDepthOfFieldScale(scale: number): void
declare function DisplayCineFilter(flag: boolean): void
declare function IsCineFilterDisplayed(): boolean
declare function SetCinematicScene(
    portraitUnitId: number,
    color: playercolor,
    speakerTitle: string,
    text: string,
    sceneDuration: number,
    voiceoverDuration: number
): void
declare function EndCinematicScene(): void
declare function ForceCinematicSubtitles(flag: boolean): void
declare function SetCinematicAudio(cinematicAudio: boolean): void
declare function GetCameraMargin(whichMargin: number): number
declare function GetCameraBoundMinX(): number
declare function GetCameraBoundMinY(): number
declare function GetCameraBoundMaxX(): number
declare function GetCameraBoundMaxY(): number
declare function GetCameraField(whichField: camerafield): number
declare function GetCameraTargetPositionX(): number
declare function GetCameraTargetPositionY(): number
declare function GetCameraTargetPositionZ(): number
declare function GetCameraTargetPositionLoc(): location
declare function GetCameraEyePositionX(): number
declare function GetCameraEyePositionY(): number
declare function GetCameraEyePositionZ(): number
declare function GetCameraEyePositionLoc(): location
declare function BlzCameraSetupApplyForceDurationSmooth(
    whichSetup: camerasetup,
    doPan: boolean,
    forcedDuration: number,
    easeInDuration: number,
    easeOutDuration: number,
    smoothFactor: number
): void

export abstract class Camera {
    public static setCoords(x: real, y: real) {
        SetCameraPosition(x, y)
        return this
    }

    public static setPos(p: Position) {
        return this.setCoords(p.x, p.y)
    }

    public static setQuickCoords(x: real, y: real) {
        SetCameraQuickPosition(x, y)
        return this
    }

    public static setQuickPos(p: Position) {
        return this.setQuickCoords(p.x, p.y)
    }

    public static setBoundsCoords(
        x1: real,
        y1: real,
        x2: real,
        y2: real,
        x3: real,
        y3: real,
        x4: real,
        y4: real
    ) {
        SetCameraBounds(x1, y1, x2, y2, x3, y3, x4, y4)
        return this
    }

    public static setBoundsPos(
        p1: Position,
        p2: Position,
        p3: Position,
        p4: Position
    ) {
        return this.setBoundsCoords(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)
    }

    public static stop() {
        StopCamera()
        return this
    }

    public static reset(duration: real) {
        ResetToGameCamera(duration)
        return this
    }

    public static panToCoords(x: real, y: real, zOffsetDest: real | undefined) {
        if (!zOffsetDest) {
            PanCameraTo(x, y)
        } else {
            PanCameraToWithZ(x, y, zOffsetDest)
        }
        return this
    }

    public static panToPos(p: Position) {
        return this.panToCoords(p.x, p.y, p.z)
    }

    public static panToCoordsTimed(x: real, y: real, duration: real, zOffsetDest: real | undefined) {
        if (!zOffsetDest) {
            PanCameraToTimed(x, y, duration)
        } else {
            PanCameraToTimedWithZ(x, y, zOffsetDest, duration)
        }
        return this
    }

    public static panToPosTimed(p: Position, duration: real) {
        return this.panToCoordsTimed(p.x, p.y, duration, p.z)
    }

    public static setRotateMode(x: real, y: real, radiansToSweep: real, duration: real) {
        SetCameraRotateMode(x, y, radiansToSweep, duration)
        return this
    }

    public static setField(whichField: camerafield, value: number, duration: number) {
        SetCameraField(whichField, value, duration)
        return this
    }

    static adjustField(whichField: camerafield, offset: number, duration: number) {
        AdjustCameraField(whichField, offset, duration)
        return this
    }

    static setTargetController(
        whichUnit: Unit,
        xOffset: number,
        yOffset: number,
        inheritOrientation: boolean
    ) {
        SetCameraTargetController(whichUnit.handle, xOffset, yOffset, inheritOrientation)
        return this
    }

    static setTargetController(whichUnit: Unit, p: Point, inheritOrientation: boolean) {
        return this.setTargetController(whichUnit, p.x, p.y, inheritOrientation)
    }

    static setOrientController(whichUnit: Unit, xOffset: number, yOffset: number) {
        SetCameraOrientController(whichUnit.handle, xOffset, yOffset)
        return this
    }

    static setOrientController(whichUnit: Unit, p: Point | MapLocation) {
        return this.setOrientController(whichUnit, p.x, p.y)
    }

    static setTargetNoise(mag: number, velocity: number, vertOnly = false) {
        CameraSetTargetNoiseEx(mag, velocity, vertOnly)
    }

    static setSourceNoise(mag: number, velocity: number, vertOnly = false) {
        CameraSetSourceNoiseEx(mag, velocity, vertOnly)
    }

    static setSmoothingFactor(factor: number) {
        CameraSetSmoothingFactor(factor)
    }

    static getMargin(whichMargin: number): number {
        return GetCameraMargin(whichMargin)
    }

    static get boundMinX(): number {
        return GetCameraBoundMinX()
    }

    static get boundMinY(): number {
        return GetCameraBoundMinY()
    }

    static get boundMinPoint(): Point {
        return new Point(this.boundMinX, this.boundMinY)
    }

    static get boundMinLoc(): MapLocation {
        return new MapLocation(this.boundMinX, this.boundMinY)
    }

    static get boundMaxX(): number {
        return GetCameraBoundMaxX()
    }

    static get boundMaxY(): number {
        return GetCameraBoundMaxY()
    }

    static get boundMaxPoint(): Point {
        return new Point(this.boundMaxX, this.boundMaxY)
    }

    static get boundMaxLoc(): MapLocation {
        return new MapLocation(this.boundMaxX, this.boundMaxY)
    }

    static getField(whichField: camerafield): number {
        return GetCameraField(whichField)
    }

    static get targetX(): number {
        return GetCameraTargetPositionX()
    }

    static get targetY(): number {
        return GetCameraTargetPositionY()
    }

    static get targetZ(): number {
        return GetCameraTargetPositionZ()
    }

    static get targetPoint(): Point {
        return new Point(this.targetX, this.targetY, this.targetZ)
    }

    static get targetLoc() {
        return Point.fromHandle(GetCameraTargetPositionLoc())
    }

    static get eyeX(): number {
        return GetCameraEyePositionX()
    }

    static get eyeY(): number {
        return GetCameraEyePositionY()
    }

    static get eyeZ(): number {
        return GetCameraEyePositionZ()
    }

    static get eyeLoc(): MapLocation {
        return MapLocation.fromHandle(GetCameraEyePositionLoc())
    }

    static get eyePoint(): Point {
        return new Point(this.eyeX, this.eyeY, this.eyeZ)
    }

    static setDepthOfFieldScale(scale: number) {
        CameraSetDepthOfFieldScale(scale)
    }

    static setFocalDistance(distance: number) {
        CameraSetFocalDistance(distance)
    }
}

export class CameraSetup extends Handle<camerasetup> {
    constructor() {
        super(Handle.initFromHandle() ? undefined : CreateCameraSetup())
    }

    public get destPoint() {
        return CameraSetupGetDestPositionLoc(this.handle)
    }

    public get destX() {
        return CameraSetupGetDestPositionX(this.handle)
    }

    public set destX(x: number) {
        CameraSetupSetDestPosition(this.handle, x, this.destY, 0)
    }

    public get destY() {
        return CameraSetupGetDestPositionY(this.handle)
    }

    public set destY(y: number) {
        CameraSetupSetDestPosition(this.handle, this.destX, y, 0)
    }

    public set label(label: string) {
        BlzCameraSetupSetLabel(this.handle, label)
    }

    public get label() {
        return BlzCameraSetupGetLabel(this.handle)
    }

    public apply(doPan: boolean, panTimed: boolean) {
        CameraSetupApply(this.handle, doPan, panTimed)
    }

    public applyForceDuration(doPan: boolean, forceDuration: number) {
        CameraSetupApplyForceDuration(this.handle, doPan, forceDuration)
    }

    public applyForceDurationSmooth(
        doPan: boolean,
        forcedDuration: number,
        easeInDuration: number,
        easeOutDuration: number,
        smoothFactor: number
    ) {
        BlzCameraSetupApplyForceDurationSmooth(
            this.handle,
            doPan,
            forcedDuration,
            easeInDuration,
            easeOutDuration,
            smoothFactor
        )
    }

    public applyForceDurationZ(zDestOffset: number, forceDuration: number) {
        CameraSetupApplyForceDurationWithZ(this.handle, zDestOffset, forceDuration)
    }

    public applyZ(zDestOffset: number) {
        CameraSetupApplyWithZ(this.handle, zDestOffset)
    }

    public getField(whichField: camerafield) {
        return CameraSetupGetField(this.handle, whichField)
    }

    public setDestPos(x: number, y: number, duration: number) {
        CameraSetupSetDestPosition(this.handle, x, y, duration)
    }

    public setField(whichField: camerafield, value: number, duration: number) {
        CameraSetupSetField(this.handle, whichField, value, duration)
    }

    public static fromHandle(handle: camerasetup): camerasetup {
        return this.getObject(handle)
    }
}
