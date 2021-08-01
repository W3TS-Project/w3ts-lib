/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"

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
        return this.addExCoords(
            codeName,
            checkVisibility,
            p1.getX(),
            p1.getY(),
            p1.getZ(),
            p2.getX(),
            p2.getY(),
            p2.getZ()
        )
    }

    public destroy(): boolean {
        return DestroyLightning(this.getHandle() as lightning)
    }

    public moveCoords(checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean {
        return MoveLightning(this.getHandle() as lightning, checkVisibility, x1, y1, x2, y2)
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
        return MoveLightningEx(
            this.getHandle() as lightning,
            checkVisibility,
            x1,
            y1,
            z1,
            x2,
            y2,
            z2
        )
    }

    public movePos(checkVisibility: boolean, p1: Position, p2: Position): boolean {
        return this.moveExCoords(
            checkVisibility,
            p1.getX(),
            p1.getY(),
            p1.getZ(),
            p2.getX(),
            p2.getY(),
            p2.getZ()
        )
    }

    public getColorAlpha(): real {
        return GetLightningColorA(this.getHandle() as lightning)
    }

    public getColorRed(): real {
        return GetLightningColorR(this.getHandle() as lightning)
    }

    public getColorGreen(): real {
        return GetLightningColorG(this.getHandle() as lightning)
    }

    public getColorBlue(): real {
        return GetLightningColorB(this.getHandle() as lightning)
    }

    public setColor(r: real, g: real, b: real, a: real): boolean {
        return SetLightningColor(this.getHandle() as lightning, r, g, b, a)
    }

    public static fromHandle(handle: lightning) {
        return this.getObject(handle) as Lightning
    }
}
