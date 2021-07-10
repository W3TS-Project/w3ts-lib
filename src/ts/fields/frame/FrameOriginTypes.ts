import { FrameOriginType } from "../../API/fields/frame/FrameOriginType";

export abstract class FrameOriginTypes {
	public static readonly GAME_UI = new FrameOriginType(0)
	public static readonly COMMAND_BUTTON = new FrameOriginType(1)
	public static readonly HERO_BAR = new FrameOriginType(2)
	public static readonly HERO_BUTTON = new FrameOriginType(3)
	public static readonly HERO_HP_BAR = new FrameOriginType(4)
	public static readonly HERO_MANA_BAR = new FrameOriginType(5)
	public static readonly HERO_BUTTON_INDICATOR = new FrameOriginType(6)
	public static readonly ITEM_BUTTON = new FrameOriginType(7)
	public static readonly MINIMAP = new FrameOriginType(8)
	public static readonly BUTTON_MINIMAP = new FrameOriginType(9)
	public static readonly SYSTEM_BUTTON = new FrameOriginType(10)
	public static readonly TOOLTIP = new FrameOriginType(11)
	public static readonly UBERTOOLTIP = new FrameOriginType(12)
	public static readonly CHAT_MSG = new FrameOriginType(13)
	public static readonly UNIT_MSG = new FrameOriginType(14)
	public static readonly TOP_MSG = new FrameOriginType(15)
	public static readonly PORTRAIT = new FrameOriginType(16)
	public static readonly WORLD = new FrameOriginType(17)
}