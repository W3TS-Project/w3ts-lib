import { AbilityIntegerField } from "../../../API/fields/ability/base/AbilityIntegerField";

export abstract class AbilityIntegerLevelFields {
  public static readonly MANA_COST = new AbilityIntegerField('amcs')
  public static readonly NUMBER_OF_WAVES = new AbilityIntegerField('Hbz1', 'Количество волн', 'Буран')
  public static readonly NUMBER_OF_SHARDS = new AbilityIntegerField('Hbz3', 'Количество вихрей', 'Буран')
  public static readonly NUMBER_OF_UNITS_TELEPORTED = new AbilityIntegerField('Hmt1', 'Количество телепортированных войск', 'Массовая телепортация')
  public static readonly SUMMONED_UNIT_COUNT_HWE2 = new AbilityIntegerField('Hwe2', 'Счет вызванной боевой единицы', 'Дух Воды')
  public static readonly NUMBER_OF_IMAGES = new AbilityIntegerField('Omi1', 'Количество изображений', 'Иллюзия')
  public static readonly NUMBER_OF_CORPSES_RAISED_UAN1 = new AbilityIntegerField('Uan1', 'Число оживленных трупов', 'Гальванизация')
  public static readonly MORPHING_FLAGS = new AbilityIntegerField('Eme2', 'Превращенные флаги', 'Перевоплощение')
  public static readonly STRENGTH_BONUS_NRG5 = new AbilityIntegerField('Nrg5', 'Повышение силы', 'Превратиться в кибергоблина')
  public static readonly DEFENSE_BONUS_NRG6 = new AbilityIntegerField('Nrg6', 'Повышение защиты', 'Превратиться в кибергоблина')
  public static readonly NUMBER_OF_TARGETS_HIT = new AbilityIntegerField('Ocl2', 'Число пораженных целей', 'Цепь молний')
  public static readonly DETECTION_TYPE_OFS1 = new AbilityIntegerField('Ofs1', 'Тип обнаружения', 'Духовное око')
  public static readonly NUMBER_OF_SUMMONED_UNITS_OSF2 = new AbilityIntegerField('Osf2', 'Число вызванных боевых единиц', 'Дух волка')
  public static readonly NUMBER_OF_SUMMONED_UNITS_EFN1 = new AbilityIntegerField('Efn1', 'Число вызванных боевых единиц', 'Сила природы')
  public static readonly NUMBER_OF_CORPSES_RAISED_HRE1 = new AbilityIntegerField('Hre1', 'Число оживленных трупов', 'Воскрешение')
  public static readonly STACK_FLAGS = new AbilityIntegerField('Hca4', 'Флаг буфера', 'Ледяные стрелы')
  public static readonly MINIMUM_NUMBER_OF_UNITS = new AbilityIntegerField('Ndp2', 'Минимальное количество войск', 'Темные врата (Архимонд)')
  public static readonly MAXIMUM_NUMBER_OF_UNITS_NDP3 = new AbilityIntegerField('Ndp3', 'Максимальное количество войск', 'Темные врата (Архимонд)')
  public static readonly NUMBER_OF_UNITS_CREATED_NRC2 = new AbilityIntegerField('Nrc2', 'Количество созданных войск', 'Огненный дождь (Архимонд)')
  public static readonly SHIELD_LIFE = new AbilityIntegerField('Ams3', 'Длительность щита', 'Защитная аура')
  public static readonly MANA_LOSS_AMS4 = new AbilityIntegerField('Ams4', 'Потеря маны', 'Защитная аура')
  public static readonly GOLD_PER_INTERVAL_BGM1 = new AbilityIntegerField('Bgm1', 'Золота за интервал времени', 'Проклятие рудника')
  public static readonly MAX_NUMBER_OF_MINERS = new AbilityIntegerField('Bgm3', 'Макс. количество работников на руднике', 'Проклятие рудника')
  public static readonly CARGO_CAPACITY = new AbilityIntegerField('Car1', 'Грузоподъемность', 'Пассажир')
  public static readonly MAXIMUM_CREEP_LEVEL_DEV3 = new AbilityIntegerField('Dev3', 'Максимальный уровень монстров', 'Еда')
  public static readonly MAX_CREEP_LEVEL_DEV1 = new AbilityIntegerField('Dev1', 'Макс. уровень монстров', 'Проглотить')
  public static readonly GOLD_PER_INTERVAL_EGM1 = new AbilityIntegerField('Egm1', 'Золота за интервал времени', 'Оплетение рудника')
  public static readonly DEFENSE_REDUCTION = new AbilityIntegerField('Fae1', 'Снижение защиты', 'Волшебный огонь')
  public static readonly DETECTION_TYPE_FLA1 = new AbilityIntegerField('Fla1', 'Тип обнаружения', 'Осветительный заряд')
  public static readonly FLARE_COUNT = new AbilityIntegerField('Fla3', 'Количество вспышек', 'Осветительный заряд')
  public static readonly MAX_GOLD = new AbilityIntegerField('Gld1', 'Макс. золота', 'Рудник')
  public static readonly MINING_CAPACITY = new AbilityIntegerField('Gld3', 'Вместительность рудника', 'Рудник')
  public static readonly MAXIMUM_NUMBER_OF_CORPSES_GYD1 = new AbilityIntegerField('Gyd1', 'Максимальное количество трупов', 'Создать труп')
  public static readonly DAMAGE_TO_TREE = new AbilityIntegerField('Har1', 'Урон по дереву', 'Добывать ресурсы')
  public static readonly LUMBER_CAPACITY = new AbilityIntegerField('Har2', 'Количество древесины в лесу', 'Добывать ресурсы')
  public static readonly GOLD_CAPACITY = new AbilityIntegerField('Har3', 'Количество золота на руднике', 'Добывать ресурсы')
  public static readonly DEFENSE_INCREASE_INF2 = new AbilityIntegerField('Inf2', 'Увеличение защиты', 'Духовное пламя')
  public static readonly INTERACTION_TYPE = new AbilityIntegerField('Neu2', 'Тип взаимодействия', 'Выбрать героя')
  public static readonly GOLD_COST_NDT1 = new AbilityIntegerField('Ndt1', 'Требуется золота', 'Разведать')
  public static readonly LUMBER_COST_NDT2 = new AbilityIntegerField('Ndt2', 'Требуется древесины', 'Разведать')
  public static readonly DETECTION_TYPE_NDT3 = new AbilityIntegerField('Ndt3', 'Тип обнаружения', 'Разведать')
  public static readonly STACKING_TYPE_POI4 = new AbilityIntegerField('Poi4', 'Тип буфера', 'Ядовитое жало')
  public static readonly STACKING_TYPE_POA5 = new AbilityIntegerField('Poa5', 'Тип буфера', 'Отравленные стрелы')
  public static readonly MAXIMUM_CREEP_LEVEL_PLY1 = new AbilityIntegerField('Ply1', 'Максимальный уровень монстров', 'Полиморф')
  public static readonly MAXIMUM_CREEP_LEVEL_POS1 = new AbilityIntegerField('Pos1', 'Максимальный уровень монстров', 'Одержимость')
  public static readonly MOVEMENT_UPDATE_FREQUENCY_PRG1 = new AbilityIntegerField('Prg1', 'Частота обновления перемещений', 'Очищение')
  public static readonly ATTACK_UPDATE_FREQUENCY_PRG2 = new AbilityIntegerField('Prg2', 'Частота обновления атак', 'Очищение')
  public static readonly MANA_LOSS_PRG6 = new AbilityIntegerField('Prg6', 'Потеря маны', 'Очищение')
  public static readonly UNITS_SUMMONED_TYPE_ONE = new AbilityIntegerField('Rai1', 'Вызванные войска (тип первый)', 'Оживить мертвых')
  public static readonly UNITS_SUMMONED_TYPE_TWO = new AbilityIntegerField('Rai2', 'Вызванные войска (тип второй)', 'Оживить мертвых')
  public static readonly MAX_UNITS_SUMMONED = new AbilityIntegerField('Ucb5', 'Макс. вызванных войск', 'Трупоеды')
  public static readonly ALLOW_WHEN_FULL_REJ3 = new AbilityIntegerField('Rej3', 'Параметр "Разрешить, когда заполнено"', 'Омоложение')
  public static readonly MAXIMUM_UNITS_CHARGED_TO_CASTER = new AbilityIntegerField('Rpb5', 'Максимум войск заряжено', 'восстановить')
  public static readonly MAXIMUM_UNITS_AFFECTED = new AbilityIntegerField('Rpb6', 'Максимальное количество целей', 'восстановить')
  public static readonly DEFENSE_INCREASE_ROA2 = new AbilityIntegerField('Roa2', 'Увеличение защиты', 'Рев')
  public static readonly MAX_UNITS_ROA7 = new AbilityIntegerField('Roa7', 'Макс. войск', 'Рев')
  public static readonly ROOTED_WEAPONS = new AbilityIntegerField('Roo1', 'Укоренившееся древо: оружие', 'Пустить корни')
  public static readonly UPROOTED_WEAPONS = new AbilityIntegerField('Roo2', 'Древо, выдернувшее корни: оружие', 'Пустить корни')
  public static readonly UPROOTED_DEFENSE_TYPE = new AbilityIntegerField('Roo4', 'Тип защиты (корни вытащены)', 'Пустить корни')
  public static readonly ACCUMULATION_STEP = new AbilityIntegerField('Sal2', 'Шаг накопления', 'Грабеж')
  public static readonly NUMBER_OF_OWLS = new AbilityIntegerField('Esn4', 'Количество сов', 'Сторожевая сова')
  public static readonly STACKING_TYPE_SPO4 = new AbilityIntegerField('Spo4', 'Тип буферизации', 'Яд')
  public static readonly NUMBER_OF_UNITS = new AbilityIntegerField('Sod1', 'Количество войск', 'Скелет (возможно, черная стрела)')
  public static readonly SPIDER_CAPACITY = new AbilityIntegerField('Spa1', 'Грузоподъемность паука', 'Атака пауков')
  public static readonly INTERVALS_BEFORE_CHANGING_TREES = new AbilityIntegerField('Wha2', 'Интервалы перед сменой деревьев', 'Добывать ресурсы (светлячок в руднике или около дерева)')
  public static readonly AGILITY_BONUS = new AbilityIntegerField('Iagi', 'Дополнительная ловкость', 'Повышение характеристик')
  public static readonly INTELLIGENCE_BONUS = new AbilityIntegerField('Iint', 'Дополнительный разум', 'Повышение характеристик')
  public static readonly STRENGTH_BONUS_ISTR = new AbilityIntegerField('Istr', 'Дополнительная сила', 'Повышение характеристик')
  public static readonly ATTACK_BONUS = new AbilityIntegerField('Iatt', 'Дополнительная атака', 'Предмет: повышение силы атаки')
  public static readonly DEFENSE_BONUS_IDEF = new AbilityIntegerField('Idef', 'Дополнительная защита', 'Предмет: повышение защиты')
  public static readonly SUMMON_1_AMOUNT = new AbilityIntegerField('Isn1', 'Вызвать 1: количество', 'Предмет: вызов скелета')
  public static readonly SUMMON_2_AMOUNT = new AbilityIntegerField('Isn2', 'Вызвать 2: количество', 'Предмет: вызова скелета')
  public static readonly EXPERIENCE_GAINED = new AbilityIntegerField('Ixpg', 'Получено опыта', 'Предмет: дополнительный опыт')
  public static readonly HIT_POINTS_GAINED_IHPG = new AbilityIntegerField('Ihpg', 'Получено здоровья', 'Свойство: массовое лечение')
  public static readonly MANA_POINTS_GAINED_IMPG = new AbilityIntegerField('Impg', 'Получено маны', 'Руна массового восстановления маны')
  public static readonly HIT_POINTS_GAINED_IHP2 = new AbilityIntegerField('Ihp2', 'Получено здоровья', 'Предмет: временное массовое повышение защиты')
  public static readonly MANA_POINTS_GAINED_IMP2 = new AbilityIntegerField('Imp2', 'Получено маны', 'Предмет: временное массовое повышение защиты')
  public static readonly DAMAGE_BONUS_DICE = new AbilityIntegerField('Idic', 'Кости: дополнительный урон', 'Предмет: электрическая атака')
  public static readonly ARMOR_PENALTY_IARP = new AbilityIntegerField('Iarp', 'Ухудшение брони', 'Предмет: проклятие')
  public static readonly ENABLED_ATTACK_INDEX_IOB5 = new AbilityIntegerField('Iob5', 'Включен индекс атаки', 'Предмет: проклятие')
  public static readonly LEVELS_GAINED = new AbilityIntegerField('Ilev', 'Получено уровней', 'Предмет: повышение уровня героя')
  public static readonly MAX_LIFE_GAINED = new AbilityIntegerField('Ilif', 'Получено жизни (макс.)', 'Предмет: увеличение запаса здоровья')
  public static readonly MAX_MANA_GAINED = new AbilityIntegerField('Iman', 'Получено маны (макс.)', 'Предмет: увеличение запаса маны')
  public static readonly GOLD_GIVEN = new AbilityIntegerField('Igol', 'Отдано золота', 'Сундук золота')
  public static readonly LUMBER_GIVEN = new AbilityIntegerField('Ilum', 'Отдано древесины', 'Вязанка дров')
  public static readonly DETECTION_TYPE_IFA1 = new AbilityIntegerField('Ifa1', 'Тип обнаружения', 'Осветительная ракета')
  public static readonly MAXIMUM_CREEP_LEVEL_ICRE = new AbilityIntegerField('Icre', 'Максимальный уровень монстров', 'Предмет: Боевой Дух')
  public static readonly MOVEMENT_SPEED_BONUS = new AbilityIntegerField('Imvb', 'Дополнительная скорость перемещения', 'Предмет: увеличение скорости перемещения')
  public static readonly HIT_POINTS_REGENERATED_PER_SECOND = new AbilityIntegerField('Ihpr', 'Здоровья восстанавливается в секунду', 'Предмет: восстановление здоровья')
  public static readonly SIGHT_RANGE_BONUS = new AbilityIntegerField('Isib', 'Дополнительная область обзора', 'Предмет: увеличение поля зрения')
  public static readonly DAMAGE_PER_DURATION = new AbilityIntegerField('Icfd', 'Урона на протяжении', 'Предмет: Жар Преисподней')
  public static readonly MANA_USED_PER_SECOND = new AbilityIntegerField('Icfm', 'Маны используется в секунду', 'Предмет: Жар Преисподней')
  public static readonly EXTRA_MANA_REQUIRED = new AbilityIntegerField('Icfx', 'Требуется дополнительная мана', 'Предмет: Жар Преисподней')
  public static readonly DETECTION_RADIUS_IDET = new AbilityIntegerField('Idet', 'Радиус обнаружения', 'Предмет: обнаружение невидимых воинов')
  public static readonly MANA_LOSS_PER_UNIT_IDIM = new AbilityIntegerField('Idim', 'Потеря маны на боевую единицу', 'Предмет: рассеять чары')
  public static readonly DAMAGE_TO_SUMMONED_UNITS_IDID = new AbilityIntegerField('Idid', 'Урон вызванным войскам', 'Предмет: рассеять чары')
  public static readonly MAXIMUM_NUMBER_OF_UNITS_IREC = new AbilityIntegerField('Irec', 'Максимальное количество войск', 'Предмет: Портал')
  public static readonly DELAY_AFTER_DEATH_SECONDS = new AbilityIntegerField('Ircd', 'Задержка после смерти (секунды)', 'Предмет: Перерождение')
  public static readonly RESTORED_LIFE = new AbilityIntegerField('irc2', 'Восстановленное здоровье', 'Предмет: Перерождение')
  public static readonly RESTORED_MANA_1_FOR_CURRENT = new AbilityIntegerField('irc3', 'Восстановленная мана (-1 от текущей)')
  public static readonly HIT_POINTS_RESTORED = new AbilityIntegerField('Ihps', 'Восстановлено здоровья', 'Предмет: массовое восстановление здоровья и маны')
  public static readonly MANA_POINTS_RESTORED = new AbilityIntegerField('Imps', 'Восстановлено маны', 'Предмет: массовое восстановление здоровья и маны')
  public static readonly MAXIMUM_NUMBER_OF_UNITS_ITPM = new AbilityIntegerField('Itpm', 'Максимальное количество войск', 'Предмет: Возвращение')
  public static readonly NUMBER_OF_CORPSES_RAISED_CAD1 = new AbilityIntegerField('Cad1', 'Число оживленных трупов', 'Предмет: Гальванизация')
  public static readonly TERRAIN_DEFORMATION_DURATION_MS = new AbilityIntegerField('Wrs3', 'Длительность деформации рельефа (мс)', 'Громовая поступь')
  public static readonly MAXIMUM_UNITS = new AbilityIntegerField('Uds1', 'Максимальное количество войск', 'Зов Тьмы')

}

