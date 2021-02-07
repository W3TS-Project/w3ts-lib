/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertMapControl = (i: number) => mapcontrol

const c = ConvertMapControl

export const MapControl = {
    User: c(0),
    Computer: c(1),
    Rescuable: c(2),
    Neutral: c(3),
    Creep: c(4),
    None: c(5)
}
