import { ItemIntegerField } from "../../API/fields/item/ItemIntegerField"
import { RawCode } from "../../RawCode"

export abstract class ItemIntegerFields {
    public static readonly LEVEL = new ItemIntegerField(RawCode.get("ilev"), "Уровень")
    public static readonly NUMBER_OF_CHANGES = new ItemIntegerField(
        RawCode.get("iuse"),
        "Количество зарядов"
    )
    public static readonly COOLDOWN_GROUP = new ItemIntegerField(RawCode.get("icid"), "Название")
    public static readonly MAX_HIT_POINTS = new ItemIntegerField(RawCode.get("ihtp"), "Прочность")
    /**
     * Не удалось найти в РО
     */
    public static readonly HIT_POINTS = new ItemIntegerField(RawCode.get("ihpc"))
    public static readonly PRIORITY = new ItemIntegerField(RawCode.get("ipri"), "Приоритет")
    public static readonly ARMOR_TYPE = new ItemIntegerField(RawCode.get("iarm"), "Тип брони")
    public static readonly TINTING_COLOR_RED = new ItemIntegerField(
        RawCode.get("iclr"),
        "Фоновый цвет 1 (красный)"
    )
    public static readonly TINTING_COLOR_GREEN = new ItemIntegerField(
        RawCode.get("iclg"),
        "Фоновый цвет 2 (зеленый)"
    )
    public static readonly TINTING_COLOR_BLUE = new ItemIntegerField(
        RawCode.get("iclb"),
        "Фоновый цвет 3 (синий)"
    )
    /**
     * Не удалось найти в РО
     */
    public static readonly TINTING_COLOR_ALPHA = new ItemIntegerField(RawCode.get("ical"))
}
