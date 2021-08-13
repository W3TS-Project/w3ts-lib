/** @noSelfInFile **/
//@ts-nocheck

import { EventResponse } from "../../Trigger";

declare function GetSaveBasicFilename(): string

export class GameSaveEventResponse extends EventResponse {
    basicFilename = GetSaveBasicFilename()
}
