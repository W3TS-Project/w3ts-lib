/** @noSelfInFile **/
// @ts-nocheck

declare function SetTutorialCleared(cleared: boolean): void
declare function SetMissionAvailable(
    campaignNumber: number,
    missionNumber: number,
    available: boolean
): void
declare function SetCampaignAvailable(campaignNumber: number, available: boolean): void
declare function SetOpCinematicAvailable(campaignNumber: number, available: boolean): void
declare function SetEdCinematicAvailable(campaignNumber: number, available: boolean): void
declare function GetDefaultDifficulty(): gamedifficulty
declare function SetDefaultDifficulty(g: gamedifficulty): void
declare function SetCustomCampaignButtonVisible(whichButton: number, visible: boolean): void
declare function GetCustomCampaignButtonVisible(whichButton: number): boolean
declare function DoNotSaveReplay(): void
B
export class Campaign {
    private constructor() {}

    static set tutorialCleared(cleared: boolean) {
        SetTutorialCleared(cleared)
    }

    static setMissionAvailable(campaignNumber: number, missionNumber: number, available: boolean) {
        this.setMissionAvailable(campaignNumber, missionNumber, available)
        return this
    }

    static setAvailable(campaignNumber: number, available: boolean) {
        SetCampaignAvailable(campaignNumber, available)
        return this
    }

    static setOpCinematicAvailable(campaignNumber: number, available: boolean) {
        SetOpCinematicAvailable(campaignNumber, available)
        return this
    }

    static setEdCinematicAvailable(campaignNumber: number, available: boolean) {
        SetEdCinematicAvailable(campaignNumber, available)
        return this
    }

    static get defaultDifficulty(): gamedifficulty {
        return GetDefaultDifficulty()
    }

    static set defaultDifficulty(g: gamedifficulty) {
        SetDefaultDifficulty(g)
        return this
    }

    static setCustomButtonVisible(whichButton: number, visible: boolean) {
        SetCustomCampaignButtonVisible(whichButton, visible)
        return this
    }

    static getCustomButtonVisible(whichButton: number): boolean {
        return GetCustomCampaignButtonVisible(whichButton)
    }

    static doNotSaveReplay() {
        DoNotSaveReplay()
    }
}
