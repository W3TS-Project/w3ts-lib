import { AbilityStringField } from "../../../API/fields/ability/base/AbilityStringField"
import { RawCode } from "../../../RawCode"

export class AbilityStringFields {
    public static readonly NAME = new AbilityStringField(new RawCode("anam"))
    public static readonly ICON_ACTIVATED = new AbilityStringField(new RawCode("auar"))
    public static readonly ICON_RESEARCH = new AbilityStringField(new RawCode("arar"))
    public static readonly EFFECT_SOUND = new AbilityStringField(new RawCode("aefs"))
    public static readonly EFFECT_SOUND_LOOPING = new AbilityStringField(new RawCode("aefl"))
}
