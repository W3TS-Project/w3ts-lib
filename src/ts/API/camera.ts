/** @noSelfInFile **/
// @ts-nocheck

import { Handle } from "../handles/handle"
import { Location, Point } from "../handles/location"
import { Unit } from "../handles/unit"

declare function SetCameraPosition(x: number, y: number): void
declare function SetCameraQuickPosition(x: number, y: number): void
declare function SetCameraBounds(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
): void
declare function StopCamera(): void
declare function ResetToGameCamera(duration: number): void
declare function PanCameraTo(x: number, y: number): void
declare function PanCameraToTimed(x: number, y: number, duration: number): void
declare function PanCameraToWithZ(x: number, y: number, zOffsetDest: number): void
declare function PanCameraToTimedWithZ(
    x: number,
    y: number,
    zOffsetDest: number,
    duration: number
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

export class Camera {
    private constructor() {}

    static setPos(x: number, y: number): void {
        SetCameraPosition(x, y)
        return this
    }

    static setPos(p: Point): void {
        return this.setPos(p.x, p.y)
    }

    static setPos(loc: Location): void {
        return this.setPos(loc.x, loc.y)
    }

    static setQuickPos(x: number, y: number): void {
        SetCameraQuickPosition(x, y)
        return this
    }

    static setQuickPos(p: Point | Location): void {
        return this.setQuickPos(p.x, p.y)
    }

    static setBounds(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number
    ) {
        SetCameraBounds(x1, y1, x2, y2, x3, y3, x4, y4)
        return this
    }

    static setBounds(
        p1: Point | Location,
        p2: Point | Location,
        p3: Point | Location,
        p4: Point | Location
    ) {
        return this.setBounds(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)
    }

    static stop() {
        StopCamera()
        return this
    }

    static reset(duration: number) {
        ResetToGameCamera(duration)
        return this
    }

    static pan(x: number, y: number, zOffsetDest: number | undefined) {
        if (!zOffsetDest) {
            PanCameraTo(x, y)
        } else {
            PanCameraToWithZ(x, y, zOffsetDest)
        }
        return this
    }

    static pan(p: Point | Location) {
        return this.pan(p.x, p.y, p.z)
    }

    static panTimed(x: number, y: number, duration: number, zOffsetDest: number | undefined) {
        if (!zOffsetDest) {
            PanCameraToTimed(x, y, duration)
        } else {
            PanCameraToTimedWithZ(x, y, zOffsetDest, duration)
        }
        return this
    }

    static panTimed(p: Point | Location, duration: number) {
        return this.panTimed(p.x, p.y, duration, p.z)
    }

    static setRotateMode(x: number, y: number, radiansToSweep: number, duration: number) {
        SetCameraRotateMode(x, y, radiansToSweep, duration)
        return this
    }

    static setField(whichField: camerafield, value: number, duration: number) {
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

    static setOrientController(whichUnit: Unit, p: Point | Location) {
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

    static get boundMinLoc(): Location {
        return new Location(this.boundMinX, this.boundMinY)
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

    static get boundMaxLoc(): Location {
        return new Location(this.boundMaxX, this.boundMaxY)
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

    static get eyeLoc(): Location {
        return Location.fromHandle(GetCameraEyePositionLoc())
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
