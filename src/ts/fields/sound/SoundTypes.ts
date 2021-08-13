import { SoundType } from "../../API/fields/sound/SoundType"

export abstract class SoundTypes {
    static readonly EFFECT = SoundType.convert(0)
    static readonly LOOPED_EFFECT = SoundType.convert(1)
}
