/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { Unit } from "./Unit"

declare function CreateSound(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopwhenoutofrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
    eaxSetting: string
): sound
declare function CreateSoundFilenameWithLabel(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopwhenoutofrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
    SLKEntryName: string
): sound
declare function CreateSoundFromLabel(
    soundLabel: string,
    looping: boolean,
    is3D: boolean,
    stopwhenoutofrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer
): sound
declare function CreateMIDISound(
    soundLabel: string,
    fadeInRate: integer,
    fadeOutRate: integer
): sound
declare function SetSoundParamsFromLabel(soundHandle: sound, soundLabel: string): void
declare function SetSoundDistanceCutoff(soundHandle: sound, cutoff: real): void
declare function SetSoundChannel(soundHandle: sound, channel: integer): void
declare function SetSoundVolume(soundHandle: sound, volume: integer): void
declare function SetSoundPitch(soundHandle: sound, pitch: real): void
declare function SetSoundPlayPosition(soundHandle: sound, millisecs: integer): void
declare function SetSoundDistances(soundHandle: sound, minDist: real, maxDist: real): void
declare function SetSoundConeAngles(
    soundHandle: sound,
    inside: real,
    outside: real,
    outsideVolume: integer
): void
declare function SetSoundConeOrientation(soundHandle: sound, x: real, y: real, z: real): void
declare function SetSoundPosition(soundHandle: sound, x: real, y: real, z: real): void
declare function SetSoundVelocity(soundHandle: sound, x: real, y: real, z: real): void
declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): void
declare function StartSound(soundHandle: sound): void
declare function StopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void
declare function KillSoundWhenDone(soundHandle: sound): void
declare function SetSoundFacialAnimationLabel(soundHandle: sound, animationLabel: string): boolean
declare function SetSoundFacialAnimationGroupLabel(soundHandle: sound, groupLabel: string): boolean
declare function SetSoundFacialAnimationSetFilepath(
    soundHandle: sound,
    animationSetFilepath: string
): boolean
declare function SetDialogueSpeakerNameKey(soundHandle: sound, speakerName: string): boolean
declare function GetDialogueSpeakerNameKey(soundHandle: sound): string
declare function SetDialogueTextKey(soundHandle: sound, dialogueText: string): boolean
declare function GetDialogueTextKey(soundHandle: sound): string
declare function SetSoundDuration(soundHandle: sound, duration: integer): void
declare function GetSoundDuration(soundHandle: sound): integer
declare function GetSoundFileDuration(musicFileName: string): integer
declare function GetSoundIsPlaying(soundHandle: sound): boolean
declare function GetSoundIsLoading(soundHandle: sound): boolean
declare function RegisterStackedSound(
    soundHandle: sound,
    byPosition: boolean,
    rectwidth: real,
    rectheight: real
): void
declare function UnregisterStackedSound(
    soundHandle: sound,
    byPosition: boolean,
    rectwidth: real,
    rectheight: real
): void

export class Sound extends Handle<sound> {
    public static create(
        fileName: string,
        looping: boolean,
        is3D: boolean,
        stopWhenOutOfRange: boolean,
        fadeInRate: integer,
        fadeOutRate: integer,
        eaxSetting: string
    ) {
        return new this(
            CreateSound(
                fileName,
                looping,
                is3D,
                stopWhenOutOfRange,
                Math.floor(fadeInRate),
                Math.floor(fadeOutRate),
                eaxSetting
            )
        )
    }

    public static createFromFileWithLabel(
        fileName: string,
        looping: boolean,
        is3D: boolean,
        stopWhenOutOfRange: boolean,
        fadeInRate: integer,
        fadeOutRate: integer,
        SLKEntryName: string
    ) {
        return new this(
            CreateSoundFilenameWithLabel(
                fileName,
                looping,
                is3D,
                stopWhenOutOfRange,
                Math.floor(fadeInRate),
                Math.floor(fadeOutRate),
                SLKEntryName
            )
        )
    }

    public static createFromLabel(
        soundLabel: string,
        looping: boolean,
        is3D: boolean,
        stopWhenOutOfRange: boolean,
        fadeInRate: integer,
        fadeOutRate: integer
    ) {
        return new this(
            CreateSoundFromLabel(
                soundLabel,
                looping,
                is3D,
                stopWhenOutOfRange,
                Math.floor(fadeInRate),
                Math.floor(fadeOutRate)
            )
        )
    }

    public static createMIDI(soundLabel: string, fadeInRate: integer, fadeOutRate: integer) {
        return new this(
            CreateMIDISound(soundLabel, Math.floor(fadeInRate), Math.floor(fadeOutRate))
        )
    }

