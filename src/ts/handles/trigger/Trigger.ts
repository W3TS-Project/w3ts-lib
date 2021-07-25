import { Handle } from "../Handle";
import { Sound } from "../Sound";

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

export abstract class Trigger extends Handle<trigger> {
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