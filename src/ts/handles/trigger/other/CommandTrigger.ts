/** @noSelfInFile **/
//@ts-nocheck

import { AbilityRawCode } from "../../rawCode/AbilityRawCode"
import { Trigger } from "../Trigger"

declare function TriggerRegisterCommandEvent(
    whichTrigger: trigger,
    whichAbility: integer,
    order: string
): event

export class CommandTrigger extends Trigger {
    register(whichAbility: AbilityRawCode, order: string) {
        TriggerRegisterCommandEvent(this.getHandle() as trigger, whichAbility.getId(), order)
        return this
    }

    constructor(whichAbility: AbilityRawCode, order: string) {
        super()
        if (whichAbility && order) {
            this.register(whichAbility, order)
        }
    }
}
