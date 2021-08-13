import { AbilityBooleanField } from "../../../API/fields/ability/base/AbilityBooleanField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityBooleanFields {
    static readonly HERO_ABILITY = new AbilityBooleanField(RawCode.get("aher"))
    static readonly ITEM_ABILITY = new AbilityBooleanField(RawCode.get("aite"))
    static readonly CHECK_DEPENDENCIES = new AbilityBooleanField(RawCode.get("achd"))
}
