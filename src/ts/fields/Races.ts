import { Race } from "../API/fields/other/Race"

export abstract class Races {
    public static readonly HUMAN = new Race(1)
    public static readonly ORC = new Race(2)
    public static readonly UNDEAD = new Race(3)
    public static readonly NIGHT_ELF = new Race(4)
    public static readonly DEMON = new Race(5)
    public static readonly OTHER = new Race(7)
}
