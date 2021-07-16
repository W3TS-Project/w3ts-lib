import { ItemType } from "../../API/fields/item/ItemType"

export abstract class ItemTypes {
    public static readonly PERMANENT = new ItemType(0)
    public static readonly CHARGED = new ItemType(1)
    public static readonly POWERUP = new ItemType(2)
    public static readonly ARTIFACT = new ItemType(3)
    public static readonly PURCHASABLE = new ItemType(4)
    public static readonly CAMPAIGN = new ItemType(5)
    public static readonly MISCELLANEOUS = new ItemType(6)
    public static readonly UNKNOWN = new ItemType(7)
    public static readonly ANY = new ItemType(8)
    // Deprecated, should use ITEM_TYPE_POWERUP
    public static readonly TOME = new ItemType(2)
}
