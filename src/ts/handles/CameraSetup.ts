/** @noSelfInFile **/
//@ts-nocheck

import { CameraField } from "../API/fields/camera/CameraField"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"

declare function CreateCameraSetup(): camerasetup
declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location
declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): real
declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): real
declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void
declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: real): void
declare function CameraSetupApplyForceDuration(
    whichSetup: camerasetup,
    doPan: boolean,
    forceDuration: real
): void
declare function CameraSetupApplyForceDurationWithZ(
    whichSetup: camerasetup,
    zDestOffset: real,
    forceDuration: real
): void
declare function BlzCameraSetupSetLabel(whichSetup: camerasetup, label: string): void
declare function BlzCameraSetupGetLabel(whichSetup: camerasetup): string
declare function CameraSetupSetField(
    whichSetup: camerasetup,
    whichField: camerafield,
    value: real,
    duration: real
): void
declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): real
declare function CameraSetupSetDestPosition(
    whichSetup: camerasetup,
    x: real,
    y: real,
    duration: real
): void
declare function BlzCameraSetupApplyForceDurationSmooth(
    whichSetup: camerasetup,
    doPan: boolean,
    forcedDuration: real,
    easeInDuration: real,
    easeOutDuration: real,
    smoothFactor: real
): void

export class CameraSetup extends Handle<camerasetup> {
    constructor() {
        super(CreateCameraSetup())
    }

    public getDestLoc() {
        return MapLocation.fromHandle(
            CameraSetupGetDestPositionLoc(this.getHandle() as camerasetup)
        )
    }

    public getDestX(): real {
        return CameraSetupGetDestPositionX(this.getHandle() as camerasetup)
    }

    public setDestX(x: real) {
        CameraSetupSetDestPosition(this.getHandle() as camerasetup, x, this.getDestY(), 0)
        return this
    }

    public getDestY() {
        return CameraSetupGetDestPositionY(this.getHandle() as camerasetup)
    }

    public setDestY(y: real) {
        CameraSetupSetDestPosition(this.getHandle() as camerasetup, this.getDestX(), y, 0)
        return this
    }

    public setLabel(label: string) {
        BlzCameraSetupSetLabel(this.getHandle() as camerasetup, label)
        return this
    }

    public getLabel() {
        return BlzCameraSetupGetLabel(this.getHandle() as camerasetup)
    }

    public apply(doPan: boolean, panTimed: boolean) {
        CameraSetupApply(this.getHandle() as camerasetup, doPan, panTimed)
        return this
    }

    public applyForceDuration(doPan: boolean, forceDuration: real) {
        CameraSetupApplyForceDuration(this.getHandle() as camerasetup, doPan, forceDuration)
        return this
    }

    public applyForceDurationSmooth(
        doPan: boolean,
        forcedDuration: real,
        easeInDuration: real,
        easeOutDuration: real,
        smoothFactor: real
    ) {
        BlzCameraSetupApplyForceDurationSmooth(
            this.getHandle() as camerasetup,
            doPan,
            forcedDuration,
            easeInDuration,
            easeOutDuration,
            smoothFactor
        )
        return this
    }

    public applyForceDurationZ(zDestOffset: real, forceDuration: real) {
        CameraSetupApplyForceDurationWithZ(
            this.getHandle() as camerasetup,
            zDestOffset,
            forceDuration
        )
        return this
    }

    public applyZ(zDestOffset: real) {
        CameraSetupApplyWithZ(this.getHandle() as camerasetup, zDestOffset)
        return this
    }

    public getField(whichField: CameraField): real {
        return CameraSetupGetField(
            this.getHandle() as camerasetup,
            whichField.getHandle() as camerafield
        )
    }

    public setDestCoords(x: real, y: real, duration: real) {
        CameraSetupSetDestPosition(this.getHandle() as camerasetup, x, y, duration)
        return this
    }

    public setField(whichField: CameraField, value: real, duration: real) {
        CameraSetupSetField(
            this.getHandle() as camerasetup,
            whichField.getHandle() as camerafield,
            value,
            duration
        )
        return this
    }

    public static fromHandle(handle: camerasetup) {
        return this.getObject(handle) as CameraSetup
    }
}
