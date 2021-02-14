/** @noSelfInFile **/
// @ts-nocheck

import { formatCC } from "../main"
import { Handle } from "./handle"
import { Rectangle } from "./rect"

declare function AddWeatherEffect(where: rect, effectID: number): weathereffect
declare function RemoveWeatherEffect(whichEffect: weathereffect): void
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void

export class WeatherEffect extends Handle<weathereffect> {
    constructor(where: Rectangle, effectID: rawcode) {
        if (Handle.initFromHandle()) {
            super()
        } else {
            super(AddWeatherEffect(where.handle, formatCC(effectID)))
        }
    }

    remove() {
        RemoveWeatherEffect(this.handle)
    }

    set enable(enable: boolean) {
        EnableWeatherEffect(this.handle, enable)
    }

    static fromHandle(handle: weathereffect): WeatherEffect {
        return this.getObject(handle)
    }
}
