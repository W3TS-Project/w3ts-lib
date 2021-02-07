/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPlayerSlotState = (i: number) => playerslotstate

const c = ConvertPlayerSlotState

export const PlayerSlotState = {
    Empty: c(0),
    Playing: c(1),
    Left: c(2)
}
