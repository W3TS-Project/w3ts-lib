import { ItemRealField } from "../../API/fields/item/ItemRealField"
import { RawCode } from "../../RawCode"

export abstract class ItemRealFields {
    public static readonly SCALING_VALUE = new ItemRealField(new RawCode("isca"), "Масштабирование")
}
