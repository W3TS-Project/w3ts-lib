/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPlayerEvent = (i: number) => playerevent

const c = ConvertPlayerEvent

export const PlayerEvent = {
    StateLimit: c(11),
    AllianceChanged: c(12),

    Defeat: c(13),
    Victory: c(14),
    Leave: c(15),
    Chat: c(16),
    EndCinematic: c(17),

    ArrowLeftDown: c(261),
    ArrowLeftUp: c(262),
    ArrowRightDown: c(263),
    ArrowRightUp: c(264),
    ArrowDownDown: c(265),
    ArrowDownUp: c(266),
    ArrowUpDown: c(267),
    ArrowUpUp: c(268),
    MouseDown: c(305),
    MouseUp: c(306),
    MouseMove: c(307),
    SyncData: c(309),
    Key: c(311),
    DownKey: c(312),
    UpKey: c(313)
}
