/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitBooleanField = (i: number) => unitbooleanfield

const c = (s: string): unitbooleanfield => ConvertUnitBooleanField(FourCC(s))

export const UnitBooleanField = {
    Raisable: c("urai"),
    Decayable: c("udec"),
    IsABuilding: c("ubdg"),
    UseExtendedLineOfSight: c("ulos"),
    NeutralBuildingShowsMinimapIcon: c("unbm"),
    HeroHideHeroInterfaceIcon: c("uhhb"),
    HideHeroMinimapDisplay: c("uhhm"),
    HeroHideHeroDeathMessage: c("uhhd"),
    HideMinimapDisplay: c("uhom"),
    ScaleProjectiles: c("uscb"),
    SelectionCircleOnWater: c("usew"),
    HasWaterShadow: c("ushr")
}
