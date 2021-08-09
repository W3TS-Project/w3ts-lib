// /** @noSelfInFile **/
// //@ts-nocheck

import { UnitEvent } from "../../../API/fields/events/UnitEvent"
import { UnitEvents } from "../../../fields/events/UnitEvents"
import { Unit } from "../../Unit"
import { Trigger } from "../Trigger"
import { UnitEventResponse } from "./UnitEventResponse"

declare function TriggerRegisterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: unitevent
): event

const getUnitTriggerClass = <T extends UnitEventResponse, R extends (response: T) => void>(
    event: UnitEvent,
    func: () => T
) =>
    class extends Trigger {
        event: UnitEvent

        register(whichUnit: Unit, callback?: R) {
            if (callback) {
                this.addEventListener(callback)
            }
            return UnitEvent.fromHandle(
                (<unknown>(
                    TriggerRegisterUnitEvent(
                        this.getHandle() as trigger,
                        whichUnit.getHandle() as unit,
                        event.getHandle() as unitevent
                    )
                )) as unitevent
            )
        }

        constructor(whichUnit?: Unit, callback?: R) {
            super()
            this.event = event
            if (whichUnit && callback) {
                this.register(whichUnit, callback)
            }
        }

        addEventListener(callback: R) {
            this.addAction(() => callback(func()))
        }
    }

