import { UnitBooleanField } from "../../API/fields/unit/UnitBooleanField"
import { RawCode } from "../../RawCode"

export abstract class UnitBooleanFields {
    /**
     * Не найдено в РО
     */
    public static readonly RAISABLE = new UnitBooleanField(new RawCode("urai"))
    /**
     * Не найдено в РО
     */
    public static readonly DECAYABLE = new UnitBooleanField(new RawCode("udec"))
    public static readonly IS_A_BUILDING = new UnitBooleanField(
        new RawCode("ubdg"),
        "Является зданием"
    )
    public static readonly USE_EXTENDED_LINE_OF_SIGHT = new UnitBooleanField(
        new RawCode("ulos"),
        "Использовать расширенную линию обзора"
    )
    /**
     * Не найдено в РО
     */
    public static readonly NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON = new UnitBooleanField(
        new RawCode("unbm")
    )
    public static readonly HERO_HIDE_HERO_INTERFACE_ICON = new UnitBooleanField(
        new RawCode("uhhb"),
        "Герой - скрыть пиктограмму на панели"
    )
    public static readonly HIDE_HERO_MINIMAP_DISPLAY = new UnitBooleanField(
        new RawCode("uhhm"),
        "Герой - не показывать на мини-карте"
    )
    public static readonly HERO_HIDE_HERO_DEATH_MESSAGE = new UnitBooleanField(
        new RawCode("uhhd"),
        "Герой: скрыть сообщение о гибели"
    )
    public static readonly HIDE_MINIMAP_DISPLAY = new UnitBooleanField(
        new RawCode("uhom"),
        "Скрыть мини-карту"
    )
    public static readonly SCALE_PROJECTILES = new UnitBooleanField(
        new RawCode("uscb"),
        "Масштабировать снаряды"
    )
    public static readonly SELECTION_CIRCLE_ON_WATER = new UnitBooleanField(
        new RawCode("usew"),
        "Круг выбора на воде"
    )
    public static readonly HAS_WATER_SHADOW = new UnitBooleanField(
        new RawCode("ushr"),
        "Тень на воде"
    )
}
