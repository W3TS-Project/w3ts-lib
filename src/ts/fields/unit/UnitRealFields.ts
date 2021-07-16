import { UnitRealField } from "../../API/fields/unit/UnitRealField"
import { RawCode } from "../../RawCode"

export abstract class UnitRealFields {
    public static readonly STRENGTH_PER_LEVEL = new UnitRealField(
        new RawCode("ustp"),
        "Характеристики - Повышение силы с каждым уровнем"
    )
    public static readonly AGILITY_PER_LEVEL = new UnitRealField(
        new RawCode("uagp"),
        "Характеристики - Повышение ловкости с каждым уровнем"
    )
    public static readonly INTELLIGENCE_PER_LEVEL = new UnitRealField(
        new RawCode("uinp"),
        "Характеристики - Повышение разума с каждым уровнем"
    )
    public static readonly HIT_POINTS_REGENERATION_RATE = new UnitRealField(
        new RawCode("uhpr"),
        "Характеристики - Скорость восстановления здоровья"
    )
    public static readonly MANA_REGENERATION = new UnitRealField(
        new RawCode("umpr"),
        "Характеристики - Восстановление маны"
    )
    public static readonly DEATH_TIME = new UnitRealField(
        new RawCode("udtm"),
        "Графика - Время смерти UnitRealField(new RawCode(сек.)"
    )
    /**
     * Не найдено в РО
     */
    public static readonly FLY_HEIGHT = new UnitRealField(new RawCode("ufyh"))
    public static readonly TURN_RATE = new UnitRealField(
        new RawCode("umvr"),
        "Движение - Скорость поворота"
    )
    public static readonly ELEVATION_SAMPLE_RADIUS = new UnitRealField(
        new RawCode("uerd"),
        "Графика - Наводка UnitRealField(new RawCode(контрольный радиус)"
    )
    public static readonly FOG_OF_WAR_SAMPLE_RADIUS = new UnitRealField(
        new RawCode("ufrd"),
        "Графика - Туман войны: контрольный радиус"
    )
    public static readonly MAXIMUM_PITCH_ANGLE_DEGREES = new UnitRealField(
        new RawCode("umxp"),
        "Графика - Максимальный угол крена UnitRealField(new RawCode(град.)"
    )
    public static readonly MAXIMUM_ROLL_ANGLE_DEGREES = new UnitRealField(
        new RawCode("umxr"),
        "Графика - Максимальный угол поворота UnitRealField(new RawCode(град.)"
    )
    public static readonly SCALING_VALUE = new UnitRealField(
        new RawCode("usca"),
        "Графика - Масштабирование"
    )
    public static readonly ANIMATION_RUN_SPEED = new UnitRealField(
        new RawCode("urun"),
        "Графика - Анимация: скорость бега"
    )
    public static readonly SELECTION_SCALE = new UnitRealField(
        new RawCode("ussc"),
        "Графика - Шкала выбора"
    )
    public static readonly SELECTION_CIRCLE_HEIGHT = new UnitRealField(
        new RawCode("uslz"),
        "Графика - Высота выбора"
    )
    public static readonly SHADOW_IMAGE_HEIGHT = new UnitRealField(
        new RawCode("ushh"),
        "Графика - Отображение тени: высота"
    )
    public static readonly SHADOW_IMAGE_WIDTH = new UnitRealField(
        new RawCode("ushw"),
        "Графика - Отображение тени: ширина"
    )
    public static readonly SHADOW_IMAGE_CENTER_X = new UnitRealField(
        new RawCode("ushx"),
        "Графика - Отображение тени: центр UnitRealField(new RawCode(X)"
    )
    public static readonly SHADOW_IMAGE_CENTER_Y = new UnitRealField(
        new RawCode("ushy"),
        "Графика - Отображение тени: центр UnitRealField(new RawCode(Y)"
    )
    public static readonly ANIMATION_WALK_SPEED = new UnitRealField(
        new RawCode("uwal"),
        "Графика - Анимация: скорость ходьбы"
    )
    /**
     * Не найдено в РО
     */
    public static readonly DEFENSE = new UnitRealField(new RawCode("udfc"), "Бой - Исходная защита")
    /**
     * Не найдено в РО
     */
    public static readonly SIGHT_RADIUS = new UnitRealField(new RawCode("usir"))
    public static readonly PRIORITY = new UnitRealField(
        new RawCode("upri"),
        "Характеристики - Приоритет"
    )
    /**
     * Не найдено в РО
     */
    public static readonly SPEED = new UnitRealField(
        new RawCode("umvc"),
        "Движение - Базовая скорость"
    )
    public static readonly OCCLUDER_HEIGHT = new UnitRealField(
        new RawCode("uocc"),
        "Графика - Радиус взаимодействия"
    )
    /**
     * Не найдено в РО
     */
    public static readonly HP = new UnitRealField(
        new RawCode("uhpc"),
        "Характеристики - Максимум здоровья UnitRealField(new RawCode(базовый)"
    )
    /**
     * Не найдено в РО
     */
    public static readonly MANA = new UnitRealField(
        new RawCode("umpc"),
        "Характеристики - Максимум маны"
    )
    public static readonly ACQUISITION_RANGE = new UnitRealField(
        new RawCode("uacq"),
        "Бой - Дистанция получения приказа"
    )
    public static readonly CAST_BACK_SWING = new UnitRealField(
        new RawCode("ucbs"),
        "Графика - Анимация: обратный ход броска"
    )
    public static readonly CAST_POINT = new UnitRealField(
        new RawCode("ucpt"),
        "Графика - Анимация: точка броска"
    )
    public static readonly MINIMUM_ATTACK_RANGE = new UnitRealField(
        new RawCode("uamn"),
        "Бой - Минимальная дистанция атаки"
    )
}
