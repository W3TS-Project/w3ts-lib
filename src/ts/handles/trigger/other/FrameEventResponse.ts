import { Frame } from "../../Frame";
import { EventResponse } from "../Trigger";

export class FrameEventResponse extends EventResponse {
    frame = Frame.fromEvent()
}