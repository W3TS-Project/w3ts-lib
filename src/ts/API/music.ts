/** @noSelfInFile **/
//@ts-nocheck

import { integer } from "../Utils"

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

export class Music {
    private constructor() {}

    public static setMap(musicName: string, random: boolean, index: integer) {
        SetMapMusic(musicName, random, index)
        return this
    }

    public static clearMap() {
        ClearMapMusic()
        return this
    }

    public static play(musicName: string) {
        PlayMusic(musicName)
        return this
    }

    public static playEx(musicName: string, frommsecs: integer, fadeinmsecs: integer) {
        PlayMusicEx(musicName, frommsecs, fadeinmsecs)
        return this
    }

    public static stop(fadeOut: boolean) {
        StopMusic(fadeOut)
        return this
    }

    public static resume() {
        ResumeMusic()
        return this
    }

    public static playThematic(musicFileName: string) {
        PlayThematicMusic(musicFileName)
        return this
    }

    public static playThematicEx(musicFileName: string, frommsecs: integer) {
        PlayThematicMusicEx(musicFileName, frommsecs)
        return this
    }

    public static endThematic() {
        EndThematicMusic()
        return this
    }

    public static setVolume(volume: integer) {
        SetMusicVolume(volume)
        return this
    }

    public static setPlayPosition(millisecs: integer) {
        SetMusicPlayPosition(millisecs)
        return this
    }

    public static setThematicPlayPosition(millisecs: integer) {
        SetThematicMusicPlayPosition(millisecs)
        return this
    }
}
