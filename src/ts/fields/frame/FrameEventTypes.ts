import { FrameEventType } from "../../API/fields/frame/FrameEventType";

export abstract class FrameEventTypes {
	public static readonly CONTROL_CLICK = new FrameEventType(1)
	public static readonly MOUSE_ENTER = new FrameEventType(2)
	public static readonly MOUSE_LEAVE = new FrameEventType(3)
	public static readonly MOUSE_UP = new FrameEventType(4)
	public static readonly MOUSE_DOWN = new FrameEventType(5)
	public static readonly MOUSE_WHEEL = new FrameEventType(6)
	public static readonly CHECKBOX_CHECKED = new FrameEventType(7)
	public static readonly CHECKBOX_UNCHECKED = new FrameEventType(8)
	public static readonly EDITBOX_TEXT_CHANGED = new FrameEventType(9)
	public static readonly POPUPMENU_ITEM_CHANGED = new FrameEventType(10)
	public static readonly MOUSE_DOUBLE_CLICK = new FrameEventType(11)
	public static readonly SPIRIT_ANIM_UPDATE = new FrameEventType(12)
	public static readonly SLIDER_VALUE_CHANGED = new FrameEventType(13)
	public static readonly DIALOG_CANCEL = new FrameEventType(14)
	public static readonly DIALOG_ACCEPT = new FrameEventType(15)
	public static readonly EDITBOX_CENTER = new FrameEventType(16)
}