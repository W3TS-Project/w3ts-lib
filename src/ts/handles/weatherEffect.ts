/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../RawCode"
import { Handle } from "./Handle"
import { Rectangle } from "./Rectangle"

declare function AddWeatherEffect(where: rect, effectID: integer): weathereffect
declare function RemoveWeatherEffect(whichEffect: weathereffect): void
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void

export class WeatherEffect extends Handle<weathereffect> {
    public constructor(where: Rectangle, effectCode: RawCode) {
        super(AddWeatherEffect(where.getHandle() as rect, effectCode.getId()))
    }

    public remove() {
        RemoveWeatherEffect(this.getHandle() as weathereffect)
        return this
    }

    public enable(enable: boolean) {
        EnableWeatherEffect(this.getHandle() as weathereffect, enable)
        return this
    }

    public static fromHandle(handle: weathereffect): WeatherEffect {
        return this.getObject(handle) as WeatherEffect
    }
}
