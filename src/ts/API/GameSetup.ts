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
    public static setSpeed(whichspeed: GameSpeed) {
        SetGameSpeed(whichspeed.getHandle)
        return this
    }

    public static getSpeed(): GameSpeed {
        return GameSpeed.fromHandle(GetGameSpeed())
    }

    public static setDifficulty(whichdifficulty: GameDifficulty) {
        SetGameDifficulty(whichdifficulty.getHandle)
        return this
    }

    public static getDifficulty(): GameDifficulty {
        return GameDifficulty.fromHandle(GetGameDifficulty())
    }

    public static setPlacement(whichPlacementType: Placement) {
        SetGamePlacement(whichPlacementType.getHandle)
        return this
    }

    public static getPlacement(): Placement {
        return Placement.fromHandle(GetGamePlacement())
    }
}