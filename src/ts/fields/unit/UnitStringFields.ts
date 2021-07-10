/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitStringField = (i: number) => unitstringfield

const c = (s: string): unitstringfield => ConvertUnitStringField(FourCC(s))

export const UnitStringField = {
    Name: c("unam"),
    ProperNames: c("upro"),
    GroundTexture: c("uubs"),
    ShadowImageUnit: c("ushu")
}
