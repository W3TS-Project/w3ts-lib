/** @noSelfInFile **/
// @ts-nocheck

import { integer, real } from "../main"
import { Handle } from "./handle"

declare function CreateMultiboard(): multiboard
declare function DestroyMultiboard(lb: multiboard): void
declare function MultiboardDisplay(lb: multiboard, show: boolean): void
declare function IsMultiboardDisplayed(lb: multiboard): boolean
declare function MultiboardMinimize(lb: multiboard, minimize: boolean): void
declare function IsMultiboardMinimized(lb: multiboard): boolean
declare function MultiboardClear(lb: multiboard): void
declare function MultiboardSetTitleText(lb: multiboard, label: string): void
declare function MultiboardGetTitleText(lb: multiboard): string
declare function MultiboardSetTitleTextColor(
    lb: multiboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function MultiboardGetRowCount(lb: multiboard): integer
declare function MultiboardGetColumnCount(lb: multiboard): integer
declare function MultiboardSetColumnCount(lb: multiboard, count: integer): void
declare function MultiboardSetRowCount(lb: multiboard, count: integer): void
declare function MultiboardSetItemsStyle(
    lb: multiboard,
    showValues: boolean,
    showIcons: boolean
): void
declare function MultiboardSetItemsValue(lb: multiboard, value: string): void
declare function MultiboardSetItemsValueColor(
    lb: multiboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function MultiboardSetItemsWidth(lb: multiboard, width: real): void
declare function MultiboardSetItemsIcon(lb: multiboard, iconPath: string): void

declare function MultiboardGetItem(lb: multiboard, row: integer, column: integer): multiboarditem
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

declare function MultiboardSuppressDisplay(flag: boolean): void

export class Multiboard extends Handle<multiboard> {
    constructor() {
        super(Handle.initFromHandle() ? undefined : CreateMultiboard())
    }

    destroy() {
        DestroyMultiboard(this.handle)
    }

    set display(show: boolean) {
        MultiboardDisplay(this.handle, show)
    }

    isDisplayed() {
        return IsMultiboardDisplayed(this.handle)
    }

    set minimize(minimize: boolean) {
        MultiboardMinimize(this.handle, minimize)
    }

    isMinimized() {
        return IsMultiboardMinimized(this.handle)
    }

    clear() {
        MultiboardClear(this.handle)
        return this
    }

    set titleText(label: string) {
        MultiboardSetTitleText(this.handle, label)
    }

    get titleText() {
        return MultiboardGetTitleText(this.handle)
    }

    setTitleTextColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetTitleTextColor(this.handle, red, green, blue, alpha)
        return this
    }

    get rowCount() {
        return MultiboardGetRowCount(this.handle)
    }

    get columnCount() {
        return MultiboardGetColumnCount(this.handle)
    }

    set rowCount(count: integer) {
        MultiboardSetRowCount(this.handle, count)
    }

    set columnCount(count: integer) {
        MultiboardSetColumnCount(this.handle, count)
    }

    setItemsStyle(showValues: boolean, showIcons: boolean) {
        MultiboardSetItemsStyle(this.handle, showValues, showIcons)
        return this
    }

    set itemsValue(value: string) {
        MultiboardSetItemsValue(this.handle, value)
    }

    setItemsValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetItemsValueColor(this.handle, red, green, blue, alpha)
        return this
    }

    set itemsWidth(width: real) {
        MultiboardSetItemsWidth(this.handle, width)
    }

    set itemsIcon(iconPath: string) {
        MultiboardSetItemsIcon(this.handle, iconPath)
    }

    getItem(row: integer, column: integer) {
        return new MultiboardItem(MultiboardGetItem(this.handle, row, column))
    }
}

export class MultiboardItem extends Handle<multiboarditem> {
    private constructor(handle: multiboarditem) {
        super(Handle.initFromHandle() ? undefined : handle)
    }

    release() {
        MultiboardReleaseItem(this.handle)
        return this
    }

    setStyle(showValue: boolean, showIcon: boolean) {
        MultiboardSetItemStyle(this.handle, showValue, showIcon)
        return this
    }

    set value(val: string) {
        MultiboardSetItemValue(this.handle, val)
    }

    setValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetItemValueColor(this.handle, red, green, blue, alpha)
        return this
    }

    set width(width: real) {
        MultiboardSetItemWidth(this.handle, width)
    }

    set icon(iconFileName: string) {
        MultiboardSetItemIcon(this.handle, iconFileName)
    }
}
