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
    public static startMelee(num: MapPlayer, script: string) {
        StartMeleeAI(num.getHandle, script)
        return this
    }

    public static startCampaign(num: MapPlayer, script: string) {
        StartCampaignAI(num.getHandle, script)
        return this
    }

    public static command(num: MapPlayer, command: integer, data: integer) {
        CommandAI(num.getHandle, Math.round(command), Math.round(data))
        return this
    }

    public static pauseComp(p: MapPlayer, pause: boolean) {
        PauseCompAI(p.getHandle, pause)
        return this
    }

    public static getDifficulty(num: MapPlayer): AIDifficulty {
        return AIDifficulty.fromHandle(GetAIDifficulty(num.getHandle))
    }

    public static removeGuardPosition(hUnit: Unit) {
        RemoveGuardPosition(hUnit.getHandle)
        return this
    }

    public static recycleGuardPosition(hUnit: Unit) {
        RecycleGuardPosition(hUnit.getHandle)
        return this
    }

    public static removeAllGuardPositions(num: MapPlayer) {
        RemoveAllGuardPositions(num.getHandle)
        return this
    }
}
