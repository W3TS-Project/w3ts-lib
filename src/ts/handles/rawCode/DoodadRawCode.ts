/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../../Package"
import { RawCode } from "../../RawCode"
import { Rectangle } from "../Rectangle"

declare function SetDoodadAnimation(
    x: real,
    y: real,
    radius: real,
    doodadID: integer,
    nearestOnly: boolean,
    animName: string,
    animRandom: boolean
): void
declare function SetDoodadAnimationRect(
    r: rect,
    doodadID: integer,
    animName: string,
    animRandom: boolean
): void

export class DoodadRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом декорации"
    public x: real
    public y: real
    public radius: real
    public isNearestOnly: boolean
    public animName: string
    public isAnimRandom: boolean

    public constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            DoodadRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
        this.x = 0
        this.y = 0
        this.radius = 0
        this.isNearestOnly = false
        this.animName = ""
        this.isAnimRandom = false
    }

    public setAnimationCoords(
        x: real,
        y: real,
        radius: real,
        nearestOnly: boolean,
        animName: string,
        animRandom: boolean
    ) {
        SetDoodadAnimation(x, y, radius, this.id, nearestOnly, animName, animRandom)
        this.x = x
        this.y = y
        this.radius = radius
        this.isNearestOnly = nearestOnly
        this.animName = animName
        this.isAnimRandom = animRandom
        return this
    }

    public setAnimationPos(
        p: Position,
        radius: real,
        nearestOnly: boolean,
        animName: string,
        animRandom: boolean
    ) {
        return this.setAnimationCoords(
            p.getX(),
            p.getY(),
            radius,
            nearestOnly,
            animName,
            animRandom
        )
    }

    public setAnimationRect(r: Rectangle, animName: string, animRandom: boolean) {
        SetDoodadAnimationRect(r.getHandle() as rect, this.id, animName, animRandom)
        this.animName = animName
        this.isAnimRandom = animRandom
        return this
    }

    public static get(rawCode: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return super.get(rawCode, isBasicCheck) as DoodadRawCode
    }

    protected static check(id: rawcode): boolean {
        if (!this.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: rawcode) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
