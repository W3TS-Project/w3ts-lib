/** @noSelfInFile **/
// @ts-nocheck

import { GameDifficulty } from "./fields/game/GameDifficulty"

declare function SetTutorialCleared(cleared: boolean): void
declare function SetMissionAvailable(
    campaignNumber: integer,
    missionNumber: integer,
    available: boolean
): void
declare function SetCampaignAvailable(campaignNumber: integer, available: boolean): void
declare function SetOpCinematicAvailable(campaignNumber: integer, available: boolean): void
declare function SetEdCinematicAvailable(campaignNumber: integer, available: boolean): void
declare function GetDefaultDifficulty(): gamedifficulty
declare function SetDefaultDifficulty(g: gamedifficulty): void
declare function SetCustomCampaignButtonVisible(whichButton: integer, visible: boolean): void
declare function GetCustomCampaignButtonVisible(whichButton: integer): boolean
declare function DoNotSaveReplay(): void

export abstract class Campaign {
    public static setTutorialCleared(cleared: boolean) {
        SetTutorialCleared(cleared)
        return this
    }

    public static setMissionAvailable(
        campaignNumber: integer,
        missionNumber: integer,
        available: boolean
    ) {
        SetMissionAvailable(Math.round(campaignNumber), Math.round(missionNumber), available)
        return this
    }

    public static setAvailable(campaignNumber: integer, available: boolean) {
        SetCampaignAvailable(Math.round(campaignNumber), available)
        return this
    }

    public static setOpCinematicAvailable(campaignNumber: integer, available: boolean) {
        SetOpCinematicAvailable(Math.round(campaignNumber), available)
        return this
    }

    public static setEdCinematicAvailable(campaignNumber: integer, available: boolean) {
        SetEdCinematicAvailable(Math.round(campaignNumber), available)
        return this
    }

    public static getDefaultDifficulty(): GameDifficulty {
        return GameDifficulty.fromHandle(GetDefaultDifficulty())
    }

    public static setDefaultDifficulty(g: GameDifficulty) {
        SetDefaultDifficulty(g.getHandle)
        return this
    }

    public static setCustomButtonVisible(whichButton: integer, visible: boolean) {
        SetCustomCampaignButtonVisible(Math.round(whichButton), visible)
        return this
    }

    public static getCustomButtonVisible(whichButton: integer): boolean {
        return GetCustomCampaignButtonVisible(Math.round(whichButton))
    }

    public static doNotSaveReplay() {
        DoNotSaveReplay()
        return this
    }
}
