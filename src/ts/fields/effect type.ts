/** @noSelfInFile **/
// @ts-nocheck

declare function ConvertEffectType(i: number): effecttype

const c = ConvertEffectType

export const TypeEffect = {
    Effect: c(0),
    Target: c(1),
    Caster: c(2),
    Special: c(3),
    AreaEffect: c(4),
    Missile: c(5),
    Lightning: c(6)
}