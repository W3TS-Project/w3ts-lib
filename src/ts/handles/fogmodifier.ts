/** @noSelfInFile **/
//@ts-nocheck

import { real } from "../Utils"
import { Handle } from "./handle"
import { MapPlayer } from "./player"
import { Rectangle } from "./rect"

declare function SetFogStateRect(
    forWhichPlayer: player,
    whichState: fogstate,
    where: rect,
    useSharedVision: boolean
): void
declare function SetFogStateRadius(
    forWhichPlayer: player,
    whichState: fogstate,
    centerx: real,
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
    centerx: real,
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
    public constructor(
        forWhichPlayer: MapPlayer,
        whichState: fogstate,
        centerX: real,
        centerY: real,
        radius: real,
        useSharedVision: boolean,
        afterUnits: boolean
    ) {
        super(
            CreateFogModifierRadius(
                forWhichPlayer.getHandle,
                whichState,
                centerX,
                centerY,
                radius,
                useSharedVision,
                afterUnits
            )
        )
    }

    public destroy() {
        DestroyFogModifier(this.getHandle)
    }

    public start() {
        FogModifierStart(this.getHandle)
    }

    public stop() {
        FogModifierStop(this.getHandle)
    }

    public static fromRect(
        forWhichPlayer: MapPlayer,
        whichState: fogstate,
        where: Rectangle,
        useSharedVision: boolean,
        afterUnits: boolean
    ): FogModifier {
        return this.fromHandle(
            CreateFogModifierRect(
                forWhichPlayer.getHandle,
                whichState,
                where.getHandle,
                useSharedVision,
                afterUnits
            )
        )
    }

    public static fromHandle(handle: fogmodifier): FogModifier {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: FogModifier): fogmodifier {
        return this.getHandle(handleObject)
    }
}
