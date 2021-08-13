import { FrameOriginType } from "../../API/fields/frame/FrameOriginType"

export abstract class FrameOriginTypes {
    static readonly GAME_UI = FrameOriginType.convert(0)
    static readonly COMMAND_BUTTON = FrameOriginType.convert(1)
    static readonly HERO_BAR = FrameOriginType.convert(2)
    static readonly HERO_BUTTON = FrameOriginType.convert(3)
    static readonly HERO_HP_BAR = FrameOriginType.convert(4)
    static readonly HERO_MANA_BAR = FrameOriginType.convert(5)
    static readonly HERO_BUTTON_INDICATOR = FrameOriginType.convert(6)
    static readonly ITEM_BUTTON = FrameOriginType.convert(7)
    static readonly MINIMAP = FrameOriginType.convert(8)
    static readonly BUTTON_MINIMAP = FrameOriginType.convert(9)
    static readonly SYSTEM_BUTTON = FrameOriginType.convert(10)
    static readonly TOOLTIP = FrameOriginType.convert(11)
    static readonly UBERTOOLTIP = FrameOriginType.convert(12)
    static readonly CHAT_MSG = FrameOriginType.convert(13)
    static readonly UNIT_MSG = FrameOriginType.convert(14)
    static readonly TOP_MSG = FrameOriginType.convert(15)
    static readonly PORTRAIT = FrameOriginType.convert(16)
    static readonly WORLD = FrameOriginType.convert(17)
}
