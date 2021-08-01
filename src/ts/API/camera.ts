/** @noSelfInFile **/
// @ts-nocheck

import { MapLocation } from "../handles/MapLocation"
import { Point } from "../handles/Point"
import { Unit } from "../handles/Unit"
import { Position } from "../Package"

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
declare function PanCameraToTimedWithZ(x: real, y: real, zOffsetDest: real, duration: real): void
declare function SetCameraRotateMode(x: real, y: real, radiansToSweep: real, duration: real): void
declare function SetCameraField(whichField: camerafield, value: real, duration: real): void
declare function AdjustCameraField(whichField: camerafield, offset: real, duration: real): void
declare function SetCameraTargetController(
    whichUnit: unit,
    xoffset: real,
    yoffset: real,
    inheritOrientation: boolean
): void
declare function SetCameraOrientController(whichUnit: unit, xoffset: real, yoffset: real): void
declare function CameraSetTargetNoise(mag: real, velocity: real): void
declare function CameraSetSourceNoise(mag: real, velocity: real): void
declare function CameraSetTargetNoiseEx(mag: real, velocity: real, vertOnly: boolean): void
declare function CameraSetSourceNoiseEx(mag: real, velocity: real, vertOnly: boolean): void
declare function CameraSetSmoothingFactor(factor: real): void
declare function CameraSetFocalDistance(distance: real): void
declare function CameraSetDepthOfFieldScale(scale: real): void
declare function GetCameraMargin(whichMargin: integer): real
declare function GetCameraBoundMinX(): real
declare function GetCameraBoundMinY(): real
declare function GetCameraBoundMaxX(): real
declare function GetCameraBoundMaxY(): real
declare function GetCameraField(whichField: camerafield): real
declare function GetCameraTargetPositionX(): real
declare function GetCameraTargetPositionY(): real
declare function GetCameraTargetPositionZ(): real
declare function GetCameraTargetPositionLoc(): location
declare function GetCameraEyePositionX(): real
declare function GetCameraEyePositionY(): real
declare function GetCameraEyePositionZ(): real
declare function GetCameraEyePositionLoc(): location

export abstract class Camera {
    public static setCoords(x: real, y: real) {
        SetCameraPosition(x, y)
        return this
    }

    public static setPos(p: Position) {
        return this.setCoords(p.getX(), p.getY())
    }

    public static setQuickCoords(x: real, y: real) {
        SetCameraQuickPosition(x, y)
        return this
    }

    public static setQuickPos(p: Position) {
        return this.setQuickCoords(p.getX(), p.getY())
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

    public static setBoundsPos(p1: Position, p2: Position, p3: Position, p4: Position) {
        return this.setBoundsCoords(
            p1.getX(),
            p1.getY(),
            p2.getX(),
            p2.getY(),
            p3.getX(),
            p3.getY(),
            p4.getX(),
            p4.getY()
        )
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
        return this.panToCoords(p.getX(), p.getY(), p.getZ())
    }

    public static panToCoordsTimed(
        x: real,
        y: real,
        duration: real,
        zOffsetDest: real | undefined
    ) {
        if (!zOffsetDest) {
            PanCameraToTimed(x, y, duration)
        } else {
            PanCameraToTimedWithZ(x, y, zOffsetDest, duration)
        }
        return this
    }

    public static panToPosTimed(p: Position, duration: real) {
        return this.panToCoordsTimed(p.getX(), p.getY(), duration, p.getZ())
    }

    public static setRotateMode(x: real, y: real, radiansToSweep: real, duration: real) {
        SetCameraRotateMode(x, y, radiansToSweep, duration)
        return this
    }

    public static setField(whichField: camerafield, value: real, duration: real) {
        SetCameraField(whichField, value, duration)
        return this
    }

    public static adjustField(whichField: camerafield, offset: real, duration: real) {
        AdjustCameraField(whichField, offset, duration)
        return this
    }

    public static setTargetControllerCoords(
        whichUnit: Unit,
        xOffset: real,
        yOffset: real,
        inheritOrientation: boolean
    ) {
        SetCameraTargetController(whichUnit.getHandle() as unit, xOffset, yOffset, inheritOrientation)
        return this
    }

    public static setTargetControllerPos(
        whichUnit: Unit,
        p: Position,
        inheritOrientation: boolean
    ) {
        return this.setTargetControllerCoords(whichUnit, p.getX(), p.getY(), inheritOrientation)
    }

    public static setOrientControllerCoords(whichUnit: Unit, xOffset: real, yOffset: real) {
        SetCameraOrientController(whichUnit.getHandle() as unit, xOffset, yOffset)
        return this
    }

    public static setOrientControllerPos(whichUnit: Unit, p: Position) {
        return this.setOrientControllerCoords(whichUnit, p.getX(), p.getY())
    }

    public static setTargetNoise(mag: real, velocity: real, vertOnly = false) {
        CameraSetTargetNoiseEx(mag, velocity, vertOnly)
    }

    public static setSourceNoise(mag: real, velocity: real, vertOnly = false) {
        CameraSetSourceNoiseEx(mag, velocity, vertOnly)
    }

    public static setSmoothingFactor(factor: real) {
        CameraSetSmoothingFactor(factor)
    }

    public static getMargin(whichMargin: integer): real {
        return GetCameraMargin(Math.floor(whichMargin))
    }

    public static getBoundMinX(): real {
        return GetCameraBoundMinX()
    }

    public static getBoundMinY(): real {
        return GetCameraBoundMinY()
    }

    public static getBoundMinPoint(): Point {
        return new Point(this.getBoundMinX(), this.getBoundMinY())
    }

    public static getBoundMinLoc(): MapLocation {
        return new MapLocation(this.getBoundMinX(), this.getBoundMinY())
    }

    public static getBoundMaxX(): real {
        return GetCameraBoundMaxX()
    }

    public static getBoundMaxY(): real {
        return GetCameraBoundMaxY()
    }

    public static getBoundMaxPoint(): Point {
        return new Point(this.getBoundMaxX(), this.getBoundMaxY())
    }

    public static getBoundMaxLoc(): MapLocation {
        return new MapLocation(this.getBoundMaxX(), this.getBoundMaxY())
    }

    public static getField(whichField: camerafield): real {
        return GetCameraField(whichField)
    }

    public static getTargetX(): real {
        return GetCameraTargetPositionX()
    }

    public static getTargetY(): real {
        return GetCameraTargetPositionY()
    }

    public static getTargetZ(): real {
        return GetCameraTargetPositionZ()
    }

    public static getTargetPoint(): Point {
        return new Point(this.getTargetX(), this.getTargetY(), this.getTargetZ())
    }

    public static getTargetLoc() {
        return MapLocation.fromHandle(GetCameraTargetPositionLoc())
    }

    public static getEyeX(): real {
        return GetCameraEyePositionX()
    }

    public static getEyeY(): real {
        return GetCameraEyePositionY()
    }

    public static getEyeZ(): real {
        return GetCameraEyePositionZ()
    }

    public static getEyeLoc(): MapLocation {
        return MapLocation.fromHandle(GetCameraEyePositionLoc())
    }

    public static getEyePoint(): Point {
        return new Point(this.getEyeX(), this.getEyeY(), this.getEyeZ())
    }

    public static setDepthOfFieldScale(scale: real) {
        CameraSetDepthOfFieldScale(scale)
        return this
    }

    public static setFocalDistance(distance: real) {
        CameraSetFocalDistance(distance)
        return this
    }
}
