import { AbilityIntegerField } from "../../../API/fields/ability/base/AbilityIntegerField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityIntegerFields {
    public static readonly BUTTON_POSITION_NORMAL_X = new AbilityIntegerField(RawCode.get("abpx"))
    public static readonly BUTTON_POSITION_NORMAL_Y = new AbilityIntegerField(RawCode.get("abpy"))
    public static readonly BUTTON_POSITION_ACTIVATED_X = new AbilityIntegerField(
        RawCode.get("aubx")
    )
    public static readonly BUTTON_POSITION_ACTIVATED_Y = new AbilityIntegerField(
        RawCode.get("auby")
    )
    public static readonly BUTTON_POSITION_RESEARCH_X = new AbilityIntegerField(RawCode.get("arpx"))
    public static readonly BUTTON_POSITION_RESEARCH_Y = new AbilityIntegerField(RawCode.get("arpy"))
    public static readonly MISSILE_SPEED = new AbilityIntegerField(RawCode.get("amsp"))
    public static readonly TARGET_ATTACHMENTS = new AbilityIntegerField(RawCode.get("atac"))
    public static readonly CASTER_ATTACHMENTS = new AbilityIntegerField(RawCode.get("acac"))
    public static readonly PRIORITY = new AbilityIntegerField(RawCode.get("apri"))
    public static readonly LEVELS = new AbilityIntegerField(RawCode.get("alev"))
    public static readonly REQUIRED_LEVEL = new AbilityIntegerField(RawCode.get("arlv"))
    public static readonly LEVEL_SKIP_REQUIREMENT = new AbilityIntegerField(RawCode.get("alsk"))
}
