/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { LimitOperation } from "../../../API/fields/events/LimitOperation"
import { Trigger } from "../Trigger"

declare function TriggerRegisterVariableEvent(
    whichTrigger: trigger,
    varName: string,
    opcode: limitop,
    limitval: real
): event

export class VariableTrigger extends Trigger {
    register(varName: string, opcode: LimitOperation, limitval: real, callback?: code) {
        if (callback) this.addEventListener(callback)
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterVariableEvent(
                    this.getHandle() as trigger,
                    varName,
                    opcode.getHandle() as limitop,
                    limitval
                )
            )) as gameevent
        )
    }

    constructor(varName: string, opcode: LimitOperation, limitval: real, callback?: code) {
        super()
        this.register(varName, opcode, limitval, callback)
    }

    addEventListener(callback: code) {
        this.addAction(callback)
    }
}
