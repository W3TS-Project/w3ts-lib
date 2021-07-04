import { AbilityStringField } from "../../../API/fields/ability/base/AbilityStringField";

export class AbilityStringFields {
  public static readonly NAME = new AbilityStringField('anam')
  public static readonly ICON_ACTIVATED = new AbilityStringField('auar')
  public static readonly ICON_RESEARCH = new AbilityStringField('arar')
  public static readonly EFFECT_SOUND = new AbilityStringField('aefs')
  public static readonly EFFECT_SOUND_LOOPING = new AbilityStringField('aefl')
}