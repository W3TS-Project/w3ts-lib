/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { MultiboardItem } from "./MultiBoardItem"

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
declare function MultiboardSuppressDisplay(flag: boolean): void
declare function MultiboardGetItem(lb: multiboard, row: integer, column: integer): multiboarditem

export class MultiBoard extends Handle<multiboard> {
    public constructor() {
        super(CreateMultiboard())
    }

    public destroy() {
        DestroyMultiboard(this.getHandle() as multiboard)
        return this
    }

    public display(show: boolean) {
        MultiboardDisplay(this.getHandle() as multiboard, show)
        return this
    }

    public isDisplayed(): boolean {
        return IsMultiboardDisplayed(this.getHandle() as multiboard)
    }

    public minimize(minimize: boolean) {
        MultiboardMinimize(this.getHandle() as multiboard, minimize)
        return this
    }

    public isMinimized(): boolean {
        return IsMultiboardMinimized(this.getHandle() as multiboard)
    }

    public clear() {
        MultiboardClear(this.getHandle() as multiboard)
        return this
    }

    public setTitleText(label: string) {
        MultiboardSetTitleText(this.getHandle() as multiboard, label)
        return this
    }

    public getTitleText(): string {
        return MultiboardGetTitleText(this.getHandle() as multiboard)
    }

    public setTitleTextColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetTitleTextColor(
            this.getHandle() as multiboard,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public getRowCount(): integer {
        return MultiboardGetRowCount(this.getHandle() as multiboard)
    }

    public getColumnCount(): integer {
        return MultiboardGetColumnCount(this.getHandle() as multiboard)
    }

    public setRowCount(count: integer) {
        MultiboardSetRowCount(this.getHandle() as multiboard, count)
        return this
    }

    public setColumnCount(count: integer) {
        MultiboardSetColumnCount(this.getHandle() as multiboard, count)
        return this
    }

    public setItemsStyle(showValues: boolean, showIcons: boolean) {
        MultiboardSetItemsStyle(this.getHandle() as multiboard, showValues, showIcons)
        return this
    }

    public setItemsValue(value: string) {
        MultiboardSetItemsValue(this.getHandle() as multiboard, value)
        return this
    }

    public setItemsValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        MultiboardSetItemsValueColor(
            this.getHandle() as multiboard,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public setItemsWidth(width: real) {
        MultiboardSetItemsWidth(this.getHandle() as multiboard, width)
        return this
    }

    public setItemsIcon(iconPath: string) {
        MultiboardSetItemsIcon(this.getHandle() as multiboard, iconPath)
        return this
    }

    public getItem(row: integer, column: integer): MultiboardItem {
        return new MultiboardItem(
            MultiboardGetItem(this.getHandle() as multiboard, Math.floor(row), Math.floor(column))
        )
    }

    /**
     * meant to unequivocally suspend display of existing and
     * subsequently displayed multiboards
     * @param flag boolean
     * @returns this
     */
    public static suppressDisplay(flag: boolean) {
        MultiboardSuppressDisplay(flag)
        return this
    }

    public static fromHandle(handle: multiboard): MultiBoard {
        return this.getObject(handle)
    }
}
