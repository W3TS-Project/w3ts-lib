import { ItemIntegerField } from "../../API/fields/item/ItemIntegerField"
import { RawCode } from "../../RawCode"

export abstract class ItemIntegerFields {
    static readonly LEVEL = new ItemIntegerField(RawCode.get("ilev"), "Уровень")
    static readonly NUMBER_OF_CHANGES = new ItemIntegerField(
        RawCode.get("iuse"),
        "Количество зарядов"
    )
    static readonly COOLDOWN_GROUP = new ItemIntegerField(RawCode.get("icid"), "Название")
    static readonly MAX_HIT_POINTS = new ItemIntegerField(RawCode.get("ihtp"), "Прочность")
    /**
     * Не удалось найти в РО
     */
    static readonly HIT_POINTS = new ItemIntegerField(RawCode.get("ihpc"))
    static readonly PRIORITY = new ItemIntegerField(RawCode.get("ipri"), "Приоритет")
    static readonly ARMOR_TYPE = new ItemIntegerField(RawCode.get("iarm"), "Тип брони")
    static readonly TINTING_COLOR_RED = new ItemIntegerField(
        RawCode.get("iclr"),
        "Фоновый цвет 1 (красный)"
    )
    static readonly TINTING_COLOR_GREEN = new ItemIntegerField(
        RawCode.get("iclg"),
        "Фоновый цвет 2 (зеленый)"
    )
    static readonly TINTING_COLOR_BLUE = new ItemIntegerField(
        RawCode.get("iclb"),
        "Фоновый цвет 3 (синий)"
    )
    /**
     * Не удалось найти в РО
     */
    static readonly TINTING_COLOR_ALPHA = new ItemIntegerField(RawCode.get("ical"))
}
