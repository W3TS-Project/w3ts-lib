/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"

declare function MultiboardReleaseItem(mbi: multiboarditem): void
declare function MultiboardSetItemStyle(
    mbi: multiboarditem,
    showValue: boolean,
    showIcon: boolean
): void
declare function MultiboardSetItemValue(mbi: multiboarditem, val: string): void
declare function MultiboardSetItemValueColor(
    mbi: multiboarditem,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function MultiboardSetItemWidth(mbi: multiboarditem, width: real): void
declare function MultiboardSetItemIcon(mbi: multiboarditem, iconFileName: string): void

export class MultiboardItem extends Handle<multiboarditem> {
    public release() {
        MultiboardReleaseItem(this.getHandle() as multiboarditem)
        return this
    }

    public setStyle(showValue: boolean, showIcon: boolean) {
        MultiboardSetItemStyle(this.getHandle() as multiboarditem, showValue, showIcon)
        return this
    }

    public setValue(val: string) {
        MultiboardSetItemValue(this.getHandle() as multiboarditem, val)
        return this
    }

    public setValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetItemValueColor(
            this.getHandle() as multiboarditem,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public setWidth(width: real) {
        MultiboardSetItemWidth(this.getHandle() as multiboarditem, width)
        return this
    }

    public setIcon(iconFileName: string) {
        MultiboardSetItemIcon(this.getHandle() as multiboarditem, iconFileName)
        return this
    }

    public static fromhandle(handle: multiboarditem) {
        return this.getObject(handle) as MultiboardItem
    }
}
