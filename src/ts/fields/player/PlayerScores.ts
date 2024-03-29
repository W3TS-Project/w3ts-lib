import { PlayerScore } from "../../API/fields/player/PlayerScore"

export abstract class PlayerScores {
    static readonly UNITS_TRAINED = PlayerScore.convert(0)
    static readonly UNITS_KILLED = PlayerScore.convert(1)
    static readonly STRUCT_BUILT = PlayerScore.convert(2)
    static readonly STRUCT_RAZED = PlayerScore.convert(3)
    static readonly TECH_PERCENT = PlayerScore.convert(4)
    static readonly FOOD_MAX_PROD = PlayerScore.convert(5)
    static readonly FOOD_MAX_USED = PlayerScore.convert(6)
    static readonly HEROES_KILLED = PlayerScore.convert(7)
    static readonly ITEMS_GAINED = PlayerScore.convert(8)
    static readonly MERCS_HIRED = PlayerScore.convert(9)
    static readonly GOLD_MINED_TOTAL = PlayerScore.convert(10)
    static readonly GOLD_MINED_UPKEEP = PlayerScore.convert(11)
    static readonly GOLD_LOST_UPKEEP = PlayerScore.convert(12)
    static readonly GOLD_LOST_TAX = PlayerScore.convert(13)
    static readonly GOLD_GIVEN = PlayerScore.convert(14)
    static readonly GOLD_RECEIVED = PlayerScore.convert(15)
    static readonly LUMBER_TOTAL = PlayerScore.convert(16)
    static readonly LUMBER_LOST_UPKEEP = PlayerScore.convert(17)
    static readonly LUMBER_LOST_TAX = PlayerScore.convert(18)
    static readonly LUMBER_GIVEN = PlayerScore.convert(19)
    static readonly LUMBER_RECEIVED = PlayerScore.convert(20)
    static readonly UNIT_TOTAL = PlayerScore.convert(21)
    static readonly HERO_TOTAL = PlayerScore.convert(22)
    static readonly RESOURCE_TOTAL = PlayerScore.convert(23)
    static readonly TOTAL = PlayerScore.convert(24)
}
