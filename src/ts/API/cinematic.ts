/** @noSelfInFile **/
// @ts-nocheck

export class Cinematic {
    private constructor() {}

    static setScene(
        portraitUnitId: number,
        color: playercolor,
        speakerTitle: string,
        text: string,
        sceneDuration: number,
        voiceoverDuration: number
    ) {
        SetCinematicScene(
            portraitUnitId,
            color,
            speakerTitle,
            text,
            sceneDuration,
            voiceoverDuration
        )
        return this
    }

    static endScene() {
        EndCinematicScene()
        return this
    }

    static forceSubtitles(flag: boolean) {
        ForceCinematicSubtitles(flag)
        return this
    }

    static setCamera(cameraModelFile: string) {
        SetCinematicCamera(cameraModelFile)
        return this
    }

    static setAudio(cinematicAudio: boolean) {
        SetCinematicAudio(cinematicAudio)
        return this
    }
}
