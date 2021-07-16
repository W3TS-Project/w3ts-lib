/** @noSelfInFile **/
// @ts-nocheck

import { Rectangle } from "../handles/Rectangle"
import { RawCode } from "../RawCode"

declare function SetDoodadAnimation(x: real, y: real, radius: real, doodadID: integer, nearestOnly: boolean, animName: string, animRandom: boolean): void
declare function SetDoodadAnimationRect(r: rect, doodadID: integer, animName: string, animRandom: boolean): void

export abstract class Doodad {
    public static setAnimation(x: real, y: real, radius: real, doodadCode: RawCode, nearestOnly: boolean, animName: string, animRandom: boolean) {
        SetDoodadAnimation(x, y, radius, doodadCode.getId(), nearestOnly, animName, animRandom)
        return this
    }

    public static setAnimationRect(r: Rectangle, doodadCode: RawCode, animName: string, animRandom: boolean) {
        SetDoodadAnimationRect(r.getHandle, doodadCode.getId(), animName, animRandom)
        return this
    }
}