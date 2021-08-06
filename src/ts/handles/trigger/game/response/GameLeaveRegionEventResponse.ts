import { Region } from "../../../Region";
import { Unit } from "../../../Unit";

export class GameLeaveRegionEventResponse {
    protected region: Region
    protected unit: Unit

    public constructor() {
        this.region = Region.fromEvent()
        this.unit = Unit.getLeaving()
    }

    public getRegion() {
        return this.region
    }

    public getUnit() {
        return this.unit
    }
}