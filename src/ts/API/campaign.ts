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
    static setTutorialCleared(cleared: boolean) {
        SetTutorialCleared(cleared)
        return this
    }

    static setMissionAvailable(
        campaignNumber: integer,
        missionNumber: integer,
        available: boolean
    ) {
        SetMissionAvailable(Math.floor(campaignNumber), Math.floor(missionNumber), available)
        return this
    }

    static setAvailable(campaignNumber: integer, available: boolean) {
        SetCampaignAvailable(Math.floor(campaignNumber), available)
        return this
    }

    static setOpCinematicAvailable(campaignNumber: integer, available: boolean) {
        SetOpCinematicAvailable(Math.floor(campaignNumber), available)
        return this
    }

    static setEdCinematicAvailable(campaignNumber: integer, available: boolean) {
        SetEdCinematicAvailable(Math.floor(campaignNumber), available)
        return this
    }

    static getDefaultDifficulty(): GameDifficulty {
        return GameDifficulty.fromHandle(GetDefaultDifficulty())
    }

    static setDefaultDifficulty(g: GameDifficulty) {
        SetDefaultDifficulty(g.getHandle() as gamedifficulty)
        return this
    }

    static setCustomButtonVisible(whichButton: integer, visible: boolean) {
        SetCustomCampaignButtonVisible(Math.floor(whichButton), visible)
        return this
    }

    static getCustomButtonVisible(whichButton: integer): boolean {
        return GetCustomCampaignButtonVisible(Math.floor(whichButton))
    }

    static doNotSaveReplay() {
        DoNotSaveReplay()
        return this
    }
}
