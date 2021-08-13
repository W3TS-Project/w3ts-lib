import { EffectType } from "../API/fields/other/EffectType"

export abstract class EffectTypes {
    static readonly EFFECT = EffectType.convert(0)
    static readonly TARGET = EffectType.convert(1)
    static readonly CASTER = EffectType.convert(2)
    static readonly SPECIAL = EffectType.convert(3)
    static readonly AREA_EFFECT = EffectType.convert(4)
    static readonly MISSILE = EffectType.convert(5)
    static readonly LIGHTNING = EffectType.convert(6)
}
