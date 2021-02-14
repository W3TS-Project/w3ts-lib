/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPlayerUnitEvent = (i: number) => playerunitevent

const c = ConvertPlayerUnitEvent

export const PlayerUnitEvent = {
    Attacked: c(18),
    Rescued: c(19),

    Death: c(20),
    Decay: c(21),

    Detected: c(22),
    Hidden: c(23),

    Selected: c(24),
    Deselected: c(25),

    ConstructStart: c(26),
    ConstructCancel: c(27),
    ConstructFinish: c(28),

    UpgradeStart: c(29),
    UpgradeCancel: c(30),
    UpgradeFinish: c(31),

    TrainStart: c(32),
    TrainCancel: c(33),
    TrainFinish: c(34),

    ResearchStart: c(35),
    ResearchCancel: c(36),
    ReserachFinish: c(37),
    IssuedOrder: c(38),
    IssuedPointOrder: c(39),
    IssuedTargetOrder: c(40),
    IssuedUnitOrder: c(40),

    HeroLevel: c(41),
    HeroSkill: c(42),

    HeroRevivable: c(43),

    HeroReviveStart: c(44),
    HeroReviveCancel: c(45),
    HeroReviveFinish: c(46),
    Summon: c(47),
    DropItem: c(48),
    PickUpItem: c(49),
    UseItem: c(50),

    Loaded: c(51),
    Damaged: c(308),
    Damaging: c(315),

    Sell: c(269),
    ChangeOwner: c(270),
    SellItem: c(271),
    SpellChannel: c(272),
    SpellCast: c(273),
    SpellEffect: c(274),
    SpellFinish: c(275),
    SpellEndCast: c(276),
    PawnItem: c(277)
}
