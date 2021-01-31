/** @noSelfInFile **/
// @ts-nocheck

import { Rectangle } from "../handles/rect"

declare function SetDoodadAnimation(x: number, y: number, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean): void
declare function SetDoodadAnimationRect(r: rect, doodadID: number, animName: string, animRandom: boolean): void

export class Doodad {
    private constructor() {}

    static setAnimation(x: number, y: number, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean) {
        SetDoodadAnimation(x, y, radius, doodadID, nearestOnly, animName, animRandom)
        return this
    }

    static setAnimationRect(r: Rectangle, doodadID: number, animName: string, animRandom: boolean) {
        SetDoodadAnimationRect(r.handle, doodadID, animName, animRandom)
        return this
    }
}