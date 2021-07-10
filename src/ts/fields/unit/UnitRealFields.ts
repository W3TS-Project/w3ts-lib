/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitRealField = (i: number) => unitrealfield

const c = (s: string): unitrealfield => ConvertUnitRealField(FourCC(s))

export const UnitRealField = {
    StrengthPerLevel: c("ustp"),
    AgilityPerLevel: c("uagp"),
    IntelligencePerLevel: c("uinp"),
    HitPointsRegenerationRate: c("uhpr"),
    ManaRegeneration: c("umpr"),
    DeathTime: c("udtm"),
    FlyHeight: c("ufyh"),
    TurnRate: c("umvr"),
    ElevationSampleRadius: c("uerd"),
    FogOfWarSampleRadius: c("ufrd"),
    MaximumPitchAngleDegrees: c("umxp"),
    MaximumRollAngleDegrees: c("umxr"),
    ScalingValue: c("usca"),
    AnimationRunSpeed: c("urun"),
    SelectionScale: c("ussc"),
    SelectionCircleHeight: c("uslz"),
    ShadowImageHeight: c("ushh"),
    ShadowImageWidth: c("ushw"),
    ShadowImageCenterX: c("ushx"),
    ShadowImageCenterY: c("ushy"),
    AnimationWalkSpeed: c("uwal"),
    Defense: c("udfc"),
    SightRadius: c("usir"),
    Priority: c("upri"),
    Speed: c("umvc"),
    OccluderHeight: c("uocc"),
    HP: c("uhpc"),
    Mana: c("umpc"),
    AcquisitionRange: c("uacq"),
    CastBackSwing: c("ucbs"),
    CastPoint: c("ucpt"),
    MinimumAttackRange: c("uamn")
}
