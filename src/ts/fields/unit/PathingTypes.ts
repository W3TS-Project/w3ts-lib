import { PathingType } from "../../API/fields/unit/PathingType";

export abstract class PathingTypes {
  public static readonly ANY = new PathingType(0)
	public static readonly WALKABILITY = new PathingType(1)
	public static readonly FLYABILITY = new PathingType(2)
	public static readonly BUILDABILITY = new PathingType(3)
	public static readonly PEONHARVESTPATHING = new PathingType(4)
	public static readonly BLIGHTPATHING = new PathingType(5)
	public static readonly FLOATABILITY = new PathingType(6)
	public static readonly AMPHIBIOUSPATHING = new PathingType(7)
}