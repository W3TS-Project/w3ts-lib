import { Region } from "../../../Region";
import { Unit } from "../../../Unit";

export class GameEnterRegionEventResponse {
    protected region: Region
    protected unit: Unit

    public constructor() {
        this.region = Region.fromEvent()
        this.unit = Unit.getEntering()
    }

    public getRegion() {
        return this.region
    }

    public getUnit() {
        return this.unit
    }
}