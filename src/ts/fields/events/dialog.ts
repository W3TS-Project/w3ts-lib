/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertDialogEvent = (i: number) => dialogevent

const c = ConvertDialogEvent

export const DialogEvent = {
    ButtonClick: c(90),
    DialogClick: c(91)
}
