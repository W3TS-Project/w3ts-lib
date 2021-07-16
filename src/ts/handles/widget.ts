/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"

declare function GetWidgetLife(whichWidget: widget): number
declare function SetWidgetLife(whichWidget: widget, newLife: number): void
declare function GetWidgetX(whichWidget: widget): number
declare function GetWidgetY(whichWidget: widget): number
declare function GetTriggerWidget(): widget

export class Widget extends Handle<widget> {
    public get life() {
        return GetWidgetLife(this.getHandle)
    }

    public set life(value: number) {
        SetWidgetLife(this.getHandle, value)
    }

    public get x() {
        return GetWidgetX(this.getHandle)
    }

    public get y() {
        return GetWidgetY(this.getHandle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggerWidget())
    }

    public static fromHandle(handle: widget): Widget {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: Widget): widget {
        return this.getHandle(handleObject)
    }
}
