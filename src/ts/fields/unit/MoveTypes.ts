import { MoveType } from "../../API/fields/unit/MoveType";

export abstract class MoveTypes {
	public static readonly UNKNOWN = new MoveType(0)
	public static readonly FOOT = new MoveType(1)
	public static readonly FLY = new MoveType(2)
	public static readonly HORSE = new MoveType(4)
	public static readonly HOVER = new MoveType(8)
	public static readonly FLOAT = new MoveType(16)
	public static readonly AMPHIBIOUS = new MoveType(32)
	public static readonly UNBUILDABLE = new MoveType(64)
}