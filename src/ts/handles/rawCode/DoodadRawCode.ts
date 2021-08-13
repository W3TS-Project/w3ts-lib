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

export type DoodadRawCodeType = DoodadRawCode | rawcode

export class DoodadRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом декорации"
    x: real
    y: real
    radius: real
    isNearestOnly: boolean
    animName: string
    isAnimRandom: boolean

    constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
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

    setAnimationCoords(
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

    setAnimationPos(
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

    setAnimationRect(r: Rectangle, animName: string, animRandom: boolean) {
        SetDoodadAnimationRect(r.getHandle() as rect, this.id, animName, animRandom)
        this.animName = animName
        this.isAnimRandom = animRandom
        return this
    }

    static get(rawCode: DoodadRawCodeType, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return super.get(rawCode, isBasicCheck) as DoodadRawCode
    }

    static check(id: DoodadRawCodeType): boolean {
        if (!this.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: DoodadRawCodeType) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
