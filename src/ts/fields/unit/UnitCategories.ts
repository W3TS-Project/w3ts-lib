import { UnitCategory } from "../../API/fields/unit/UnitCategory";

export abstract class UnitCategories {
  public static readonly GIANT = new UnitCategory(1)
	public static readonly UNDEAD = new UnitCategory(2)
	public static readonly SUMMONED = new UnitCategory(4)
	public static readonly MECHANICAL = new UnitCategory(8)
	public static readonly PEON = new UnitCategory(16)
	public static readonly SAPPER = new UnitCategory(32)
	public static readonly TOWN_HALL = new UnitCategory(64)
	public static readonly ANCIENT = new UnitCategory(128)
	public static readonly NEUTRAL = new UnitCategory(256)
	public static readonly WARD = new UnitCategory(512)
	public static readonly STANDON = new UnitCategory(1024)
	public static readonly TAUREN = new UnitCategory(2048)
}