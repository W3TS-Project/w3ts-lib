/** @noSelfInFile **/
//@ts-nocheck

import { formatCC, RawCode } from "../utils"
import { Handle } from "./handle"
import { Rectangle } from "./rect"

declare function AddWeatherEffect(where: rect, effectID: number): weathereffect
declare function RemoveWeatherEffect(whichEffect: weathereffect): void
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void

export class WeatherEffect extends Handle<weathereffect> {
    public constructor(where: Rectangle, effectID: RawCode) {
        super(AddWeatherEffect(where.handle, formatCC(effectID)))
    }

    public destroy() {
        RemoveWeatherEffect(this.handle)
    }

    public set enable(enable: boolean) {
        EnableWeatherEffect(this.handle, enable)
    }

    public static fromHandle(handle: weathereffect): WeatherEffect {
        return this.getObject(handle)
    }
}
