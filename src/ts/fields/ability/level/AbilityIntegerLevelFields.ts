import { AbilityIntegerLevelField } from "../../../API/fields/ability/level/AbilityIntegerLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityIntegerLevelFields {
    public static readonly MANA_COST = new AbilityIntegerLevelField(
        RawCode.get("amcs"),
        "Затрачиваемая мана"
    )
    public static readonly NUMBER_OF_WAVES = new AbilityIntegerLevelField(
        RawCode.get("Hbz1"),
        "Количество волн",
        "Буран"
    )
    public static readonly NUMBER_OF_SHARDS = new AbilityIntegerLevelField(
        RawCode.get("Hbz3"),
        "Количество вихрей",
        "Буран"
    )
    public static readonly NUMBER_OF_UNITS_TELEPORTED = new AbilityIntegerLevelField(
        RawCode.get("Hmt1"),
        "Количество телепортированных войск",
        "Массовая телепортация"
    )
    public static readonly SUMMONED_UNIT_COUNT_HWE2 = new AbilityIntegerLevelField(
        RawCode.get("Hwe2"),
        "Счет вызванной боевой единицы",
        "Дух Воды"
    )
    public static readonly NUMBER_OF_IMAGES = new AbilityIntegerLevelField(
        RawCode.get("Omi1"),
        "Количество изображений",
        "Иллюзия"
    )
    public static readonly NUMBER_OF_CORPSES_RAISED_UAN1 = new AbilityIntegerLevelField(
        RawCode.get("Uan1"),
        "Число оживленных трупов",
        "Гальванизация"
    )
    public static readonly MORPHING_FLAGS = new AbilityIntegerLevelField(
        RawCode.get("Eme2"),
        "Превращенные флаги",
        "Перевоплощение"
    )
    public static readonly STRENGTH_BONUS_NRG5 = new AbilityIntegerLevelField(
        RawCode.get("Nrg5"),
        "Повышение силы",
        "Превратиться в кибергоблина"
    )
    public static readonly DEFENSE_BONUS_NRG6 = new AbilityIntegerLevelField(
        RawCode.get("Nrg6"),
        "Повышение защиты",
        "Превратиться в кибергоблина"
    )
    public static readonly NUMBER_OF_TARGETS_HIT = new AbilityIntegerLevelField(
        RawCode.get("Ocl2"),
        "Число пораженных целей",
        "Цепь молний"
    )
    public static readonly DETECTION_TYPE_OFS1 = new AbilityIntegerLevelField(
        RawCode.get("Ofs1"),
        "Тип обнаружения",
        "Духовное око"
    )
    public static readonly NUMBER_OF_SUMMONED_UNITS_OSF2 = new AbilityIntegerLevelField(
        RawCode.get("Osf2"),
        "Число вызванных боевых единиц",
        "Дух волка"
    )
    public static readonly NUMBER_OF_SUMMONED_UNITS_EFN1 = new AbilityIntegerLevelField(
        RawCode.get("Efn1"),
        "Число вызванных боевых единиц",
        "Сила природы"
    )
    public static readonly NUMBER_OF_CORPSES_RAISED_HRE1 = new AbilityIntegerLevelField(
        RawCode.get("Hre1"),
        "Число оживленных трупов",
        "Воскрешение"
    )
    public static readonly STACK_FLAGS = new AbilityIntegerLevelField(
        RawCode.get("Hca4"),
        "Флаг буфера",
        "Ледяные стрелы"
    )
    public static readonly MINIMUM_NUMBER_OF_UNITS = new AbilityIntegerLevelField(
        RawCode.get("Ndp2"),
        "Минимальное количество войск",
        "Темные врата (Архимонд)"
    )
    public static readonly MAXIMUM_NUMBER_OF_UNITS_NDP3 = new AbilityIntegerLevelField(
        RawCode.get("Ndp3"),
        "Максимальное количество войск",
        "Темные врата (Архимонд)"
    )
    public static readonly NUMBER_OF_UNITS_CREATED_NRC2 = new AbilityIntegerLevelField(
        RawCode.get("Nrc2"),
        "Количество созданных войск",
        "Огненный дождь (Архимонд)"
    )
    public static readonly SHIELD_LIFE = new AbilityIntegerLevelField(
        RawCode.get("Ams3"),
        "Длительность щита",
        "Защитная аура"
    )
    public static readonly MANA_LOSS_AMS4 = new AbilityIntegerLevelField(
        RawCode.get("Ams4"),
        "Потеря маны",
        "Защитная аура"
    )
    public static readonly GOLD_PER_INTERVAL_BGM1 = new AbilityIntegerLevelField(
        RawCode.get("Bgm1"),
        "Золота за интервал времени",
        "Проклятие рудника"
    )
    public static readonly MAX_NUMBER_OF_MINERS = new AbilityIntegerLevelField(
        RawCode.get("Bgm3"),
        "Макс. количество работников на руднике",
        "Проклятие рудника"
    )
    public static readonly CARGO_CAPACITY = new AbilityIntegerLevelField(
        RawCode.get("Car1"),
        "Грузоподъемность",
        "Пассажир"
    )
    public static readonly MAXIMUM_CREEP_LEVEL_DEV3 = new AbilityIntegerLevelField(
        RawCode.get("Dev3"),
        "Максимальный уровень монстров",
        "Еда"
    )
    public static readonly MAX_CREEP_LEVEL_DEV1 = new AbilityIntegerLevelField(
        RawCode.get("Dev1"),
        "Макс. уровень монстров",
        "Проглотить"
    )
    public static readonly GOLD_PER_INTERVAL_EGM1 = new AbilityIntegerLevelField(
        RawCode.get("Egm1"),
        "Золота за интервал времени",
        "Оплетение рудника"
    )
    public static readonly DEFENSE_REDUCTION = new AbilityIntegerLevelField(
        RawCode.get("Fae1"),
        "Снижение защиты",
        "Волшебный огонь"
    )
    public static readonly DETECTION_TYPE_FLA1 = new AbilityIntegerLevelField(
        RawCode.get("Fla1"),
        "Тип обнаружения",
        "Осветительный заряд"
    )
    public static readonly FLARE_COUNT = new AbilityIntegerLevelField(
        RawCode.get("Fla3"),
        "Количество вспышек",
        "Осветительный заряд"
    )
    public static readonly MAX_GOLD = new AbilityIntegerLevelField(
        RawCode.get("Gld1"),
        "Макс. золота",
        "Рудник"
    )
    public static readonly MINING_CAPACITY = new AbilityIntegerLevelField(
        RawCode.get("Gld3"),
        "Вместительность рудника",
        "Рудник"
    )
    public static readonly MAXIMUM_NUMBER_OF_CORPSES_GYD1 = new AbilityIntegerLevelField(
        RawCode.get("Gyd1"),
        "Максимальное количество трупов",
        "Создать труп"
    )
    public static readonly DAMAGE_TO_TREE = new AbilityIntegerLevelField(
        RawCode.get("Har1"),
        "Урон по дереву",
        "Добывать ресурсы"
    )
    public static readonly LUMBER_CAPACITY = new AbilityIntegerLevelField(
        RawCode.get("Har2"),
        "Количество древесины в лесу",
        "Добывать ресурсы"
    )
    public static readonly GOLD_CAPACITY = new AbilityIntegerLevelField(
        RawCode.get("Har3"),
        "Количество золота на руднике",
        "Добывать ресурсы"
    )
    public static readonly DEFENSE_INCREASE_INF2 = new AbilityIntegerLevelField(
        RawCode.get("Inf2"),
        "Увеличение защиты",
        "Духовное пламя"
    )
    public static readonly INTERACTION_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Neu2"),
        "Тип взаимодействия",
        "Выбрать героя"
    )
    public static readonly GOLD_COST_NDT1 = new AbilityIntegerLevelField(
        RawCode.get("Ndt1"),
        "Требуется золота",
        "Разведать"
    )
    public static readonly LUMBER_COST_NDT2 = new AbilityIntegerLevelField(
        RawCode.get("Ndt2"),
        "Требуется древесины",
        "Разведать"
    )
    public static readonly DETECTION_TYPE_NDT3 = new AbilityIntegerLevelField(
        RawCode.get("Ndt3"),
        "Тип обнаружения",
        "Разведать"
    )
    public static readonly STACKING_TYPE_POI4 = new AbilityIntegerLevelField(
        RawCode.get("Poi4"),
        "Тип буфера",
        "Ядовитое жало"
    )
    public static readonly STACKING_TYPE_POA5 = new AbilityIntegerLevelField(
        RawCode.get("Poa5"),
        "Тип буфера",
        "Отравленные стрелы"
    )
    public static readonly MAXIMUM_CREEP_LEVEL_PLY1 = new AbilityIntegerLevelField(
        RawCode.get("Ply1"),
        "Максимальный уровень монстров",
        "Полиморф"
    )
    public static readonly MAXIMUM_CREEP_LEVEL_POS1 = new AbilityIntegerLevelField(
        RawCode.get("Pos1"),
        "Максимальный уровень монстров",
        "Одержимость"
    )
    public static readonly MOVEMENT_UPDATE_FREQUENCY_PRG1 = new AbilityIntegerLevelField(
        RawCode.get("Prg1"),
        "Частота обновления перемещений",
        "Очищение"
    )
    public static readonly ATTACK_UPDATE_FREQUENCY_PRG2 = new AbilityIntegerLevelField(
        RawCode.get("Prg2"),
        "Частота обновления атак",
        "Очищение"
    )
    public static readonly MANA_LOSS_PRG6 = new AbilityIntegerLevelField(
        RawCode.get("Prg6"),
        "Потеря маны",
        "Очищение"
    )
    public static readonly UNITS_SUMMONED_TYPE_ONE = new AbilityIntegerLevelField(
        RawCode.get("Rai1"),
        "Вызванные войска (тип первый)",
        "Оживить мертвых"
    )
    public static readonly UNITS_SUMMONED_TYPE_TWO = new AbilityIntegerLevelField(
        RawCode.get("Rai2"),
        "Вызванные войска (тип второй)",
        "Оживить мертвых"
    )
    public static readonly MAX_UNITS_SUMMONED = new AbilityIntegerLevelField(
        RawCode.get("Ucb5"),
        "Макс. вызванных войск",
        "Трупоеды"
    )
    public static readonly ALLOW_WHEN_FULL_REJ3 = new AbilityIntegerLevelField(
        RawCode.get("Rej3"),
        'Параметр "Разрешить, когда заполнено"',
        "Омоложение"
    )
    public static readonly MAXIMUM_UNITS_CHARGED_TO_CASTER = new AbilityIntegerLevelField(
        RawCode.get("Rpb5"),
        "Максимум войск заряжено",
        "восстановить"
    )
    public static readonly MAXIMUM_UNITS_AFFECTED = new AbilityIntegerLevelField(
        RawCode.get("Rpb6"),
        "Максимальное количество целей",
        "восстановить"
    )
    public static readonly DEFENSE_INCREASE_ROA2 = new AbilityIntegerLevelField(
        RawCode.get("Roa2"),
        "Увеличение защиты",
        "Рев"
    )
    public static readonly MAX_UNITS_ROA7 = new AbilityIntegerLevelField(
        RawCode.get("Roa7"),
        "Макс. войск",
        "Рев"
    )
    public static readonly ROOTED_WEAPONS = new AbilityIntegerLevelField(
        RawCode.get("Roo1"),
        "Укоренившееся древо: оружие",
        "Пустить корни"
    )
    public static readonly UPROOTED_WEAPONS = new AbilityIntegerLevelField(
        RawCode.get("Roo2"),
        "Древо, выдернувшее корни: оружие",
        "Пустить корни"
    )
    public static readonly UPROOTED_DEFENSE_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Roo4"),
        "Тип защиты (корни вытащены)",
        "Пустить корни"
    )
    public static readonly ACCUMULATION_STEP = new AbilityIntegerLevelField(
        RawCode.get("Sal2"),
        "Шаг накопления",
        "Грабеж"
    )
    public static readonly NUMBER_OF_OWLS = new AbilityIntegerLevelField(
        RawCode.get("Esn4"),
        "Количество сов",
        "Сторожевая сова"
    )
    public static readonly STACKING_TYPE_SPO4 = new AbilityIntegerLevelField(
        RawCode.get("Spo4"),
        "Тип буферизации",
        "Яд"
    )
    public static readonly NUMBER_OF_UNITS = new AbilityIntegerLevelField(
        RawCode.get("Sod1"),
        "Количество войск",
        "Скелет (возможно, черная стрела)"
    )
    public static readonly SPIDER_CAPACITY = new AbilityIntegerLevelField(
        RawCode.get("Spa1"),
        "Грузоподъемность паука",
        "Атака пауков"
    )
    public static readonly INTERVALS_BEFORE_CHANGING_TREES = new AbilityIntegerLevelField(
        RawCode.get("Wha2"),
        "Интервалы перед сменой деревьев",
        "Добывать ресурсы (светлячок в руднике или около дерева)"
    )
    public static readonly AGILITY_BONUS = new AbilityIntegerLevelField(
        RawCode.get("Iagi"),
        "Дополнительная ловкость",
        "Повышение характеристик"
    )
    public static readonly INTELLIGENCE_BONUS = new AbilityIntegerLevelField(
        RawCode.get("Iint"),
        "Дополнительный разум",
        "Повышение характеристик"
    )
    public static readonly STRENGTH_BONUS_ISTR = new AbilityIntegerLevelField(
        RawCode.get("Istr"),
        "Дополнительная сила",
        "Повышение характеристик"
    )
    public static readonly ATTACK_BONUS = new AbilityIntegerLevelField(
        RawCode.get("Iatt"),
        "Дополнительная атака",
        "Предмет: повышение силы атаки"
    )
    public static readonly DEFENSE_BONUS_IDEF = new AbilityIntegerLevelField(
        RawCode.get("Idef"),
        "Дополнительная защита",
        "Предмет: повышение защиты"
    )
    public static readonly SUMMON_1_AMOUNT = new AbilityIntegerLevelField(
        RawCode.get("Isn1"),
        "Вызвать 1: количество",
        "Предмет: вызов скелета"
    )
    public static readonly SUMMON_2_AMOUNT = new AbilityIntegerLevelField(
        RawCode.get("Isn2"),
        "Вызвать 2: количество",
        "Предмет: вызова скелета"
    )
    public static readonly EXPERIENCE_GAINED = new AbilityIntegerLevelField(
        RawCode.get("Ixpg"),
        "Получено опыта",
        "Предмет: дополнительный опыт"
    )
    public static readonly HIT_POINTS_GAINED_IHPG = new AbilityIntegerLevelField(
        RawCode.get("Ihpg"),
        "Получено здоровья",
        "Свойство: массовое лечение"
    )
    public static readonly MANA_POINTS_GAINED_IMPG = new AbilityIntegerLevelField(
        RawCode.get("Impg"),
        "Получено маны",
        "Руна массового восстановления маны"
    )
    public static readonly HIT_POINTS_GAINED_IHP2 = new AbilityIntegerLevelField(
        RawCode.get("Ihp2"),
        "Получено здоровья",
        "Предмет: временное массовое повышение защиты"
    )
    public static readonly MANA_POINTS_GAINED_IMP2 = new AbilityIntegerLevelField(
        RawCode.get("Imp2"),
        "Получено маны",
        "Предмет: временное массовое повышение защиты"
    )
    public static readonly DAMAGE_BONUS_DICE = new AbilityIntegerLevelField(
        RawCode.get("Idic"),
        "Кости: дополнительный урон",
        "Предмет: электрическая атака"
    )
    public static readonly ARMOR_PENALTY_IARP = new AbilityIntegerLevelField(
        RawCode.get("Iarp"),
        "Ухудшение брони",
        "Предмет: проклятие"
    )
    public static readonly ENABLED_ATTACK_INDEX_IOB5 = new AbilityIntegerLevelField(
        RawCode.get("Iob5"),
        "Включен индекс атаки",
        "Предмет: проклятие"
    )
    public static readonly LEVELS_GAINED = new AbilityIntegerLevelField(
        RawCode.get("Ilev"),
        "Получено уровней",
        "Предмет: повышение уровня героя"
    )
    public static readonly MAX_LIFE_GAINED = new AbilityIntegerLevelField(
        RawCode.get("Ilif"),
        "Получено жизни (макс.)",
        "Предмет: увеличение запаса здоровья"
    )
    public static readonly MAX_MANA_GAINED = new AbilityIntegerLevelField(
        RawCode.get("Iman"),
        "Получено маны (макс.)",
        "Предмет: увеличение запаса маны"
    )
    public static readonly GOLD_GIVEN = new AbilityIntegerLevelField(
        RawCode.get("Igol"),
        "Отдано золота",
        "Сундук золота"
    )
    public static readonly LUMBER_GIVEN = new AbilityIntegerLevelField(
        RawCode.get("Ilum"),
        "Отдано древесины",
        "Вязанка дров"
    )
    public static readonly DETECTION_TYPE_IFA1 = new AbilityIntegerLevelField(
        RawCode.get("Ifa1"),
        "Тип обнаружения",
        "Осветительная ракета"
    )
    public static readonly MAXIMUM_CREEP_LEVEL_ICRE = new AbilityIntegerLevelField(
        RawCode.get("Icre"),
        "Максимальный уровень монстров",
        "Предмет: Боевой Дух"
    )
    public static readonly MOVEMENT_SPEED_BONUS = new AbilityIntegerLevelField(
        RawCode.get("Imvb"),
        "Дополнительная скорость перемещения",
        "Предмет: увеличение скорости перемещения"
    )
    public static readonly HIT_POINTS_REGENERATED_PER_SECOND = new AbilityIntegerLevelField(
        RawCode.get("Ihpr"),
        "Здоровья восстанавливается в секунду",
        "Предмет: восстановление здоровья"
    )
    public static readonly SIGHT_RANGE_BONUS = new AbilityIntegerLevelField(
        RawCode.get("Isib"),
        "Дополнительная область обзора",
        "Предмет: увеличение поля зрения"
    )
    public static readonly DAMAGE_PER_DURATION = new AbilityIntegerLevelField(
        RawCode.get("Icfd"),
        "Урона на протяжении",
        "Предмет: Жар Преисподней"
    )
    public static readonly MANA_USED_PER_SECOND = new AbilityIntegerLevelField(
        RawCode.get("Icfm"),
        "Маны используется в секунду",
        "Предмет: Жар Преисподней"
    )
    public static readonly EXTRA_MANA_REQUIRED = new AbilityIntegerLevelField(
        RawCode.get("Icfx"),
        "Требуется дополнительная мана",
        "Предмет: Жар Преисподней"
    )
    public static readonly DETECTION_RADIUS_IDET = new AbilityIntegerLevelField(
        RawCode.get("Idet"),
        "Радиус обнаружения",
        "Предмет: обнаружение невидимых воинов"
    )
    public static readonly MANA_LOSS_PER_UNIT_IDIM = new AbilityIntegerLevelField(
        RawCode.get("Idim"),
        "Потеря маны на боевую единицу",
        "Предмет: рассеять чары"
    )
    public static readonly DAMAGE_TO_SUMMONED_UNITS_IDID = new AbilityIntegerLevelField(
        RawCode.get("Idid"),
        "Урон вызванным войскам",
        "Предмет: рассеять чары"
    )
    public static readonly MAXIMUM_NUMBER_OF_UNITS_IREC = new AbilityIntegerLevelField(
        RawCode.get("Irec"),
        "Максимальное количество войск",
        "Предмет: Портал"
    )
    public static readonly DELAY_AFTER_DEATH_SECONDS = new AbilityIntegerLevelField(
        RawCode.get("Ircd"),
        "Задержка после смерти (секунды)",
        "Предмет: Перерождение"
    )
    public static readonly RESTORED_LIFE = new AbilityIntegerLevelField(
        RawCode.get("irc2"),
        "Восстановленное здоровье",
        "Предмет: Перерождение"
    )
    public static readonly RESTORED_MANA_1_FOR_CURRENT = new AbilityIntegerLevelField(
        RawCode.get("irc3"),
        "Восстановленная мана (-1 от текущей)"
    )
    public static readonly HIT_POINTS_RESTORED = new AbilityIntegerLevelField(
        RawCode.get("Ihps"),
        "Восстановлено здоровья",
        "Предмет: массовое восстановление здоровья и маны"
    )
    public static readonly MANA_POINTS_RESTORED = new AbilityIntegerLevelField(
        RawCode.get("Imps"),
        "Восстановлено маны",
        "Предмет: массовое восстановление здоровья и маны"
    )
    public static readonly MAXIMUM_NUMBER_OF_UNITS_ITPM = new AbilityIntegerLevelField(
        RawCode.get("Itpm"),
        "Максимальное количество войск",
        "Предмет: Возвращение"
    )
    public static readonly NUMBER_OF_CORPSES_RAISED_CAD1 = new AbilityIntegerLevelField(
        RawCode.get("Cad1"),
        "Число оживленных трупов",
        "Предмет: Гальванизация"
    )
    public static readonly TERRAIN_DEFORMATION_DURATION_MS = new AbilityIntegerLevelField(
        RawCode.get("Wrs3"),
        "Длительность деформации рельефа (мс)",
        "Громовая поступь"
    )
    public static readonly MAXIMUM_UNITS = new AbilityIntegerLevelField(
        RawCode.get("Uds1"),
        "Максимальное количество войск",
        "Зов Тьмы"
    )
    public static readonly DETECTION_TYPE_DET1 = new AbilityIntegerLevelField(
        RawCode.get("Det1"),
        "Тип обнаружения",
        "Ясновидение (Тень)"
    )
    public static readonly GOLD_COST_PER_STRUCTURE = new AbilityIntegerLevelField(
        RawCode.get("Nsp1"),
        "Количество золота на здание",
        "Шпионить"
    )
    public static readonly LUMBER_COST_PER_USE = new AbilityIntegerLevelField(
        RawCode.get("Nsp2"),
        "Количество древесины на использование",
        "Шпионить"
    )
    public static readonly DETECTION_TYPE_NSP3 = new AbilityIntegerLevelField(
        RawCode.get("Nsp3"),
        "Тип обнаружения",
        "Шпионить"
    )
    public static readonly NUMBER_OF_SWARM_UNITS = new AbilityIntegerLevelField(
        RawCode.get("Uls1"),
        "Число членов стаи",
        "Москиты"
    )
    public static readonly MAX_SWARM_UNIT_PER_TARGET = new AbilityIntegerLevelField(
        RawCode.get("Uls3"),
        "Максимум членов стаи на цель",
        "Москиты"
    )
    public static readonly NUMBER_OF_SUMMONED_UNITS_NBA2 = new AbilityIntegerLevelField(
        RawCode.get("Nba2"),
        "Число вызванных боевых единиц",
        "Черная стрела"
    )
    public static readonly MAXIMUM_CREEP_LEVEL_NCH1 = new AbilityIntegerLevelField(
        RawCode.get("Nch1"),
        "Максимальный уровень монстров",
        "Подчинение"
    )
    public static readonly ATTACKS_PREVENTED = new AbilityIntegerLevelField(
        RawCode.get("Nsi1"),
        "Предотвращено атак",
        "Безмолвие"
    )
    public static readonly MAXIMUM_NUMBER_OF_TARGETS_EFK3 = new AbilityIntegerLevelField(
        RawCode.get("Efk3"),
        "Максимальное количество целей",
        "Веерный бросок"
    )
    public static readonly NUMBER_OF_SUMMONED_UNITS_ESV1 = new AbilityIntegerLevelField(
        RawCode.get("Esv1"),
        "Число вызванных боевых единиц",
        "Возмездие"
    )
    public static readonly MAXIMUM_NUMBER_OF_CORPSES_EXH1 = new AbilityIntegerLevelField(
        RawCode.get("exh1"),
        "Максимальное количество трупов",
        "Эксгумация"
    )
    public static readonly ITEM_CAPACITY = new AbilityIntegerLevelField(
        RawCode.get("inv1"),
        "Количество предметов",
        "Предметы (герой)"
    )
    public static readonly MAXIMUM_NUMBER_OF_TARGETS_SPL2 = new AbilityIntegerLevelField(
        RawCode.get("spl2"),
        "Максимальное количество целей",
        "Эмпатия"
    )
    public static readonly ALLOW_WHEN_FULL_IRL3 = new AbilityIntegerLevelField(
        RawCode.get("irl3"),
        "Разрешить, когда заполнено",
        "Лечебный эликсир"
    )
    public static readonly MAXIMUM_DISPELLED_UNITS = new AbilityIntegerLevelField(
        RawCode.get("idc3"),
        "Максимум рассеянных войск",
        "Предмет: волна рассеивания чар"
    )
    public static readonly NUMBER_OF_LURES = new AbilityIntegerLevelField(
        RawCode.get("imo1"),
        "Количество подчиненных",
        "Приманка"
    )
    public static readonly NEW_TIME_OF_DAY_HOUR = new AbilityIntegerLevelField(
        RawCode.get("ict1"),
        "Новое время суток: часы",
        "Изменить время суток"
    )
    public static readonly NEW_TIME_OF_DAY_MINUTE = new AbilityIntegerLevelField(
        RawCode.get("ict2"),
        "Новое время суток: минуты",
        "Изменить время суток"
    )
    public static readonly NUMBER_OF_UNITS_CREATED_MEC1 = new AbilityIntegerLevelField(
        RawCode.get("mec1"),
        "Количество созданных войск",
        "Заводной зверь"
    )
    public static readonly MINIMUM_SPELLS = new AbilityIntegerLevelField(
        RawCode.get("spb3"),
        "Минимум заклинаний",
        "Книга заклинаний"
    )
    public static readonly MAXIMUM_SPELLS = new AbilityIntegerLevelField(
        RawCode.get("spb4"),
        "Максимум заклинаний",
        "Книга заклинаний"
    )
    public static readonly DISABLED_ATTACK_INDEX = new AbilityIntegerLevelField(
        RawCode.get("gra3"),
        "Индекс выключенной атаки",
        "Вырвать дерево"
    )
    public static readonly ENABLED_ATTACK_INDEX_GRA4 = new AbilityIntegerLevelField(
        RawCode.get("gra4"),
        "Включен индекс атаки",
        "Вырвать дерево"
    )
    public static readonly MAXIMUM_ATTACKS = new AbilityIntegerLevelField(
        RawCode.get("gra5"),
        "Максимум атак",
        "Вырвать дерево"
    )
    public static readonly BUILDING_TYPES_ALLOWED_NPR1 = new AbilityIntegerLevelField(
        RawCode.get("Npr1"),
        "Допустимые типы зданий",
        "Посох Возвращения"
    )
    public static readonly BUILDING_TYPES_ALLOWED_NSA1 = new AbilityIntegerLevelField(
        RawCode.get("Nsa1"),
        "Допустимые типы зданий",
        "Посох Спасения"
    )
    public static readonly ATTACK_MODIFICATION = new AbilityIntegerLevelField(
        RawCode.get("Iaa1"),
        "Модификация атаки",
        "Предмет: повышение силы атаки (однократное)"
    )
    public static readonly SUMMONED_UNIT_COUNT_NPA5 = new AbilityIntegerLevelField(
        RawCode.get("Npa5"),
        "Счет вызванной боевой единицы",
        "Паразит"
    )
    public static readonly UPGRADE_LEVELS = new AbilityIntegerLevelField(
        RawCode.get("Igl1"),
        "Уровни улучшения",
        "Знак Неприступности"
    )
    public static readonly NUMBER_OF_SUMMONED_UNITS_NDO2 = new AbilityIntegerLevelField(
        RawCode.get("Ndo2"),
        "Число вызванных боевых единиц",
        "Печать Преисподней"
    )
    public static readonly BEASTS_PER_SECOND = new AbilityIntegerLevelField(
        RawCode.get("Nst1"),
        "Зверей в секунду",
        "Стадо ящериц"
    )
    public static readonly TARGET_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Ncl2"),
        "Тип цели",
        "Канал"
    )
    public static readonly OPTIONS = new AbilityIntegerLevelField(
        RawCode.get("Ncl3"),
        "Параметры",
        "Канал"
    )
    public static readonly ARMOR_PENALTY_NAB3 = new AbilityIntegerLevelField(
        RawCode.get("Nab3"),
        "Снижение защиты",
        "Кислотная бомба"
    )
    public static readonly WAVE_COUNT_NHS6 = new AbilityIntegerLevelField(
        RawCode.get("Nhs6"),
        "Количество волн",
        "Исцеляющий газ"
    )
    public static readonly MAX_CREEP_LEVEL_NTM3 = new AbilityIntegerLevelField(
        RawCode.get("Ntm3"),
        "Макс. уровень монстров",
        "Трансмутация"
    )
    public static readonly MISSILE_COUNT = new AbilityIntegerLevelField(
        RawCode.get("Ncs3"),
        "Количество выстрелов",
        "Ракетный удар"
    )
    public static readonly SPLIT_ATTACK_COUNT = new AbilityIntegerLevelField(
        RawCode.get("Nlm3"),
        "Деление: количество атак",
        "Тварь из Недр"
    )
    public static readonly GENERATION_COUNT = new AbilityIntegerLevelField(
        RawCode.get("Nlm6"),
        "Количество поколений",
        "Тварь из Недр"
    )
    public static readonly ROCK_RING_COUNT = new AbilityIntegerLevelField(
        RawCode.get("Nvc1"),
        "Количество колец",
        "Вулкан"
    )
    public static readonly WAVE_COUNT_NVC2 = new AbilityIntegerLevelField(
        RawCode.get("Nvc2"),
        "Количество волн",
        "Вулкан"
    )
    public static readonly PREFER_HOSTILES_TAU1 = new AbilityIntegerLevelField(
        RawCode.get("Tau1"),
        "Предпочтение противникам",
        "Оскорбление"
    )
    public static readonly PREFER_FRIENDLIES_TAU2 = new AbilityIntegerLevelField(
        RawCode.get("Tau2"),
        "Предпочтение союзникам",
        "Оскорбление"
    )
    public static readonly MAX_UNITS_TAU3 = new AbilityIntegerLevelField(
        RawCode.get("Tau3"),
        "Макс. войск",
        "Оскорбление"
    )
    public static readonly NUMBER_OF_PULSES = new AbilityIntegerLevelField(
        RawCode.get("Tau4"),
        "Количество импульсов",
        "Оскорбление"
    )
    public static readonly SUMMONED_UNIT_TYPE_HWE1 = new AbilityIntegerLevelField(
        RawCode.get("Hwe1"),
        "Тип вызванных войск",
        "Дух Воды"
    )
    public static readonly SUMMONED_UNIT_UIN4 = new AbilityIntegerLevelField(
        RawCode.get("Uin4"),
        "Вызванная боевая единица",
        "Огненный голем"
    )
    public static readonly SUMMONED_UNIT_OSF1 = new AbilityIntegerLevelField(
        RawCode.get("Osf1"),
        "Вызванная боевая единица",
        "Дух волка"
    )
    public static readonly SUMMONED_UNIT_TYPE_EFNU = new AbilityIntegerLevelField(
        RawCode.get("Efnu"),
        "Тип вызванных войск",
        "Сила природы"
    )
    public static readonly SUMMONED_UNIT_TYPE_NBAU = new AbilityIntegerLevelField(
        RawCode.get("Nbau"),
        "Тип вызванных войск",
        "Черная стрела"
    )
    public static readonly SUMMONED_UNIT_TYPE_NTOU = new AbilityIntegerLevelField(
        RawCode.get("Ntou"),
        "Тип вызванных войск",
        "Торнадо"
    )
    public static readonly SUMMONED_UNIT_TYPE_ESVU = new AbilityIntegerLevelField(
        RawCode.get("Esvu"),
        "Тип вызванных войск",
        "Возмездие"
    )
    public static readonly SUMMONED_UNIT_TYPES = new AbilityIntegerLevelField(
        RawCode.get("Nef1"),
        "Типы вызванных войск",
        "Три стихии"
    )
    public static readonly SUMMONED_UNIT_TYPE_NDOU = new AbilityIntegerLevelField(
        RawCode.get("Ndou"),
        "Тип вызванных войск",
        "Печать Преисподней"
    )
    public static readonly ALTERNATE_FORM_UNIT_EMEU = new AbilityIntegerLevelField(
        RawCode.get("Emeu"),
        "Альтернативная форма боевой единицы",
        "Перевоплощение"
    )
    public static readonly PLAGUE_WARD_UNIT_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Aplu"),
        "Тип боевой единицы: Дух Чумы",
        "Ядовитое облако"
    )
    public static readonly ALLOWED_UNIT_TYPE_BTL1 = new AbilityIntegerLevelField(
        RawCode.get("Btl1"),
        "Допустимые типы войск",
        "Боевая тревога"
    )
    public static readonly NEW_UNIT_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Cha1"),
        "Новый тип войск",
        "Темный"
    )
    public static readonly RESULTING_UNIT_TYPE_ENT1 = new AbilityIntegerLevelField(
        RawCode.get("ent1"),
        "Итоговый тип войск",
        "Оплести рудник"
    )
    public static readonly CORPSE_UNIT_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Gydu"),
        "Тип трупа боевой единицы",
        "Создать труп"
    )
    public static readonly ALLOWED_UNIT_TYPE_LOA1 = new AbilityIntegerLevelField(
        RawCode.get("Loa1"),
        "Допустимые типы войск",
        "Добывать золото"
    )
    public static readonly UNIT_TYPE_FOR_LIMIT_CHECK = new AbilityIntegerLevelField(
        RawCode.get("Raiu"),
        "Тип войск для проверки",
        "Оживить мертвых"
    )
    public static readonly WARD_UNIT_TYPE_STAU = new AbilityIntegerLevelField(
        RawCode.get("Stau"),
        "Тип войск: дух",
        "Колдовская ловушка"
    )
    public static readonly EFFECT_ABILITY = new AbilityIntegerLevelField(
        RawCode.get("Iobu"),
        "Способность эффекта",
        "Предмет: Черная стрела"
    )
    public static readonly CONVERSION_UNIT = new AbilityIntegerLevelField(
        RawCode.get("Ndc2"),
        "Конвертируемая боевая единица",
        "Обращение во Тьму (Малганус)"
    )
    public static readonly UNIT_TO_PRESERVE = new AbilityIntegerLevelField(
        RawCode.get("Nsl1"),
        "Сохраняется боевая единица",
        "Сохранение зомби (Малганус)"
    )
    public static readonly UNIT_TYPE_ALLOWED = new AbilityIntegerLevelField(
        RawCode.get("Chl1"),
        "Допустимые типы войск",
        "Темный парашютист на борту"
    )
    public static readonly SWARM_UNIT_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Ulsu"),
        "Тип войск: член стаи",
        "Москиты"
    )
    public static readonly RESULTING_UNIT_TYPE_COAU = new AbilityIntegerLevelField(
        RawCode.get("coau"),
        "Итоговый тип войск",
        "Оседлать гиппогрифа"
    )
    public static readonly UNIT_TYPE_EXHU = new AbilityIntegerLevelField(
        RawCode.get("exhu"),
        "Тип войск",
        "Эксгумация"
    )
    public static readonly WARD_UNIT_TYPE_HWDU = new AbilityIntegerLevelField(
        RawCode.get("hwdu"),
        "Тип боевой единицы: дух",
        "Дух-целитель (знахарь)"
    )
    public static readonly LURE_UNIT_TYPE = new AbilityIntegerLevelField(
        RawCode.get("imou"),
        "Тип подчинения боевой единицы",
        "Приманка"
    )
    public static readonly UNIT_TYPE_IPMU = new AbilityIntegerLevelField(
        RawCode.get("ipmu"),
        "Тип войск",
        "Предмет: установка мины"
    )
    public static readonly FACTORY_UNIT_ID = new AbilityIntegerLevelField(
        RawCode.get("Nsyu"),
        "Идентификатор созданного воина",
        "Мини-завод"
    )
    public static readonly SPAWN_UNIT_ID_NFYU = new AbilityIntegerLevelField(
        RawCode.get("Nfyu"),
        "Идентификатор порожденного воина",
        "Завод"
    )
    public static readonly DESTRUCTIBLE_ID = new AbilityIntegerLevelField(
        RawCode.get("Nvcu"),
        "Идентификатор разрушаемого объекта"
    )
    public static readonly UPGRADE_TYPE = new AbilityIntegerLevelField(
        RawCode.get("Iglu"),
        "Тип улучшения",
        "Знак Неприступности"
    )
}
