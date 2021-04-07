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
        super(AddWeatherEffect(where.getHandle, formatCC(effectID)))
    }

    public destroy() {
        RemoveWeatherEffect(this.getHandle)
    }

    public set enable(enable: boolean) {
        EnableWeatherEffect(this.getHandle, enable)
    }

    public static fromHandle(handle: weathereffect): WeatherEffect {
        return this.getObject(handle)
    }

    public static fromObject(object: WeatherEffect): weathereffect {
        return this.getHandle(object)
    }
}
