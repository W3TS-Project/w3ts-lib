import { AbilityRealLevelField } from "../../../API/fields/ability/level/AbilityRealLevelField";

export abstract class AbilityRealLevelFields {
	public static readonly CASTING_TIME = new AbilityRealLevelField('acas', 'Время подготовки заклинания')
	public static readonly DURATION_NORMAL = new AbilityRealLevelField('adur', 'Длительность: нормальная')
	public static readonly DURATION_HERO = new AbilityRealLevelField('ahdu', 'Длительность воздействия: герой')
	public static readonly COOLDOWN = new AbilityRealLevelField('acdn', 'Перезарядка')
	public static readonly AREA_OF_EFFECT = new AbilityRealLevelField('aare', 'Область воздействия')
	public static readonly CAST_RANGE = new AbilityRealLevelField('aran', 'Радиус действия')
	public static readonly DAMAGE_HBZ2 = new AbilityRealLevelField('Hbz2', 'Урон', 'Буран')
	public static readonly BUILDING_REDUCTION_HBZ4 = new AbilityRealLevelField('Hbz4', 'Уменьшение скорости строительства', 'Буран')
	public static readonly DAMAGE_PER_SECOND_HBZ5 = new AbilityRealLevelField('Hbz5', 'Урона в секунду', 'Буран')
	public static readonly MAXIMUM_DAMAGE_PER_WAVE = new AbilityRealLevelField('Hbz6', 'Макс. урон на волну', 'Буран')
	public static readonly MANA_REGENERATION_INCREASE = new AbilityRealLevelField('Hab1', 'Увеличение скорости восстановления маны', 'Чародейская аура')
	public static readonly CASTING_DELAY = new AbilityRealLevelField('Hmt2', 'Задержка заклинания', 'Массовая телепортация')
	public static readonly DAMAGE_PER_SECOND_OWW1 = new AbilityRealLevelField('Oww1', 'Урона в секунду', 'Стальной вихрь')
	public static readonly MAGIC_DAMAGE_REDUCTION_OWW2 = new AbilityRealLevelField('Oww2', 'Снижение магического урона', 'Стальной вихрь')
	public static readonly CHANCE_TO_CRITICAL_STRIKE = new AbilityRealLevelField('Ocr1', 'Шанс на критический удар', 'Смертельный удар')
	public static readonly DAMAGE_MULTIPLIER_OCR2 = new AbilityRealLevelField('Ocr2', 'Увеличение урона', 'Смертельный удар')
	public static readonly DAMAGE_BONUS_OCR3 = new AbilityRealLevelField('Ocr3', 'Дополнительный урон', 'Смертельный удар')
	public static readonly CHANCE_TO_EVADE_OCR4 = new AbilityRealLevelField('Ocr4', 'Шансы избежать', 'Смертельный удар')
	public static readonly DAMAGE_DEALT_PERCENT_OMI2 = new AbilityRealLevelField('Omi2', 'Нанесено урона (%)', 'Иллюзия')
	public static readonly DAMAGE_TAKEN_PERCENT_OMI3 = new AbilityRealLevelField('Omi3', 'Получено урона (%)', 'Иллюзия')
	public static readonly ANIMATION_DELAY = new AbilityRealLevelField('Omi4', 'Задержка анимации', 'Иллюзия')
	public static readonly TRANSITION_TIME = new AbilityRealLevelField('Owk1', 'Время перемещения', 'Стремительность')
	public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_OWK2 = new AbilityRealLevelField('Owk2', 'Увеличение скорости при перемещении (%)', 'Стремительность')
	public static readonly BACKSTAB_DAMAGE = new AbilityRealLevelField('Owk3', 'Урон от подлого удара', 'Стремительность')
	public static readonly AMOUNT_HEALED_DAMAGED_UDC1 = new AbilityRealLevelField('Udc1', 'Число вылеченных и поврежденных', 'Лик смерти')
	public static readonly LIFE_CONVERTED_TO_MANA = new AbilityRealLevelField('Udp1', 'Здоровье конвертируется в ману', 'Смертельный союз')
	public static readonly LIFE_CONVERTED_TO_LIFE = new AbilityRealLevelField('Udp2', 'Здоровье конвертируется в здоровье', 'Смертельный союз')
	public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_UAU1 = new AbilityRealLevelField('Uau1', 'Увеличение скорости при перемещении (%)', 'Аура Смерти')
	public static readonly LIFE_REGENERATION_INCREASE_PERCENT = new AbilityRealLevelField('Uau2', 'Увеличение скорости восстановления здоровья (%)', 'Аура Смерти')
	public static readonly CHANCE_TO_EVADE_EEV1 = new AbilityRealLevelField('Eev1', 'Шансы избежать', 'Змеиная ловкость')
	public static readonly DAMAGE_PER_INTERVAL = new AbilityRealLevelField('Eim1', 'Урона за интервал времени', 'Жар Преисподней')
	public static readonly MANA_DRAINED_PER_SECOND_EIM2 = new AbilityRealLevelField('Eim2', 'Украдено маны в секунду', 'Жар Преисподней')
	public static readonly BUFFER_MANA_REQUIRED = new AbilityRealLevelField('Eim3', 'Требуется буфер маны', 'Жар Преисподней')
	public static readonly MAX_MANA_DRAINED = new AbilityRealLevelField('Emb1', 'Макс. украденной маны', 'Магический огонь')
	public static readonly BOLT_DELAY = new AbilityRealLevelField('Emb2', 'Задержка разряда', 'Магический огонь')
	public static readonly BOLT_LIFETIME = new AbilityRealLevelField('Emb3', 'Время жизни разряда', 'Магический огонь')
	public static readonly ALTITUDE_ADJUSTMENT_DURATION = new AbilityRealLevelField('Eme3', 'Длительность регулировки высоты', 'Перевоплощение')
	public static readonly LANDING_DELAY_TIME = new AbilityRealLevelField('Eme4', 'Время задержки приземления', 'Перевоплощение')
	public static readonly ALTERNATE_FORM_HIT_POINT_BONUS = new AbilityRealLevelField('Eme5', 'Альтернативная форма: дополнительное здоровье', 'Перевоплощение')
	public static readonly MOVE_SPEED_INFO_PANEL_ONLY = new AbilityRealLevelField('Ncr5', 'Повышение скорости перемещения (только инф. панель)', 'Эликсир ярости')
	public static readonly ATTACK_SPEED_BONUS_INFO_PANEL_ONLY = new AbilityRealLevelField('Ncr6', 'Повышение скорости боя (только инф. панель)', 'Эликсир ярости')
	public static readonly LIFE_REGENERATION_PER_SECOND = new AbilityRealLevelField('ave5', 'Скорость восстановления здоровья (в секунду)', 'Сфинкс')
	public static readonly STUN_DURATION_USL1 = new AbilityRealLevelField('Usl1', 'Длительность оглушения', 'Сон')
	public static readonly ATTACK_DAMAGE_STOLEN_PERCENT = new AbilityRealLevelField('Uav1', 'Украденный при атаке урон (%)', 'Вампиризм')
	public static readonly DAMAGE_UCS1 = new AbilityRealLevelField('Ucs1', 'Урон', 'Темная стая')
	public static readonly MAX_DAMAGE_UCS2 = new AbilityRealLevelField('Ucs2', 'Макс. урон', 'Темная стая')
	public static readonly DISTANCE_UCS3 = new AbilityRealLevelField('Ucs3', 'Расстояние', 'Темная стая')
	public static readonly FINAL_AREA_UCS4 = new AbilityRealLevelField('Ucs4', 'Финальная область', 'Темная стая')
	public static readonly DAMAGE_UIN1 = new AbilityRealLevelField('Uin1', 'Урон', 'Огненный голем')
	public static readonly DURATION = new AbilityRealLevelField('Uin2', 'Длительность', 'Огненный голем')
	public static readonly IMPACT_DELAY = new AbilityRealLevelField('Uin3', 'Задержка падения', 'Огненный голем')
	public static readonly DAMAGE_PER_TARGET_OCL1 = new AbilityRealLevelField('Ocl1', 'Урона на цель', 'Цепь молний')
	public static readonly EFFECT_DELAY_OEQ1 = new AbilityRealLevelField('Oeq1', 'Задержка эффекта', 'Землетрясение')
	public static readonly DAMAGE_PER_SECOND_TO_BUILDINGS = new AbilityRealLevelField('Oeq2', 'Здания: урона в секунду', 'Землетрясение')
	public static readonly UNITS_SLOWED_PERCENT = new AbilityRealLevelField('Oeq3', 'Войска замедлены (%)', 'Землетрясение')
	public static readonly FINAL_AREA_OEQ4 = new AbilityRealLevelField('Oeq4', 'Финальная область', 'Землетрясение')
	public static readonly DAMAGE_PER_SECOND_EER1 = new AbilityRealLevelField('Eer1', 'Урона в секунду', 'Гнев деревьев')
	public static readonly DAMAGE_DEALT_TO_ATTACKERS = new AbilityRealLevelField('Eah1', 'Нанесенный атакующим урон', 'Аура возмездия')
	public static readonly LIFE_HEALED = new AbilityRealLevelField('Etq1', 'Здоровья восстановлено', 'Покой')
	public static readonly HEAL_INTERVAL = new AbilityRealLevelField('Etq2', 'Интервал лечения', 'Покой')
	public static readonly BUILDING_REDUCTION = new AbilityRealLevelField('Etq3', 'Уменьшение скорости строительства', 'Покой')
	public static readonly INITIAL_IMMUNITY_DURATION = new AbilityRealLevelField('Etq4', 'Нач. продолжительность иммунитета', 'Покой')
	public static readonly MAX_LIFE_DRAINED_PER_SECOND_PERCENT = new AbilityRealLevelField('Udd1', 'Макс. здоровья украдено в секунду (%)', 'Порча')
	public static readonly BUILDING_REDUCTION_UDD2 = new AbilityRealLevelField('Udd2', 'Уменьшение скорости строительства', 'Порча')
	public static readonly ARMOR_DURATION = new AbilityRealLevelField('Ufa1', 'Долговечность брони', 'Ледяная броня')
	public static readonly ARMOR_BONUS_UFA2 = new AbilityRealLevelField('Ufa2', 'Увеличение брони', 'Ледяная броня')
	public static readonly AREA_OF_EFFECT_DAMAGE = new AbilityRealLevelField('Ufn1', 'Область воздействия урона', 'Ледяная звезда')
	public static readonly SPECIFIC_TARGET_DAMAGE_UFN2 = new AbilityRealLevelField('Ufn2', 'Поражение особой цели', 'Ледяная звезда')
	public static readonly DAMAGE_BONUS_HFA1 = new AbilityRealLevelField('Hfa1', 'Дополнительный урон', 'Огненные стрелы')
	public static readonly DAMAGE_DEALT_ESF1 = new AbilityRealLevelField('Esf1', 'Нанесено урона', 'Звездопад')
	public static readonly DAMAGE_INTERVAL_ESF2 = new AbilityRealLevelField('Esf2', 'Интервал урона', 'Звездопад')
	public static readonly BUILDING_REDUCTION_ESF3 = new AbilityRealLevelField('Esf3', 'Уменьшение скорости строительства', 'Звездопад')
	public static readonly DAMAGE_BONUS_PERCENT = new AbilityRealLevelField('Ear1', 'Дополнительный урон (%)', 'Аура меткости')
	public static readonly DEFENSE_BONUS_HAV1 = new AbilityRealLevelField('Hav1', 'Дополнительная защита', 'Мощь гор')
	public static readonly HIT_POINT_BONUS = new AbilityRealLevelField('Hav2', 'Дополнительное здоровье', 'Мощь гор')
	public static readonly DAMAGE_BONUS_HAV3 = new AbilityRealLevelField('Hav3', 'Дополнительный урон', 'Мощь гор')
	public static readonly MAGIC_DAMAGE_REDUCTION_HAV4 = new AbilityRealLevelField('Hav4', 'Снижение магического урона', 'Мощь гор')
	public static readonly CHANCE_TO_BASH = new AbilityRealLevelField('Hbh1', 'Шанс на сильный удар', 'Сильный удар')
	public static readonly DAMAGE_MULTIPLIER_HBH2 = new AbilityRealLevelField('Hbh2', 'Увеличение урона', 'Сильный удар')
	public static readonly DAMAGE_BONUS_HBH3 = new AbilityRealLevelField('Hbh3', 'Дополнительный урон', 'Сильный удар')
	public static readonly CHANCE_TO_MISS_HBH4 = new AbilityRealLevelField('Hbh4', 'Шанс на промах', 'Сильный удар')
	public static readonly DAMAGE_HTB1 = new AbilityRealLevelField('Htb1', 'Урон', 'Молот бурь')
	public static readonly AOE_DAMAGE = new AbilityRealLevelField('Htc1', 'Радиус поражения: урон', 'Удар грома')
	public static readonly SPECIFIC_TARGET_DAMAGE_HTC2 = new AbilityRealLevelField('Htc2', 'Поражение особой цели', 'Удар грома')
	public static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3 = new AbilityRealLevelField('Htc3', 'Уменьшение скорости перемещения (%)', 'Удар грома')
	public static readonly ATTACK_SPEED_REDUCTION_PERCENT_HTC4 = new AbilityRealLevelField('Htc4', 'Уменьшение скорости атаки (%)', 'Удар грома')
	public static readonly ARMOR_BONUS_HAD1 = new AbilityRealLevelField('Had1', 'Увеличение брони', 'Доспехи веры')
	public static readonly AMOUNT_HEALED_DAMAGED_HHB1 = new AbilityRealLevelField('Hhb1', 'Число вылеченных и поврежденных', 'Благодать')
	public static readonly EXTRA_DAMAGE_HCA1 = new AbilityRealLevelField('Hca1', 'Дополнительный урон', 'Ледяные стрелы')
	public static readonly MOVEMENT_SPEED_FACTOR_HCA2 = new AbilityRealLevelField('Hca2', 'Фактор скорости перемещения', 'Ледяные стрелы')
	public static readonly ATTACK_SPEED_FACTOR_HCA3 = new AbilityRealLevelField('Hca3', 'Фактор скорости атаки', 'Ледяные стрелы')
	public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_OAE1 = new AbilityRealLevelField('Oae1', 'Увеличение скорости при перемещении', 'Аура выносливости')
	public static readonly ATTACK_SPEED_INCREASE_PERCENT_OAE2 = new AbilityRealLevelField('Oae2', 'Увеличение скорости атаки (%)', 'Аура выносливости')
	public static readonly REINCARNATION_DELAY = new AbilityRealLevelField('Ore1', 'Задержка перерождения', 'Перерождение')
	public static readonly DAMAGE_OSH1 = new AbilityRealLevelField('Osh1', 'Урон', 'Волна Силы')
	public static readonly MAXIMUM_DAMAGE_OSH2 = new AbilityRealLevelField('Osh2', 'Максимальный урон', 'Волна Силы')
	public static readonly DISTANCE_OSH3 = new AbilityRealLevelField('Osh3', 'Расстояние', 'Волна Силы')
	public static readonly FINAL_AREA_OSH4 = new AbilityRealLevelField('Osh4', 'Финальная область', 'Волна Силы')
	public static readonly GRAPHIC_DELAY_NFD1 = new AbilityRealLevelField('Nfd1', 'Задержка графики', 'Перст смерти (Архимонд)')
	public static readonly GRAPHIC_DURATION_NFD2 = new AbilityRealLevelField('Nfd2', 'Длительность графики', 'Перст смерти (Архимонд)')
	public static readonly DAMAGE_NFD3 = new AbilityRealLevelField('Nfd3', 'Урон', 'Перст смерти (Архимонд)')
	public static readonly SUMMONED_UNIT_DAMAGE_AMS1 = new AbilityRealLevelField('Ams1', 'Урон от вызванной боевой единицы', 'Защитная аура')
	public static readonly MAGIC_DAMAGE_REDUCTION_AMS2 = new AbilityRealLevelField('Ams2', 'Снижение магического урона', 'Защитная аура')
	public static readonly AURA_DURATION = new AbilityRealLevelField('Apl1', 'Длительность ауры', 'Ядовитое облако')
	public static readonly DAMAGE_PER_SECOND_APL2 = new AbilityRealLevelField('Apl2', 'Урона в секунду', 'Ядовитое облако')
	public static readonly DURATION_OF_PLAGUE_WARD = new AbilityRealLevelField('Apl3', 'Длительность защиты от чумы', 'Ядовитое облако')
	public static readonly AMOUNT_OF_HIT_POINTS_REGENERATED = new AbilityRealLevelField('Oar1', 'Объем восстановленного здоровья', 'Дух-целитель (дух-целитель)')
	public static readonly ATTACK_DAMAGE_INCREASE_AKB1 = new AbilityRealLevelField('Akb1', 'Увеличение урона при атаке', 'Боевой марш')
	public static readonly MANA_LOSS_ADM1 = new AbilityRealLevelField('Adm1', 'Потеря маны', 'Рассеять чары')
	public static readonly SUMMONED_UNIT_DAMAGE_ADM2 = new AbilityRealLevelField('Adm2', 'Урон от вызванной боевой единицы', 'Рассеять чары')
	public static readonly EXPANSION_AMOUNT = new AbilityRealLevelField('Bli1', 'Объем экспансии', 'Наведение порчи')
	public static readonly INTERVAL_DURATION_BGM2 = new AbilityRealLevelField('Bgm2', 'Длительность интервала', 'Проклятие рудника')
	public static readonly RADIUS_OF_MINING_RING = new AbilityRealLevelField('Bgm4', 'Радиус кольца вокруг рудника', 'Проклятие рудника')
	public static readonly ATTACK_SPEED_INCREASE_PERCENT_BLO1 = new AbilityRealLevelField('Blo1', 'Увеличение скорости атаки (%)', 'Кровожадность')
	public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_BLO2 = new AbilityRealLevelField('Blo2', 'Увеличение скорости при перемещении (%)', 'Кровожадность')
	public static readonly SCALING_FACTOR = new AbilityRealLevelField('Blo3', 'Фактор масштаба', 'Кровожадность')
	public static readonly HIT_POINTS_PER_SECOND_CAN1 = new AbilityRealLevelField('Can1', 'Здоровья в секунду', 'Каннибализм')
	public static readonly MAX_HIT_POINTS = new AbilityRealLevelField('Can2', 'Макс. здоровья', 'Каннибализм')
	public static readonly DAMAGE_PER_SECOND_DEV2 = new AbilityRealLevelField('Dev2', 'Урона в секунду', 'Еда')
	public static readonly MOVEMENT_UPDATE_FREQUENCY_CHD1 = new AbilityRealLevelField('Chd1', 'Частота обновления перемещений', 'Парашютист (враг)')
	public static readonly ATTACK_UPDATE_FREQUENCY_CHD2 = new AbilityRealLevelField('Chd2', 'Частота обновления атак', 'Парашютист (враг)')
	public static readonly SUMMONED_UNIT_DAMAGE_CHD3 = new AbilityRealLevelField('Chd3', 'Урон от вызванной боевой единицы', 'Парашютист (враг)')
	public static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1 = new AbilityRealLevelField('Cri1', 'Уменьшение скорости перемещения (%)', 'Увечье')
	public static readonly ATTACK_SPEED_REDUCTION_PERCENT_CRI2 = new AbilityRealLevelField('Cri2', 'Уменьшение скорости атаки (%)', 'Увечье')
	public static readonly DAMAGE_REDUCTION_CRI3 = new AbilityRealLevelField('Cri3', 'Снижение урона', 'Увечье')
	public static readonly CHANCE_TO_MISS_CRS1 = new AbilityRealLevelField('Crs1', 'Шанс на промах', 'Проклятие')
	public static readonly FULL_DAMAGE_RADIUS_DDA1 = new AbilityRealLevelField('Dda1', 'Радиус полного урона', 'Урон от взрыва')
	public static readonly FULL_DAMAGE_AMOUNT_DDA2 = new AbilityRealLevelField('Dda2', 'Объем полного урона', 'Урон от взрыва')
	public static readonly PARTIAL_DAMAGE_RADIUS = new AbilityRealLevelField('Dda3', 'Радиус частичного урона', 'Урон от взрыва')
	public static readonly PARTIAL_DAMAGE_AMOUNT = new AbilityRealLevelField('Dda4', 'Объем частичного урона', 'Урон от взрыва')
	public static readonly BUILDING_DAMAGE_FACTOR_SDS1 = new AbilityRealLevelField('Sds1', 'Фактор урона зданию', 'Взорвать')
	public static readonly MAX_DAMAGE_UCO5 = new AbilityRealLevelField('Uco5', 'Макс. урон', 'Самоубийство')
	public static readonly MOVE_SPEED_BONUS_UCO6 = new AbilityRealLevelField('Uco6', 'Повышение скорости перемещения', 'Самоубийство')
	public static readonly DAMAGE_TAKEN_PERCENT_DEF1 = new AbilityRealLevelField('Def1', 'Получено урона (%)', 'Укрыться за щитом')
	public static readonly DAMAGE_DEALT_PERCENT_DEF2 = new AbilityRealLevelField('Def2', 'Нанесено урона (%)', 'Укрыться за щитом')
	public static readonly MOVEMENT_SPEED_FACTOR_DEF3 = new AbilityRealLevelField('Def3', 'Фактор скорости перемещения', 'Укрыться за щитом')
	public static readonly ATTACK_SPEED_FACTOR_DEF4 = new AbilityRealLevelField('Def4', 'Фактор скорости атаки', 'Укрыться за щитом')
	public static readonly MAGIC_DAMAGE_REDUCTION_DEF5 = new AbilityRealLevelField('Def5', 'Снижение магического урона', 'Укрыться за щитом')
	public static readonly CHANCE_TO_DEFLECT = new AbilityRealLevelField('Def6', 'Вероятность отклонения', 'Укрыться за щитом')
	public static readonly DEFLECT_DAMAGE_TAKEN_PIERCING = new AbilityRealLevelField('Def7', 'Отклонение полученного урона (дальний бой)', 'Укрыться за щитом')
	public static readonly DEFLECT_DAMAGE_TAKEN_SPELLS = new AbilityRealLevelField('Def8', 'Отклонение полученного урона (заклинания)', 'Укрыться за щитом')
	public static readonly RIP_DELAY = new AbilityRealLevelField('Eat1', 'Задержка волны', 'Съесть дерево')
	public static readonly EAT_DELAY = new AbilityRealLevelField('Eat2', 'Задержка съедения', 'Съесть дерево')
	public static readonly HIT_POINTS_GAINED_EAT3 = new AbilityRealLevelField('Eat3', 'Получено здоровья', 'Съесть дерево')
	public static readonly AIR_UNIT_LOWER_DURATION = new AbilityRealLevelField('Ens1', 'Длительность снижения летающей боевой единицы', 'Ловчий')
	public static readonly AIR_UNIT_HEIGHT = new AbilityRealLevelField('Ens2', 'Высота полета летающей боевой единицы', 'Ловчий')
	public static readonly MELEE_ATTACK_RANGE = new AbilityRealLevelField('Ens3', 'Дистанция атаки в ближнем бою', 'Ловчий')
	public static readonly INTERVAL_DURATION_EGM2 = new AbilityRealLevelField('Egm2', 'Длительность интервала', 'Оплетение рудника')
	public static readonly EFFECT_DELAY_FLA2 = new AbilityRealLevelField('Fla2', 'Задержка эффекта', 'Осветительный заряд')
	public static readonly MINING_DURATION = new AbilityRealLevelField('Gld2', 'Длительность золотодобычи', 'Рудник')
	public static readonly RADIUS_OF_GRAVESTONES = new AbilityRealLevelField('Gyd2', 'Радиус надгробных плит', 'Создать труп')
	public static readonly RADIUS_OF_CORPSES = new AbilityRealLevelField('Gyd3', 'Радиус трупов', 'Создать труп')
	public static readonly HIT_POINTS_GAINED_HEA1 = new AbilityRealLevelField('Hea1', 'Получено здоровья', 'Лечение')
	public static readonly DAMGE_INCREASE_PERCENT_INF1 = new AbilityRealLevelField('Inf1', 'Увеличение урона (%)', 'Духовное пламя')
	public static readonly AUTOCAST_RANGE = new AbilityRealLevelField('Inf3', 'Дальность автоматического применения заклинаний', 'Духовное пламя')
	public static readonly LIFE_REGEN_RATE = new AbilityRealLevelField('Inf4', 'Скорость восстановления здоровья', 'Духовное пламя')
	public static readonly GRAPHIC_DELAY_LIT1 = new AbilityRealLevelField('Lit1', 'Задержка графики', 'Грозовая атака')
	public static readonly GRAPHIC_DURATION_LIT2 = new AbilityRealLevelField('Lit2', 'Длительность графики', 'Грозовая атака')
	public static readonly DAMAGE_PER_SECOND_LSH1 = new AbilityRealLevelField('Lsh1', 'Урона в секунду', 'Щит молний')
	public static readonly MANA_GAINED = new AbilityRealLevelField('Mbt1', 'Получено здоровья', 'Восстановить ману и здоровье')
	public static readonly HIT_POINTS_GAINED_MBT2 = new AbilityRealLevelField('Mbt2', 'Получено маны', 'Восстановить ману и здоровье')
	public static readonly AUTOCAST_REQUIREMENT = new AbilityRealLevelField('Mbt3', 'Требование к автоматическому применению заклинаний', 'Восстановить ману и здоровье')
	public static readonly WATER_HEIGHT = new AbilityRealLevelField('Mbt4', 'Высота уровня воды', 'Восстановить ману и здоровье')
	public static readonly ACTIVATION_DELAY_MIN1 = new AbilityRealLevelField('Min1', 'Задержка запуска', 'Мина - взрывается (гоблинская мина)')
	public static readonly INVISIBILITY_TRANSITION_TIME = new AbilityRealLevelField('Min2', 'Время перехода в невидимость', 'Мина - взрывается (гоблинская мина)')
	public static readonly ACTIVATION_RADIUS = new AbilityRealLevelField('Neu1', 'Радиус запуска', 'Выбрать героя')
}

