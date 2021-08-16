/** @noSelfInFile **/
//@ts-nocheck

import { SETTING_SOME_PROPERTIES } from "../Package"
import { Handle } from "./Handle"
import { Point } from "./Point"

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
    life?: real
    point?: Point
    indicatorRed: real = 255
    indicatorGreen: real = 255
    indicatorBlue: real = 255
    indicatorAlpha: real = 0

    constructor(handle: widget) {
        super(handle)
        if (SETTING_SOME_PROPERTIES) {
            this.life = this.getLife()
            this.point = this.getPoint()
        }
    }

    getLife() {
        return GetWidgetLife(this.getHandle() as widget)
    }

    setLife(value: real) {
        SetWidgetLife(this.getHandle() as widget, value)
        if (SETTING_SOME_PROPERTIES) this.life = value
        return this
    }

    getX(): real {
        return GetWidgetX(this.getHandle() as widget)
    }

    getY(): real {
        return GetWidgetY(this.getHandle() as widget)
    }

    getPoint() {
        return new Point(this.getX(), this.getY())
    }

    addIndicator(red: integer, green: integer, blue: integer, alpha: integer) {
        red = Math.floor(red)
        green = Math.floor(green)
        blue = Math.floor(green)
        alpha = Math.floor(alpha)
        AddIndicator(this.getHandle() as widget, red, green, blue, alpha)
        this.indicatorRed = red
        this.indicatorGreen = green
        this.indicatorBlue = blue
        return this
    }

    static fromHandle(handle: widget) {
        return this.getObject(handle) as Widget
    }

    static fromEvent() {
        return this.fromHandle(GetTriggerWidget())
    }
}
