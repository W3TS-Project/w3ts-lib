/** @noSelfInFile **/
// @ts-nocheck

import { GameDifficulty } from "./fields/game/GameDifficulty"
import { GameSpeed } from "./fields/game/GameSpeed"
import { Placement } from "./fields/mapSetup/Placement"

declare function SetGamePlacement(whichPlacementType: placement): void
declare function SetGameDifficulty(whichdifficulty: gamedifficulty): void
declare function SetGameSpeed(whichspeed: gamespeed): void
declare function GetGamePlacement(): placement
declare function GetGameSpeed(): gamespeed
declare function GetGameDifficulty(): gamedifficulty

export abstract class GameSetup {
    static setSpeed(whichspeed: GameSpeed) {
        SetGameSpeed(whichspeed.getHandle() as gamespeed)
        return this
    }

    static getSpeed(): GameSpeed {
        return GameSpeed.fromHandle(GetGameSpeed())
    }

    static setDifficulty(whichdifficulty: GameDifficulty) {
        SetGameDifficulty(whichdifficulty.getHandle() as gamedifficulty)
        return this
    }

    static getDifficulty(): GameDifficulty {
        return GameDifficulty.fromHandle(GetGameDifficulty())
    }

    static setPlacement(whichPlacementType: Placement) {
        SetGamePlacement(whichPlacementType.getHandle() as placement)
        return this
    }

    static getPlacement(): Placement {
        return Placement.fromHandle(GetGamePlacement())
    }
}
