import { SoundType } from "../../API/fields/sound/SoundType";

export abstract class SoundTypes {
	public static readonly EFFECT = new SoundType(0)
	public static readonly LOOPED_EFFECT = new SoundType(1)
}