import { Race } from "../API/fields/other/Race"

export abstract class Races {
    static readonly HUMAN = Race.convert(1)
    static readonly ORC = Race.convert(2)
    static readonly UNDEAD = Race.convert(3)
    static readonly NIGHT_ELF = Race.convert(4)
    static readonly DEMON = Race.convert(5)
    static readonly OTHER = Race.convert(7)
}
