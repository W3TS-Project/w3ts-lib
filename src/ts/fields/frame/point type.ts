/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertFramePointType = (i: number) => framepointtype

const c = ConvertFramePointType

export const TypePointFrame = {
    LeftTop: c(0),
    Top: c(1),
    TopRight: c(2),
    Left: c(3),
    Center: c(4),
    Right: c(5),
    LeftBottom: c(6),
    Bottom: c(7),
    RightBottom: c(8)
}
