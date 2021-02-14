/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertItemType = (i: number) => itemtype

const c = ConvertItemType

export const ItemType = {
    Permanent: c(0),
    Charged: c(1),
    Powerup: c(2),
    Artifact: c(3),
    Purchasable: c(4),
    Campaign: c(5),
    Miscellaneous: c(6),
    Unknown: c(7),
    Any: c(8),
    Tome: c(2) // Deprecated, should use ITEM_TYPE_POWERUP
}
