/** @noSelfInFile **/
// @ts-nocheck

import { integer, real } from "../main"
import { Handle } from "./handle"

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
    constructor(
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
        super(
            Handle.initFromHandle()
                ? undefined
                : CreateUbersplat(x, y, name, red, green, blue, alpha, forcePaused, noBirthTime)
        )
    }

    destroy() {
        DestroyUbersplat(this.handle)
    }

    finish() {
        FinishUbersplat(this.handle)
        return this
    }

    render(flag: boolean, always = false) {
        if (always) {
            SetUbersplatRenderAlways(this.handle, flag)
        } else {
            SetUbersplatRender(this.handle, flag)
        }
        return this
    }

    reset() {
        ResetUbersplat(this.handle)
        return this
    }

    show(flag: boolean) {
        ShowUbersplat(this.handle, flag)
        return this
    }

    static fromHandle(handle: ubersplat): Ubersplat {
        return this.getObject(handle)
    }
}
