import { AbilityBooleanField } from "../../../API/fields/ability/base/AbilityBooleanField";

export abstract class AbilityBooleanFields {
    public static readonly HERO_ABILITY = new AbilityBooleanField('aher')
    public static readonly ITEM_ABILITY = new AbilityBooleanField('aite')
    public static readonly CHECK_DEPENDENCIES = new AbilityBooleanField('achd')
}