import { UnitBooleanField } from "../../API/fields/unit/UnitBooleanField"
import { RawCode } from "../../RawCode"

export abstract class UnitBooleanFields {
    /**
     * Не найдено в РО
     */
    static readonly RAISABLE = new UnitBooleanField(RawCode.get("urai"))
    /**
     * Не найдено в РО
     */
    static readonly DECAYABLE = new UnitBooleanField(RawCode.get("udec"))
    static readonly IS_A_BUILDING = new UnitBooleanField(RawCode.get("ubdg"), "Является зданием")
    static readonly USE_EXTENDED_LINE_OF_SIGHT = new UnitBooleanField(
        RawCode.get("ulos"),
        "Использовать расширенную линию обзора"
    )
    /**
     * Не найдено в РО
     */
    static readonly NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON = new UnitBooleanField(RawCode.get("unbm"))
    static readonly HERO_HIDE_HERO_INTERFACE_ICON = new UnitBooleanField(
        RawCode.get("uhhb"),
        "Герой - скрыть пиктограмму на панели"
    )
    static readonly HIDE_HERO_MINIMAP_DISPLAY = new UnitBooleanField(
        RawCode.get("uhhm"),
        "Герой - не показывать на мини-карте"
    )
    static readonly HERO_HIDE_HERO_DEATH_MESSAGE = new UnitBooleanField(
        RawCode.get("uhhd"),
        "Герой: скрыть сообщение о гибели"
    )
    static readonly HIDE_MINIMAP_DISPLAY = new UnitBooleanField(
        RawCode.get("uhom"),
        "Скрыть мини-карту"
    )
    static readonly SCALE_PROJECTILES = new UnitBooleanField(
        RawCode.get("uscb"),
        "Масштабировать снаряды"
    )
    static readonly SELECTION_CIRCLE_ON_WATER = new UnitBooleanField(
        RawCode.get("usew"),
        "Круг выбора на воде"
    )
    static readonly HAS_WATER_SHADOW = new UnitBooleanField(RawCode.get("ushr"), "Тень на воде")
}
