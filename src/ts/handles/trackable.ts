/** @noSelfInFile **/
//@ts-nocheck

import { real } from "../utils"
import { Handle } from "./handle"

declare function CreateTrackable(
    trackableModelPath: string,
    x: real,
    y: real,
    facing: real
): trackable
declare function GetTriggeringTrackable(): trackable

export class Trackable extends Handle<trackable> {
    public constructor(trackableModelPath: string, x: real, y: real, facing: real) {
        super(CreateTrackable(trackableModelPath, x, y, facing))
    }

    public static fromHandle(handle: trackable): Trackable {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggeringTrackable())
    }

    public static fromObject(object: Trackable): trackable {
        return this.getHandle(object)
    }
}
