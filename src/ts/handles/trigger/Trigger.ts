/** @noSelfInFile **/
//@ts-nocheck

import { ErrorHandling } from "../../ErrorHandling"
import { ObjectOptions } from "../../ObjectOptions"
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

export class EventResponse {
    trigger = Trigger.fromEvent()
}

export type EventCallback = (response: EventResponse) => void

export class Trigger extends Handle<trigger> {
    readonly actions: WeakSet<triggeraction> = new WeakSet<triggeraction>()

    constructor() {
        super(CreateTrigger())
    }

    destroy() {
        DestroyTrigger(this.getHandle() as trigger)
        return this
    }

    reset() {
        ResetTrigger(this.getHandle() as trigger)
        return this
    }

    enable() {
        EnableTrigger(this.getHandle() as trigger)
        return this
    }

    disable() {
        DisableTrigger(this.getHandle() as trigger)
        return this
    }

    isEnabled() {
        return IsTriggerEnabled(this.getHandle() as trigger)
    }

    waitOnSleeps(flag: boolean) {
        TriggerWaitOnSleeps(this.getHandle() as trigger, flag)
        return this
    }

    isWaitOnSleeps() {
        return IsTriggerWaitOnSleeps(this.getHandle() as trigger)
    }

    getEvalCount(): integer {
        return GetTriggerEvalCount(this.getHandle() as trigger)
    }

    getExecCount(): integer {
        return GetTriggerExecCount(this.getHandle() as trigger)
    }

    addCondition(filterFunc: codeboolexpr): triggercondition {
        return TriggerAddCondition(this.getHandle() as trigger, Condition(filterFunc))
    }

    removeCondition(whichCondition: triggercondition) {
        TriggerRemoveCondition(this.getHandle() as trigger, whichCondition)
        return this
    }

    clearConditions() {
        TriggerClearConditions(this.getHandle() as trigger)
        return this
    }

    addAction(actionFunc: EventCallback) {
        const action = TriggerAddAction(
            this.getHandle() as trigger,
            ErrorHandling.getHandledCallback(() => actionFunc(new EventResponse()))
        )
        this.actions.add(action)
        return action
    }

    removeAction(whichAction: triggeraction) {
        TriggerRemoveAction(this.getHandle() as trigger, whichAction)
        this.actions.delete(whichAction)
        return this
    }

    clearActions() {
        TriggerClearActions(this.getHandle() as trigger)
        const actions = ObjectOptions.values(this.actions)
        for (const action of actions) {
            this.actions.delete(action)
        }
        return this
    }

    static sleepAction(timeout: real) {
        TriggerSleepAction(timeout)
        return this
    }

    static waitForSound(s: Sound, offset: real) {
        TriggerWaitForSound(s.getHandle() as sound, offset)
        return this
    }

    evaluate() {
        return TriggerEvaluate(this.getHandle() as trigger)
    }

    execute() {
        TriggerExecute(this.getHandle() as trigger)
        return this
    }

    executeWait() {
        TriggerExecuteWait(this.getHandle() as trigger)
        return this
    }

    static syncStart() {
        TriggerSyncStart()
        return this
    }

    static syncReady() {
        TriggerSyncReady()
        return this
    }

    static fromHandle(handle: trigger) {
        return this.getObject(handle) as Trigger
    }

    static fromEvent() {
        return this.fromHandle(GetTriggeringTrigger())
    }
}
