import { AbilityStringField } from "../../../API/fields/ability/base/AbilityStringField"
import { RawCode } from "../../../RawCode"

export class AbilityStringFields {
    public static readonly NAME = new AbilityStringField(RawCode.get("anam"))
    public static readonly ICON_ACTIVATED = new AbilityStringField(RawCode.get("auar"))
    public static readonly ICON_RESEARCH = new AbilityStringField(RawCode.get("arar"))
    public static readonly EFFECT_SOUND = new AbilityStringField(RawCode.get("aefs"))
    public static readonly EFFECT_SOUND_LOOPING = new AbilityStringField(RawCode.get("aefl"))
}
