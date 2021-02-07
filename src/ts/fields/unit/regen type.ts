/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertRegenType = (i: number) => regentype

const c = ConvertRegenType

export const RegenType = {
    None: c(0),
    Always: c(1),
    Blight: c(2),
    Day: c(3),
    Night: c(4)
}
