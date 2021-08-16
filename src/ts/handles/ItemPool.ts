/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { Item } from "./Item"
import { ItemRawCode, ItemRawCodeType } from "./rawCode/ItemRawCode"

declare function CreateItemPool(): itempool
declare function DestroyItemPool(whichItemPool: itempool): void
declare function ItemPoolAddItemType(whichItemPool: itempool, itemId: integer, weight: real): void
declare function ItemPoolRemoveItemType(whichItemPool: itempool, itemId: integer): void
declare function PlaceRandomItem(whichItemPool: itempool, x: real, y: real): item

export class ItemPool extends Handle<itempool> {
    constructor() {
        super(CreateItemPool())
    }

    destroy() {
        DestroyItemPool(this.getHandle() as itempool)
        super.destroy()
    }

    addItemType(itemCode: ItemRawCodeType, weight: real) {
        ItemPoolAddItemType(this.getHandle() as itempool, ItemRawCode.toId(itemCode), weight)
        return this
    }

    removeItemType(itemCode: ItemRawCodeType) {
        ItemPoolRemoveItemType(this.getHandle() as itempool, ItemRawCode.toId(itemCode))
        return this
    }

    placeRandomItemCoords(x: real, y: real): Item {
        return Item.fromHandle(PlaceRandomItem(this.getHandle() as itempool, x, y))
    }

    placeRandomItemPos(p: Position): Item {
        return this.placeRandomItemCoords(p.x, p.y)
    }

    static fromHandle(handle: itempool) {
        return this.getObject(handle) as ItemPool
    }
}
