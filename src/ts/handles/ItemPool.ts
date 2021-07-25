/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { Item } from "./Item"
import { ItemRawCode } from "./rawCode/ItemRawCode"

declare function CreateItemPool(): itempool
declare function DestroyItemPool(whichItemPool: itempool): void
declare function ItemPoolAddItemType(whichItemPool: itempool, itemId: integer, weight: real): void
declare function ItemPoolRemoveItemType(whichItemPool: itempool, itemId: integer): void
declare function PlaceRandomItem(whichItemPool: itempool, x: real, y: real): item

export class ItemPool extends Handle<itempool> {
    public constructor() {
        super(CreateItemPool())
    }

    public destroy() {
        DestroyItemPool(this.getHandle)
        return this
    }

    public addItemType(itemCode: ItemRawCode, weight: real) {
        ItemPoolAddItemType(this.getHandle, itemCode.getId(), weight)
        return this
    }

    public removeItemType(itemCode: ItemRawCode) {
        ItemPoolRemoveItemType(this.getHandle, itemCode.getId())
        return this
    }

    public placeRandomItemCoords(x: real, y: real): Item {
        return Item.fromHandle(PlaceRandomItem(this.getHandle, x, y))
    }

    public placeRandomItemPos(p: Position): Item {
        return this.placeRandomItemCoords(p.getX(), p.getY())
    }

    public static fromHandle(handle: itempool): ItemPool {
        return this.getObject(handle)
    }

    public static fromObject(object: ItemPool): itempool {
        return this.getHandle(object)
    }
}
