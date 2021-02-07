/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertDamageType = (i: number) => damagetype

const c = ConvertDamageType

export const DamageType = {
    Unknown: c(0),
    Normal: c(4),
    Enhanced: c(5),
    Fire: c(8),
    Cold: c(9),
    Lightning: c(10),
    Poison: c(11),
    Disease: c(12),
    Divine: c(13),
    Magic: c(14),
    Sonic: c(15),
    Acid: c(16),
    Force: c(17),
    Death: c(18),
    Mind: c(19),
    Plant: c(20),
    Defensive: c(21),
    Demolition: c(22),
    SlowPoison: c(23),
    SpiritLink: c(24),
    ShadowStrike: c(25),
    Universal: c(26)
}
