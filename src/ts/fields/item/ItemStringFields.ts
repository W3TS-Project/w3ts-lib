import { ItemStringField } from "../../API/fields/item/ItemStringField";
import { RawCode } from "../../RawCode";

export abstract class ItemStringFields {
	public static readonly MODEL_USED = new ItemStringField(new RawCode('ifil'), 'Используемая модель')
}