/** @noSelfInFile **/
// @ts-nocheck

import { Position, real } from "../main"
import { Handle } from "./handle"

declare function AddLightning(
    codeName: string,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    x2: real,
    y2: real
): lightning
declare function AddLightningEx(
    codeName: string,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    z1: real,
    x2: real,
    y2: real,
    z2: real
): lightning
declare function DestroyLightning(whichBolt: lightning): boolean
declare function MoveLightning(
    whichBolt: lightning,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    x2: real,
    y2: real
): boolean
declare function MoveLightningEx(
    whichBolt: lightning,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    z1: real,
    x2: real,
    y2: real,
    z2: real
): boolean
declare function GetLightningColorA(whichBolt: lightning): real
declare function GetLightningColorR(whichBolt: lightning): real
declare function GetLightningColorG(whichBolt: lightning): real
declare function GetLightningColorB(whichBolt: lightning): real
declare function SetLightningColor(
    whichBolt: lightning,
    r: real,
    g: real,
    b: real,
    a: real
): boolean

export class Lightning<T extends lightning> extends Handle<lightning> {
    constructor(handle: T) {
        Handle.initFromHandle() ? super() : super(handle)
    }

    static addCoords(
        codeName: string,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        x2: real,
        y2: real
    ) {
        return new this(AddLightning(codeName, checkVisibility, x1, y1, x2, y2))
    }

    static addExCoords(
        codeName: string,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        z1: real,
        x2: real,
        y2: real,
        z2: real
    ) {
        return new this(AddLightningEx(codeName, checkVisibility, x1, y1, z1, x2, y2, z2))
    }

    static addPos(codeName: string, checkVisibility: boolean, p1: Position, p2: Position) {
        return this.addExCoords(codeName, checkVisibility, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
    }

    destroy(): boolean {
        return DestroyLightning(this.handle)
    }

    moveCoords(checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean {
        return MoveLightning(this.handle, checkVisibility, x1, y1, x2, y2)
    }

    moveExCoords(
        checkVisibility: boolean,
        x1: real,
        y1: real,
        z1: real,
        x2: real,
        y2: real,
        z2: real
    ): boolean {
        return MoveLightningEx(this.handle, checkVisibility, x1, y1, z1, x2, y2, z2)
    }

    movePos(checkVisibility: boolean, p1: Position, p2: Position): boolean {
        return this.moveExCoords(checkVisibility, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
    }

    get colorAlpha(): real {
        return GetLightningColorA(this.handle)
    }

    get colorRed(): real {
        return GetLightningColorR(this.handle)
    }

    get colorGreen(): real {
        return GetLightningColorG(this.handle)
    }

    get colorBlue(): real {
        return GetLightningColorB(this.handle)
    }

    setColor(r: real, g: real, b: real, a: real): boolean {
        return SetLightningColor(this.handle, r, g, b, a)
    }
}
