import { AbilityBooleanField } from "../../../API/fields/ability/base/AbilityBooleanField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityBooleanFields {
    public static readonly HERO_ABILITY = new AbilityBooleanField(RawCode.get("aher"))
    public static readonly ITEM_ABILITY = new AbilityBooleanField(RawCode.get("aite"))
    public static readonly CHECK_DEPENDENCIES = new AbilityBooleanField(RawCode.get("achd"))
}
