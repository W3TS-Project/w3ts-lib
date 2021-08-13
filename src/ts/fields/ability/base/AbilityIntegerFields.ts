import { AbilityIntegerField } from "../../../API/fields/ability/base/AbilityIntegerField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityIntegerFields {
    static readonly BUTTON_POSITION_NORMAL_X = new AbilityIntegerField(RawCode.get("abpx"))
    static readonly BUTTON_POSITION_NORMAL_Y = new AbilityIntegerField(RawCode.get("abpy"))
    static readonly BUTTON_POSITION_ACTIVATED_X = new AbilityIntegerField(RawCode.get("aubx"))
    static readonly BUTTON_POSITION_ACTIVATED_Y = new AbilityIntegerField(RawCode.get("auby"))
    static readonly BUTTON_POSITION_RESEARCH_X = new AbilityIntegerField(RawCode.get("arpx"))
    static readonly BUTTON_POSITION_RESEARCH_Y = new AbilityIntegerField(RawCode.get("arpy"))
    static readonly MISSILE_SPEED = new AbilityIntegerField(RawCode.get("amsp"))
    static readonly TARGET_ATTACHMENTS = new AbilityIntegerField(RawCode.get("atac"))
    static readonly CASTER_ATTACHMENTS = new AbilityIntegerField(RawCode.get("acac"))
    static readonly PRIORITY = new AbilityIntegerField(RawCode.get("apri"))
    static readonly LEVELS = new AbilityIntegerField(RawCode.get("alev"))
    static readonly REQUIRED_LEVEL = new AbilityIntegerField(RawCode.get("arlv"))
    static readonly LEVEL_SKIP_REQUIREMENT = new AbilityIntegerField(RawCode.get("alsk"))
}
