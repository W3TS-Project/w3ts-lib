/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitState = (i: number) => unitstate

const c = ConvertUnitState

export const UnitState = {
    Life: c(0),
    MaxLife: c(1),
    Mana: c(2),
    MaxMana: c(3)
}
