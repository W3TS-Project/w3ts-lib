import { AbilityIntegerField } from "../../../API/fields/ability/base/AbilityIntegerField";

export abstract class AbilityIntegerFields {
  public static readonly BUTTON_POSITION_NORMAL_X = new AbilityIntegerField('abpx')
  public static readonly BUTTON_POSITION_NORMAL_Y = new AbilityIntegerField('abpy')
  public static readonly BUTTON_POSITION_ACTIVATED_X = new AbilityIntegerField('aubx')
  public static readonly BUTTON_POSITION_ACTIVATED_Y = new AbilityIntegerField('auby')
  public static readonly BUTTON_POSITION_RESEARCH_X = new AbilityIntegerField('arpx')
  public static readonly BUTTON_POSITION_RESEARCH_Y = new AbilityIntegerField('arpy')
  public static readonly MISSILE_SPEED = new AbilityIntegerField('amsp')
  public static readonly TARGET_ATTACHMENTS = new AbilityIntegerField('atac')
  public static readonly CASTER_ATTACHMENTS = new AbilityIntegerField('acac')
  public static readonly PRIORITY = new AbilityIntegerField('apri')
  public static readonly LEVELS = new AbilityIntegerField('alev')
  public static readonly REQUIRED_LEVEL = new AbilityIntegerField('arlv')
  public static readonly LEVEL_SKIP_REQUIREMENT = new AbilityIntegerField('alsk')
}