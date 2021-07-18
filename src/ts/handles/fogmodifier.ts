/** @noSelfInFile **/
//@ts-nocheck

import { FogState } from "../API/fields/camera/FogState"
import { Position } from "../Package"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"
import { MapPlayer } from "./MapPlayer"
import { Rectangle } from "./Rectangle"

declare function CreateFogModifierRect(
    forWhichPlayer: player,
    whichState: fogstate,
    where: rect,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier
declare function CreateFogModifierRadius(
    forWhichPlayer: player,
    whichState: fogstate,
    centerX: real,
    centerY: real,
    radius: real,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier
declare function CreateFogModifierRadiusLoc(
    forWhichPlayer: player,
    whichState: fogstate,
    center: location,
    radius: real,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier
declare function DestroyFogModifier(whichFogModifier: fogmodifier): void
declare function FogModifierStart(whichFogModifier: fogmodifier): void
declare function FogModifierStop(whichFogModifier: fogmodifier): void

export class FogModifier extends Handle<fogmodifier> {
    public static createAtRect(forWhichPlayer: MapPlayer, whichState: FogState, where: Rectangle, useSharedVision: boolean, afterUnits: boolean) {
        return new this(CreateFogModifierRect(forWhichPlayer.getHandle, whichState.getHandle, where.getHandle, useSharedVision, afterUnits))
    }

    public static createRadiusCoords(forWhichPlayer: MapPlayer, whichState: FogState, centerX: real, centerY: real, radius: real, useSharedVision: boolean, afterUnits: boolean) {
        return new this(CreateFogModifierRadius(forWhichPlayer.getHandle, whichState.getHandle, centerX, centerY, radius, useSharedVision, afterUnits))
    }

    public static createRadiusPos(forWhichPlayer: MapPlayer, whichState: FogState, center: Position, radius: real, useSharedVision: boolean, afterUnits: boolean) {
        return this.createRadiusCoords(forWhichPlayer, whichState, center.getX(), center.getY(), radius, useSharedVision, afterUnits)
    }

    public static createRadiusLoc(forWhichPlayer: MapPlayer, whichState: FogState, center: MapLocation, radius: real, useSharedVision: boolean, afterUnits: boolean) {
        return new this(CreateFogModifierRadiusLoc(forWhichPlayer.getHandle, whichState.getHandle, center.getHandle, radius, useSharedVision, afterUnits))
    }
    
    public destroy() {
        DestroyFogModifier(this.getHandle)
        return this
    }

    public start() {
        FogModifierStart(this.getHandle)
        return this
    }

    public stop() {
        FogModifierStop(this.getHandle)
        return this
    }

    public static fromHandle(handle: fogmodifier): FogModifier {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: FogModifier): fogmodifier {
        return this.getHandle(handleObject)
    }
}
