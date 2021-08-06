import { UnitRealField } from "../../API/fields/unit/UnitRealField"
import { RawCode } from "../../RawCode"

export abstract class UnitRealFields {
    public static readonly STRENGTH_PER_LEVEL = new UnitRealField(
        RawCode.get("ustp"),
        "Характеристики - Повышение силы с каждым уровнем"
    )
    public static readonly AGILITY_PER_LEVEL = new UnitRealField(
        RawCode.get("uagp"),
        "Характеристики - Повышение ловкости с каждым уровнем"
    )
    public static readonly INTELLIGENCE_PER_LEVEL = new UnitRealField(
        RawCode.get("uinp"),
        "Характеристики - Повышение разума с каждым уровнем"
    )
    public static readonly HIT_POINTS_REGENERATION_RATE = new UnitRealField(
        RawCode.get("uhpr"),
        "Характеристики - Скорость восстановления здоровья"
    )
    public static readonly MANA_REGENERATION = new UnitRealField(
        RawCode.get("umpr"),
        "Характеристики - Восстановление маны"
    )
    public static readonly DEATH_TIME = new UnitRealField(
        RawCode.get("udtm"),
        "Графика - Время смерти (сек.)"
    )
    /**
     * Не найдено в РО
     */
    public static readonly FLY_HEIGHT = new UnitRealField(RawCode.get("ufyh"))
    public static readonly TURN_RATE = new UnitRealField(
        RawCode.get("umvr"),
        "Движение - Скорость поворота"
    )
    public static readonly ELEVATION_SAMPLE_RADIUS = new UnitRealField(
        RawCode.get("uerd"),
        "Графика - Наводка (контрольный радиус)"
    )
    public static readonly FOG_OF_WAR_SAMPLE_RADIUS = new UnitRealField(
        RawCode.get("ufrd"),
        "Графика - Туман войны: контрольный радиус"
    )
    public static readonly MAXIMUM_PITCH_ANGLE_DEGREES = new UnitRealField(
        RawCode.get("umxp"),
        "Графика - Максимальный угол крена (град.)"
    )
    public static readonly MAXIMUM_ROLL_ANGLE_DEGREES = new UnitRealField(
        RawCode.get("umxr"),
        "Графика - Максимальный угол поворота (град.)"
    )
    public static readonly SCALING_VALUE = new UnitRealField(
        RawCode.get("usca"),
        "Графика - Масштабирование"
    )
    public static readonly ANIMATION_RUN_SPEED = new UnitRealField(
        RawCode.get("urun"),
        "Графика - Анимация: скорость бега"
    )
    public static readonly SELECTION_SCALE = new UnitRealField(
        RawCode.get("ussc"),
        "Графика - Шкала выбора"
    )
    public static readonly SELECTION_CIRCLE_HEIGHT = new UnitRealField(
        RawCode.get("uslz"),
        "Графика - Высота выбора"
    )
    public static readonly SHADOW_IMAGE_HEIGHT = new UnitRealField(
        RawCode.get("ushh"),
        "Графика - Отображение тени: высота"
    )
    public static readonly SHADOW_IMAGE_WIDTH = new UnitRealField(
        RawCode.get("ushw"),
        "Графика - Отображение тени: ширина"
    )
    public static readonly SHADOW_IMAGE_CENTER_X = new UnitRealField(
        RawCode.get("ushx"),
        "Графика - Отображение тени: центр (X)"
    )
    public static readonly SHADOW_IMAGE_CENTER_Y = new UnitRealField(
        RawCode.get("ushy"),
        "Графика - Отображение тени: центр (Y)"
    )
    public static readonly ANIMATION_WALK_SPEED = new UnitRealField(
        RawCode.get("uwal"),
        "Графика - Анимация: скорость ходьбы"
    )
    /**
     * Не найдено в РО
     */
    public static readonly DEFENSE = new UnitRealField(RawCode.get("udfc"), "Бой - Исходная защита")
    /**
     * Не найдено в РО
     */
    public static readonly SIGHT_RADIUS = new UnitRealField(RawCode.get("usir"))
    public static readonly PRIORITY = new UnitRealField(
        RawCode.get("upri"),
        "Характеристики - Приоритет"
    )
    /**
     * Не найдено в РО
     */
    public static readonly SPEED = new UnitRealField(
        RawCode.get("umvc"),
        "Движение - Базовая скорость"
    )
    public static readonly OCCLUDER_HEIGHT = new UnitRealField(
        RawCode.get("uocc"),
        "Графика - Радиус взаимодействия"
    )
    /**
     * Не найдено в РО
     */
    public static readonly HP = new UnitRealField(
        RawCode.get("uhpc"),
        "Характеристики - Максимум здоровья (базовый)"
    )
    /**
     * Не найдено в РО
     */
    public static readonly MANA = new UnitRealField(
        RawCode.get("umpc"),
        "Характеристики - Максимум маны"
    )
    public static readonly ACQUISITION_RANGE = new UnitRealField(
        RawCode.get("uacq"),
        "Бой - Дистанция получения приказа"
    )
    public static readonly CAST_BACK_SWING = new UnitRealField(
        RawCode.get("ucbs"),
        "Графика - Анимация: обратный ход броска"
    )
    public static readonly CAST_POINT = new UnitRealField(
        RawCode.get("ucpt"),
        "Графика - Анимация: точка броска"
    )
    public static readonly MINIMUM_ATTACK_RANGE = new UnitRealField(
        RawCode.get("uamn"),
        "Бой - Минимальная дистанция атаки"
    )
}
