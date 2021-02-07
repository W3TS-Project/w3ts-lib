/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertIGameState = (i: number) => igamestate
declare const ConvertFGameState = (i: number) => fgamestate

const c1 = ConvertIGameState
const c2 = ConvertFGameState

// For use with TriggerRegisterStateEvent

export const GameState = {
    DivineIntervention: c1(0),
    Disconnected: c1(1),
    TimeOfDay: c2(2)
}
