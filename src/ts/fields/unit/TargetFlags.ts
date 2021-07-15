import { TargetFlag } from "../../API/fields/unit/TargetFlag";

export abstract class TargetFlags {
	public static readonly NONE = new TargetFlag(1)
	public static readonly GROUND = new TargetFlag(2)
	public static readonly AIR = new TargetFlag(4)
	public static readonly STRUCTURE = new TargetFlag(8)
	public static readonly WARD = new TargetFlag(16)
	public static readonly ITEM = new TargetFlag(32)
	public static readonly TREE = new TargetFlag(64)
	public static readonly WALL = new TargetFlag(128)
	public static readonly DEBRIS = new TargetFlag(256)
	public static readonly DECORATION = new TargetFlag(512)
	public static readonly BRIDGE = new TargetFlag(1024)
}