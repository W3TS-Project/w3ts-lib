/** @noSelfInFile **/
// @ts-nocheck

import { MapLocation } from "../handles/MapLocation";
import { MapPlayer } from "../handles/MapPlayer";
import { Rectangle } from "../handles/Rectangle";
import { Position } from "../Package";
import { FogState } from "./fields/camera/FogState";

declare function SetFogStateRect(
    forWhichPlayer: player,
    whichState: fogstate,
    where: rect,
    useSharedVision: boolean
): void
declare function SetFogStateRadius(
    forWhichPlayer: player,
    whichState: fogstate,
    centerX: real,
    centerY: real,
    radius: real,
    useSharedVision: boolean
): void
declare function SetFogStateRadiusLoc(
    forWhichPlayer: player,
    whichState: fogstate,
    center: location,
    radius: real,
    useSharedVision: boolean
): void
declare function FogMaskEnable(enable: boolean): void
declare function IsFogMaskEnabled(): boolean
declare function FogEnable(enable: boolean): void
declare function IsFogEnabled(): boolean

export abstract class Fog {
    public static setStateRect(forWhichPlayer: MapPlayer, whichState: FogState, where: Rectangle, useSharedVision: boolean) {
        SetFogStateRect(forWhichPlayer.getHandle, whichState.getHandle, where.getHandle, useSharedVision)
        return this
    }

    public static setStateRadiusCoords(forWhichPlayer: MapPlayer, whichState: FogState, centerX: real, centerY: real, radius: real, useSharedVision: boolean) {
        SetFogStateRadius(forWhichPlayer.getHandle, whichState.getHandle, centerX, centerY, radius, useSharedVision)
        return this
    }

    public static setStateRadiusPos(forWhichPlayer: MapPlayer, whichState: FogState, centerPos: Position, radius: real, useSharedVision: boolean) {
        return this.setStateRadiusCoords(forWhichPlayer, whichState, centerPos.getX(), centerPos.getY(), radius, useSharedVision)
    }

    public static setStateRadiusLoc(forWhichPlayer: MapPlayer, whichState: FogState, center: MapLocation, radius: real, useSharedVision: boolean) {
        SetFogStateRadiusLoc(forWhichPlayer.getHandle, whichState.getHandle, center.getHandle, radius, useSharedVision)
        return this
    }

    public static maskEnable(enable: boolean) {
        FogMaskEnable(enable)
        return this
    }

    public static isMaskEnabled() {
        return IsFogMaskEnabled()
    }

    public static enable(enable: boolean) {
        FogEnable(enable)
        return this
    }

    public static isEnabled() {
        return IsFogEnabled()
    }
}