/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAbilityStringLevelField = (i: number) => abilitystringlevelfield

const c = (s: string): abilitystringlevelfield => ConvertAbilityStringLevelField(FourCC(s))

export const AbilityStringLevelField = {
    IconNormal: c("aart"),
    Caster: c("acat"),
    Target: c("atat"),
    Special: c("asat"),
    Effect: c("aeat"),
    AreaEffect: c("aaea"),
    LightningEffects: c("alig"),
    MissileArt: c("amat"),
    TooltipLearn: c("aret"),
    TooltipExtendedLearn: c("arut"),
    TooltipNormal: c("atp1"),
    TooltipTurnOff: c("aut1"),
    TooltipExtendedNormal: c("aub1"),
    TooltipExtendedTurnOff: c("auu1"),
    NormalFormUnit_Eme1: c("Eme1"),
    SpawnedUnits: c("Ndp1"),
    AbilityForUnitCreation: c("Nrc1"),
    NormalFormUnit_Mil1: c("Mil1"),
    AlternateFormUnit_Mil2: c("Mil2"),
    BaseOrderID_Ans5: c("Ans5"),
    MorphUnitsGround: c("Ply2"),
    MorphUnitsAir: c("Ply3"),
    MorphUnitsAmphibious: c("Ply4"),
    MorphUnitsWater: c("Ply5"),
    UnitTypeOne: c("Rai3"),
    UnitTypeTwo: c("Rai4"),
    UnitType_Sod2: c("Sod2"),
    Summon1UnitType: c("Ist1"),
    Summon2UnitType: c("Ist2"),
    RaceToConvert: c("Ndc1"),
    PartnerUnitType: c("coa1"),
    PartnerUnitOneType: c("dcp1"),
    PartnerUnitTwoType: c("dcp2"),
    RequiredUnitType: c("tpi1"),
    ConvertedUnitType: c("tpi2"),
    SpellList: c("spb1"),
    BaseOrderID_spb5: c("spb5"),
    BaseOrderID_Ncl6: c("Ncl6"),
    AbilityUpgrade1: c("Neg3"),
    AbilityUpgrade2: c("Neg4"),
    AbilityUpgrade3: c("Neg5"),
    AbilityUpgrade4: c("Neg6"),
    SpawnUnitID_Nsy2: c("Nsy2")
}
