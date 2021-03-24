/** @noSelfInFile **/
// @ts-nocheck

import { formatCC, RawCode } from "../main"
import { Handle } from "./handle"
import { Rectangle } from "./rect"

declare function AddWeatherEffect(where: rect, effectID: number): weathereffect
declare function RemoveWeatherEffect(whichEffect: weathereffect): void
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void

export class WeatherEffect extends Handle<weathereffect> {
    constructor(where: Rectangle, effectID: RawCode) {
        super(
            Handle.initFromHandle() ? undefined : AddWeatherEffect(where.handle, formatCC(effectID))
        )
    }

    destroy() {
        RemoveWeatherEffect(this.handle)
    }

    set enable(enable: boolean) {
        EnableWeatherEffect(this.handle, enable)
    }

    static fromHandle(handle: weathereffect): WeatherEffect {
        return this.getObject(handle)
    }
}
