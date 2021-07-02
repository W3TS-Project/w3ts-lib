/** @noSelfInFile **/
//@ts-nocheck

import { Point } from "../handles/point"
import { formatCC, integer, RawCode, real } from "../Utils"

declare function GetTerrainCliffLevel(x: real, y: real): integer
declare function SetWaterBaseColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function SetWaterDeforms(val: boolean): void
declare function GetTerrainType(x: real, y: real): integer
declare function GetTerrainVariance(x: real, y: real): integer
declare function SetTerrainType(
    x: real,
    y: real,
    terrainType: integer,
    variation: integer,
    area: integer,
    shape: integer
): void
declare function IsTerrainPathable(x: real, y: real, t: pathingtype): boolean
declare function SetTerrainPathable(x: real, y: real, t: pathingtype, flag: boolean): void

export class Terrain {
    private constructor() {}

    public static getCliffLevelFromCoords(x: real, y: real): integer {
        return GetTerrainCliffLevel(x, y)
    }

    public static getCliffLevelFromPoint(p: Point): integer {
        return this.getCliffLevelFromCoords(p.x, p.y)
    }

    public static setWaterBaseColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetWaterBaseColor(red, green, blue, alpha)
        return this
    }

    public static setWaterDeforms(val: boolean) {
        SetWaterDeforms(val)
        return this
    }

    public static getTypeFromCoords(x: real, y: real): integer {
        return GetTerrainType(x, y)
    }

    public static getTypeFromPoint(p: Point): integer {
        return this.getTypeFromCoords(p.x, p.y)
    }

    public static getVarianceFromCoords(x: real, y: real): integer {
        return GetTerrainVariance(x, y)
    }

    public static getVarianceFromPoint(p: Point): integer {
        return this.getVarianceFromCoords(p.x, p.y)
    }

    public static setTypeWithCoords(
        x: real,
        y: real,
        terrainType: RawCode,
        variation: integer,
        area: integer,
        shape: integer
    ) {
        SetTerrainType(x, y, formatCC(terrainType), variation, area, shape)
        return this
    }

    public static setTypeWithPoint(
        p: Point,
        terrainType: RawCode,
        variation: integer,
        area: integer,
        shape: integer
    ) {
        return this.setTypeWithCoords(p.x, p.y, terrainType, variation, area, shape)
    }

    public static isPathableWithCoords(x: real, y: real, t: pathingtype): boolean {
        return IsTerrainPathable(x, y, t)
    }

    public static isPathableWithPoint(p: Point, t: pathingtype): boolean {
        return this.isPathableWithCoords(p.x, p.y, t)
    }

    public static setPathableWithCoords(x: real, y: real, t: pathingtype, flag: boolean) {
        SetTerrainPathable(x, y, t, flag)
        return this
    }

    public static setPathableWithPoint(p: Point, t: pathingtype, flag: boolean) {
        return this.setPathableWithCoords(p.x, p.y, t, flag)
    }
}
