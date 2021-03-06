import { PlayerScore } from "../../API/fields/player/PlayerScore"

export abstract class PlayerScores {
    public static readonly UNITS_TRAINED = new PlayerScore(0)
    public static readonly UNITS_KILLED = new PlayerScore(1)
    public static readonly STRUCT_BUILT = new PlayerScore(2)
    public static readonly STRUCT_RAZED = new PlayerScore(3)
    public static readonly TECH_PERCENT = new PlayerScore(4)
    public static readonly FOOD_MAX_PROD = new PlayerScore(5)
    public static readonly FOOD_MAX_USED = new PlayerScore(6)
    public static readonly HEROES_KILLED = new PlayerScore(7)
    public static readonly ITEMS_GAINED = new PlayerScore(8)
    public static readonly MERCS_HIRED = new PlayerScore(9)
    public static readonly GOLD_MINED_TOTAL = new PlayerScore(10)
    public static readonly GOLD_MINED_UPKEEP = new PlayerScore(11)
    public static readonly GOLD_LOST_UPKEEP = new PlayerScore(12)
    public static readonly GOLD_LOST_TAX = new PlayerScore(13)
    public static readonly GOLD_GIVEN = new PlayerScore(14)
    public static readonly GOLD_RECEIVED = new PlayerScore(15)
    public static readonly LUMBER_TOTAL = new PlayerScore(16)
    public static readonly LUMBER_LOST_UPKEEP = new PlayerScore(17)
    public static readonly LUMBER_LOST_TAX = new PlayerScore(18)
    public static readonly LUMBER_GIVEN = new PlayerScore(19)
    public static readonly LUMBER_RECEIVED = new PlayerScore(20)
    public static readonly UNIT_TOTAL = new PlayerScore(21)
    public static readonly HERO_TOTAL = new PlayerScore(22)
    public static readonly RESOURCE_TOTAL = new PlayerScore(23)
    public static readonly TOTAL = new PlayerScore(24)
}
