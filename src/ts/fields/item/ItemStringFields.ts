import { ItemStringField } from "../../API/fields/item/ItemStringField"
import { RawCode } from "../../RawCode"

export abstract class ItemStringFields {
    static readonly MODEL_USED = new ItemStringField(RawCode.get("ifil"), "Используемая модель")
}
