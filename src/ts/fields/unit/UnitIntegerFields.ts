/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitIntegerField = (i: number) => unitintegerfield

const c = (s: string): unitintegerfield => ConvertUnitIntegerField(FourCC(s))

export const UnitIntegerField = {
    DefenseType: c("udty"),
    ArmorType: c("uarm"),
    LoopingFadeInRate: c("ulfi"),
    LoopingFadeOutRate: c("ulfo"),
    Agility: c("uagc"),
    Intelligence: c("uinc"),
    Strength: c("ustc"),
    AgilityPermanent: c("uagm"),
    IntelligencePermanent: c("uinm"),
    StrengthPermanent: c("ustm"),
    AgilityWithBonus: c("uagb"),
    IntelligenceWithBonus: c("uinb"),
    StrengthWithBonus: c("ustb"),
    GoldBountyAwardedNumberOfDice: c("ubdi"),
    GoldBountyAwardedBase: c("ubba"),
    GoldBountyAwardedSidesPerDie: c("ubsi"),
    LumberBountyAwardedNumberOfDice: c("ulbd"),
    LumberBountyAwardedBase: c("ulba"),
    LumberBountyAwardedSidesPerDie: c("ulbs"),
    Level: c("ulev"),
    FormationRank: c("ufor"),
    OrientationInterpolation: c("uori"),
    ElevationSamplePoints: c("uept"),
    TintingColorRed: c("uclr"),
    TintingColorGreen: c("uclg"),
    TintingColorBlue: c("uclb"),
    TintingColorAlpha: c("ucal"),
    MoveType: c("umvt"),
    TargetedAs: c("utar"),
    UnitClassification: c("utyp"),
    HitPointsRegenerationType: c("uhrt"),
    PlacementPreventedBy: c("upar"),
    PrimaryAttribute: c("upra")
}
