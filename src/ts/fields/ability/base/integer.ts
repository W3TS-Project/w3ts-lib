/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAbilityIntegerField = (i: number) => abilityintegerfield

const c = (s: string): abilityintegerfield => ConvertAbilityIntegerField(FourCC(s))

export const AbilityIntegerField = {
    ButtonPositionNormalX: c("abpx"),
    ButtonPositionNormalY: c("abpy"),
    ButtonPositionActivatedX: c("aubx"),
    ButtonPositionActivatedY: c("auby"),
    ButtonPositionResearchX: c("arpx"),
    ButtonPositionResearchY: c("arpy"),
    MissileSpeed: c("amsp"),
    TargetAttachments: c("atac"),
    CasterAttachments: c("acac"),
    Priority: c("apri"),
    Levels: c("alev"),
    RequiredLevel: c("arlv"),
    LevelSkipRequirement: c("alsk")
}
