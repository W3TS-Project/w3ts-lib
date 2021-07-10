import { ItemIntegerField } from "../../API/fields/item/ItemIntegerField";

export abstract class ItemIntegerFields {
	public static readonly LEVEL = new ItemIntegerField('ilev', 'Уровень')
	public static readonly NUMBER_OF_CHANGES = new ItemIntegerField('iuse', 'Количество зарядов')
	public static readonly COOLDOWN_GROUP = new ItemIntegerField('icid', 'Название')
	public static readonly MAX_HIT_POINTS = new ItemIntegerField('ihtp', 'Прочность')
	// не удалось найти в РО
	public static readonly HIT_POINTS = new ItemIntegerField('ihpc')
	public static readonly PRIORITY = new ItemIntegerField('ipri', 'Приоритет')
	public static readonly ARMOR_TYPE = new ItemIntegerField('iarm', 'Тип брони')
	public static readonly TINTING_COLOR_RED = new ItemIntegerField('iclr', 'Фоновый цвет 1 (красный)')
	public static readonly TINTING_COLOR_GREEN = new ItemIntegerField('iclg', 'Фоновый цвет 2 (зеленый)')
	public static readonly TINTING_COLOR_BLUE = new ItemIntegerField('iclb', 'Фоновый цвет 3 (синий)')
	// не удалось найти в РО
	public static readonly TINTING_COLOR_ALPHA = new ItemIntegerField('ical')
}
