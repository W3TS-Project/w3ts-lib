/** @noSelfInFile **/
//@ts-nocheck

import { AttackType } from "../../../../API/fields/unit/AttackType"
import { DamageType } from "../../../../API/fields/unit/DamageType"
import { WeaponType } from "../../../../API/fields/unit/WeaponType"
import { Unit } from "../../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetEventDamage(): real
declare function GetEventDamageSource(): unit
declare function BlzSetEventDamage(damage: real): void
declare function BlzGetEventDamageTarget(): unit
declare function BlzGetEventAttackType(): attacktype
declare function BlzGetEventDamageType(): damagetype
declare function BlzGetEventWeaponType(): weapontype
declare function BlzSetEventAttackType(attackType: attacktype): boolean
declare function BlzSetEventDamageType(damageType: damagetype): boolean
declare function BlzSetEventWeaponType(weaponType: weapontype): boolean

export class UnitDamageEventResponse extends UnitEventResponse {
    damage: real = GetEventDamage()
    source = Unit.fromHandle(GetEventDamageSource())
    setDamage(damage: real) {
        BlzSetEventDamage(damage)
        return this
    }
    target = Unit.fromHandle(BlzGetEventDamageTarget())
    attackType = AttackType.fromHandle(BlzGetEventAttackType())
    damageType = DamageType.fromHandle(BlzGetEventDamageType())
    weaponType = WeaponType.fromHandle(BlzGetEventWeaponType())
    setAttackType(attackType: AttackType) {
        BlzSetEventAttackType(attackType.getHandle() as attacktype)
        return this
    }
    setDamageType(damageType: DamageType) {
        BlzSetEventDamageType(damageType.getHandle() as damagetype)
        return this
    }
    setWeaponType(weaponType: WeaponType) {
        BlzSetEventWeaponType(weaponType.getHandle() as weapontype)
        return this
    }
}
