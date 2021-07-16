/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../Utils"
import { Handle } from "./Handle"

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

export class MultiBoard extends Handle<multiboard> {
    public constructor() {
        super(CreateMultiboard())
    }

    public destroy() {
        DestroyMultiboard(this.getHandle)
    }

    public set display(show: boolean) {
        MultiboardDisplay(this.getHandle, show)
    }

    public isDisplayed(): boolean {
        return IsMultiboardDisplayed(this.getHandle)
    }

    public set minimize(minimize: boolean) {
        MultiboardMinimize(this.getHandle, minimize)
    }

    public isMinimized(): boolean {
        return IsMultiboardMinimized(this.getHandle)
    }

    public clear() {
        MultiboardClear(this.getHandle)
        return this
    }

    public set titleText(label: string) {
        MultiboardSetTitleText(this.getHandle, label)
    }

    public get titleText(): string {
        return MultiboardGetTitleText(this.getHandle)
    }

    public setTitleTextColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetTitleTextColor(this.getHandle, red, green, blue, alpha)
        return this
    }

    public get rowCount(): integer {
        return MultiboardGetRowCount(this.getHandle)
    }

    public get columnCount(): integer {
        return MultiboardGetColumnCount(this.getHandle)
    }

    public set rowCount(count: integer) {
        MultiboardSetRowCount(this.getHandle, count)
    }

    public set columnCount(count: integer) {
        MultiboardSetColumnCount(this.getHandle, count)
    }

    public setItemsStyle(showValues: boolean, showIcons: boolean) {
        MultiboardSetItemsStyle(this.getHandle, showValues, showIcons)
        return this
    }

    public set itemsValue(value: string) {
        MultiboardSetItemsValue(this.getHandle, value)
    }

    public setItemsValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetItemsValueColor(this.getHandle, red, green, blue, alpha)
        return this
    }

    public set itemsWidth(width: real) {
        MultiboardSetItemsWidth(this.getHandle, width)
    }

    public set itemsIcon(iconPath: string) {
        MultiboardSetItemsIcon(this.getHandle, iconPath)
    }

    public getItem(row: integer, column: integer): MultiboardItem {
        return new MultiboardItem(MultiboardGetItem(this.getHandle, row, column))
    }

    public static fromHandle(handle: multiboard): Multiboard {
        return this.getObject(handle)
    }

    public static fromObject(object: Multiboard): multiboard {
        return this.getHandle(object)
    }
}

export class MultiboardItem extends Handle<multiboarditem> {
    public release() {
        MultiboardReleaseItem(this.getHandle)
        return this
    }

    public setStyle(showValue: boolean, showIcon: boolean) {
        MultiboardSetItemStyle(this.getHandle, showValue, showIcon)
        return this
    }

    public set value(val: string) {
        MultiboardSetItemValue(this.getHandle, val)
    }

    public setValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetItemValueColor(this.getHandle, red, green, blue, alpha)
        return this
    }

    public set width(width: real) {
        MultiboardSetItemWidth(this.getHandle, width)
    }

    public set icon(iconFileName: string) {
        MultiboardSetItemIcon(this.getHandle, iconFileName)
    }

    public static fromhandle(handle: multiboarditem): MultiboardItem {
        return this.getObject(handle)
    }

    public static fromObject(object: MultiboardItem): multiboarditem {
        return this.getHandle(object)
    }
}
