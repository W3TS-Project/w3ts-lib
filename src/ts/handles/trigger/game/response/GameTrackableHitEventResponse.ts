import { Trackable } from "../../../Trackable";

export class GameTrackableHitEventResponse {
    protected trackable: Trackable

    public constructor() {
        this.trackable = Trackable.fromEvent()
    }

    public getTrackable() {
        return this.trackable
    }
}