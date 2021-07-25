/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../RawCode"
import { Handle } from "./Handle"
import { Rectangle } from "./Rectangle"

declare function AddWeatherEffect(where: rect, effectID: number): weathereffect
declare function RemoveWeatherEffect(whichEffect: weathereffect): void
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void

export class WeatherEffect extends Handle<weathereffect> {
    public constructor(where: Rectangle, effectCode: RawCode) {
        super(AddWeatherEffect(where.getHandle, effectCode.getId()))
    }

    public destroy() {
        RemoveWeatherEffect(this.getHandle)
        return this
    }

    public enable(enable: boolean) {
        EnableWeatherEffect(this.getHandle, enable)
        return this
    }

    public static fromHandle(handle: weathereffect): WeatherEffect {
        return this.getObject(handle)
    }

    public static fromObject(object: WeatherEffect): weathereffect {
        return this.getHandle(object)
    }
}
