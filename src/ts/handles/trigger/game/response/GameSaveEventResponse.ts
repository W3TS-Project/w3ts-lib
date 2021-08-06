/** @noSelfInFile **/
//@ts-nocheck

declare function GetSaveBasicFilename(): string

export class GameSaveEventResponse {
    protected basicFilename: string

    public constructor() {
        this.basicFilename = GetSaveBasicFilename()
    }

    public getBasicFilename() {
        return this.basicFilename
    }
}
