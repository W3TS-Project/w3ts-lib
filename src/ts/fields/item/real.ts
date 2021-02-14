/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertItemRealField = (i: number) => itemrealfield

const c = (s: string): itemrealfield => ConvertItemRealField(FourCC(s))

export const ItemRealField = {
    ScalingValue: c("isca")
}
