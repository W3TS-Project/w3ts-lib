import { PlayerState } from "../../API/fields/player/PlayerState"

export abstract class PlayerStates {
    public static readonly GAME_RESULT = new PlayerState(0)

    // current resource levels
    public static readonly RESOURCE_GOLD = new PlayerState(1)
    public static readonly RESOURCE_LUMBER = new PlayerState(2)
    public static readonly RESOURCE_HERO_TOKENS = new PlayerState(3)
    public static readonly RESOURCE_FOOD_CAP = new PlayerState(4)
    public static readonly RESOURCE_FOOD_USED = new PlayerState(5)
    public static readonly FOOD_CAP_CEILING = new PlayerState(6)

    public static readonly GIVES_BOUNTY = new PlayerState(7)
    public static readonly ALLIED_VICTORY = new PlayerState(8)
    public static readonly PLACED = new PlayerState(9)
    public static readonly ON_DEATH_OBSERVER = new PlayerState(10)
    public static readonly OBSERVER = new PlayerState(11)
    public static readonly UNFOLLOWABLE = new PlayerState(12)

    // taxation rate for each resource
    public static readonly GOLD_UPKEEP_RATE = new PlayerState(13)
    public static readonly LUMBER_UPKEEP_RATE = new PlayerState(14)

    // cumulative resources collected by the player during the mission
    public static readonly GOLD_GATHERED = new PlayerState(15)
    public static readonly LUMBER_GATHERED = new PlayerState(16)

    public static readonly NO_CREEP_SLEEP = new PlayerState(25)
}
