/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package";
import { Handle } from "./Handle";
import { MapPlayer } from "./MapPlayer";
import { Unit } from "./Unit";
import { UnitRawCode } from "./UnitRawCode";

declare function CreateUnitPool(): unitpool
declare function DestroyUnitPool(whichPool: unitpool): void
declare function UnitPoolAddUnitType(whichPool: unitpool, unitId: integer, weight: real): void
declare function UnitPoolRemoveUnitType(whichPool: unitpool, unitId: integer): void
declare function PlaceRandomUnit(whichPool: unitpool, forWhichPlayer: player, x: real, y: real, facing: real): unit

export class UnitPool extends Handle<unitpool> {
    public constructor() {
        super(CreateUnitPool())
    }

    public destroy() {
        DestroyUnitPool(this.getHandle)
        return this
    }

    public addUnitType(unitCode: UnitRawCode, weight: real) {
        UnitPoolAddUnitType(this.getHandle, unitCode.getId(), weight)
        return this
    }

    public removeUnitType(unitCode: UnitRawCode) {
        UnitPoolRemoveUnitType(this.getHandle, unitCode.getId())
    }

    public placeRandomUnitCoords(forWhichPlayer: MapPlayer, x: real, y: real, facing: real): Unit {
        return Unit.fromHandle(PlaceRandomUnit(this.getHandle, forWhichPlayer.getHandle, x, y, facing))
    }

    public placeRandomUnitPos(forWhichPlayer: MapPlayer, p: Position, facing: real): Unit {
        return this.placeRandomUnitCoords(forWhichPlayer, p.getX(), p.getY(), facing)
    }

    public static fromHandle(handle: unitpool): UnitPool {
        return this.getObject(handle)
    }

    public static fromObject(object: UnitPool): unitpool {
        return this.getHandle(object)
    }
}

