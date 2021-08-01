// /** @noSelfInFile **/
// //@ts-nocheck

import { Dialog } from "./Dialog"
import { DialogButton } from "./DialogButton"
import { Frame } from "./Frame"
import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"
import { Region } from "./Region"
import { Timer } from "./Timer"
import { Trackable } from "./Trackable"
import { Unit } from "./Unit"
import { Widget } from "./Widget"

// trigger player based event
declare function TriggerRegisterPlayerUnitEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerUnitEvent: playerunitevent,
    filter: boolexpr | null
): event
declare function TriggerRegisterPlayerAllianceChange(
    whichTrigger: trigger,
    whichPlayer: player,
    whichAlliance: alliancetype
): event
declare function TriggerRegisterPlayerStateEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichState: playerstate,
    opcode: limitop,
    limitval: number
): event
declare function TriggerRegisterPlayerChatEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    chatMessageToDetect: string,
    exactMatchOnly: boolean
): event
declare function BlzTriggerRegisterPlayerSyncEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    prefix: string,
    fromServer: boolean
): event
declare function BlzTriggerRegisterPlayerKeyEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    key: oskeytype,
    metaKey: number,
    keyDown: boolean
): event

// trigger unit based event
declare function TriggerRegisterUnitStateEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichState: unitstate,
    opcode: limitop,
    limitval: number
): event
declare function TriggerRegisterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: unitevent
): event
declare function TriggerRegisterFilterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: unitevent,
    filter: boolexpr | null
): event
declare function TriggerRegisterUnitInRange(
    whichTrigger: trigger,
    whichUnit: unit,
    range: number,
    filter: boolexpr | null
): event

// BJ-event
declare function TriggerRegisterTimerEventPeriodic(trig: trigger, timeout: number): event
declare function TriggerRegisterTimerEventSingle(trig: trigger, timeout: number): event
declare function TriggerRegisterTimerExpireEventBJ(trig: trigger, t: timer): event
declare function TriggerRegisterPlayerUnitEventSimple(
    trig: trigger,
    whichPlayer: player,
    whichEvent: playerunitevent
): event
declare function TriggerRegisterAnyUnitEventBJ(trig: trigger, whichEvent: playerunitevent): void
declare function TriggerRegisterPlayerSelectionEventBJ(
    trig: trigger,
    whichPlayer: player,
    selected: boolean
): event
declare function TriggerRegisterPlayerKeyEventBJ(
    trig: trigger,
    whichPlayer: player,
    keType: number,
    keKey: number
): event
declare function TriggerRegisterPlayerMouseEventBJ(
    trig: trigger,
    whichPlayer: player,
    meType: number
): event
declare function TriggerRegisterPlayerEventVictory(trig: trigger, whichPlayer: player): event
declare function TriggerRegisterPlayerEventDefeat(trig: trigger, whichPlayer: player): event
declare function TriggerRegisterPlayerEventLeave(trig: trigger, whichPlayer: player): event
declare function TriggerRegisterPlayerEventAllianceChanged(
    trig: trigger,
    whichPlayer: player
): event
declare function TriggerRegisterPlayerEventEndCinematic(trig: trigger, whichPlayer: player): event
declare function TriggerRegisterGameStateEventTimeOfDay(
    trig: trigger,
    opcode: limitop,
    limitval: number
): event
declare function TriggerRegisterEnterRegionSimple(trig: trigger, whichRegion: region): event
declare function TriggerRegisterLeaveRegionSimple(trig: trigger, whichRegion: region): event
declare function TriggerRegisterEnterRectSimple(trig: trigger, r: rect): event
declare function TriggerRegisterLeaveRectSimple(trig: trigger, r: rect): event
declare function TriggerRegisterDistanceBetweenUnits(
    trig: trigger,
    whichUnit: unit,
    condition: boolexpr | null,
    range: number
): event
declare function TriggerRegisterUnitInRangeSimple(
    trig: trigger,
    range: number,
    whichUnit: unit
): event
declare function TriggerRegisterUnitLifeEvent(
    trig: trigger,
    whichUnit: unit,
    opcode: limitop,
    limitval: number
): event
declare function TriggerRegisterUnitManaEvent(
    trig: trigger,
    whichUnit: unit,
    opcode: limitop,
    limitval: number
): event
declare function TriggerRegisterDialogEventBJ(trig: trigger, whichDialog: dialog): event
declare function TriggerRegisterShowSkillEventBJ(trig: trigger): event
declare function TriggerRegisterBuildSubmenuEventBJ(trig: trigger): event
declare function TriggerRegisterBuildCommandEventBJ(trig: trigger, unitId: number): event
declare function TriggerRegisterTrainCommandEventBJ(trig: trigger, unitId: number): event
declare function TriggerRegisterUpgradeCommandEventBJ(trig: trigger, techId: number): event
declare function TriggerRegisterCommonCommandEventBJ(trig: trigger, order: string): event
declare function TriggerRegisterGameLoadedEventBJ(trig: trigger): event
declare function TriggerRegisterGameSavedEventBJ(trig: trigger): event
declare function RegisterDestDeathInRegionEnum(): void
declare function TriggerRegisterDestDeathInRegionEvent(trig: trigger, r: rect): void

declare function TriggerRegisterCommandEvent(
    whichTrigger: trigger,
    whichAbility: number,
    order: string
): event
declare function TriggerRegisterUpgradeCommandEvent(
    whichTrigger: trigger,
    whichUpgrade: number
): event
declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event

declare function BlzTriggerRegisterFrameEvent(
    whichTrigger: trigger,
    frame: framehandle,
    eventId: frameeventtype
): event