    public setParamsFromLabel(soundLabel: string) {
        SetSoundParamsFromLabel(this.getHandle, soundLabel)
        return this
    }

    public setDistanceCutoff(cutoff: real) {
        SetSoundDistanceCutoff(this.getHandle, cutoff)
        return this
    }

    public setChannel(channel: integer) {
        SetSoundChannel(this.getHandle, Math.floor(channel))
        return this
    }

    public setVolume(volume: integer) {
        SetSoundVolume(this.getHandle, Math.floor(volume))
        return this
    }

    public setPitch(pitch: real) {
        SetSoundPitch(this.getHandle, pitch)
        return this
    }

    /**
     * Must be called immediately after starting the sound
     * @param millisecs
     */
    public setPlayPosition(millisecs: integer) {
        SetSoundPlayPosition(this.getHandle, Math.floor(millisecs))
        return this
    }

    public setDistances(minDist: real, maxDist: real) {
        SetSoundDistances(this.getHandle, minDist, maxDist)
        return this
    }

    public setConeAngles(inside: real, outside: real, outsideVolume: integer) {
        SetSoundConeAngles(this.getHandle, inside, outside, Math.floor(outsideVolume))
        return this
    }

    public setConeOrientationCoords(x: real, y: real, z: real) {
        SetSoundConeOrientation(this.getHandle, x, y, z)
        return this
    }

    public setConeOrientationPos(p: Position) {
        return this.setConeOrientationCoords(p.getX(), p.getY(), p.getZ())
    }

    public setPositionCoords(x: real, y: real, z: real) {
        SetSoundPosition(this.getHandle, x, y, z)
        return this
    }

    public setPositionPos(p: Position) {
        return this.setPositionCoords(p.getX(), p.getY(), p.getZ())
    }

    public setVelocityCoords(x: real, y: real, z: real) {
        SetSoundVelocity(this.getHandle, x, y, z)
        return this
    }

    public setVelocityPos(p: Position) {
        return this.setVelocityCoords(p.getX(), p.getY(), p.getZ())
    }

    public attachToUnit(whichUnit: Unit) {
        AttachSoundToUnit(this.getHandle, whichUnit.getHandle)
        return this
    }

    public start() {
        StartSound(this.getHandle)
        return this
    }

    public stop(killWhenDone: boolean, fadeOut: boolean) {
        StopSound(this.getHandle, killWhenDone, fadeOut)
        return this
    }

    public killWhenDone() {
        KillSoundWhenDone(this.getHandle)
        return this
    }

    public getDuration(): integer {
        return GetSoundDuration(this.getHandle)
    }

    public setDuration(duration: integer) {
        SetSoundDuration(this.getHandle, Math.floor(duration))
        return this
    }

    public static getFileDuration(fileName: string): integer {
        return GetSoundFileDuration(fileName)
    }

    public isPlaying(): boolean {
        return GetSoundIsPlaying(this.getHandle)
    }

    public isLoading(): boolean {
        return GetSoundIsLoading(this.getHandle)
    }

    public registerStacked(byPosition: boolean, rectWidth: real, rectHeight: real) {
        RegisterStackedSound(this.getHandle, byPosition, rectWidth, rectHeight)
        return this
    }

    public unregisterStacked(byPosition: boolean, rectWidth: real, rectHeight: real) {
        UnregisterStackedSound(this.getHandle, byPosition, rectWidth, rectHeight)
        return this
    }

    public getDialogueSpeakerNameKey(): string {
        return GetDialogueSpeakerNameKey(this.getHandle)
    }

    public setDialogueSpeakerNameKey(speakerName: string) {
        SetDialogueSpeakerNameKey(this.getHandle, speakerName)
        return this
    }

    public getDalogueTextKey(): string {
        return GetDialogueTextKey(this.getHandle)
    }

    public setDialogueTextKey(dialogueText: string) {
        SetDialogueTextKey(this.getHandle, dialogueText)
        return this
    }

    public setFacialAnimationFilepath(animationSetFilepath: string) {
        SetSoundFacialAnimationSetFilepath(this.getHandle, animationSetFilepath)
        return this
    }

    public setFacialAnimationGroupLabel(groupLabel: string) {
        SetSoundFacialAnimationGroupLabel(this.getHandle, groupLabel)
        return this
    }

    public setFacialAnimationLabel(animationLabel: string) {
        SetSoundFacialAnimationLabel(this.getHandle, animationLabel)
        return this
    }

    public static fromHandle(handle: sound): Sound {
        return this.getObject(handle)
    }

    public static fromObject(object: Sound): sound {
        return this.getHandle(object)
    }
}
