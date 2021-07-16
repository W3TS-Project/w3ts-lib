/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../Utils"
import { Handle } from "./Handle"
import { Unit } from "./Unit"

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
        DestroyTextTag(this.getHandle)
    }

    public setText(s: string, height: real) {
        SetTextTagText(this.getHandle, s, height)
        return this
    }

    public setPos(x: real, y: real, heightOffset: real) {
        SetTextTagPos(this.getHandle, x, y, heightOffset)
        return this
    }

    public setPosUnit(whichUnit: Unit, heightOffset: real) {
        SetTextTagPosUnit(this.getHandle, whichUnit.getHandle, heightOffset)
        return this
    }

    public setColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetTextTagColor(this.getHandle, red, green, blue, alpha)
        return this
    }

    public setVelocity(xvel: real, yvel: real) {
        SetTextTagVelocity(this.getHandle, xvel, yvel)
        return this
    }

    public set visibility(flag: boolean) {
        SetTextTagVisibility(this.getHandle, flag)
    }

    public set suspended(flag: boolean) {
        SetTextTagSuspended(this.getHandle, flag)
    }

    public set permanent(flag: boolean) {
        SetTextTagPermanent(this.getHandle, flag)
    }

    public set age(age: real) {
        SetTextTagAge(this.getHandle, age)
    }

    public set lifespan(lifespan: real) {
        SetTextTagLifespan(this.getHandle, lifespan)
    }

    public set fadepoint(fadepoint: real) {
        SetTextTagFadepoint(this.getHandle, fadepoint)
    }

    public static fromHandle(handle: TextTag): texttag {
        return this.getObject(handle)
    }

    public static fromObject(object: texttag): TextTag {
        return this.getHandle(object)
    }
}
