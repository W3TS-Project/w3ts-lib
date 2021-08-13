import { PlayerState } from "../../API/fields/player/PlayerState"

export abstract class PlayerStates {
    static readonly GAME_RESULT = PlayerState.convert(0)

    // current resource levels
    static readonly RESOURCE_GOLD = PlayerState.convert(1)
    static readonly RESOURCE_LUMBER = PlayerState.convert(2)
    static readonly RESOURCE_HERO_TOKENS = PlayerState.convert(3)
    static readonly RESOURCE_FOOD_CAP = PlayerState.convert(4)
    static readonly RESOURCE_FOOD_USED = PlayerState.convert(5)
    static readonly FOOD_CAP_CEILING = PlayerState.convert(6)

    static readonly GIVES_BOUNTY = PlayerState.convert(7)
    static readonly ALLIED_VICTORY = PlayerState.convert(8)
    static readonly PLACED = PlayerState.convert(9)
    static readonly ON_DEATH_OBSERVER = PlayerState.convert(10)
    static readonly OBSERVER = PlayerState.convert(11)
    static readonly UNFOLLOWABLE = PlayerState.convert(12)

    // taxation rate for each resource
    static readonly GOLD_UPKEEP_RATE = PlayerState.convert(13)
    static readonly LUMBER_UPKEEP_RATE = PlayerState.convert(14)

    // cumulative resources collected by the player during the mission
    static readonly GOLD_GATHERED = PlayerState.convert(15)
    static readonly LUMBER_GATHERED = PlayerState.convert(16)

    static readonly NO_CREEP_SLEEP = PlayerState.convert(25)
}
