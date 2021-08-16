/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { Point } from "./Point"

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

let point1_var: Point
let point2_var: Point

export class Lightning extends Handle<lightning> {
    point1: Point
    point2: Point
    colorAlpha = this.getColorAlpha()
    colorRed = this.getColorRed()
    colorGreen = this.getColorGreen()
    colorBlue = this.getColorBlue()

    constructor(handle: lightning) {
        super(handle)
        this.point1 = point1_var
        this.point2 = point2_var
    }

    static addCoords(
        codeName: string,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        x2: real,
        y2: real
    ) {
        point1_var = new Point(x1, y1)
        point2_var = new Point(x2, y2)
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
        point1_var = new Point(x1, y1, z1)
        point2_var = new Point(x2, y2, z2)
        return new this(AddLightningEx(codeName, checkVisibility, x1, y1, z1, x2, y2, z2))
    }

    static addPos(codeName: string, checkVisibility: boolean, p1: Position, p2: Position) {
        return this.addExCoords(codeName, checkVisibility, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
    }

    destroy(): boolean {
        super.destroy()
        return DestroyLightning(this.getHandle() as lightning)
    }

    moveCoords(checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean {
        this.point1.setCoords(x1, y1)
        this.point2.setCoords(x2, y2)
        return MoveLightning(this.getHandle() as lightning, checkVisibility, x1, y1, x2, y2)
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
        this.point1.setCoords(x1, y1, z1)
        this.point2.setCoords(x2, y2, z2)
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

    movePos(checkVisibility: boolean, p1: Position, p2: Position): boolean {
        return this.moveExCoords(checkVisibility, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
    }

    getColorAlpha(): real {
        return GetLightningColorA(this.getHandle() as lightning)
    }

    getColorRed(): real {
        return GetLightningColorR(this.getHandle() as lightning)
    }

    getColorGreen(): real {
        return GetLightningColorG(this.getHandle() as lightning)
    }

    getColorBlue(): real {
        return GetLightningColorB(this.getHandle() as lightning)
    }

    setColor(r: real, g: real, b: real, a: real): boolean {
        this.colorAlpha = a
        this.colorRed = r
        this.colorGreen = g
        this.colorBlue = b
        return SetLightningColor(this.getHandle() as lightning, r, g, b, a)
    }

    static fromHandle(handle: lightning) {
        return this.getObject(handle) as Lightning
    }
}
