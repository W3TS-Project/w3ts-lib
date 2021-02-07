/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertOriginFrameType = (i: number) => originframetype

const c = ConvertOriginFrameType

export const TypeOriginFrame = {
    GameUI: c(0),
    CommandButton: c(1),
    HeroBar: c(2),
    HeroButton: c(3),
    HeroHPBar: c(4),
    HeroManaBar: c(5),
    HeroButtonIndicator: c(6),
    ItemButton: c(7),
    Minimap: c(8),
    ButtonMinimap: c(9),
    SystemButton: c(10),
    Tooltip: c(11),
    Ubertooltip: c(12),
    ChatMsg: c(13),
    UnitMsg: c(14),
    TopMsg: c(15),
    Portrait: c(16),
    World: c(17)
}
