import { Region } from "../../Region";
import { Unit } from "../../Unit";

export class EnterRegionEventResponse {
    protected region?: Region
    protected unit?: Unit

    public constructor() {
        this.region = Region.fromEvent()
        this.unit = Unit.fromEvent()
    }

    public getRegion() {
        return this.region
    }

    public getUnit() {
        return this.unit
    }
}