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
		return MapLocation.fromHandle(CameraSetupGetDestPositionLoc(this.getHandle))
  }

  public getDestX(): real {
		return CameraSetupGetDestPositionX(this.getHandle)
  }

  public setDestX(x: real) {
		CameraSetupSetDestPosition(this.getHandle, x, this.getDestY(), 0)
		return this
  }

  public getDestY() {
		return CameraSetupGetDestPositionY(this.getHandle)
  }

  public setDestY(y: real) {
		CameraSetupSetDestPosition(this.getHandle, this.getDestX(), y, 0)
		return this
  }

  public setLabel(label: string) {
		BlzCameraSetupSetLabel(this.getHandle, label)
		return this
  }

  public getLabel() {
		return BlzCameraSetupGetLabel(this.getHandle)
  }

  public apply(doPan: boolean, panTimed: boolean) {
		CameraSetupApply(this.getHandle, doPan, panTimed)
  }

  public applyForceDuration(doPan: boolean, forceDuration: real) {
		CameraSetupApplyForceDuration(this.getHandle, doPan, forceDuration)
  }

  public applyForceDurationSmooth(
		doPan: boolean,
		forcedDuration: real,
		easeInDuration: real,
		easeOutDuration: real,
		smoothFactor: real
  ) {
		BlzCameraSetupApplyForceDurationSmooth(
			this.getHandle,
			doPan,
			forcedDuration,
			easeInDuration,
			easeOutDuration,
			smoothFactor
		)
		return this
  }

  public applyForceDurationZ(zDestOffset: real, forceDuration: real) {
		CameraSetupApplyForceDurationWithZ(this.getHandle, zDestOffset, forceDuration)
		return this
  }

  public applyZ(zDestOffset: real) {
		CameraSetupApplyWithZ(this.getHandle, zDestOffset)
		return this
  }

  public getField(whichField: CameraField): real {
		return CameraSetupGetField(this.getHandle, whichField.getHandle)
  }

  public setDestCoords(x: real, y: real, duration: real) {
		CameraSetupSetDestPosition(this.getHandle, x, y, duration)
		return this
  }

  public setField(whichField: CameraField, value: real, duration: real) {
		CameraSetupSetField(this.getHandle, whichField.getHandle, value, duration)
		return this
  }

  public static fromHandle(handle: camerasetup): CameraSetup {
      return this.getObject(handle)
  }

	public static fromObject(object: CameraSetup): camerasetup {
		return this.getHandle(object)
	}
}
