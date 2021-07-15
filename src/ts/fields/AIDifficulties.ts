import { AIDifficulty } from "../API/fields/other/AIDifficulty";

export abstract class AIDifficulties {
	public static readonly NEWBIE = new AIDifficulty(0)
	public static readonly NORMAL = new AIDifficulty(1)
	public static readonly INSANE = new AIDifficulty(2)
}