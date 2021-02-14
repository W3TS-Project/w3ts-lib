/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertItemIntegerField = (i: number) => itemintegerfield

const c = (s: string): itemintegerfield => ConvertItemIntegerField(FourCC(s))

export const ItemIntegerField = {
    Level: c("ilev"),
    NumberOfChanges: c("iuse"),
    CooldownGroup: c("icid"),
    MaxHitPoints: c("ihtp"),
    HitPoints: c("ihpc"),
    Priority: c("ipri"),
    ArmorType: c("iarm"),
    TintingColorRed: c("iclr"),
    TintingColorGreen: c("iclg"),
    TintingColorBlue: c("iclb"),
    TintingColorAlpha: c("ical")
}
