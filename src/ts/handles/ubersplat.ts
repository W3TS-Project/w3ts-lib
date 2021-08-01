/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"

declare function CreateUbersplat(
    x: real,
    y: real,
    name: string,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer,
    forcePaused: boolean,
    noBirthTime: boolean
): ubersplat
declare function DestroyUbersplat(whichSplat: ubersplat): void
declare function ResetUbersplat(whichSplat: ubersplat): void
declare function FinishUbersplat(whichSplat: ubersplat): void
declare function ShowUbersplat(whichSplat: ubersplat, flag: boolean): void
declare function SetUbersplatRender(whichSplat: ubersplat, flag: boolean): void
declare function SetUbersplatRenderAlways(whichSplat: ubersplat, flag: boolean): void

export class Ubersplat extends Handle<ubersplat> {
    public static createCoords(
        x: real,
        y: real,
        name: string,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer,
        forcePaused: boolean,
        noBirthTime: boolean
    ) {
        return new this(
            CreateUbersplat(
                x,
                y,
                name,
                Math.floor(red),
                Math.floor(green),
                Math.floor(blue),
                Math.floor(alpha),
                forcePaused,
                noBirthTime
            )
        )
    }

    public static createPos(
        p: Position,
        name: string,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer,
        forcePaused: boolean,
        noBirthTime: boolean
    ) {
        return this.createCoords(
            p.getX(),
            p.getY(),
            name,
            red,
            green,
            blue,
            alpha,
            forcePaused,
            noBirthTime
        )
    }

    public destroy() {
        DestroyUbersplat(this.getHandle() as ubersplat)
        return this
    }

    public finish() {
        FinishUbersplat(this.getHandle() as ubersplat)
        return this
    }

    public render(flag: boolean, always = false) {
        if (always) {
            SetUbersplatRenderAlways(this.getHandle() as ubersplat, flag)
        } else {
            SetUbersplatRender(this.getHandle() as ubersplat, flag)
        }
        return this
    }

    public reset() {
        ResetUbersplat(this.getHandle() as ubersplat)
        return this
    }

    public show(flag: boolean) {
        ShowUbersplat(this.getHandle() as ubersplat, flag)
        return this
    }

    public static fromHandle(handle: ubersplat) {
        return this.getObject(handle) as Ubersplat
    }
}
