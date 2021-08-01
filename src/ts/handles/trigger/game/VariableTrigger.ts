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
    public register(varName: string, opcode: LimitOperation, limitval: real): GameEvent {
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

    public constructor(varName?: string, opcode?: LimitOperation, limitval?: real) {
        super()
        if (varName && opcode && limitval) {
            this.register(varName, opcode, limitval)
        }
    }
}
