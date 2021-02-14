/** @noSelfInFile **/
// @ts-nocheck

import { real } from "../main"
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

    constructor(
        forWhichPlayer: MapPlayer,
        whichState: fogstate,
        centerX: real,
        centerY: real,
        radius: real,
        useSharedVision: boolean,
        afterUnits: boolean
    ) {
        if (Handle.initFromHandle()) {
            super()
        } else {
            super(
                CreateFogModifierRadius(
                    forWhichPlayer.handle,
                    whichState,
                    centerX,
                    centerY,
                    radius,
                    useSharedVision,
                    afterUnits
                )
            )
        }
    }

    public destroy() {
        DestroyFogModifier(this.handle)
    }

    public start() {
        FogModifierStart(this.handle)
    }

    public stop() {
        FogModifierStop(this.handle)
    }

    public static fromHandle(handle: fogmodifier): FogModifier {
        return this.getObject(handle)
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
                forWhichPlayer.handle,
                whichState,
                where.handle,
                useSharedVision,
                afterUnits
            )
        )
    }
}
