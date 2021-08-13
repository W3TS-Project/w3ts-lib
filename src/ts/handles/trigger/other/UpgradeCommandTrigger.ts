/** @noSelfInFile **/
//@ts-nocheck

import { UnitRawCode, UnitRawCodeType } from "../../rawCode/UnitRawCode"
import { Trigger } from "../Trigger"

declare function TriggerRegisterUpgradeCommandEvent(
    whichTrigger: trigger,
    whichUpgrade: number
): event

export class UpgradeCommandTrigger extends Trigger {
    register(whichUpgrade: UnitRawCodeType, callback?: code) {
        if (callback) this.addEventListener(callback)
        TriggerRegisterUpgradeCommandEvent(
            this.getHandle() as trigger,
            UnitRawCode.toId(whichUpgrade)
        )
        return this
    }

    constructor(whichUpgrade: UnitRawCodeType, callback?: code) {
        super()
        this.register(whichUpgrade, callback)
    }

    addEventListener(callback: code) {
        this.addAction(callback)
    }
}
