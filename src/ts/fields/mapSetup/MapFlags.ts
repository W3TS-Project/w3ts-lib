import { MapFlag } from "../../API/fields/mapSetup/MapFlag";

export abstract class MapFlags {
	public static readonly FOG_HIDE_TERRAIN = new MapFlag(1)
	public static readonly FOG_MAP_EXPLORED = new MapFlag(2)
	public static readonly FOG_ALWAYS_VISIBLE = new MapFlag(4)
	public static readonly USE_HANDICAPS = new MapFlag(8)
	public static readonly OBSERVERS = new MapFlag(16)
	public static readonly OBSERVERS_ON_DEATH = new MapFlag(32)
	public static readonly FIXED_COLORS = new MapFlag(128)
	public static readonly LOCK_RESOURCE_TRADING = new MapFlag(256)
	public static readonly RESOURCE_TRADING_ALLIES_ONLY = new MapFlag(512)
	public static readonly LOCK_ALLIANCE_CHANGES = new MapFlag(1024)
	public static readonly ALLIANCE_CHANGES_HIDDEN = new MapFlag(2048)
	public static readonly CHEATS = new MapFlag(4096)
	public static readonly HIDDEN_CHEATS = new MapFlag(8192)
	public static readonly LOCK_SPEED = new MapFlag(8192 * 2)
	public static readonly LOCK_RANDOM_SEED = new MapFlag(8192 * 4)
	public static readonly SHARED_ADVANCED_CONTROL = new MapFlag(8192 * 8)
	public static readonly RANDOM_HERO = new MapFlag(8192 * 16)
	public static readonly RANDOM_RACES = new MapFlag(8192 * 32)
	public static readonly RELOADED = new MapFlag(8192 * 64)
}