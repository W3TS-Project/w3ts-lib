/** @noSelfInFile **/
//@ts-nocheck

import { getHandledCallback } from "../ErrorHandling"
import { code, codeboolexpr, integer, real } from "../Utils"
import { Dialog, DialogButton } from "./Dialog"
import { Frame } from "./Frame"
import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"
import { Region } from "./Region"
import { Sound } from "./Sound"
import { Timer } from "./Timer"
import { Trackable } from "./Trackable"
import { Unit } from "./Unit"
import { Widget } from "./Widget"

// trigger
declare function CreateTrigger(): trigger
declare function DestroyTrigger(whichTrigger: trigger): void
declare function ResetTrigger(whichTrigger: trigger): void
declare function EnableTrigger(whichTrigger: trigger): void
declare function DisableTrigger(whichTrigger: trigger): void
declare function IsTriggerEnabled(whichTrigger: trigger): boolean
declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): void
declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean
declare function GetTriggeringTrigger(): trigger
declare function GetTriggerEventId(): eventid
declare function GetTriggerEvalCount(whichTrigger: trigger): integer
declare function GetTriggerExecCount(whichTrigger: trigger): integer
declare function TriggerAddCondition(
    whichTrigger: trigger,
    condition: boolexpr | null
): triggercondition
declare function TriggerRemoveCondition(
    whichTrigger: trigger,
    whichCondition: triggercondition
): void
declare function TriggerClearConditions(whichTrigger: trigger): void
declare let TriggerAddAction: (whichTrigger: trigger, actionFunc: () => void) => triggeraction
declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): void
declare function TriggerClearActions(whichTrigger: trigger): void
declare function TriggerSleepAction(timeout: real): void
declare function TriggerWaitForSound(s: sound, offset: real): void
declare function TriggerEvaluate(whichTrigger: trigger): boolean
declare function TriggerExecute(whichTrigger: trigger): void
declare function TriggerExecuteWait(whichTrigger: trigger): void
declare function TriggerSyncStart(): void
declare function TriggerSyncReady(): void

// trigger game event
declare function TriggerRegisterVariableEvent(
    whichTrigger: trigger,
    varName: string,
    opcode: limitop,
    limitval: number
): event
declare function TriggerRegisterTimerEvent(
    whichTrigger: trigger,
    timeout: number,
    periodic: boolean
): event
declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event
declare function TriggerRegisterGameStateEvent(
    whichTrigger: trigger,
    whichState: gamestate,
    opcode: limitop,
    limitval: number
): event
declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event
declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event
declare function GetEventGameState(): gamestate
declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event
declare function TriggerRegisterEnterRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr | null
): event
declare function TriggerRegisterLeaveRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr | null
): event
declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event
declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event
declare function GetTournamentFinishSoonTimeRemaining(): real
declare function GetTournamentFinishNowRule(): integer
declare function GetTournamentFinishNowPlayer(): player
declare function GetTournamentScore(whichPlayer: player): integer
declare function GetSaveBasicFilename(): string

// trigger player based event
declare function TriggerRegisterPlayerEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerEvent: playerevent
): event
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

const realTriggerAddACtion = TriggerAddAction
TriggerAddAction = (whichTrigger: trigger, actionFunc: () => void) =>
    realTriggerAddACtion(whichTrigger, getHandledCallback(actionFunc))

export class Trigger extends Handle<trigger> {
    public constructor() {
        super(CreateTrigger())
    }

    public destroy() {
        DestroyTrigger(this.getHandle)
        return this
    }

    public reset() {
        ResetTrigger(this.getHandle)
        return this
    }

    public enable() {
        EnableTrigger(this.getHandle)
        return this
    }

    public disable() {
        DisableTrigger(this.getHandle)
        return this
    }

    public isEnabled(): boolean {
        return IsTriggerEnabled(this.getHandle)
    }

    public waitOnSleeps(flag: boolean) {
        TriggerWaitOnSleeps(this.getHandle, flag)
        return this
    }

    public isWaitOnSleeps(): boolean {
        return IsTriggerWaitOnSleeps(this.getHandle)
    }

    public static getEventId(): eventid {
        return GetTriggerEventId()
    }

    public getEvalCount(): integer {
        return GetTriggerEvalCount(this.getHandle)
    }

    public getExecCount(): integer {
        return GetTriggerExecCount(this.getHandle)
    }

