import { EffectType } from "../API/fields/other/EffectType";

export abstract class EffectTypes {
	public static readonly EFFECT = new EffectType(0)
	public static readonly TARGET = new EffectType(1)
	public static readonly CASTER = new EffectType(2)
	public static readonly SPECIAL = new EffectType(3)
	public static readonly AREA_EFFECT = new EffectType(4)
	public static readonly MISSILE = new EffectType(5)
	public static readonly LIGHTNING = new EffectType(6)
}