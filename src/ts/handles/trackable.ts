import { real } from "../main";
import { Handle } from "./handle";

declare function CreateTrackable(trackableModelPath: string, x: real, y: real, facing: real): trackable

export class Trackable extends Handle<trackable> {
    constructor(trackableModelPath: string, x: real, y: real, facing: real) {
        super(Handle.initFromHandle() ? undefined : CreateTrackable(trackableModelPath, x, y, facing))
    }
}