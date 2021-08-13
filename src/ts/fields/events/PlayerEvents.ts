import { PlayerEvent } from "../../API/fields/events/PlayerEvent"

export abstract class PlayerEvents {
    static readonly STATE_LIMIT = PlayerEvent.convert(11)
    static readonly ALLIANCE_CHANGED = PlayerEvent.convert(12)

    static readonly DEFEAT = PlayerEvent.convert(13)
    static readonly VICTORY = PlayerEvent.convert(14)
    static readonly LEAVE = PlayerEvent.convert(15)
    static readonly CHAT = PlayerEvent.convert(16)
    static readonly END_CINEMATIC = PlayerEvent.convert(17)

    static readonly ARROW_LEFT_DOWN = PlayerEvent.convert(261)
    static readonly ARROW_LEFT_UP = PlayerEvent.convert(262)
    static readonly ARROW_RIGHT_DOWN = PlayerEvent.convert(263)
    static readonly ARROW_RIGHT_UP = PlayerEvent.convert(264)
    static readonly ARROW_DOWN_DOWN = PlayerEvent.convert(265)
    static readonly ARROW_DOWN_UP = PlayerEvent.convert(266)
    static readonly ARROW_UP_DOWN = PlayerEvent.convert(267)
    static readonly ARROW_UP_UP = PlayerEvent.convert(268)
    static readonly MOUSE_DOWN = PlayerEvent.convert(305)
    static readonly MOUSE_UP = PlayerEvent.convert(306)
    static readonly MOUSE_MOVE = PlayerEvent.convert(307)
    static readonly SYNC_DATA = PlayerEvent.convert(309)
    static readonly KEY = PlayerEvent.convert(311)
    static readonly KEY_DOWN = PlayerEvent.convert(312)
    static readonly KEY_UP = PlayerEvent.convert(313)
}
