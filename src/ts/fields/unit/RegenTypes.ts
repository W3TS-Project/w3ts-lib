import { RegenType } from "../../API/fields/unit/RegenType";

export abstract class RegenTypes {
	public static readonly NONE = new RegenType(0)
	public static readonly ALWAYS = new RegenType(1)
	public static readonly BLIGHT = new RegenType(2)
	public static readonly DAY = new RegenType(3)
	public static readonly NIGHT = new RegenType(4)
}