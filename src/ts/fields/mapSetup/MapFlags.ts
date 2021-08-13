import { MapFlag } from "../../API/fields/mapSetup/MapFlag"

export abstract class MapFlags {
    static readonly FOG_HIDE_TERRAIN = MapFlag.convert(1)
    static readonly FOG_MAP_EXPLORED = MapFlag.convert(2)
    static readonly FOG_ALWAYS_VISIBLE = MapFlag.convert(4)
    static readonly USE_HANDICAPS = MapFlag.convert(8)
    static readonly OBSERVERS = MapFlag.convert(16)
    static readonly OBSERVERS_ON_DEATH = MapFlag.convert(32)
    static readonly FIXED_COLORS = MapFlag.convert(128)
    static readonly LOCK_RESOURCE_TRADING = MapFlag.convert(256)
    static readonly RESOURCE_TRADING_ALLIES_ONLY = MapFlag.convert(512)
    static readonly LOCK_ALLIANCE_CHANGES = MapFlag.convert(1024)
    static readonly ALLIANCE_CHANGES_HIDDEN = MapFlag.convert(2048)
    static readonly CHEATS = MapFlag.convert(4096)
    static readonly HIDDEN_CHEATS = MapFlag.convert(8192)
    static readonly LOCK_SPEED = MapFlag.convert(8192 * 2)
    static readonly LOCK_RANDOM_SEED = MapFlag.convert(8192 * 4)
    static readonly SHARED_ADVANCED_CONTROL = MapFlag.convert(8192 * 8)
    static readonly RANDOM_HERO = MapFlag.convert(8192 * 16)
    static readonly RANDOM_RACES = MapFlag.convert(8192 * 32)
    static readonly RELOADED = MapFlag.convert(8192 * 64)
}
