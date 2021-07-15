import { UnitWeaponBooleanField } from "../../API/fields/unit/UnitWeaponBooleanField";
import { RawCode } from "../../RawCode";

export abstract class UnitWeaponBooleanFields {
	public static readonly ATTACK_SHOW_UI = new UnitWeaponBooleanField(new RawCode('uwu1'), 'Бой - Атака 1 - показать UI')
	public static readonly ATTACKS_ENABLED = new UnitWeaponBooleanField(new RawCode('uaen'), 'Бой - Атаки')
	public static readonly ATTACK_PROJECTILE_HOMING_ENABLED = new UnitWeaponBooleanField(new RawCode('umh1'), 'Бой - Атака 1 - включено автонаведение')
}