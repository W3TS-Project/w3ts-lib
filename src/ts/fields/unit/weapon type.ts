/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertWeaponType = (i: number) => weapontype

const c = ConvertWeaponType

export const WeaponType = {
    Whoknows: c(0),
    MetalLightChop: c(1),
    MetalMediumChop: c(2),
    MetalHeavyChop: c(3),
    MetalLightSlice: c(4),
    MetalMediumSlice: c(5),
    MetalHeavySlice: c(6),
    MetalMediumBash: c(7),
    MetalHeavyBash: c(8),
    MetalMediumStab: c(9),
    MetalHeavyStab: c(10),
    WoodLightSlice: c(11),
    WoodMediumSlice: c(12),
    WoodHeavySlice: c(13),
    WoodLightBash: c(14),
    WoodMediumBash: c(15),
    WoodHeavyBash: c(16),
    WoodLightStab: c(17),
    WoodMediumStab: c(18),
    ClawLightSlice: c(19),
    ClawMediumSlice: c(20),
    ClawHeavySlice: c(21),
    AxeMediumChop: c(22),
    RockHeavyBash: c(23)
}
