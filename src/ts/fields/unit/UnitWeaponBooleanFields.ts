/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitWeaponBooleanField = (i: number) => unitweaponbooleanfield

const c = (s: string): unitweaponbooleanfield => ConvertUnitWeaponBooleanField(FourCC(s))

export const UnitWeaponBooleanField = {
    AttackShowUI: c("uwu1"),
    AttacksEnabled: c("uaen"),
    AttackProjectileHomingEnabled: c("umh1")
}
