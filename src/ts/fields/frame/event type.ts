/** @noSelfInFile **/
// @ts-nocheck

declare function ConvertFrameEventType(i: number): frameeventtype

const c = ConvertFrameEventType

export const TypeEventFrame = {
    ControlClick: c(1),
    MouseEnter: c(2),
    MouseLeave: c(3),
    MouseUp: c(4),
    MouseDown: c(5),
    MouseWheel: c(6),
    CheckboxChecked: c(7),
    CheckboxUnchecked: c(8),
    EditboxTextChanged: c(9),
    PopupmenuItemChanged: c(10),
    MouseDoubleclick: c(11),
    SpiritAnimUpdate: c(12),
    SliderValueChanged: c(13),
    DialogCancel: c(14),
    DialogAccept: c(15),
    EditboxCenter: c(16)
}
