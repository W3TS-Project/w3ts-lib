/** @noSelfInFile **/
// @ts-nocheck

import { integer, real } from "../main"
import { Handle } from "./handle"
import { Unit } from "./unit"

declare function CreateTextTag(): texttag
declare function DestroyTextTag(t: texttag): void
declare function SetTextTagText(t: texttag, s: string, height: real): void
declare function SetTextTagPos(t: texttag, x: real, y: real, heightOffset: real): void
declare function SetTextTagPosUnit(t: texttag, whichUnit: unit, heightOffset: real): void
declare function SetTextTagColor(
    t: texttag,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function SetTextTagVelocity(t: texttag, xvel: real, yvel: real): void
declare function SetTextTagVisibility(t: texttag, flag: boolean): void
declare function SetTextTagSuspended(t: texttag, flag: boolean): void
declare function SetTextTagPermanent(t: texttag, flag: boolean): void
declare function SetTextTagAge(t: texttag, age: real): void
declare function SetTextTagLifespan(t: texttag, lifespan: real): void
declare function SetTextTagFadepoint(t: texttag, fadepoint: real): void

export class TextTag extends Handle<texttag> {
    constructor() {
        super(Handle.initFromHandle() ? undefined : CreateTextTag())
    }

    destroy() {
        DestroyTextTag(this.handle)
    }

    setText(s: string, height: real) {
        SetTextTagText(this.handle, s, height)
        return this
    }

    setPos(x: real, y: real, heightOffset: real) {
        SetTextTagPos(this.handle, x, y, heightOffset)
        return this
    }

    setPosUnit(whichUnit: Unit, heightOffset: real) {
        SetTextTagPosUnit(this.handle, whichUnit.handle, heightOffset)
        return this
    }

    setColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetTextTagColor(this.handle, red, green, blue, alpha)
        return this
    }

    setVelocity(xvel: real, yvel: real) {
        SetTextTagVelocity(this.handle, xvel, yvel)
        return this
    }

    set visibility(flag: boolean) {
        SetTextTagVisibility(this.handle, flag)
    }

    set suspended(flag: boolean) {
        SetTextTagSuspended(this.handle, flag)
    }

    set permanent(flag: boolean) {
        SetTextTagPermanent(this.handle, flag)
    }

    set age(age: real) {
        SetTextTagAge(this.handle, age)
    }

    set lifespan(lifespan: real) {
        SetTextTagLifespan(this.handle, lifespan)
    }

    set fadepoint(fadepoint: real) {
        SetTextTagFadepoint(this.handle, fadepoint)
    }
}
