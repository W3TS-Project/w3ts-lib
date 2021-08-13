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
    static getCliffLevelFromCoords(x: real, y: real): integer {
        return GetTerrainCliffLevel(x, y)
    }

    static getCliffLevelFromPos(p: Position): integer {
        return this.getCliffLevelFromCoords(p.getX(), p.getY())
    }

    static setWaterBaseColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetWaterBaseColor(Math.floor(red), Math.floor(green), Math.floor(blue), Math.floor(alpha))
        return this
    }

    static setWaterDeforms(val: boolean) {
        SetWaterDeforms(val)
        return this
    }

    static getTypeFromCoords(x: real, y: real) {
        return RawCode.get(GetTerrainType(x, y))
    }

    static getTypeFromPos(p: Position) {
        return this.getTypeFromCoords(p.getX(), p.getY())
    }

    static getVarianceFromCoords(x: real, y: real): integer {
        return GetTerrainVariance(x, y)
    }

    static getVarianceFromPos(p: Position): integer {
        return this.getVarianceFromCoords(p.getX(), p.getY())
    }

    static setTypeWithCoords(
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
            Math.floor(variation),
            Math.floor(area),
            Math.floor(shape)
        )
        return this
    }

    static setTypeWithPos(
        p: Position,
        terrainType: RawCode,
        variation: integer,
        area: integer,
        shape: integer
    ) {
        return this.setTypeWithCoords(
            p.getX(),
            p.getY(),
            terrainType,
            Math.floor(variation),
            Math.floor(area),
            Math.floor(shape)
        )
    }

    static isPathableWithCoords(x: real, y: real, t: PathingType): boolean {
        return IsTerrainPathable(x, y, t.getHandle() as pathingtype)
    }

    static isPathableWithPos(p: Position, t: PathingType): boolean {
        return this.isPathableWithCoords(p.getX(), p.getY(), t)
    }

    static setPathableWithCoords(x: real, y: real, t: PathingType, flag: boolean) {
        SetTerrainPathable(x, y, t.getHandle() as pathingtype, flag)
        return this
    }

    static setPathableWithPos(p: Position, t: PathingType, flag: boolean) {
        return this.setPathableWithCoords(p.getX(), p.getY(), t, flag)
    }
}
