import { UnitWeaponIntegerField } from "../../API/fields/unit/UnitWeaponIntegerField"
import { RawCode } from "../../RawCode"

export abstract class UnitWeaponIntegerFields {
    public static readonly ATTACK_DAMAGE_NUMBER_OF_DICE = new UnitWeaponIntegerField(
        RawCode.get("ua1d"),
        "Бой - Атака 1 - урон: количество костей"
    )
    public static readonly ATTACK_DAMAGE_BASE = new UnitWeaponIntegerField(
        RawCode.get("ua1b"),
        "Бой - Атака 1 - базовый урон"
    )
    public static readonly ATTACK_DAMAGE_SIDES_PER_DIE = new UnitWeaponIntegerField(
        RawCode.get("ua1s"),
        "Бой - Атака 1 - урон: количество граней у кости"
    )
    public static readonly ATTACK_MAXIMUM_NUMBER_OF_TARGETS = new UnitWeaponIntegerField(
        RawCode.get("utc1"),
        "Бой - Атака 1 - максимальное количество целей"
    )
    public static readonly ATTACK_ATTACK_TYPE = new UnitWeaponIntegerField(
        RawCode.get("ua1t"),
        "Бой - Атака 1 - тип атаки"
    )
    public static readonly ATTACK_WEAPON_SOUND = new UnitWeaponIntegerField(
        RawCode.get("ucs1"),
        "Бой - Атака 1 - звук оружия"
    )
    public static readonly ATTACK_AREA_OF_EFFECTS_TARGETS = new UnitWeaponIntegerField(
        RawCode.get("ua1p"),
        "Бой - Атака 1 - радиус поражения (цели)"
    )
    public static readonly ATTACK_TARGETS_ALLOWED = new UnitWeaponIntegerField(
        RawCode.get("ua1g"),
        "Бой - Атака 1 - допустимые цели"
    )
}
