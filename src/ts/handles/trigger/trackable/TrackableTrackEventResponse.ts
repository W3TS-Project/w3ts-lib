import { Trackable } from "../../Trackable";

export class TrackableTrackEventResponse {
    protected trackable?: Trackable

    public constructor() {
        this.trackable = Trackable.fromEvent()
    }

    public getTrackable() {
        return this.trackable
    }
}