//     ActivationRadius: c("Neu1"),
//     AmountRegenerated: c("Arm1"),
//     DamagePerSecond_Poi1: c("Poi1"),
//     AttackSpeedFactor_Poi2: c("Poi2"),
//     MovementSpeedFactor_Poi3: c("Poi3"),
//     ExtraDamage_Poa1: c("Poa1"),
//     DamagePerSecond_Poa2: c("Poa2"),
//     AttackSpeedFactor_Poa3: c("Poa3"),
//     MovementSpeedFactor_Poa4: c("Poa4"),
//     DamageAmplification: c("Pos2"),
//     ChanceToStompPercent: c("War1"),
//     DamageDealt_War2: c("War2"),
//     FullDamageRadius_War3: c("War3"),
//     HalfDamageRadius_War4: c("War4"),
//     SummonedUnitDamage_Prg3: c("Prg3"),
//     UnitPauseDuration: c("Prg4"),
//     HeroPauseDuration: c("Prg5"),
//     HitPointsGained_Rej1: c("Rej1"),
//     ManaPointsGained_Rej2: c("Rej2"),
//     MinimumLifeRequired: c("Rpb3"),
//     MinimumManaRequired: c("Rpb4"),
//     RepairCostRatio: c("Rep1"),
//     RepairTimeRatio: c("Rep2"),
//     PowerbuildConst: c("Rep3"),
//     PowerbuildRate: c("Rep4"),
//     NavalRangeBonus: c("Rep5"),
//     DamageIncreasePercent_Roa1: c("Roa1"),
//     LifeRegenerationRate: c("Roa3"),
//     ManaRegen: c("Roa4"),
//     DamageIncrease: c("Nbr1"),
//     SalvageCostRatio: c("Sal1"),
//     InFlightSightRadius: c("Esn1"),
//     HoveringSightRadius: c("Esn2"),
//     HoveringHeight: c("Esn3"),
//     DurationOfOwls: c("Esn5"),
//     FadeDuration: c("Shm1"),
//     DayNightDuration: c("Shm2"),
//     ActionDuration: c("Shm3"),
//     MovementSpeedFactor_Slo1: c("Slo1"),
//     AttackSpeedFactor_Slo2: c("Slo2"),
//     DamagePerSecond_Spo1: c("Spo1"),
//     MovementSpeedFactor_Spo2: c("Spo2"),
//     AttackSpeedFactor_Spo3: c("Spo3"),
//     ActivationDelay_Sta1: c("Sta1"),
//     DetectionRadius_Sta2: c("Sta2"),
//     DetonationRadius: c("Sta3"),
//     StunDuration_Sta4: c("Sta4"),
//     AttackSpeedBonusPercent: c("Uhf1"),
//     DamagePerSecond_Uhf2: c("Uhf2"),
//     LumberPerInterval: c("Wha1"),
//     ArtAttachmentHeight: c("Wha3"),
//     TeleportAreaWidth: c("Wrp1"),
//     TeleportAreaHeight: c("Wrp2"),
//     LifeStolenPerAttack: c("Ivam"),
//     DamageBonus_Idam: c("Idam"),
//     ChanceToHitUnitsPercent: c("Iob2"),
//     ChanceToHitHerosPercent: c("Iob3"),
//     ChanceToHitSummonsPercent: c("Iob4"),
//     DelayForTargetEffect: c("Idel"),
//     DamageDealtPercentOfNormal: c("Iild"),
//     DamageReceivedMultiplier: c("Iilw"),
//     ManaRegenerationBonusAsFractionOfNormal: c("Imrp"),
//     MovementSpeedIncrease_Ispi: c("Ispi"),
//     DamagePerSecond_Idps: c("Idps"),
//     AttackDamageIncrease_Cac1: c("Cac1"),
//     DamagePerSecond_Cor1: c("Cor1"),
//     AttackSpeedIncrease_Isx1: c("Isx1"),
//     Damage_Wrs1: c("Wrs1"),
//     TerrainDeformationAmplitude: c("Wrs2"),
//     Damage_Ctc1: c("Ctc1"),
//     ExtraDamageToTarget: c("Ctc2"),
//     MovementSpeedReduction: c("Ctc3"),
//     AttackSpeedReduction: c("Ctc4"),
//     Damage_Ctb1: c("Ctb1"),
//     CastingDelaySeconds: c("Uds2"),
//     ManaLossPerUnit_Dtn1: c("Dtn1"),
//     DamageToSummonedUnits_Dtn2: c("Dtn2"),
//     TransitionTimeSeconds: c("Ivs1"),
//     DrainedPerSecond_Nmr1: c("Nmr1"),
//     ChanceToReduceDamagePercent: c("Ssk1"),
//     MinimnumDamage: c("Ssk2"),
//     IgnoredDamage: c("Ssk3"),
//     FullDamageDealt: c("Hfs1"),
//     FullDamageInterval: c("Hfs2"),
//     HalfDamageDealt: c("Hfs3"),
//     HalfDamageInterval: c("Hfs4"),
//     BuildingReduction_Hfs5: c("Hfs5"),
//     MaximumDamage_Hfs6: c("Hfs6"),
//     ManaPerHitPoint: c("Nms1"),
//     DamageAbsorbedPercent: c("Nms2"),
//     WaveDistance: c("Uim1"),
//     WaveTimeSeconds: c("Uim2"),
//     DamageDealt_Uim3: c("Uim3"),
//     AirTimeSeconds_Uim4: c("Uim4"),
//     UnitReleaseIntervalSeconds: c("Uls2"),
//     DamageReturnFactor: c("Uls4"),
//     DamageReturnThreshold: c("Uls5"),
//     ReturnedDamageFactor: c("Uts1"),
//     ReceivedDamageFactor: c("Uts2"),
//     DefenseBonus_Uts3: c("Uts3"),
//     DamageBonus_Nba1: c("Nba1"),
//     SummonedUnitDurationSeconds_Nba3: c("Nba3"),
//     ManaPerSummonedHitpoint: c("Cmg2"),
//     ChargeForCurrentLife: c("Cmg3"),
//     HitPointsDrained: c("Ndr1"),
//     ManaPointsDrained: c("Ndr2"),
//     DrainIntervalSeconds: c("Ndr3"),
//     LifeTransferedPerSecond: c("Ndr4"),
//     ManaTransferedPerSecond: c("Ndr5"),
//     BonusLifeFactor: c("Ndr6"),
//     BonusLifeDecay: c("Ndr7"),
//     BonusManaFactor: c("Ndr8"),
//     BonusManaDecay: c("Ndr9"),
//     ChanceToMissPercent: c("Nsi2"),
//     MovementSpeedModifier: c("Nsi3"),
//     AttackSpeedModifier: c("Nsi4"),
//     DamagePerSecond_Tdg1: c("Tdg1"),
//     MediumDamageRadius_Tdg2: c("Tdg2"),
//     MediumDamagePerSecond: c("Tdg3"),
//     SmallDamageRadius_Tdg4: c("Tdg4"),
//     SmallDamagePerSecond: c("Tdg5"),
//     AirTimeSeconds_Tsp1: c("Tsp1"),
//     MinimumHitIntervalSeconds: c("Tsp2"),
//     DamagePerSecond_Nbf5: c("Nbf5"),
//     MaximumRange: c("Ebl1"),
//     MinimumRange: c("Ebl2"),
//     DamagePerTarget_Efk1: c("Efk1"),
//     MaximumTotalDamage: c("Efk2"),
//     MaximumSpeedAdjustment: c("Efk4"),
//     DecayingDamage: c("Esh1"),
//     MovementSpeedFactor_Esh2: c("Esh2"),
//     AttackSpeedFactor_Esh3: c("Esh3"),
//     DecayPower: c("Esh4"),
//     InitialDamage_Esh5: c("Esh5"),
//     MaximumLifeAbsorbed: c("abs1"),
//     MaximumManaAbsorbed: c("abs2"),
//     MovementSpeedIncrease_bsk1: c("bsk1"),
//     AttackSpeedIncrease_bsk2: c("bsk2"),
//     DamageTakenIncrease: c("bsk3"),
//     LifePerUnit: c("dvm1"),
//     ManaPerUnit: c("dvm2"),
//     LifePerBuff: c("dvm3"),
//     ManaPerBuff: c("dvm4"),
//     SummonedUnitDamage_dvm5: c("dvm5"),
//     DamageBonus_fak1: c("fak1"),
//     MediumDamageFactor_fak2: c("fak2"),
//     SmallDamageFactor_fak3: c("fak3"),
//     FullDamageRadius_fak4: c("fak4"),
//     HalfDamageRadius_fak5: c("fak5"),
//     ExtraDamagePerSecond: c("liq1"),
//     MovementSpeedReduction_liq2: c("liq2"),
//     AttackSpeedReduction_liq3: c("liq3"),
//     MagicDamageFactor: c("mim1"),
//     UnitDamagePerManaPoint: c("mfl1"),
//     HeroDamagePerManaPoint: c("mfl2"),
//     UnitMaximumDamage: c("mfl3"),
//     HeroMaximumDamage: c("mfl4"),
//     DamageCooldown: c("mfl5"),
//     DistributedDamageFactor_spl1: c("spl1"),
//     LifeRegenerated: c("irl1"),
//     ManaRegenerated: c("irl2"),
//     ManaLossPerUnit_idc1: c("idc1"),
//     SummonedUnitDamage_idc2: c("idc2"),
//     ActivationDelay_imo2: c("imo2"),
//     LureIntervalSeconds: c("imo3"),
//     DamageBonus_isr1: c("isr1"),
//     DamageReduction_isr2: c("isr2"),
//     DamageBonus_ipv1: c("ipv1"),
//     LifeStealAmount: c("ipv2"),
//     LifeRestoredFactor: c("ast1"),
//     ManaRestoredFactor: c("ast2"),
//     AttachDelay: c("gra1"),
//     RemoveDelay: c("gra2"),
//     HeroRegenerationDelay: c("Nsa2"),
//     UnitRegenerationDelay: c("Nsa3"),
//     MagicDamageReduction_Nsa4: c("Nsa4"),
//     HitPointsPerSecond_Nsa5: c("Nsa5"),
//     DamageToSummonedUnits_Ixs1: c("Ixs1"),
//     MagicDamageReduction_Ixs2: c("Ixs2"),
//     SummonedUnitDuration: c("Npa6"),
//     ShieldCooldownTime: c("Nse1"),
//     DamagePerSecond_Ndo1: c("Ndo1"),
//     SummonedUnitDurationSeconds_Ndo3: c("Ndo3"),
//     MediumDamageRadius_flk1: c("flk1"),
//     SmallDamageRadius_flk2: c("flk2"),
//     FullDamageAmount_flk3: c("flk3"),
//     MediumDamageAmount: c("flk4"),
//     SmallDamageAmount: c("flk5"),
//     MovementSpeedReductionPercent_Hbn1: c("Hbn1"),
//     AttackSpeedReductionPercent_Hbn2: c("Hbn2"),
//     MaxManaDrainedUnits: c("fbk1"),
//     DamageRatioUnitsPercent: c("fbk2"),
//     MaxManaDrainedHeros: c("fbk3"),
//     DamageRatioHerosPercent: c("fbk4"),
//     SummonedDamage: c("fbk5"),
//     DistributedDamageFacotr_nca1: c("nca1"),
//     InitialDamage_pxf1: c("pxf1"),
//     DamagePerSecond_pxf2: c("pxf2"),
//     DamagePerSecond_mls1: c("mls1"),
//     BeastCollisionRadius: c("Nst2"),
//     DamageAmount_Nst3: c("Nst3"),
//     DamageRadius: c("Nst4"),
//     DamageDelay: c("Nst5"),
//     FollowThroughTime: c("Ncl1"),
//     ArtDuration: c("Ncl4"),
//     MovementSpeedReductionPercent_Nab1: c("Nab1"),
//     AttackSpeedReductionPercent_Nab2: c("Nab2"),
//     PrimaryDamage: c("Nab4"),
//     SecondaryDamage: c("Nab5"),
//     DamageInterval_Nab6: c("Nab6"),
//     GoldCostFactor: c("Ntm1"),
//     LumberCostFactor: c("Ntm2"),
//     MoveSpeedBonus_Neg1: c("Neg1"),
//     DamageBonus_Neg2: c("Neg2"),
//     DamageAmount_Ncs1: c("Ncs1"),
//     DamageInterval_Ncs2: c("Ncs2"),
//     MaxDamage_Ncs4: c("Ncs4"),
//     BuildingDamageFactor_Ncs5: c("Ncs5"),
//     EffectDuration: c("Ncs6"),
//     SpawnInterval_Nsy1: c("Nsy1"),
//     SpawnUnitDuration: c("Nsy3"),
//     SpawnUnitOffset: c("Nsy4"),
//     LeashRange_Nsy5: c("Nsy5"),
//     SpawnInterval_Nfy1: c("Nfy1"),
//     LeashRange_Nfy2: c("Nfy2"),
//     ChanceToDemolish: c("Nde1"),
//     DamageMultiplierBuildings: c("Nde2"),
//     DamageMultiplierUnits: c("Nde3"),
//     DamageMultiplierHeroes: c("Nde4"),
//     BonusDamageMultiplier: c("Nic1"),
//     DeathDamageFullAmount: c("Nic2"),
//     DeathDamageFullArea: c("Nic3"),
//     DeathDamageHalfAmount: c("Nic4"),
//     DeathDamageHalfArea: c("Nic5"),
//     DeathDamageDelay: c("Nic6"),
//     DamageAmount_Nso1: c("Nso1"),
//     DamagePeriod: c("Nso2"),
//     DamagePenalty: c("Nso3"),
//     MovementSpeedReductionPercent_Nso4: c("Nso4"),
//     AttackSpeedReductionPercent_Nso5: c("Nso5"),
//     SplitDelay: c("Nlm2"),
//     MaxHitpointFactor: c("Nlm4"),
//     LifeDurationSplitBonus: c("Nlm5"),
//     WaveInterval: c("Nvc3"),
//     BuildingDamageFactor_Nvc4: c("Nvc4"),
//     FullDamageAmount_Nvc5: c("Nvc5"),
//     HalfDamageFactor: c("Nvc6"),
//     IntervalBetweenPulses: c("Tau5")
// }
