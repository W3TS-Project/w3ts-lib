// /** @noSelfInFile **/
// //@ts-nocheck

import { CameraField } from "../API/fields/camera/CameraField"
import { Position } from "../Package"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"
import { Point } from "./Point"

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
    destPoint: Point
    label: string

    constructor() {
        super(CreateCameraSetup())
        this.destPoint = this.getDestPoint()
        this.label = this.getLabel()
    }

    getDestLoc() {
        return MapLocation.fromHandle(
            CameraSetupGetDestPositionLoc(this.getHandle() as camerasetup)
        )
    }

    getDestX(): real {
        return CameraSetupGetDestPositionX(this.getHandle() as camerasetup)
    }

    setDestX(x: real) {
        CameraSetupSetDestPosition(this.getHandle() as camerasetup, x, this.getDestY(), 0)
        return this
    }

    getDestY() {
        return CameraSetupGetDestPositionY(this.getHandle() as camerasetup)
    }

    setDestY(y: real) {
        CameraSetupSetDestPosition(this.getHandle() as camerasetup, this.getDestX(), y, 0)
        return this
    }

    getDestPoint() {
        return new Point(this.getDestX(), this.getDestY())
    }

    setDestPos(p: Position) {
        this.setDestX(p.x).setDestY(p.y)
        this.destPoint.setPos(p)
    }

    setLabel(label: string) {
        BlzCameraSetupSetLabel(this.getHandle() as camerasetup, label)
        this.label = label
        return this
    }

    getLabel(): string {
        return BlzCameraSetupGetLabel(this.getHandle() as camerasetup)
    }

    apply(doPan: boolean, panTimed: boolean) {
        CameraSetupApply(this.getHandle() as camerasetup, doPan, panTimed)
        return this
    }

    applyForceDuration(doPan: boolean, forceDuration: real) {
        CameraSetupApplyForceDuration(this.getHandle() as camerasetup, doPan, forceDuration)
        return this
    }

    applyForceDurationSmooth(
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

    applyForceDurationZ(zDestOffset: real, forceDuration: real) {
        CameraSetupApplyForceDurationWithZ(
            this.getHandle() as camerasetup,
            zDestOffset,
            forceDuration
        )
        return this
    }

    applyZ(zDestOffset: real) {
        CameraSetupApplyWithZ(this.getHandle() as camerasetup, zDestOffset)
        return this
    }

    getField(whichField: CameraField): real {
        return CameraSetupGetField(
            this.getHandle() as camerasetup,
            whichField.getHandle() as camerafield
        )
    }

    setDestCoords(x: real, y: real, duration: real) {
        CameraSetupSetDestPosition(this.getHandle() as camerasetup, x, y, duration)
        this.destPoint.setCoords(x, y)
        return this
    }

    setField(whichField: CameraField, value: real, duration: real) {
        CameraSetupSetField(
            this.getHandle() as camerasetup,
            whichField.getHandle() as camerafield,
            value,
            duration
        )
        return this
    }

    static fromHandle(handle: camerasetup) {
        return this.getObject(handle) as CameraSetup
    }
}
