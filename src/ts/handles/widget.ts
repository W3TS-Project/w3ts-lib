/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"

declare function GetWidgetLife(whichWidget: widget): real
declare function SetWidgetLife(whichWidget: widget, newLife: real): void
declare function GetWidgetX(whichWidget: widget): real
declare function GetWidgetY(whichWidget: widget): real
declare function GetTriggerWidget(): widget
declare function AddIndicator(
    whichWidget: widget,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void

export class Widget extends Handle<widget> {
    public getLife() {
        return GetWidgetLife(this.getHandle)
    }

    public setLife(value: real) {
        SetWidgetLife(this.getHandle, value)
        return this
    }

    public getX(): real {
        return GetWidgetX(this.getHandle)
    }

    public getY(): real {
        return GetWidgetY(this.getHandle)
    }

    public addIndicator(red: integer, green: integer, blue: integer, alpha: integer) {
        AddIndicator(
            this.getHandle,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public static fromHandle(handle: widget): Widget {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggerWidget())
    }

    public static fromObject(handleObject: Widget): widget {
        return this.getHandle(handleObject)
    }
}
