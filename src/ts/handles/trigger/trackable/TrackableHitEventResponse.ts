import { Trackable } from "../../Trackable"

export class TrackableHitEventResponse {
    protected trackable?: Trackable

    public constructor() {
        this.trackable = Trackable.fromEvent()
    }

    public getTrackable() {
        return this.trackable
    }
}
