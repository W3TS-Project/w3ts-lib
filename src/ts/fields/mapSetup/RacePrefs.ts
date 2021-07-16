import { RacePref } from "../../API/fields/mapSetup/RacePref"

export abstract class RacePrefs {
    public static readonly HUMAN = new RacePref(1)
    public static readonly ORC = new RacePref(2)
    public static readonly NIGHT_ELF = new RacePref(4)
    public static readonly UNDEAD = new RacePref(8)
    public static readonly DEMON = new RacePref(16)
    public static readonly RANDOM = new RacePref(32)
    public static readonly USER_SELECTABLE = new RacePref(64)
}
