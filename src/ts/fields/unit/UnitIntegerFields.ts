import { UnitIntegerField } from "../../API/fields/unit/UnitIntegerField"
import { RawCode } from "../../RawCode"

export abstract class UnitIntegerFields {
    public static readonly DEFENSE_TYPE = new UnitIntegerField(
        new RawCode("udty"),
        "Бой - тип защиты"
    )
    public static readonly ARMOR_TYPE = new UnitIntegerField(new RawCode("uarm"), "Бой - тип брони")
    public static readonly LOOPING_FADE_IN_RATE = new UnitIntegerField(
        new RawCode("ulfi"),
        "Звук - скорость усиления повтора"
    )
    public static readonly LOOPING_FADE_OUT_RATE = new UnitIntegerField(
        new RawCode("ulfo"),
        "Звук - скорость затухания повтора"
    )
    /**
     * Не найдено в РО
     */
    public static readonly AGILITY = new UnitIntegerField(new RawCode("uagc"), "Исходная ловкость")
    /**
     * Не найдено в РО
     */
    public static readonly INTELLIGENCE = new UnitIntegerField(
        new RawCode("uinc"),
        "Исходный разум"
    )
    /**
     * Не найдено в РО
     */
    public static readonly STRENGTH = new UnitIntegerField(new RawCode("ustc"), "Исходная сила")
    /**
     * Не найдено в РО
     */
    public static readonly AGILITY_PERMANENT = new UnitIntegerField(new RawCode("uagm"))
    /**
     * Не найдено в РО
     */
    public static readonly INTELLIGENCE_PERMANENT = new UnitIntegerField(new RawCode("uinm"))
    /**
     * Не найдено в РО
     */
    public static readonly STRENGTH_PERMANENT = new UnitIntegerField(new RawCode("ustm"))
    /**
     * Не найдено в РО
     */
    public static readonly AGILITY_WITH_BONUS = new UnitIntegerField(new RawCode("uagb"))
    /**
     * Не найдено в РО
     */
    public static readonly INTELLIGENCE_WITH_BONUS = new UnitIntegerField(new RawCode("uinb"))
    /**
     * Не найдено в РО
     */
    public static readonly STRENGTH_WITH_BONUS = new UnitIntegerField(new RawCode("ustb"))
    public static readonly GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE = new UnitIntegerField(
        new RawCode("ubdi"),
        "Характеристики - Награда за уничтожение - кол-во костей"
    )
    public static readonly GOLD_BOUNTY_AWARDED_BASE = new UnitIntegerField(
        new RawCode("ubda"),
        "Характеристики - Награда за уничтожение - базовая"
    )
    public static readonly GOLD_BOUNTY_AWARDED_SIDES_PER_DIE = new UnitIntegerField(
        new RawCode("ubsi"),
        "Характеристики - Награда за уничтожение - кол-во граней у кости"
    )
    public static readonly LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE = new UnitIntegerField(
        new RawCode("ulbd"),
        "Характеристики - Призовая древесина - кол-во кубиков"
    )
    public static readonly LUMBER_BOUNTY_AWARDED_BASE = new UnitIntegerField(
        new RawCode("ulba"),
        "Характеристики - Призовая древесина - базовое значение"
    )
    public static readonly LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE = new UnitIntegerField(
        new RawCode("ulbs"),
        "Характеристики - Призовая древесина - кол-во граней"
    )
    public static readonly LEVEL = new UnitIntegerField(
        new RawCode("ulev"),
        "Характеристики - Уровень"
    )
    public static readonly FORMATION_RANK = new UnitIntegerField(
        new RawCode("ufor"),
        "Характеристики - Построение"
    )
    public static readonly ORIENTATION_INTERPOLATION = new UnitIntegerField(
        new RawCode("uori"),
        "Графика - Положение вставки"
    )
    public static readonly ELEVATION_SAMPLE_POINTS = new UnitIntegerField(
        new RawCode("uept"),
        "Графика - Наодка (new RawCode(контрольные точки)"
    )
    public static readonly TINTING_COLOR_RED = new UnitIntegerField(
        new RawCode("uclr"),
        "Графика - Фоновый цвет 1 (new RawCode(красный)"
    )
    public static readonly TINTING_COLOR_GREEN = new UnitIntegerField(
        new RawCode("uclg"),
        "Графика - Фоновый цвет 2 (new RawCode(зеленый)"
    )
    public static readonly TINTING_COLOR_BLUE = new UnitIntegerField(
        new RawCode("uclb"),
        "Графика - Фоновый цвет 3 (new RawCode(синий)"
    )
    /**
     * Не найдено в РО
     */
    public static readonly TINTING_COLOR_ALPHA = new UnitIntegerField(new RawCode("ucal"))
    public static readonly MOVE_TYPE = new UnitIntegerField(new RawCode("umvt"), "Движение - Тип")
    public static readonly TARGETED_AS = new UnitIntegerField(
        new RawCode("utar"),
        "Бой - Относится к типу целей"
    )
    public static readonly UNIT_CLASSIFICATION = new UnitIntegerField(
        new RawCode("utyp"),
        "Характеристики - Классификация войск"
    )
    public static readonly HIT_POINTS_REGENERATION_TYPE = new UnitIntegerField(
        new RawCode("uhrt"),
        "Характеристики - Тип восстановления здоровья"
    )
    /**
     * Не найдено в РО
     */
    public static readonly PLACEMENT_PREVENTED_BY = new UnitIntegerField(new RawCode("upar"))
    public static readonly PRIMARY_ATTRIBUTE = new UnitIntegerField(
        new RawCode("upra"),
        "Характеристики - Основная характеристика"
    )
}