    public addCondition(filterFunc: codeboolexpr): triggercondition {
        return TriggerAddCondition(this.getHandle, Condition(filterFunc))
    }

    public removeCondition(whichCondition: triggercondition) {
        TriggerRemoveCondition(this.getHandle, whichCondition)
        return this
    }

    public clearConditions() {
        TriggerClearConditions(this.getHandle)
        return this
    }

    public addAction(actionFunc: code) {
        return TriggerAddAction(this.getHandle, actionFunc)
    }

    public removeAction(whichAction: triggeraction) {
        TriggerRemoveAction(this.getHandle, whichAction)
        return this
    }

    public clearActions() {
        TriggerClearActions(this.getHandle)
        return this
    }

    public static sleepAction(timeout: real) {
        TriggerSleepAction(timeout)
        return this
    }

    public static waitForSound(s: Sound, offset: real) {
        TriggerWaitForSound(s.getHandle, offset)
        return this
    }

    public evaluate(): boolean {
        return TriggerEvaluate(this.getHandle)
    }

    public execute() {
        TriggerExecute(this.getHandle)
        return this
    }

    public executeWait() {
        TriggerExecuteWait(this.getHandle)
        return this
    }

    public static syncStart() {
        TriggerSyncStart()
        return this
    }

    public static syncReady() {
        TriggerSyncReady()
        return this
    }



    // Game Events

    public registerVariableEvent(varName: string, opcode: limitop, limitval: real): event {
        return TriggerRegisterVariableEvent(this.getHandle, varName, opcode, limitval)
    }

    // Creates it's own timer and triggers when it expires
    public registerTimerEvent(timeout: real, periodic: boolean): event {
        return TriggerRegisterTimerEvent(this.getHandle, timeout, periodic)
    }

    // Triggers when the timer you tell it about expires
    public registerTimerExpireEvent(t: Timer): event {
        return TriggerRegisterTimerExpireEvent(this.getHandle, t.getHandle)
    }

    public registerGameStateEvent(whichState: gamestate, opcode: limitop, limitval: real): event {
        return TriggerRegisterGameStateEvent(this.getHandle, whichState, opcode, limitval)
    }

    public registerDialogEvent(whichDialog: Dialog): event {
        return TriggerRegisterDialogEvent(this.getHandle, whichDialog.getHandle)
    }

    public registerDialogButtonEvent(whichButton: DialogButton): event {
        return TriggerRegisterDialogButtonEvent(this.getHandle, whichButton.getHandle)
    }

    /** 
     * EVENT_GAME_STATE_LIMIT
     */
    public static getEventGameState(): gamestate {
        return GetEventGameState()
    }

    public registerGameEvent(whichGameEvent: gameevent): event {
        return TriggerRegisterGameEvent(this.getHandle, whichGameEvent)
    }

    public registerEnterRegion(whichRegion: Region, filterFunc: codeboolexpr): event {
        return TriggerRegisterEnterRegion(this.getHandle, whichRegion.getHandle, Condition(filterFunc))
    }

    public registerLeaveRegion(whichRegion: Region, filterFunc: codeboolexpr): event {
        return TriggerRegisterLeaveRegion(this.getHandle, whichRegion.getHandle, Condition(filterFunc))
    }

    public registerTrackableHitEvent(t: Trackable): event {
        return TriggerRegisterTrackableHitEvent(this.getHandle, t.getHandle)
    }

    public registerTrackableTrackEvent(t: Trackable): event {
        return TriggerRegisterTrackableTrackEvent(this.getHandle, t.getHandle)
    }

    /**
     * EVENT_GAME_TOURNAMENT_FINISH_SOON
     * @returns real
     */
     public static getTournamentFinishSoonTimeRemaining(): real {
        return GetTournamentFinishSoonTimeRemaining()
    }

    public static getTournamentFinishNowRule(): integer {
        return GetTournamentFinishNowRule()
    }

    public static getTournamentFinishNowPlayer(): MapPlayer {
        return MapPlayer.fromHandle(GetTournamentFinishNowPlayer())
    }

    public static getTournamentScore(whichPlayer: MapPlayer): integer {
        return GetTournamentScore(whichPlayer.getHandle)
    }

    /**
     * EVENT_GAME_SAVE
     * @returns string
     */
    public static getSaveBasicFilename(): string {
        return GetSaveBasicFilename()
    }



    // Player Based Events

    public registerPlayerEvent(whichPlayer: MapPlayer, whichPlayerEvent: playerevent): event {
        return TriggerRegisterPlayerEvent(this.getHandle, whichPlayer.getHandle, whichPlayerEvent)
    }

