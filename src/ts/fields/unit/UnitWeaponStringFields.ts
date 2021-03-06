import { UnitWeaponStringField } from "../../API/fields/unit/UnitWeaponStringField"
import { RawCode } from "../../RawCode"

export abstract class UnitWeaponStringFields {
    public static readonly ATTACK_PROJECTILE_ART = new UnitWeaponStringField(
        new RawCode("ua1m"),
        "Бой - Атака 1 - анимация снаряда"
    )
}
