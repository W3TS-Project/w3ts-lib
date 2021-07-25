/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"

declare function CreateTrackable(
    trackableModelPath: string,
    x: real,
    y: real,
    facing: real
): trackable
declare function GetTriggeringTrackable(): trackable

export class Trackable extends Handle<trackable> {
    public static createCoords(trackableModelPath: string, x: real, y: real, facing: real) {
        return new this(CreateTrackable(trackableModelPath, x, y, facing))
    }

    public static createPos(trackableModelPath: string, p: Position, facing: real) {
        return this.createCoords(trackableModelPath, p.getX(), p.getY(), facing)
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
