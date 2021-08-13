/** @noSelfInFile **/
//@ts-nocheck

import { AbilityRawCode, AbilityRawCodeType } from "../../rawCode/AbilityRawCode"
import { Trigger } from "../Trigger"

declare function TriggerRegisterCommandEvent(
    whichTrigger: trigger,
    whichAbility: integer,
    order: string
): event

export class CommandTrigger extends Trigger {
    register(whichAbility: AbilityRawCodeType, order: string, callback?: code) {
        if (callback) this.addEventListener(callback)
        TriggerRegisterCommandEvent(
            this.getHandle() as trigger,
            AbilityRawCode.toId(whichAbility),
            order
        )
        return this
    }

    constructor(whichAbility: AbilityRawCodeType, order: string, callback?: code) {
        super()
        this.register(whichAbility, order, callback)
    }

    addEventListener(callback: code) {
        this.addAction(callback)
    }
}
