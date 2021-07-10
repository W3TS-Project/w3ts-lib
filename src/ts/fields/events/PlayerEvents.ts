import { PlayerEvent } from "../../API/fields/events/PlayerEvent";

export abstract class PlayerEvents {
	public static readonly STATE_LIMIT = new PlayerEvent(11)
	public static readonly ALLIANCE_CHANGED = new PlayerEvent(12)

	public static readonly DEFEAT = new PlayerEvent(13)
	public static readonly VICTORY = new PlayerEvent(14)
	public static readonly LEAVE = new PlayerEvent(15)
	public static readonly CHAT = new PlayerEvent(16)
	public static readonly END_CINEMATIC = new PlayerEvent(17)

	public static readonly ARROW_LEFT_DOWN = new PlayerEvent(261)
	public static readonly ARROW_LEFT_UP = new PlayerEvent(262)
	public static readonly ARROW_RIGHT_DOWN = new PlayerEvent(263)
	public static readonly ARROW_RIGHT_UP = new PlayerEvent(264)
	public static readonly ARROW_DOWN_DOWN = new PlayerEvent(265)
	public static readonly ARROW_DOWN_UP = new PlayerEvent(266)
	public static readonly ARROW_UP_DOWN = new PlayerEvent(267)
	public static readonly ARROW_UP_UP = new PlayerEvent(268)
	public static readonly MOUSE_DOWN = new PlayerEvent(305)
	public static readonly MOUSE_UP = new PlayerEvent(306)
	public static readonly MOUSE_MOVE = new PlayerEvent(307)
	public static readonly SYNC_DATA = new PlayerEvent(309)
	public static readonly KEY = new PlayerEvent(311)
	public static readonly DOWN_KEY = new PlayerEvent(312)
	public static readonly UP_KEY = new PlayerEvent(313)
}