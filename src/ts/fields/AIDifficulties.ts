import { AIDifficulty } from "../API/fields/other/AIDifficulty"

export abstract class AIDifficulties {
    static readonly NEWBIE = AIDifficulty.convert(0)
    static readonly NORMAL = AIDifficulty.convert(1)
    static readonly INSANE = AIDifficulty.convert(2)
}
