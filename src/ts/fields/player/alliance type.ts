/** @noSelfInFile **/
// @ts-nocheck

declare function ConvertAliianceType(i: number): alliancetype

const c = ConvertAliianceType

export const TypeAlliance = {
    Passive: c(0),
    HelpRequest: c(1),
    HelpResponse: c(2),
    SharedXP: c(3),
    SharedSpells: c(4),
    SharedVision: c(5),
    SharedControl: c(6),
    SharedAdvancedControl: c(7),
    Rescuable: c(8),
    SharedVisionForced: c(9)
}