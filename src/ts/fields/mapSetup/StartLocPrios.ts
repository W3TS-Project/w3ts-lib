import { StartLocPrio } from "../../API/fields/mapSetup/StartLocPrio"

export abstract class StartLocPrios {
    static readonly LOW = StartLocPrio.convert(0)
    static readonly HIGH = StartLocPrio.convert(1)
    static readonly NOT = StartLocPrio.convert(2)
}
