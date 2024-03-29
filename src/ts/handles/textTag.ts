/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
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
        DestroyTextTag(this.getHandle() as texttag)
        return this
    }

    public setText(s: string, height: real) {
        SetTextTagText(this.getHandle() as texttag, s, height)
        return this
    }

    public setPosCoords(x: real, y: real, heightOffset: real) {
        SetTextTagPos(this.getHandle() as texttag, x, y, heightOffset)
        return this
    }

    public setPosPos(p: Position, heightOffset: real) {
        return this.setPosCoords(p.getX(), p.getY(), heightOffset)
    }

    public setPosUnit(whichUnit: Unit, heightOffset: real) {
        SetTextTagPosUnit(this.getHandle() as texttag, whichUnit.getHandle() as unit, heightOffset)
        return this
    }

    public setColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetTextTagColor(
            this.getHandle() as texttag,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public setVelocityCoords(xvel: real, yvel: real) {
        SetTextTagVelocity(this.getHandle() as texttag, xvel, yvel)
        return this
    }

    public setVelocityPos(p: Position) {
        return this.setVelocityCoords(p.getX(), p.getY())
    }

    public setVisibility(flag: boolean) {
        SetTextTagVisibility(this.getHandle() as texttag, flag)
        return this
    }

    public setSuspended(flag: boolean) {
        SetTextTagSuspended(this.getHandle() as texttag, flag)
        return this
    }

    public setPermanent(flag: boolean) {
        SetTextTagPermanent(this.getHandle() as texttag, flag)
        return this
    }

    public setAge(age: real) {
        SetTextTagAge(this.getHandle() as texttag, age)
        return this
    }

    public setLifespan(lifespan: real) {
        SetTextTagLifespan(this.getHandle() as texttag, lifespan)
        return this
    }

    public setFadepoint(fadepoint: real) {
        SetTextTagFadepoint(this.getHandle() as texttag, fadepoint)
        return this
    }

    public static fromHandle(handle: texttag) {
        return this.getObject(handle) as TextTag
    }
}
