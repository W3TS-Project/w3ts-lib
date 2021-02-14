/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitEvent = (i: number) => unitevent

const c = ConvertUnitEvent

export const UnitEvent = {
    Damaged: c(52),
    Damaging: c(314),
    Death: c(53),
    Decay: c(54),
    Detected: c(55),
    Hidden: c(56),
    Selected: c(57),
    Deselected: c(58),

    StateLimit: c(59),

    // Events which may have a filter for the "other unit"
    AcquiredTarget: c(60),
    TargetInRange: c(61),
    Attacked: c(62),
    Rescued: c(63),

    ConstructCancel: c(64),
    ConstructFinish: c(65),

    UpgradeStart: c(66),
    UpgradeCancel: c(67),
    UpgradeFinish: c(68),

    // Events which involve the specified unit performing
    // training of other units
    TrainStart: c(69),
    TrainCancel: c(70),
    TrainFinish: c(71),

    ResearchStart: c(72),
    ResearchCancel: c(73),
    ResearchFinish: c(74),

    IssuedOrder: c(75),
    IssuedPointOrder: c(76),
    IssuedTargetOrder: c(77),

    HeroLevel: c(78),
    HeroSkill: c(79),

    HeroRevivable: c(80),
    HeroReviveStart: c(81),
    HeroReviveCancel: c(82),
    HeroReviveFinish: c(83),

    Summon: c(84),

    DropItem: c(85),
    PickUpItem: c(86),
    UseItem: c(87),

    Loaded: c(88),

    Sell: c(286),
    ChangeOwner: c(287),
    SellItem: c(288),
    SpellChannel: c(289),
    SpellCast: c(290),
    SpellEffect: c(291),
    SpellFinish: c(292),
    SpellEndCast: c(293),
    PawnItem: c(294)
}
