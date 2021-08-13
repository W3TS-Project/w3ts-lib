import { FrameEventType } from "../../API/fields/frame/FrameEventType"

export abstract class FrameEventTypes {
    static readonly CONTROL_CLICK = FrameEventType.convert(1)
    static readonly MOUSE_ENTER = FrameEventType.convert(2)
    static readonly MOUSE_LEAVE = FrameEventType.convert(3)
    static readonly MOUSE_UP = FrameEventType.convert(4)
    static readonly MOUSE_DOWN = FrameEventType.convert(5)
    static readonly MOUSE_WHEEL = FrameEventType.convert(6)
    static readonly CHECKBOX_CHECKED = FrameEventType.convert(7)
    static readonly CHECKBOX_UNCHECKED = FrameEventType.convert(8)
    static readonly EDITBOX_TEXT_CHANGED = FrameEventType.convert(9)
    static readonly POPUPMENU_ITEM_CHANGED = FrameEventType.convert(10)
    static readonly MOUSE_DOUBLE_CLICK = FrameEventType.convert(11)
    static readonly SPIRIT_ANIM_UPDATE = FrameEventType.convert(12)
    static readonly SLIDER_VALUE_CHANGED = FrameEventType.convert(13)
    static readonly DIALOG_CANCEL = FrameEventType.convert(14)
    static readonly DIALOG_ACCEPT = FrameEventType.convert(15)
    static readonly EDITBOX_CENTER = FrameEventType.convert(16)
}
