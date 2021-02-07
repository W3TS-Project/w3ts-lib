/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPlayerState = (i: number) => playerstate

const c = ConvertPlayerState

export const PlayerState = {
    GameResult: c(0),

    // current resource levels
    ResourceGold: c(1),
    ResourceLumber: c(2),
    ResourceHeroTokens: c(3),
    ResourceFoodCap: c(4),
    ResourceFoodUsed: c(5),
    FoodCapCeiling: c(6),

    GivesBounty: c(7),
    AlliedVictory: c(8),
    Placed: c(9),
    OnDeathObserver: c(10),
    Observer: c(11),
    Unfollowable: c(12),

    // taxation rate for each resource
    GoldUpkeepRate: c(13),
    LumberUpkeepRate: c(14),

    // cumulative resources collected by the player during the mission
    GoldGathered: c(15),
    LumberGathered: c(16),

    NoCreepSleep: c(25)
}
