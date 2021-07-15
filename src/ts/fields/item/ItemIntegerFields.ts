import { ItemIntegerField } from "../../API/fields/item/ItemIntegerField";
import { RawCode } from "../../RawCode";

export abstract class ItemIntegerFields {
	public static readonly LEVEL = new ItemIntegerField(new RawCode('ilev'), 'Уровень')
	public static readonly NUMBER_OF_CHANGES = new ItemIntegerField(new RawCode('iuse'), 'Количество зарядов')
	public static readonly COOLDOWN_GROUP = new ItemIntegerField(new RawCode('icid'), 'Название')
	public static readonly MAX_HIT_POINTS = new ItemIntegerField(new RawCode('ihtp'), 'Прочность')
	/**
	 * Не удалось найти в РО
	 */
	public static readonly HIT_POINTS = new ItemIntegerField(new RawCode('ihpc'))
	public static readonly PRIORITY = new ItemIntegerField(new RawCode('ipri'), 'Приоритет')
	public static readonly ARMOR_TYPE = new ItemIntegerField(new RawCode('iarm'), 'Тип брони')
	public static readonly TINTING_COLOR_RED = new ItemIntegerField(new RawCode('iclr'), 'Фоновый цвет 1 ItemIntegerField(new RawCode(красный)')
	public static readonly TINTING_COLOR_GREEN = new ItemIntegerField(new RawCode('iclg'), 'Фоновый цвет 2 ItemIntegerField(new RawCode(зеленый)')
	public static readonly TINTING_COLOR_BLUE = new ItemIntegerField(new RawCode('iclb'), 'Фоновый цвет 3 ItemIntegerField(new RawCode(синий)')
	/**
	 * Не удалось найти в РО
	 */
	public static readonly TINTING_COLOR_ALPHA = new ItemIntegerField(new RawCode('ical'))
}
