/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitWeaponRealField = (i: number) => unitweaponrealfield

const c = (s: string): unitweaponrealfield => ConvertUnitWeaponRealField(FourCC(s))

export const UnitWeaponRealField = {
    AttackBackswingPoint: c("ubs1"),
    AttackDamagePoint: c("udp1"),
    AttackBaseCooldown: c("ua1c"),
    AttackDamageLossFactor: c("udl1"),
    AttackDamageFactorMedium: c("uhd1"),
    AttackDamageFactorSmall: c("uqd1"),
    AttackDamageSpillDistance: c("usd1"),
    AttackDamageSpillRadius: c("usr1"),
    AttackProjectileSpeed: c("ua1z"),
    AttackProjectileArc: c("uma1"),
    AttackAreaOfEffectFullDamage: c("ua1f"),
    AttackAreaOfEffectMediumDamage: c("ua1h"),
    AttackAreaOfEffectSmallDamage: c("ua1q"),
    AttackRange: c("ua1r")
}
