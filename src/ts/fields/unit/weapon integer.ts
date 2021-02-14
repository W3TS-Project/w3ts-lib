/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitWeaponIntegerField = (i: number) => unitweaponintegerfield

const c = (s: string): unitweaponintegerfield => ConvertUnitWeaponIntegerField(FourCC(s))

export const UnitWeaponIntegerField = {
    AttackDamageNumberOfDice: c("ua1d"),
    AttackDamageBase: c("ua1b"),
    AttackDamageSidesPerDie: c("ua1s"),
    AttackMaximumNumberOfTargets: c("utc1"),
    AttackAttackType: c("ua1t"),
    AttackWeaponSound: c("ucs1"),
    AttackAreaOfEffectTargets: c("ua1p"),
    AttackTargetsAllowed: c("ua1g")
}
