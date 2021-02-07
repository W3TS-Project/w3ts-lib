/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitType=(i:number)=>unittype

const c=ConvertUnitType

export const UnitType={
    Hero:c(0),
    Dead:c(1),
    Structure:c(2),

    Flying:c(3),
    Ground:c(4),

    AttacksFlying:c(5),
    AttacksGround:c(6),

    MeleeAttacker:c(7),
    RangedAttacker:c(8),

    Giant:c(9),
    Summoned:c(10),
    Stunned:c(11),
    Plagued:c(12),
    Snared:c(13),

    Undead:c(14),
    Mechanical:c(15),
    Peon:c(16),
    Sapper:c(17),
    TownHall:c(18),
    Ancient:c(19),

    Tauren:c(20),
    Poisoned:c(21),
    Polymorphed:c(22),
    Sleeping:c(23),
    Resistant:c(24),
    Ethereal:c(25),
    MagicImmune:c(26)
}