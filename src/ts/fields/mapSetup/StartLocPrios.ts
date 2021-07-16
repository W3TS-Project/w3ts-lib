import { StartLocPrio } from "../../API/fields/mapSetup/StartLocPrio"

export abstract class StartLocPrios {
    public static readonly LOW = new StartLocPrio(0)
    public static readonly HIGH = new StartLocPrio(1)
    public static readonly NOT = new StartLocPrio(2)
}
