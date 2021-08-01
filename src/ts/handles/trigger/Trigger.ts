/** @noSelfInFile **/
//@ts-nocheck

import { ErrorHandling } from "../../ErrorHandling"
import { Handle } from "../Handle"
import { Sound } from "../Sound"

declare function CreateTrigger(): trigger
declare function DestroyTrigger(whichTrigger: trigger): void
declare function ResetTrigger(whichTrigger: trigger): void
declare function EnableTrigger(whichTrigger: trigger): void
declare function DisableTrigger(whichTrigger: trigger): void
declare function IsTriggerEnabled(whichTrigger: trigger): boolean
declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): void
declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean
declare function GetTriggeringTrigger(): trigger
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
declare function TriggerAddAction(whichTrigger: trigger, actionFunc: code): triggeraction
declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): void
declare function TriggerClearActions(whichTrigger: trigger): void
declare function TriggerSleepAction(timeout: real): void
declare function TriggerWaitForSound(s: sound, offset: real): void
declare function TriggerEvaluate(whichTrigger: trigger): boolean
declare function TriggerExecute(whichTrigger: trigger): void
declare function TriggerExecuteWait(whichTrigger: trigger): void
declare function TriggerSyncStart(): void
declare function TriggerSyncReady(): void

export class Trigger extends Handle<trigger> {
    constructor() {
        super(CreateTrigger())
    }
    public destroy() {
        DestroyTrigger(this.getHandle() as trigger)
        return this
    }

    public reset() {
        ResetTrigger(this.getHandle() as trigger)
        return this
    }

    public enable() {
        EnableTrigger(this.getHandle() as trigger)
        return this
    }

    public disable() {
        DisableTrigger(this.getHandle() as trigger)
        return this
    }

    public isEnabled() {
        return IsTriggerEnabled(this.getHandle() as trigger)
    }

    public waitOnSleeps(flag: boolean) {
        TriggerWaitOnSleeps(this.getHandle() as trigger, flag)
        return this
    }

    public isWaitOnSleeps() {
        return IsTriggerWaitOnSleeps(this.getHandle() as trigger)
    }

    public getEvalCount(): integer {
        return GetTriggerEvalCount(this.getHandle() as trigger)
    }

    public getExecCount(): integer {
        return GetTriggerExecCount(this.getHandle() as trigger)
    }

    public addCondition(filterFunc: codeboolexpr): triggercondition {
        return TriggerAddCondition(this.getHandle() as trigger, Condition(filterFunc))
    }

    public removeCondition(whichCondition: triggercondition) {
        TriggerRemoveCondition(this.getHandle() as trigger, whichCondition)
        return this
    }

    public clearConditions() {
        TriggerClearConditions(this.getHandle() as trigger)
        return this
    }

    public addAction(actionFunc: code) {
        return TriggerAddAction(
            this.getHandle() as trigger,
            ErrorHandling.getHandledCallback(actionFunc)
        )
    }

    public removeAction(whichAction: triggeraction) {
        TriggerRemoveAction(this.getHandle() as trigger, whichAction)
        return this
    }

    public clearActions() {
        TriggerClearActions(this.getHandle() as trigger)
        return this
    }

    public static sleepAction(timeout: real) {
        TriggerSleepAction(timeout)
        return this
    }

    public static waitForSound(s: Sound, offset: real) {
        TriggerWaitForSound(s.getHandle() as sound, offset)
        return this
    }

    public evaluate() {
        return TriggerEvaluate(this.getHandle() as trigger)
    }

    public execute() {
        TriggerExecute(this.getHandle() as trigger)
        return this
    }

    public executeWait() {
        TriggerExecuteWait(this.getHandle() as trigger)
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

    public static fromHandle(handle: trigger) {
        return this.getObject(handle) as Trigger
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggeringTrigger())
    }
}
