import { real } from "../utils";
import { Handle } from "./handle";

declare function CreateTrackable(trackableModelPath: string, x: real, y: real, facing: real): trackable

export class Trackable extends Handle<trackable> {
    constructor(trackableModelPath: string, x: real, y: real, facing: real) {
        super(CreateTrackable(trackableModelPath, x, y, facing))
    }
}