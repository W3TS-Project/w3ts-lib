import { UnitWeaponBooleanField } from "../../API/fields/unit/UnitWeaponBooleanField"
import { RawCode } from "../../RawCode"

export abstract class UnitWeaponBooleanFields {
    static readonly ATTACK_SHOW_UI = new UnitWeaponBooleanField(
        RawCode.get("uwu1"),
        "Бой - Атака 1 - показать UI"
    )
    static readonly ATTACKS_ENABLED = new UnitWeaponBooleanField(RawCode.get("uaen"), "Бой - Атаки")
    static readonly ATTACK_PROJECTILE_HOMING_ENABLED = new UnitWeaponBooleanField(
        RawCode.get("umh1"),
        "Бой - Атака 1 - включено автонаведение"
    )
}
