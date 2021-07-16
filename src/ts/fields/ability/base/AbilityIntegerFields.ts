import { AbilityIntegerField } from "../../../API/fields/ability/base/AbilityIntegerField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityIntegerFields {
    public static readonly BUTTON_POSITION_NORMAL_X = new AbilityIntegerField(new RawCode("abpx"))
    public static readonly BUTTON_POSITION_NORMAL_Y = new AbilityIntegerField(new RawCode("abpy"))
    public static readonly BUTTON_POSITION_ACTIVATED_X = new AbilityIntegerField(
        new RawCode("aubx")
    )
    public static readonly BUTTON_POSITION_ACTIVATED_Y = new AbilityIntegerField(
        new RawCode("auby")
    )
    public static readonly BUTTON_POSITION_RESEARCH_X = new AbilityIntegerField(new RawCode("arpx"))
    public static readonly BUTTON_POSITION_RESEARCH_Y = new AbilityIntegerField(new RawCode("arpy"))
    public static readonly MISSILE_SPEED = new AbilityIntegerField(new RawCode("amsp"))
    public static readonly TARGET_ATTACHMENTS = new AbilityIntegerField(new RawCode("atac"))
    public static readonly CASTER_ATTACHMENTS = new AbilityIntegerField(new RawCode("acac"))
    public static readonly PRIORITY = new AbilityIntegerField(new RawCode("apri"))
    public static readonly LEVELS = new AbilityIntegerField(new RawCode("alev"))
    public static readonly REQUIRED_LEVEL = new AbilityIntegerField(new RawCode("arlv"))
    public static readonly LEVEL_SKIP_REQUIREMENT = new AbilityIntegerField(new RawCode("alsk"))
}