//     DetectionType_Det1: c("Det1"),
//     GoldCostPerStructure: c("Nsp1"),
//     LumberCostPerUse: c("Nsp2"),
//     DetectionType_Nsp3: c("Nsp3"),
//     NumberOfSwarmUnits: c("Uls1"),
//     MaxSwarmUnitPerTarget: c("Uls3"),
//     NumberOfSummonedUnits_Nba2: c("Nba2"),
//     MaximumCreepLevel_Nch1: c("Nch1"),
//     AttacksPrevented: c("Nsi1"),
//     MaximumNumberOfTargets_Efk3: c("Efk3"),
//     NumberOfSummonedUnits_Esv1: c("Esv1"),
//     MaximumNumberOfCorpses_exh1: c("exh1"),
//     ItemCapacity: c("inv1"),
//     MaximumNumberOfTargets_spl2: c("spl2"),
//     AllowWhenFull_irl3: c("irl3"),
//     MaximumDispelledUnits: c("idc3"),
//     NumberOfLures: c("imo1"),
//     NewTimeOfDayHour: c("ict1"),
//     NewTimeOfDayMinute: c("ict2"),
//     NumberOfUnitsCreated_mec1: c("mec1"),
//     MinimumSpells: c("spb3"),
//     MaximumSpells: c("spb4"),
//     DisabledAttackIndex: c("gra3"),
//     EnabledAttackIndex_gra4: c("gra4"),
//     MaximumAttacks: c("gra5"),
//     BuildingTypesAllowed_Npr1: c("Npr1"),
//     BuildingTypesAllowed_Nsa1: c("Nsa1"),
//     AttackModification: c("Iaa1"),
//     SummonedUnitCount_Npa5: c("Npa5"),
//     UpgradeLevels: c("Igl1"),
//     NumberOfSummonedUnits_Ndo2: c("Ndo2"),
//     BeastsPerSecond: c("Nst1"),
//     TargetType: c("Ncl2"),
//     Options: c("Ncl3"),
//     ArmorPenalty_Nab3: c("Nab3"),
//     WaveCount_Nhs6: c("Nhs6"),
//     MaxCreepLevel_Ntm3: c("Ntm3"),
//     MissileCount: c("Ncs3"),
//     SplitAttackCount: c("Nlm3"),
//     GenerationCount: c("Nlm6"),
//     RockRingCount: c("Nvc1"),
//     WaveCount_Nvc2: c("Nvc2"),
//     PreferHostiles_Tau1: c("Tau1"),
//     PreferFriendlies_Tau2: c("Tau2"),
//     MaxUnits_Tau3: c("Tau3"),
//     NumberOfPulses: c("Tau4"),
//     SummonedUnitType_Hwe1: c("Hwe1"),
//     SummonedUnit_Uin4: c("Uin4"),
//     SummonedUnit_Osf1: c("Osf1"),
//     SummonedUnitType_Efnu: c("Efnu"),
//     SummonedUnitType_Nbau: c("Nbau"),
//     SummonedUnitType_Ntou: c("Ntou"),
//     SummonedUnitType_Esvu: c("Esvu"),
//     SummonedUnitTypes: c("Nef1"),
//     SummonedUnitType_Ndou: c("Ndou"),
//     AlternateFormUnit_Emeu: c("Emeu"),
//     PlagueWardUnitType: c("Aplu"),
//     AllowedUnitType_Btl1: c("Btl1"),
//     NewUnitType: c("Cha1"),
//     ResultingUnitType_ent1: c("ent1"),
//     CorpseUnitType: c("Gydu"),
//     AllowedUnitType_Loa1: c("Loa1"),
//     UnitTypeForLimitCheck: c("Raiu"),
//     WardUnitType_Stau: c("Stau"),
//     EffectAbility: c("Iobu"),
//     ConversionUnit: c("Ndc2"),
//     UnitToPreserve: c("Nsl1"),
//     UnitTypeAllowed: c("Chl1"),
//     SwarmUnitType: c("Ulsu"),
//     ResultingUnitType_coau: c("coau"),
//     UnitType_exhu: c("exhu"),
//     WardUnitType_hwdu: c("hwdu"),
//     LureUnitType: c("imou"),
//     UnitType_ipmu: c("ipmu"),
//     FactoryUnitID: c("Nsyu"),
//     SpawnUnitID_Nfyu: c("Nfyu"),
//     DestructibleID: c("Nvcu"),
//     UpgradeType: c("Iglu")
// }
