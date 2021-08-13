import { ItemType } from "../../API/fields/item/ItemType"

export abstract class ItemTypes {
    static readonly PERMANENT = ItemType.convert(0)
    static readonly CHARGED = ItemType.convert(1)
    static readonly POWERUP = ItemType.convert(2)
    static readonly ARTIFACT = ItemType.convert(3)
    static readonly PURCHASABLE = ItemType.convert(4)
    static readonly CAMPAIGN = ItemType.convert(5)
    static readonly MISCELLANEOUS = ItemType.convert(6)
    static readonly UNKNOWN = ItemType.convert(7)
    static readonly ANY = ItemType.convert(8)
    // Deprecated, should use ITEM_TYPE_POWERUP
    static readonly TOME = ItemType.convert(2)
}
