import { UnitWeaponStringField } from "../../API/fields/unit/UnitWeaponStringField"
import { RawCode } from "../../RawCode"

export abstract class UnitWeaponStringFields {
    static readonly ATTACK_PROJECTILE_ART = new UnitWeaponStringField(
        RawCode.get("ua1m"),
        "Бой - Атака 1 - анимация снаряда"
    )
}
