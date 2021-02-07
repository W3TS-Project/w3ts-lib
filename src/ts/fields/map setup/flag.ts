/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertMapFlag = (i: number) => mapflag

const c = ConvertMapFlag

export const MapFlag = {
    FogHideTerrain: c(1),
    FogMapExplored: c(2),
    FogAlwaysVisible: c(4),
    UseHandicaps: c(8),
    Observers: c(16),
    ObserversOnDeath: c(32),
    FixedColors: c(128),
    LockResourceTrading: c(256),
    ResourceTradingAlliesOnly: c(512),
    LockAllianceChanges: c(1024),
    AllianceChangesHidden: c(2048),
    Cheats: c(4096),
    HiddenCheats: c(8192),
    LockSpeed: c(8192 * 2),
    LockRandomSeed: c(8192 * 4),
    SharedAdvancedControl: c(8192 * 8),
    RandomHero: c(8192 * 16),
    RandomRaces: c(8192 * 32),
    Reloaded: c(8192 * 64)
}
