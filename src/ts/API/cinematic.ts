/** @noSelfInFile **/
// @ts-nocheck

import { UnitRawCode } from "../handles/rawCode/UnitRawCode"
import { PlayerColor } from "./fields/player/PlayerColor"

declare function SetCinematicCamera(cameraModelFile: string): void
declare function SetCinematicScene(
    portraitUnitId: integer,
    color: playercolor,
    speakerTitle: string,
    text: string,
    sceneDuration: real,
    voiceoverDuration: real
): void
declare function EndCinematicScene(): void
declare function ForceCinematicSubtitles(flag: boolean): void
declare function SetCinematicAudio(cinematicAudio: boolean): void

export abstract class Cinematic {
    public static setScene(
        portraitUnitId: UnitRawCode,
        color: PlayerColor,
        speakerTitle: string,
        text: string,
        sceneDuration: real,
        voiceoverDuration: real
    ) {
        SetCinematicScene(
            portraitUnitId.getId(),
            color.getHandle() as playercolor,
            speakerTitle,
            text,
            sceneDuration,
            voiceoverDuration
        )
        return this
    }

    public static endScene() {
        EndCinematicScene()
        return this
    }

    public static forceSubtitles(flag: boolean) {
        ForceCinematicSubtitles(flag)
        return this
    }

    public static setCamera(cameraModelFile: string) {
        SetCinematicCamera(cameraModelFile)
        return this
    }

    public static setAudio(cinematicAudio: boolean) {
        SetCinematicAudio(cinematicAudio)
        return this
    }
}
