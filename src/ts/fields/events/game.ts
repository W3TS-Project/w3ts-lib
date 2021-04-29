/** @noSelfInFile **/
//@ts-nocheck

declare function ConvertGameEvent(i: number): gameevent

const c = ConvertGameEvent

export const GameEvent = {
    Victory: c(0),
    EndLevel: c(1),

    VariableLimit: c(2),
    StateLimit: c(3),

    TimerExpired: c(4),

    EnterRegion: c(5),
    LeaveRegion: c(6),

    TrackableHit: c(7),
    TrackableTrack: c(8),

    ShowSkill: c(9),
    BuildSubmenu: c(10),

    Loaded: c(256),
    TournamentFinishSoon: c(257),
    TournamentFinishNow: c(258),
    Save: c(259),
    CustomUIFrame: c(310),
}
