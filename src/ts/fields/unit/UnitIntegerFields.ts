import { UnitIntegerField } from "../../API/fields/unit/UnitIntegerField"
import { RawCode } from "../../RawCode"

export abstract class UnitIntegerFields {
    static readonly DEFENSE_TYPE = new UnitIntegerField(
        RawCode.get("udty"),
        "Бой - тип защиты"
    )
    static readonly ARMOR_TYPE = new UnitIntegerField(RawCode.get("uarm"), "Бой - тип брони")
    static readonly LOOPING_FADE_IN_RATE = new UnitIntegerField(
        RawCode.get("ulfi"),
        "Звук - скорость усиления повтора"
    )
    static readonly LOOPING_FADE_OUT_RATE = new UnitIntegerField(
        RawCode.get("ulfo"),
        "Звук - скорость затухания повтора"
    )
    /**
     * Не найдено в РО
     */
    static readonly AGILITY = new UnitIntegerField(RawCode.get("uagc"), "Исходная ловкость")
    /**
     * Не найдено в РО
     */
    static readonly INTELLIGENCE = new UnitIntegerField(
        RawCode.get("uinc"),
        "Исходный разум"
    )
    /**
     * Не найдено в РО
     */
    static readonly STRENGTH = new UnitIntegerField(RawCode.get("ustc"), "Исходная сила")
    /**
     * Не найдено в РО
     */
    static readonly AGILITY_PERMANENT = new UnitIntegerField(RawCode.get("uagm"))
    /**
     * Не найдено в РО
     */
    static readonly INTELLIGENCE_PERMANENT = new UnitIntegerField(RawCode.get("uinm"))
    /**
     * Не найдено в РО
     */
    static readonly STRENGTH_PERMANENT = new UnitIntegerField(RawCode.get("ustm"))
    /**
     * Не найдено в РО
     */
    static readonly AGILITY_WITH_BONUS = new UnitIntegerField(RawCode.get("uagb"))
    /**
     * Не найдено в РО
     */
    static readonly INTELLIGENCE_WITH_BONUS = new UnitIntegerField(RawCode.get("uinb"))
    /**
     * Не найдено в РО
     */
    static readonly STRENGTH_WITH_BONUS = new UnitIntegerField(RawCode.get("ustb"))
    static readonly GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE = new UnitIntegerField(
        RawCode.get("ubdi"),
        "Характеристики - Награда за уничтожение - кол-во костей"
    )
    static readonly GOLD_BOUNTY_AWARDED_BASE = new UnitIntegerField(
        RawCode.get("ubda"),
        "Характеристики - Награда за уничтожение - базовая"
    )
    static readonly GOLD_BOUNTY_AWARDED_SIDES_PER_DIE = new UnitIntegerField(
        RawCode.get("ubsi"),
        "Характеристики - Награда за уничтожение - кол-во граней у кости"
    )
    static readonly LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE = new UnitIntegerField(
        RawCode.get("ulbd"),
        "Характеристики - Призовая древесина - кол-во кубиков"
    )
    static readonly LUMBER_BOUNTY_AWARDED_BASE = new UnitIntegerField(
        RawCode.get("ulba"),
        "Характеристики - Призовая древесина - базовое значение"
    )
    static readonly LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE = new UnitIntegerField(
        RawCode.get("ulbs"),
        "Характеристики - Призовая древесина - кол-во граней"
    )
    static readonly LEVEL = new UnitIntegerField(
        RawCode.get("ulev"),
        "Характеристики - Уровень"
    )
    static readonly FORMATION_RANK = new UnitIntegerField(
        RawCode.get("ufor"),
        "Характеристики - Построение"
    )
    static readonly ORIENTATION_INTERPOLATION = new UnitIntegerField(
        RawCode.get("uori"),
        "Графика - Положение вставки"
    )
    static readonly ELEVATION_SAMPLE_POINTS = new UnitIntegerField(
        RawCode.get("uept"),
        "Графика - Наодка (контрольные точки)"
    )
    static readonly TINTING_COLOR_RED = new UnitIntegerField(
        RawCode.get("uclr"),
        "Графика - Фоновый цвет 1 (красный)"
    )
    static readonly TINTING_COLOR_GREEN = new UnitIntegerField(
        RawCode.get("uclg"),
        "Графика - Фоновый цвет 2 (зеленый)"
    )
    static readonly TINTING_COLOR_BLUE = new UnitIntegerField(
        RawCode.get("uclb"),
        "Графика - Фоновый цвет 3 (синий)"
    )
    /**
     * Не найдено в РО
     */
    static readonly TINTING_COLOR_ALPHA = new UnitIntegerField(RawCode.get("ucal"))
    static readonly MOVE_TYPE = new UnitIntegerField(RawCode.get("umvt"), "Движение - Тип")
    static readonly TARGETED_AS = new UnitIntegerField(
        RawCode.get("utar"),
        "Бой - Относится к типу целей"
    )
    static readonly UNIT_CLASSIFICATION = new UnitIntegerField(
        RawCode.get("utyp"),
        "Характеристики - Классификация войск"
    )
    static readonly HIT_POINTS_REGENERATION_TYPE = new UnitIntegerField(
        RawCode.get("uhrt"),
        "Характеристики - Тип восстановления здоровья"
    )
    /**
     * Не найдено в РО
     */
    static readonly PLACEMENT_PREVENTED_BY = new UnitIntegerField(RawCode.get("upar"))
    static readonly PRIMARY_ATTRIBUTE = new UnitIntegerField(
        RawCode.get("upra"),
        "Характеристики - Основная характеристика"
    )
}
