/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAttackType = (i: number) => attacktype

const c = ConvertAttackType

export const AttackType = {
    Normal: c(0),
    Melee: c(1),
    Pierce: c(2),
    Siege: c(3),
    Magic: c(4),
    Chaos: c(5),
    Hero: c(6)
}