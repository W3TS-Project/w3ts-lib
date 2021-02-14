/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertItemStringField = (i: number) => itemstringfield

const c = (s: string): itemstringfield => ConvertItemStringField(FourCC(s))

export const ItemStringField = {
    ModelUsed: c("ifil")
}