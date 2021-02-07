/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPlayerScore = (i: number) => playerscore

const c = ConvertPlayerScore

export const PlayerScore = {
    UnitsTrained: c(0),
    UnitsKilled: c(1),
    StructBuilt: c(2),
    StructRazed: c(3),
    TechPercent: c(4),
    FoodMaxProd: c(5),
    FoodMaxUsed: c(6),
    HeroedKilled: c(7),
    ItemsGained: c(8),
    MercsHired: c(9),
    GoldMinedTotal: c(10),
    GoldMinedUpkeep: c(11),
    GoldLostUpkeep: c(12),
    GoldLostTax: c(13),
    GoldGiven: c(14),
    GoldReceived: c(15),
    LumberTotal: c(16),
    LumberLostUpkeep: c(17),
    LumberLostTax: c(18),
    LumberGiven: c(19),
    LumberReceived: c(20),
    UnitTotal: c(21),
    HeroTotal: c(22),
    ResourceTotal: c(23),
    Total: c(24)
}
