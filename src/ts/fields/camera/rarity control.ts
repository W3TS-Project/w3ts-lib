/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertRarityControl = (i: number) => raritycontrol

const c = ConvertRarityControl

export const RarityControl = {
    Frequent: c(0),
    Rare: c(1)
}
