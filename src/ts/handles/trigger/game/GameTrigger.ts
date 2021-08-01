/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Trigger } from "../Trigger"
import { GameEventResponse } from "./response/GameEventResponse"

declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event

type Callback = (response: GameEventResponse) => void

export class GameTrigger extends Trigger {
    protected gameEvent: GameEvent

    public register(whichGameEvent: GameEvent, callback?: Callback): GameEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterGameEvent(
                    this.getHandle() as trigger,
                    whichGameEvent.getHandle() as gameevent
                )
            )) as gameevent
        )
    }

    public constructor(whichGameEvent: GameEvent, callback?: Callback) {
        super()
        this.gameEvent = whichGameEvent
        if (callback) {
            this.register(whichGameEvent, callback)
        }
    }

    public getGameEvent() {
        return this.gameEvent
    }

    public addEventListener(callback: Callback) {
        this.addAction(() => callback(new GameEventResponse(this.getGameEvent())))
    }
}
