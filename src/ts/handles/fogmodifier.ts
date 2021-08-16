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
    isStarted = false

    static createAtRect(
        forWhichPlayer: MapPlayer,
        whichState: FogState,
        where: Rectangle,
        useSharedVision: boolean,
        afterUnits: boolean
    ) {
        return new this(
            CreateFogModifierRect(
                forWhichPlayer.getHandle() as player,
                whichState.getHandle() as fogstate,
                where.getHandle() as rect,
                useSharedVision,
                afterUnits
            )
        )
    }

    static createRadiusCoords(
        forWhichPlayer: MapPlayer,
        whichState: FogState,
        centerX: real,
        centerY: real,
        radius: real,
        useSharedVision: boolean,
        afterUnits: boolean
    ) {
        return new this(
            CreateFogModifierRadius(
                forWhichPlayer.getHandle() as player,
                whichState.getHandle() as fogstate,
                centerX,
                centerY,
                radius,
                useSharedVision,
                afterUnits
            )
        )
    }

    static createRadiusPos(
        forWhichPlayer: MapPlayer,
        whichState: FogState,
        center: Position,
        radius: real,
        useSharedVision: boolean,
        afterUnits: boolean
    ) {
        return this.createRadiusCoords(
            forWhichPlayer,
            whichState,
            center.x,
            center.y,
            radius,
            useSharedVision,
            afterUnits
        )
    }

    static createRadiusLoc(
        forWhichPlayer: MapPlayer,
        whichState: FogState,
        center: MapLocation,
        radius: real,
        useSharedVision: boolean,
        afterUnits: boolean
    ) {
        return new this(
            CreateFogModifierRadiusLoc(
                forWhichPlayer.getHandle() as player,
                whichState.getHandle() as fogstate,
                center.getHandle() as location,
                radius,
                useSharedVision,
                afterUnits
            )
        )
    }

    destroy() {
        DestroyFogModifier(this.getHandle() as fogmodifier)
        super.destroy()
    }

    start() {
        FogModifierStart(this.getHandle() as fogmodifier)
        this.isStarted = true
        return this
    }

    stop() {
        FogModifierStop(this.getHandle() as fogmodifier)
        this.isStarted = false
        return this
    }

    static fromHandle(handle: fogmodifier) {
        return this.getObject(handle) as FogModifier
    }
}