    public registerPlayerUnitEvent(whichPlayer: MapPlayer, whichPlayerUnitEvent: playerunitevent, filterFunc: codeboolexpr): event {
        return TriggerRegisterPlayerUnitEvent(this.getHandle, whichPlayer.getHandle, whichPlayerUnitEvent, Condition(filterFunc))
    }





    public registerAnyUnitEvent(whichPlayerUnitEvent: playerunitevent) {
        return TriggerRegisterAnyUnitEventBJ(this.getHandle, whichPlayerUnitEvent)
    }

    public registerCommandEvent(whichAbility: number, order: string) {
        return TriggerRegisterCommandEvent(this.getHandle, whichAbility, order)
    }

    public registerDeathEvent(whichWidget: Widget) {
        return TriggerRegisterDeathEvent(this.getHandle, whichWidget.handle)
    }

    public registerFilterUnitEvent(
        whichUnit: unit,
        whichEvent: unitevent,
        filterFunc: codeboolexpr
    ) {
        return TriggerRegisterFilterUnitEvent(this.getHandle, whichUnit, whichEvent, Condition(filterFunc))
    }

    public registerPlayerAllianceChange(whichPlayer: MapPlayer, whichAlliance: alliancetype) {
        return TriggerRegisterPlayerAllianceChange(this.getHandle, whichPlayer.handle, whichAlliance)
    }

    public registerPlayerChatEvent(
        whichPlayer: MapPlayer,
        chatMessageToDetect: string,
        exactMatchOnly: boolean
    ) {
        return TriggerRegisterPlayerChatEvent(
            this.getHandle,
            whichPlayer.handle,
            chatMessageToDetect,
            exactMatchOnly
        )
    }

    public registerPlayerKeyEvent(
        whichPlayer: MapPlayer,
        whichKey: oskeytype,
        metaKey: number,
        fireOnKeyDown: boolean
    ) {
        return BlzTriggerRegisterPlayerKeyEvent(
            this.getHandle,
            whichPlayer.handle,
            whichKey,
            metaKey,
            fireOnKeyDown
        )
    }

    public registerPlayerMouseEvent(whichPlayer: MapPlayer, whichMouseEvent: number) {
        return TriggerRegisterPlayerMouseEventBJ(this.getHandle, whichPlayer.handle, whichMouseEvent)
    }

    public registerPlayerStateEvent(
        whichPlayer: MapPlayer,
        whichState: playerstate,
        opcode: limitop,
        limitval: number
    ) {
        return TriggerRegisterPlayerStateEvent(
            this.getHandle,
            whichPlayer.handle,
            whichState,
            opcode,
            limitval
        )
    }

    public registerPlayerSyncEvent(whichPlayer: MapPlayer, prefix: string, fromServer: boolean) {
        return BlzTriggerRegisterPlayerSyncEvent(
            this.getHandle,
            whichPlayer.handle,
            prefix,
            fromServer
        )
    }



    public registerUnitEvent(whichUnit: Unit, whichEvent: unitevent) {
        return TriggerRegisterUnitEvent(this.getHandle, whichUnit.handle, whichEvent)
    }

    public registerUnitInRage(
        whichUnit: unit,
        range: number,
        filterFunc: codeboolexpr
    ) {
        return TriggerRegisterUnitInRange(this.getHandle, whichUnit, range, Condition(filterFunc))
    }

    public registerUnitStateEvent(
        whichUnit: Unit,
        whichState: unitstate,
        opcode: limitop,
        limitval: number
    ) {
        return TriggerRegisterUnitStateEvent(
            this.getHandle,
            whichUnit.handle,
            whichState,
            opcode,
            limitval
        )
    }

    public registerUpgradeCommandEvent(whichUpgrade: number) {
        return TriggerRegisterUpgradeCommandEvent(this.getHandle, whichUpgrade)
    }

    public removeActions() {
        return TriggerClearActions(this.getHandle)
    }

    public removeConditions() {
        return TriggerClearConditions(this.getHandle)
    }

    public triggerRegisterFrameEvent(frame: Frame, eventId: frameeventtype) {
        return BlzTriggerRegisterFrameEvent(this.getHandle, frame.handle, eventId)
    }

    public static fromHandle(handle: trigger): Trigger {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggeringTrigger())
    }

    public static fromObject(object: Trigger): trigger {
        return this.getHandle(object)
    }
}
