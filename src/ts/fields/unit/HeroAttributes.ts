import { HeroAttribute } from "../../API/fields/unit/HeroAttribute";

export abstract class HeroAttributes {
  public static readonly STR = new HeroAttribute(1)
	public static readonly INT = new HeroAttribute(2)
	public static readonly AGI = new HeroAttribute(3)
}