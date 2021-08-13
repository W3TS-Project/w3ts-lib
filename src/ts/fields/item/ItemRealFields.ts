import { ItemRealField } from "../../API/fields/item/ItemRealField"
import { RawCode } from "../../RawCode"

export abstract class ItemRealFields {
    static readonly SCALING_VALUE = new ItemRealField(RawCode.get("isca"), "Масштабирование")
}
