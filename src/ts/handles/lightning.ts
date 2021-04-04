/** @noSelfInFile **/
//@ts-nocheck

import { Position, real } from "../utils"
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

export class Lightning extends Handle<lightning> {
    public static addCoords(
        codeName: string,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        x2: real,
        y2: real
    ) {
        return new this(AddLightning(codeName, checkVisibility, x1, y1, x2, y2))
    }

    public static addExCoords(
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

    public static addPos(codeName: string, checkVisibility: boolean, p1: Position, p2: Position) {
        return this.addExCoords(codeName, checkVisibility, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
    }

    public destroy(): boolean {
        return DestroyLightning(this.getHandle)
    }

    public moveCoords(checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean {
        return MoveLightning(this.getHandle, checkVisibility, x1, y1, x2, y2)
    }

    public moveExCoords(
        checkVisibility: boolean,
        x1: real,
        y1: real,
        z1: real,
        x2: real,
        y2: real,
        z2: real
    ): boolean {
        return MoveLightningEx(this.getHandle, checkVisibility, x1, y1, z1, x2, y2, z2)
    }

    public movePos(checkVisibility: boolean, p1: Position, p2: Position): boolean {
        return this.moveExCoords(checkVisibility, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
    }

    public get colorAlpha(): real {
        return GetLightningColorA(this.getHandle)
    }

    public get colorRed(): real {
        return GetLightningColorR(this.getHandle)
    }

    public get colorGreen(): real {
        return GetLightningColorG(this.getHandle)
    }

    public get colorBlue(): real {
        return GetLightningColorB(this.getHandle)
    }

    public setColor(r: real, g: real, b: real, a: real): boolean {
        return SetLightningColor(this.getHandle, r, g, b, a)
    }

    public static fromHandle(handle: lightning): Lightning {
        return this.getObject(handle)
    }

    public static fromObject(object: Lightning): lightning {
        return this.getHandle(object)
    }
}
