/** @noSelfInFile **/
//@ts-nocheck

declare function SetMapMusic(musicName: string, random: boolean, index: integer): void
declare function ClearMapMusic(): void
declare function PlayMusic(musicName: string): void
declare function PlayMusicEx(musicName: string, frommsecs: integer, fadeinmsecs: integer): void
declare function StopMusic(fadeOut: boolean): void
declare function ResumeMusic(): void
declare function PlayThematicMusic(musicFileName: string): void
declare function PlayThematicMusicEx(musicFileName: string, frommsecs: integer): void
declare function EndThematicMusic(): void
declare function SetMusicVolume(volume: integer): void
declare function SetMusicPlayPosition(millisecs: integer): void
declare function SetThematicMusicPlayPosition(millisecs: integer): void

export abstract class Music {
    static setMap(musicName: string, random: boolean, index: integer) {
        SetMapMusic(musicName, random, Math.floor(index))
        return this
    }

    static clearMap() {
        ClearMapMusic()
        return this
    }

    static play(musicName: string) {
        PlayMusic(musicName)
        return this
    }

    static playEx(musicName: string, frommsecs: integer, fadeinmsecs: integer) {
        PlayMusicEx(musicName, Math.floor(frommsecs), Math.floor(fadeinmsecs))
        return this
    }

    static stop(fadeOut: boolean) {
        StopMusic(fadeOut)
        return this
    }

    static resume() {
        ResumeMusic()
        return this
    }

    static playThematic(musicFileName: string) {
        PlayThematicMusic(musicFileName)
        return this
    }

    static playThematicEx(musicFileName: string, frommsecs: integer) {
        PlayThematicMusicEx(musicFileName, Math.floor(frommsecs))
        return this
    }

    static endThematic() {
        EndThematicMusic()
        return this
    }

    static setVolume(volume: integer) {
        SetMusicVolume(Math.floor(volume))
        return this
    }

    static setPlayPosition(millisecs: integer) {
        SetMusicPlayPosition(Math.floor(millisecs))
        return this
    }

    static setThematicPlayPosition(millisecs: integer) {
        SetThematicMusicPlayPosition(Math.floor(millisecs))
        return this
    }
}
