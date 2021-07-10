import { TextAlignType } from "../../API/fields/frame/TextAlignType";

export abstract class TextAlignTypes {
	public static readonly TOP = new TextAlignType(0)
	public static readonly MIDDLE = new TextAlignType(1)
	public static readonly BOTTOM = new TextAlignType(2)
	public static readonly LEFT = new TextAlignType(3)
	public static readonly CENTER = new TextAlignType(4)
	public static readonly RIGHT = new TextAlignType(5)
}