import { RacePref } from "../../API/fields/mapSetup/RacePref"

export abstract class RacePrefs {
    static readonly HUMAN = RacePref.convert(1)
    static readonly ORC = RacePref.convert(2)
    static readonly NIGHT_ELF = RacePref.convert(4)
    static readonly UNDEAD = RacePref.convert(8)
    static readonly DEMON = RacePref.convert(16)
    static readonly RANDOM = RacePref.convert(32)
    static readonly USER_SELECTABLE = RacePref.convert(64)
}
