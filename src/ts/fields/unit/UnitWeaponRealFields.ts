import { UnitWeaponRealField } from "../../API/fields/unit/UnitWeaponRealField"
import { RawCode } from "../../RawCode"

export abstract class UnitWeaponRealFields {
    public static readonly ATTACK_BACKSWING_POINT = new UnitWeaponRealField(
        RawCode.get("ubs1"),
        "Бой - Атака 1 - анимация точки обратного хода"
    )
    public static readonly ATTACK_DAMAGE_POINT = new UnitWeaponRealField(
        RawCode.get("udp1"),
        "Бой - Атака 1 - анимация точки повреждения"
    )
    public static readonly ATTACK_BASE_COOLDOWN = new UnitWeaponRealField(
        RawCode.get("ua1c"),
        "Бой - Атака 1 - время перезарядки"
    )
    public static readonly ATTACK_DAMAGE_LOSS_FACTOR = new UnitWeaponRealField(
        RawCode.get("udl1"),
        "Бой - Атака 1 - фактор потери урона"
    )
    public static readonly ATTACK_DAMAGE_FACTOR_MEDIUM = new UnitWeaponRealField(
        RawCode.get("uhd1"),
        "Бой - Атака 1 - урон на средней дистанции"
    )
    public static readonly ATTACK_DAMAGE_FACTOR_SMALL = new UnitWeaponRealField(
        RawCode.get("uqd1"),
        "Бой - Атака 1 - урон вблизи"
    )
    public static readonly ATTACK_DAMAGE_SPILL_DISTANCE = new UnitWeaponRealField(
        RawCode.get("usd1"),
        "Бой - Атака 1 - дистанция разброса при уроне"
    )
    public static readonly ATTACK_DAMAGE_SPILL_RADIUS = new UnitWeaponRealField(
        RawCode.get("usr1"),
        "Бой - Атака 1 - радиус разброса при уроне"
    )
    public static readonly ATTACK_PROJECTILE_SPEED = new UnitWeaponRealField(
        RawCode.get("ua1z"),
        "Бой - Атака 1 - скорость снаряда"
    )
    public static readonly ATTACK_PROJECTILE_ARC = new UnitWeaponRealField(
        RawCode.get("uma1"),
        "Бой - Атака 1 - траектория полета снаряда"
    )
    public static readonly ATTACK_AREA_OF_EFFECT_FULL_DAMAGE = new UnitWeaponRealField(
        RawCode.get("ua1f"),
        "Бой - Атака 1 - радиус поражения (макс. урон)"
    )
    public static readonly ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE = new UnitWeaponRealField(
        RawCode.get("ua1h"),
        "Бой - Атака 1 - радиус поражения (сред. урон)"
    )
    public static readonly ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE = new UnitWeaponRealField(
        RawCode.get("ua1q"),
        "Бой - Атака 1 - радиус поражения (мал. урон)"
    )
    public static readonly ATTACK_RANGE = new UnitWeaponRealField(
        RawCode.get("ua1r"),
        "Бой - Атака 1 - дальность"
    )
}
