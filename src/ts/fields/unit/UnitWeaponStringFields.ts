/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitWeaponStringField = (i: number) => unitweaponstringfield

const c = (s: string): unitweaponstringfield => ConvertUnitWeaponStringField(FourCC(s))

export const UnitWeaponStringField = {
    AttackProjectileArt: c("ua1m")
}
