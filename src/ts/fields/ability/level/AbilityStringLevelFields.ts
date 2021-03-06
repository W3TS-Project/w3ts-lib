import { AbilityStringLevelField } from "../../../API/fields/ability/level/AbilityStringLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityStringLevelFields {
    public static readonly ICON_NORMAL = new AbilityStringLevelField(
        new RawCode("aart"),
        "Пиктограмма: используется"
    )
    public static readonly CASTER = new AbilityStringLevelField(new RawCode("acat"), "Маг")
    public static readonly TARGET = new AbilityStringLevelField(new RawCode("atat"), "Цель")
    public static readonly SPECIAL = new AbilityStringLevelField(new RawCode("asat"), "Особые")
    public static readonly EFFECT = new AbilityStringLevelField(new RawCode("aeat"), "Эффект")
    public static readonly AREA_EFFECT = new AbilityStringLevelField(
        new RawCode("aaea"),
        "Область воздействия"
    )
    public static readonly LIGHTNING_EFFECTS = new AbilityStringLevelField(
        new RawCode("alig"),
        "Эффекты молнии"
    )
    public static readonly MISSILE_ART = new AbilityStringLevelField(
        new RawCode("amat"),
        "Анимация дистанционной атаки"
    )
    public static readonly TOOLTIP_LEARN = new AbilityStringLevelField(
        new RawCode("aret"),
        "Подсказка: выучить"
    )
    public static readonly TOOLTIP_EXTENDED_LEARN = new AbilityStringLevelField(
        new RawCode("arut"),
        "Подсказка: выучить, подробная"
    )
    public static readonly TOOLTIP_NORMAL = new AbilityStringLevelField(
        new RawCode("atp1"),
        "Подсказка: используется, нормальная"
    )
    public static readonly TOOLTIP_TURN_OFF = new AbilityStringLevelField(
        new RawCode("aut1"),
        "Подсказка: не используется"
    )
    public static readonly TOOLTIP_EXTENDED_NORMAL = new AbilityStringLevelField(
        new RawCode("aub1"),
        "Подсказка: используется, подробная"
    )
    public static readonly TOOLTIP_EXTENDED_TURN_OFF = new AbilityStringLevelField(
        new RawCode("auu1"),
        "Подсказка: не используется, подробная"
    )
    public static readonly NORMAL_FORM_UNIT_EME1 = new AbilityStringLevelField(
        new RawCode("Eme1"),
        "Нормальная форма боевой единицы",
        "Перевоплощение"
    )
    public static readonly SPAWNED_UNITS = new AbilityStringLevelField(
        new RawCode("Ndp1"),
        "Войска",
        "Темные врата AbilityStringLevelField(new RawCode(Архимонд)"
    )
    public static readonly ABILITY_FOR_UNIT_CREATION = new AbilityStringLevelField(
        new RawCode("Nrc1"),
        "Возможность создания войск",
        "Огненный дождь AbilityStringLevelField(new RawCode(Архимонд)"
    )
    public static readonly NORMAL_FORM_UNIT_MIL1 = new AbilityStringLevelField(
        new RawCode("Mil1"),
        "Нормальная форма боевой единицы",
        "К оружию AbilityStringLevelField(new RawCode(работник)"
    )
    public static readonly ALTERNATE_FORM_UNIT_MIL2 = new AbilityStringLevelField(
        new RawCode("Mil2"),
        "Альтернативная форма боевой единицы",
        "К оружию AbilityStringLevelField(new RawCode(работник)"
    )
    public static readonly BASE_ORDER_ID_ANS5 = new AbilityStringLevelField(
        new RawCode("Ans5"),
        "Базовый ID приказа",
        "Поставка ресурсов"
    )
    public static readonly MORPH_UNITS_GROUND = new AbilityStringLevelField(
        new RawCode("Ply2"),
        "Превращающиеся войска: наземные",
        "Полиморф"
    )
    public static readonly MORPH_UNITS_AIR = new AbilityStringLevelField(
        new RawCode("Ply3"),
        "Превращающиеся войска: воздушные",
        "Полиморф"
    )
    public static readonly MORPH_UNITS_AMPHIBIOUS = new AbilityStringLevelField(
        new RawCode("Ply4"),
        "Превращающиеся войска: амфибии",
        "Полиморф"
    )
    public static readonly MORPH_UNITS_WATER = new AbilityStringLevelField(
        new RawCode("Ply5"),
        "Превращающиеся войска: вода",
        "Полиморф"
    )
    public static readonly UNIT_TYPE_ONE = new AbilityStringLevelField(
        new RawCode("Rai3"),
        "Боевая единица первого типа",
        "Оживить мертвых"
    )
    public static readonly UNIT_TYPE_TWO = new AbilityStringLevelField(
        new RawCode("Rai4"),
        "Боевая единица второго типа",
        "Оживить мертвых"
    )
    public static readonly UNIT_TYPE_SOD2 = new AbilityStringLevelField(
        new RawCode("Sod2"),
        "Тип войск",
        "Скелет AbilityStringLevelField(new RawCode(возможно, черная стрела)"
    )
    public static readonly SUMMON_1_UNIT_TYPE = new AbilityStringLevelField(
        new RawCode("Ist1"),
        "Вызвать 1: тип войск",
        "Предмет: вызов скелета"
    )
    public static readonly SUMMON_2_UNIT_TYPE = new AbilityStringLevelField(
        new RawCode("Ist2"),
        "Вызвать 2: тип войск",
        "Предмет: вызов скелета"
    )
    public static readonly RACE_TO_CONVERT = new AbilityStringLevelField(
        new RawCode("Ndc1"),
        "Конвертируется в расу",
        "Обращение во Тьму"
    )
    public static readonly PARTNER_UNIT_TYPE = new AbilityStringLevelField(
        new RawCode("coa1"),
        "Тип боевой единицы партнера",
        "Оседлать гиппогрифа"
    )
    public static readonly PARTNER_UNIT_ONE_TYPE = new AbilityStringLevelField(
        new RawCode("dcp1"),
        "Боевая единица партнера, тип первый",
        "Расседлать"
    )
    public static readonly PARTNER_UNIT_TWO_TYPE = new AbilityStringLevelField(
        new RawCode("dcp2"),
        "Боевая единица партнера, тип второй",
        "Расседлать"
    )
    // не удалось найти в РО
    public static readonly REQUIRED_UNIT_TYPE = new AbilityStringLevelField(new RawCode("tpi1"))
    // не удалось найти в РО
    public static readonly CONVERTED_UNIT_TYPE = new AbilityStringLevelField(new RawCode("tpi2"))
    public static readonly SPELL_LIST = new AbilityStringLevelField(
        new RawCode("spb1"),
        "Список заклинаний",
        "Книга заклинаний"
    )
    public static readonly BASE_ORDER_ID_SPB5 = new AbilityStringLevelField(
        new RawCode("spb5"),
        "Базовый ID приказа",
        "Книга заклинаний"
    )
    public static readonly BASE_ORDER_ID_NCL6 = new AbilityStringLevelField(
        new RawCode("Ncl6"),
        "Базовый ID приказа",
        "Канал"
    )
    public static readonly ABILITY_UPGRADE_1 = new AbilityStringLevelField(
        new RawCode("Neg3"),
        "Усовершенствование способности 1",
        "Техника"
    )
    public static readonly ABILITY_UPGRADE_2 = new AbilityStringLevelField(
        new RawCode("Neg4"),
        "Усовершенствование способности 2",
        "Техника"
    )
    public static readonly ABILITY_UPGRADE_3 = new AbilityStringLevelField(
        new RawCode("Neg5"),
        "Усовершенствование способности 3",
        "Техника"
    )
    public static readonly ABILITY_UPGRADE_4 = new AbilityStringLevelField(
        new RawCode("Neg6"),
        "Усовершенствование способности 4",
        "Техника"
    )
    public static readonly SPAWN_UNIT_ID_NSY2 = new AbilityStringLevelField(
        new RawCode("Nsy2"),
        "Идентификатор порожденного воина",
        "Мини-завод"
    )
}
