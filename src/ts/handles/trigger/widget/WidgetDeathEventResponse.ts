import { Widget } from "../../Widget"

export class WidgetDeathEventResponse {
    protected widget: Widget

    public constructor() {
        this.widget = Widget.fromEvent()
    }

    public getWidget() {
        return this.widget
    }
}
