/** @noSelfInFile **/

import { integer, real } from "../utils"
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
    public constructor() {
        super(CreateTextTag())
    }

    public destroy() {
        DestroyTextTag(this.handle)
    }

    public setText(s: string, height: real) {
        SetTextTagText(this.handle, s, height)
        return this
    }

    public setPos(x: real, y: real, heightOffset: real) {
        SetTextTagPos(this.handle, x, y, heightOffset)
        return this
    }

    public setPosUnit(whichUnit: Unit, heightOffset: real) {
        SetTextTagPosUnit(this.handle, whichUnit.handle, heightOffset)
        return this
    }

    public setColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetTextTagColor(this.handle, red, green, blue, alpha)
        return this
    }

    public setVelocity(xvel: real, yvel: real) {
        SetTextTagVelocity(this.handle, xvel, yvel)
        return this
    }

    public set visibility(flag: boolean) {
        SetTextTagVisibility(this.handle, flag)
    }

    public set suspended(flag: boolean) {
        SetTextTagSuspended(this.handle, flag)
    }

    public set permanent(flag: boolean) {
        SetTextTagPermanent(this.handle, flag)
    }

    public set age(age: real) {
        SetTextTagAge(this.handle, age)
    }

    public set lifespan(lifespan: real) {
        SetTextTagLifespan(this.handle, lifespan)
    }

    public set fadepoint(fadepoint: real) {
        SetTextTagFadepoint(this.handle, fadepoint)
    }
}
