/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertTargetFlag = (i: number) => targetflag

const c = ConvertTargetFlag

export const TargetFlag = {
    None: c(1),
    Ground: c(2),
    Air: c(4),
    Structure: c(8),
    Ward: c(16),
    Item: c(32),
    Tree: c(64),
    Wall: c(128),
    Debris: c(256),
    Decoration: c(512),
    Bridge: c(1024)
}
