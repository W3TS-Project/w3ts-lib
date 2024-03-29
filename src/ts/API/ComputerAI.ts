/** @noSelfInFile **/
// @ts-nocheck

declare function StartMeleeAI(num: player, script: string): void
declare function StartCampaignAI(num: player, script: string): void
declare function CommandAI(num: player, command: integer, data: integer): void
declare function PauseCompAI(p: player, pause: boolean): void
declare function GetAIDifficulty(num: player): aidifficulty
declare function RemoveGuardPosition(hUnit: unit): void
declare function RecycleGuardPosition(hUnit: unit): void
declare function RemoveAllGuardPositions(num: player): void

import { MapPlayer } from "../handles/MapPlayer"
import { Unit } from "../handles/Unit"
import { AIDifficulty } from "./fields/other/AIDifficulty"

export abstract class ComputerAI {
    static startMelee(num: MapPlayer, script: string) {
        StartMeleeAI(num.getHandle() as player, script)
        return this
    }

    static startCampaign(num: MapPlayer, script: string) {
        StartCampaignAI(num.getHandle() as player, script)
        return this
    }

    static command(num: MapPlayer, command: integer, data: integer) {
        CommandAI(num.getHandle() as player, Math.floor(command), Math.floor(data))
        return this
    }

    static pauseComp(p: MapPlayer, pause: boolean) {
        PauseCompAI(p.getHandle() as player, pause)
        return this
    }

    static getDifficulty(num: MapPlayer): AIDifficulty {
        return AIDifficulty.fromHandle(GetAIDifficulty(num.getHandle() as player)) as AIDifficulty
    }

    static removeGuardPosition(hUnit: Unit) {
        RemoveGuardPosition(hUnit.getHandle() as unit)
        return this
    }

    static recycleGuardPosition(hUnit: Unit) {
        RecycleGuardPosition(hUnit.getHandle() as unit)
        return this
    }

    static removeAllGuardPositions(num: MapPlayer) {
        RemoveAllGuardPositions(num.getHandle() as player)
        return this
    }
}
