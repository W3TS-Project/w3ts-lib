/** @noSelfInFile **/
//@ts-nocheck

import { UnitRawCode } from "../../rawCode/UnitRawCode"
import { Trigger } from "../Trigger"

declare function TriggerRegisterUpgradeCommandEvent(
    whichTrigger: trigger,
    whichUpgrade: number
): event

export class UpgradeCommandTrigger extends Trigger {
    register(whichUpgrade: UnitRawCode) {
        TriggerRegisterUpgradeCommandEvent(this.getHandle() as trigger, whichUpgrade.getId())
        return this
    }

    constructor(whichUpgrade: UnitRawCode) {
        super()
        if (whichUpgrade) {
            this.register(whichUpgrade)
        }
    }
}
