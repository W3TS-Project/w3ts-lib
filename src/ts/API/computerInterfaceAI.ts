/** @noSelfInFile **/
// @ts-nocheck

declare function StartMeleeAI(num: player, script: string): void
declare function StartCampaignAI(num: player, script: string): void
declare function CommandAI(num: player, command: number, data: number): void
declare function PauseCompAI(p: player, pause: boolean): void
declare function GetAIDifficulty(num: player): aidifficulty
declare function RemoveGuardPosition(hUnit: unit): void
declare function RecycleGuardPosition(hUnit: unit): void
declare function RemoveAllGuardPositions(num: player): void

import { MapPlayer } from "../handles/player"

export class AI {
    private constructor() {}

    static startMelee(num: MapPlayer, script: string) {
        StartMeleeAI(num.handle, script)
        return this
    }

    static startCampaign(num: MapPlayer, script: string) {
        StartCampaignAI(num.handle, script)
        return this
    }

    static command(num: MapPlayer, command: number, data: number) {
        CommandAI(num.handle, command, data)
        return this
    }

    static pauseComp(p: MapPlayer, pause: boolean) {
        PauseCompAI(p.handle, pause)
        return this
    }

    static get difficulty(num: MapPlayer): aidifficulty {
        return GetAIDifficulty(num)
    }

    static removeGuardPosition(hUnit: Unit) {
        RemoveGuardPosition(hUnit.handle)
        return this
    }

    static recycleGuardPosition(hUnit: Unit) {
        RecycleGuardPosition(hUnit.handle)
        return this
    }

    static removeAllGuardPositions(num: MapPlayer) {
        RemoveAllGuardPositions(num.handle)
        return this
    }
}
