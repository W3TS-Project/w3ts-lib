import { AbilityStringLevelField } from "../../../API/fields/ability/level/AbilityStringLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityStringLevelFields {
    static readonly ICON_NORMAL = new AbilityStringLevelField(
        RawCode.get("aart"),
        "Пиктограмма: используется"
    )
    static readonly CASTER = new AbilityStringLevelField(RawCode.get("acat"), "Маг")
    static readonly TARGET = new AbilityStringLevelField(RawCode.get("atat"), "Цель")
    static readonly SPECIAL = new AbilityStringLevelField(RawCode.get("asat"), "Особые")
    static readonly EFFECT = new AbilityStringLevelField(RawCode.get("aeat"), "Эффект")
    static readonly AREA_EFFECT = new AbilityStringLevelField(
        RawCode.get("aaea"),
        "Область воздействия"
    )
    static readonly LIGHTNING_EFFECTS = new AbilityStringLevelField(
        RawCode.get("alig"),
        "Эффекты молнии"
    )
    static readonly MISSILE_ART = new AbilityStringLevelField(
        RawCode.get("amat"),
        "Анимация дистанционной атаки"
    )
    static readonly TOOLTIP_LEARN = new AbilityStringLevelField(
        RawCode.get("aret"),
        "Подсказка: выучить"
    )
    static readonly TOOLTIP_EXTENDED_LEARN = new AbilityStringLevelField(
        RawCode.get("arut"),
        "Подсказка: выучить, подробная"
    )
    static readonly TOOLTIP_NORMAL = new AbilityStringLevelField(
        RawCode.get("atp1"),
        "Подсказка: используется, нормальная"
    )
    static readonly TOOLTIP_TURN_OFF = new AbilityStringLevelField(
        RawCode.get("aut1"),
        "Подсказка: не используется"
    )
    static readonly TOOLTIP_EXTENDED_NORMAL = new AbilityStringLevelField(
        RawCode.get("aub1"),
        "Подсказка: используется, подробная"
    )
    static readonly TOOLTIP_EXTENDED_TURN_OFF = new AbilityStringLevelField(
        RawCode.get("auu1"),
        "Подсказка: не используется, подробная"
    )
    static readonly NORMAL_FORM_UNIT_EME1 = new AbilityStringLevelField(
        RawCode.get("Eme1"),
        "Нормальная форма боевой единицы",
        "Перевоплощение"
    )
    static readonly SPAWNED_UNITS = new AbilityStringLevelField(
        RawCode.get("Ndp1"),
        "Войска",
        "Темные врата (Архимонд)"
    )
    static readonly ABILITY_FOR_UNIT_CREATION = new AbilityStringLevelField(
        RawCode.get("Nrc1"),
        "Возможность создания войск",
        "Огненный дождь (Архимонд)"
    )
    static readonly NORMAL_FORM_UNIT_MIL1 = new AbilityStringLevelField(
        RawCode.get("Mil1"),
        "Нормальная форма боевой единицы",
        "К оружию (работник)"
    )
    static readonly ALTERNATE_FORM_UNIT_MIL2 = new AbilityStringLevelField(
        RawCode.get("Mil2"),
        "Альтернативная форма боевой единицы",
        "К оружию (работник)"
    )
    static readonly BASE_ORDER_ID_ANS5 = new AbilityStringLevelField(
        RawCode.get("Ans5"),
        "Базовый ID приказа",
        "Поставка ресурсов"
    )
    static readonly MORPH_UNITS_GROUND = new AbilityStringLevelField(
        RawCode.get("Ply2"),
        "Превращающиеся войска: наземные",
        "Полиморф"
    )
    static readonly MORPH_UNITS_AIR = new AbilityStringLevelField(
        RawCode.get("Ply3"),
        "Превращающиеся войска: воздушные",
        "Полиморф"
    )
    static readonly MORPH_UNITS_AMPHIBIOUS = new AbilityStringLevelField(
        RawCode.get("Ply4"),
        "Превращающиеся войска: амфибии",
        "Полиморф"
    )
    static readonly MORPH_UNITS_WATER = new AbilityStringLevelField(
        RawCode.get("Ply5"),
        "Превращающиеся войска: вода",
        "Полиморф"
    )
    static readonly UNIT_TYPE_ONE = new AbilityStringLevelField(
        RawCode.get("Rai3"),
        "Боевая единица первого типа",
        "Оживить мертвых"
    )
    static readonly UNIT_TYPE_TWO = new AbilityStringLevelField(
        RawCode.get("Rai4"),
        "Боевая единица второго типа",
        "Оживить мертвых"
    )
    static readonly UNIT_TYPE_SOD2 = new AbilityStringLevelField(
        RawCode.get("Sod2"),
        "Тип войск",
        "Скелет (возможно, черная стрела)"
    )
    static readonly SUMMON_1_UNIT_TYPE = new AbilityStringLevelField(
        RawCode.get("Ist1"),
        "Вызвать 1: тип войск",
        "Предмет: вызов скелета"
    )
    static readonly SUMMON_2_UNIT_TYPE = new AbilityStringLevelField(
        RawCode.get("Ist2"),
        "Вызвать 2: тип войск",
        "Предмет: вызов скелета"
    )
    static readonly RACE_TO_CONVERT = new AbilityStringLevelField(
        RawCode.get("Ndc1"),
        "Конвертируется в расу",
        "Обращение во Тьму"
    )
    static readonly PARTNER_UNIT_TYPE = new AbilityStringLevelField(
        RawCode.get("coa1"),
        "Тип боевой единицы партнера",
        "Оседлать гиппогрифа"
    )
    static readonly PARTNER_UNIT_ONE_TYPE = new AbilityStringLevelField(
        RawCode.get("dcp1"),
        "Боевая единица партнера, тип первый",
        "Расседлать"
    )
    static readonly PARTNER_UNIT_TWO_TYPE = new AbilityStringLevelField(
        RawCode.get("dcp2"),
        "Боевая единица партнера, тип второй",
        "Расседлать"
    )
    // не удалось найти в РО
    static readonly REQUIRED_UNIT_TYPE = new AbilityStringLevelField(RawCode.get("tpi1"))
    // не удалось найти в РО
    static readonly CONVERTED_UNIT_TYPE = new AbilityStringLevelField(RawCode.get("tpi2"))
    static readonly SPELL_LIST = new AbilityStringLevelField(
        RawCode.get("spb1"),
        "Список заклинаний",
        "Книга заклинаний"
    )
    static readonly BASE_ORDER_ID_SPB5 = new AbilityStringLevelField(
        RawCode.get("spb5"),
        "Базовый ID приказа",
        "Книга заклинаний"
    )
    static readonly BASE_ORDER_ID_NCL6 = new AbilityStringLevelField(
        RawCode.get("Ncl6"),
        "Базовый ID приказа",
        "Канал"
    )
    static readonly ABILITY_UPGRADE_1 = new AbilityStringLevelField(
        RawCode.get("Neg3"),
        "Усовершенствование способности 1",
        "Техника"
    )
    static readonly ABILITY_UPGRADE_2 = new AbilityStringLevelField(
        RawCode.get("Neg4"),
        "Усовершенствование способности 2",
        "Техника"
    )
    static readonly ABILITY_UPGRADE_3 = new AbilityStringLevelField(
        RawCode.get("Neg5"),
        "Усовершенствование способности 3",
        "Техника"
    )
    static readonly ABILITY_UPGRADE_4 = new AbilityStringLevelField(
        RawCode.get("Neg6"),
        "Усовершенствование способности 4",
        "Техника"
    )
    static readonly SPAWN_UNIT_ID_NSY2 = new AbilityStringLevelField(
        RawCode.get("Nsy2"),
        "Идентификатор порожденного воина",
        "Мини-завод"
    )
}
