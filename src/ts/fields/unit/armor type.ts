/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertArmorType = (i: number) => armortype

const c = ConvertArmorType

export const ArmorType = {
    Whoknows: c(0),
    Flesh: c(1),
    Metal: c(2),
    Wood: c(3),
    Ethreal: c(4),
    Stone: c(5)
}
