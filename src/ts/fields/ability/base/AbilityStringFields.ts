import { AbilityStringField } from "../../../API/fields/ability/base/AbilityStringField"
import { RawCode } from "../../../RawCode"

export class AbilityStringFields {
    static readonly NAME = new AbilityStringField(RawCode.get("anam"))
    static readonly ICON_ACTIVATED = new AbilityStringField(RawCode.get("auar"))
    static readonly ICON_RESEARCH = new AbilityStringField(RawCode.get("arar"))
    static readonly EFFECT_SOUND = new AbilityStringField(RawCode.get("aefs"))
    static readonly EFFECT_SOUND_LOOPING = new AbilityStringField(RawCode.get("aefl"))
}
