/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { RawCode } from "../RawCode"
import { PathingType } from "./fields/unit/PathingType"

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

export abstract class Terrain {
    public static getCliffLevelFromCoords(x: real, y: real): integer {
        return GetTerrainCliffLevel(x, y)
    }

    public static getCliffLevelFromPos(p: Position): integer {
        return this.getCliffLevelFromCoords(p.x, p.y)
    }

    public static setWaterBaseColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetWaterBaseColor(Math.round(red), Math.round(green), Math.round(blue), Math.round(alpha))
        return this
    }

    public static setWaterDeforms(val: boolean) {
        SetWaterDeforms(val)
        return this
    }

    public static getTypeFromCoords(x: real, y: real): integer {
        return GetTerrainType(x, y)
    }

    public static getTypeFromPos(p: Position): integer {
        return this.getTypeFromCoords(p.x, p.y)
    }

    public static getVarianceFromCoords(x: real, y: real): integer {
        return GetTerrainVariance(x, y)
    }

    public static getVarianceFromPos(p: Position): integer {
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
        SetTerrainType(
            x,
            y,
            terrainType.getId(),
            Math.round(variation),
            Math.round(area),
            Math.round(shape)
        )
        return this
    }

    public static setTypeWithPos(
        p: Position,
        terrainType: RawCode,
        variation: integer,
        area: integer,
        shape: integer
    ) {
        return this.setTypeWithCoords(
            p.x,
            p.y,
            terrainType,
            Math.round(variation),
            Math.round(area),
            Math.round(shape)
        )
    }

    public static isPathableWithCoords(x: real, y: real, t: PathingType): boolean {
        return IsTerrainPathable(x, y, t.getHandle)
    }

    public static isPathableWithPos(p: Position, t: PathingType): boolean {
        return this.isPathableWithCoords(p.x, p.y, t)
    }

    public static setPathableWithCoords(x: real, y: real, t: PathingType, flag: boolean) {
        SetTerrainPathable(x, y, t.getHandle, flag)
        return this
    }

    public static setPathableWithPos(p: Position, t: PathingType, flag: boolean) {
        return this.setPathableWithCoords(p.x, p.y, t, flag)
    }
}
