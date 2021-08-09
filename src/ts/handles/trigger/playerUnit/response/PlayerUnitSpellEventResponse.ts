/** @noSelfInFile **/
//@ts-nocheck

import { Ability } from "../../../Ability"
import { Destructable } from "../../../Destructable"
import { Item } from "../../../Item"
import { MapLocation } from "../../../MapLocation"
import { Point } from "../../../Point"
import { AbilityRawCode } from "../../../rawCode/AbilityRawCode"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetSpellAbilityUnit(): unit
declare function GetSpellAbilityId(): integer
declare function GetSpellAbility(): ability
declare function GetSpellTargetLoc(): location
declare function GetSpellTargetX(): real
declare function GetSpellTargetY(): real
declare function GetSpellTargetDestructable(): destructable
declare function GetSpellTargetItem(): item
declare function GetSpellTargetUnit(): unit

export class PlayerUnitSpellEventResponse extends PlayerUnitEventResponse {
    caster = Unit.fromHandle(GetSpellAbilityUnit())
    abilCode = AbilityRawCode.get(GetSpellAbilityId())
    ability = Ability.fromHandle(GetSpellAbility())
    targetLoc = MapLocation.fromHandle(GetSpellTargetLoc())
    targetX: real = GetSpellTargetX()
    targetY: real = GetSpellTargetY()
    targetPoint = new Point(this.targetX, this.targetY)
    targetDestructable = Destructable.fromHandle(GetSpellTargetDestructable())
    targetItem = Item.fromHandle(GetSpellTargetItem())
    targetUnit = Unit.fromHandle(GetSpellTargetUnit())
}
