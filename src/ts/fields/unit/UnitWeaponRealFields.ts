import { UnitWeaponRealField } from "../../API/fields/unit/UnitWeaponRealField";
import { RawCode } from "../../RawCode";

export abstract class UnitWeaponRealFields {
	public static readonly ATTACK_BACKSWING_POINT = new UnitWeaponRealField(new RawCode('ubs1'), 'Бой - Атака 1 - анимация точки обратного хода')
	public static readonly ATTACK_DAMAGE_POINT = new UnitWeaponRealField(new RawCode('udp1'), 'Бой - Атака 1 - анимация точки повреждения')
	public static readonly ATTACK_BASE_COOLDOWN = new UnitWeaponRealField(new RawCode('ua1c'), 'Бой - Атака 1 - время перезарядки')
	public static readonly ATTACK_DAMAGE_LOSS_FACTOR = new UnitWeaponRealField(new RawCode('udl1'), 'Бой - Атака 1 - фактор потери урона')
	public static readonly ATTACK_DAMAGE_FACTOR_MEDIUM = new UnitWeaponRealField(new RawCode('uhd1'), 'Бой - Атака 1 - урон на средней дистанции')
	public static readonly ATTACK_DAMAGE_FACTOR_SMALL = new UnitWeaponRealField(new RawCode('uqd1'), 'Бой - Атака 1 - урон вблизи')
	public static readonly ATTACK_DAMAGE_SPILL_DISTANCE = new UnitWeaponRealField(new RawCode('usd1'), 'Бой - Атака 1 - дистанция разброса при уроне')
	public static readonly ATTACK_DAMAGE_SPILL_RADIUS = new UnitWeaponRealField(new RawCode('usr1'), 'Бой - Атака 1 - радиус разброса при уроне')
	public static readonly ATTACK_PROJECTILE_SPEED = new UnitWeaponRealField(new RawCode('ua1z'), 'Бой - Атака 1 - скорость снаряда')
	public static readonly ATTACK_PROJECTILE_ARC = new UnitWeaponRealField(new RawCode('uma1'), 'Бой - Атака 1 - траектория полета снаряда')
	public static readonly ATTACK_AREA_OF_EFFECT_FULL_DAMAGE = new UnitWeaponRealField(new RawCode('ua1f'), 'Бой - Атака 1 - радиус поражения UnitWeaponRealField(new RawCode(макс. урон)')
	public static readonly ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE = new UnitWeaponRealField(new RawCode('ua1h'), 'Бой - Атака 1 - радиус поражения UnitWeaponRealField(new RawCode(сред. урон)')
	public static readonly ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE = new UnitWeaponRealField(new RawCode('ua1q'), 'Бой - Атака 1 - радиус поражения UnitWeaponRealField(new RawCode(мал. урон)')
	public static readonly ATTACK_RANGE = new UnitWeaponRealField(new RawCode('ua1r'), 'Бой - Атака 1 - дальность')
}