import { AbilityRealLevelField } from "../../../API/fields/ability/level/AbilityRealLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityRealLevelFields {
    public static readonly CASTING_TIME = new AbilityRealLevelField(
        new RawCode("acas"),
        "Время подготовки заклинания"
    )
    public static readonly DURATION_NORMAL = new AbilityRealLevelField(
        new RawCode("adur"),
        "Длительность: нормальная"
    )
    public static readonly DURATION_HERO = new AbilityRealLevelField(
        new RawCode("ahdu"),
        "Длительность воздействия: герой"
    )
    public static readonly COOLDOWN = new AbilityRealLevelField(new RawCode("acdn"), "Перезарядка")
    public static readonly AREA_OF_EFFECT = new AbilityRealLevelField(
        new RawCode("aare"),
        "Область воздействия"
    )
    public static readonly CAST_RANGE = new AbilityRealLevelField(
        new RawCode("aran"),
        "Радиус действия"
    )
    public static readonly DAMAGE_HBZ2 = new AbilityRealLevelField(
        new RawCode("Hbz2"),
        "Урон",
        "Буран"
    )
    public static readonly BUILDING_REDUCTION_HBZ4 = new AbilityRealLevelField(
        new RawCode("Hbz4"),
        "Уменьшение скорости строительства",
        "Буран"
    )
    public static readonly DAMAGE_PER_SECOND_HBZ5 = new AbilityRealLevelField(
        new RawCode("Hbz5"),
        "Урона в секунду",
        "Буран"
    )
    public static readonly MAXIMUM_DAMAGE_PER_WAVE = new AbilityRealLevelField(
        new RawCode("Hbz6"),
        "Макс. урон на волну",
        "Буран"
    )
    public static readonly MANA_REGENERATION_INCREASE = new AbilityRealLevelField(
        new RawCode("Hab1"),
        "Увеличение скорости восстановления маны",
        "Чародейская аура"
    )
    public static readonly CASTING_DELAY = new AbilityRealLevelField(
        new RawCode("Hmt2"),
        "Задержка заклинания",
        "Массовая телепортация"
    )
    public static readonly DAMAGE_PER_SECOND_OWW1 = new AbilityRealLevelField(
        new RawCode("Oww1"),
        "Урона в секунду",
        "Стальной вихрь"
    )
    public static readonly MAGIC_DAMAGE_REDUCTION_OWW2 = new AbilityRealLevelField(
        new RawCode("Oww2"),
        "Снижение магического урона",
        "Стальной вихрь"
    )
    public static readonly CHANCE_TO_CRITICAL_STRIKE = new AbilityRealLevelField(
        new RawCode("Ocr1"),
        "Шанс на критический удар",
        "Смертельный удар"
    )
    public static readonly DAMAGE_MULTIPLIER_OCR2 = new AbilityRealLevelField(
        new RawCode("Ocr2"),
        "Увеличение урона",
        "Смертельный удар"
    )
    public static readonly DAMAGE_BONUS_OCR3 = new AbilityRealLevelField(
        new RawCode("Ocr3"),
        "Дополнительный урон",
        "Смертельный удар"
    )
    public static readonly CHANCE_TO_EVADE_OCR4 = new AbilityRealLevelField(
        new RawCode("Ocr4"),
        "Шансы избежать",
        "Смертельный удар"
    )
    public static readonly DAMAGE_DEALT_PERCENT_OMI2 = new AbilityRealLevelField(
        new RawCode("Omi2"),
        "Нанесено урона (new RawCode(%)",
        "Иллюзия"
    )
    public static readonly DAMAGE_TAKEN_PERCENT_OMI3 = new AbilityRealLevelField(
        new RawCode("Omi3"),
        "Получено урона (new RawCode(%)",
        "Иллюзия"
    )
    public static readonly ANIMATION_DELAY = new AbilityRealLevelField(
        new RawCode("Omi4"),
        "Задержка анимации",
        "Иллюзия"
    )
    public static readonly TRANSITION_TIME = new AbilityRealLevelField(
        new RawCode("Owk1"),
        "Время перемещения",
        "Стремительность"
    )
    public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_OWK2 = new AbilityRealLevelField(
        new RawCode("Owk2"),
        "Увеличение скорости при перемещении (new RawCode(%)",
        "Стремительность"
    )
    public static readonly BACKSTAB_DAMAGE = new AbilityRealLevelField(
        new RawCode("Owk3"),
        "Урон от подлого удара",
        "Стремительность"
    )
    public static readonly AMOUNT_HEALED_DAMAGED_UDC1 = new AbilityRealLevelField(
        new RawCode("Udc1"),
        "Число вылеченных и поврежденных",
        "Лик смерти"
    )
    public static readonly LIFE_CONVERTED_TO_MANA = new AbilityRealLevelField(
        new RawCode("Udp1"),
        "Здоровье конвертируется в ману",
        "Смертельный союз"
    )
    public static readonly LIFE_CONVERTED_TO_LIFE = new AbilityRealLevelField(
        new RawCode("Udp2"),
        "Здоровье конвертируется в здоровье",
        "Смертельный союз"
    )
    public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_UAU1 = new AbilityRealLevelField(
        new RawCode("Uau1"),
        "Увеличение скорости при перемещении (new RawCode(%)",
        "Аура Смерти"
    )
    public static readonly LIFE_REGENERATION_INCREASE_PERCENT = new AbilityRealLevelField(
        new RawCode("Uau2"),
        "Увеличение скорости восстановления здоровья (new RawCode(%)",
        "Аура Смерти"
    )
    public static readonly CHANCE_TO_EVADE_EEV1 = new AbilityRealLevelField(
        new RawCode("Eev1"),
        "Шансы избежать",
        "Змеиная ловкость"
    )
    public static readonly DAMAGE_PER_INTERVAL = new AbilityRealLevelField(
        new RawCode("Eim1"),
        "Урона за интервал времени",
        "Жар Преисподней"
    )
    public static readonly MANA_DRAINED_PER_SECOND_EIM2 = new AbilityRealLevelField(
        new RawCode("Eim2"),
        "Украдено маны в секунду",
        "Жар Преисподней"
    )
    public static readonly BUFFER_MANA_REQUIRED = new AbilityRealLevelField(
        new RawCode("Eim3"),
        "Требуется буфер маны",
        "Жар Преисподней"
    )
    public static readonly MAX_MANA_DRAINED = new AbilityRealLevelField(
        new RawCode("Emb1"),
        "Макс. украденной маны",
        "Магический огонь"
    )
    public static readonly BOLT_DELAY = new AbilityRealLevelField(
        new RawCode("Emb2"),
        "Задержка разряда",
        "Магический огонь"
    )
    public static readonly BOLT_LIFETIME = new AbilityRealLevelField(
        new RawCode("Emb3"),
        "Время жизни разряда",
        "Магический огонь"
    )
    public static readonly ALTITUDE_ADJUSTMENT_DURATION = new AbilityRealLevelField(
        new RawCode("Eme3"),
        "Длительность регулировки высоты",
        "Перевоплощение"
    )
    public static readonly LANDING_DELAY_TIME = new AbilityRealLevelField(
        new RawCode("Eme4"),
        "Время задержки приземления",
        "Перевоплощение"
    )
    public static readonly ALTERNATE_FORM_HIT_POINT_BONUS = new AbilityRealLevelField(
        new RawCode("Eme5"),
        "Альтернативная форма: дополнительное здоровье",
        "Перевоплощение"
    )
    public static readonly MOVE_SPEED_INFO_PANEL_ONLY = new AbilityRealLevelField(
        new RawCode("Ncr5"),
        "Повышение скорости перемещения (new RawCode(только инф. панель)",
        "Эликсир ярости"
    )
    public static readonly ATTACK_SPEED_BONUS_INFO_PANEL_ONLY = new AbilityRealLevelField(
        new RawCode("Ncr6"),
        "Повышение скорости боя (new RawCode(только инф. панель)",
        "Эликсир ярости"
    )
    public static readonly LIFE_REGENERATION_PER_SECOND = new AbilityRealLevelField(
        new RawCode("ave5"),
        "Скорость восстановления здоровья (new RawCode(в секунду)",
        "Сфинкс"
    )
    public static readonly STUN_DURATION_USL1 = new AbilityRealLevelField(
        new RawCode("Usl1"),
        "Длительность оглушения",
        "Сон"
    )
    public static readonly ATTACK_DAMAGE_STOLEN_PERCENT = new AbilityRealLevelField(
        new RawCode("Uav1"),
        "Украденный при атаке урон (new RawCode(%)",
        "Вампиризм"
    )
    public static readonly DAMAGE_UCS1 = new AbilityRealLevelField(
        new RawCode("Ucs1"),
        "Урон",
        "Темная стая"
    )
    public static readonly MAX_DAMAGE_UCS2 = new AbilityRealLevelField(
        new RawCode("Ucs2"),
        "Макс. урон",
        "Темная стая"
    )
    public static readonly DISTANCE_UCS3 = new AbilityRealLevelField(
        new RawCode("Ucs3"),
        "Расстояние",
        "Темная стая"
    )
    public static readonly FINAL_AREA_UCS4 = new AbilityRealLevelField(
        new RawCode("Ucs4"),
        "Финальная область",
        "Темная стая"
    )
    public static readonly DAMAGE_UIN1 = new AbilityRealLevelField(
        new RawCode("Uin1"),
        "Урон",
        "Огненный голем"
    )
    public static readonly DURATION = new AbilityRealLevelField(
        new RawCode("Uin2"),
        "Длительность",
        "Огненный голем"
    )
    public static readonly IMPACT_DELAY = new AbilityRealLevelField(
        new RawCode("Uin3"),
        "Задержка падения",
        "Огненный голем"
    )
    public static readonly DAMAGE_PER_TARGET_OCL1 = new AbilityRealLevelField(
        new RawCode("Ocl1"),
        "Урона на цель",
        "Цепь молний"
    )
    public static readonly EFFECT_DELAY_OEQ1 = new AbilityRealLevelField(
        new RawCode("Oeq1"),
        "Задержка эффекта",
        "Землетрясение"
    )
    public static readonly DAMAGE_PER_SECOND_TO_BUILDINGS = new AbilityRealLevelField(
        new RawCode("Oeq2"),
        "Здания: урона в секунду",
        "Землетрясение"
    )
    public static readonly UNITS_SLOWED_PERCENT = new AbilityRealLevelField(
        new RawCode("Oeq3"),
        "Войска замедлены (new RawCode(%)",
        "Землетрясение"
    )
    public static readonly FINAL_AREA_OEQ4 = new AbilityRealLevelField(
        new RawCode("Oeq4"),
        "Финальная область",
        "Землетрясение"
    )
    public static readonly DAMAGE_PER_SECOND_EER1 = new AbilityRealLevelField(
        new RawCode("Eer1"),
        "Урона в секунду",
        "Гнев деревьев"
    )
    public static readonly DAMAGE_DEALT_TO_ATTACKERS = new AbilityRealLevelField(
        new RawCode("Eah1"),
        "Нанесенный атакующим урон",
        "Аура возмездия"
    )
    public static readonly LIFE_HEALED = new AbilityRealLevelField(
        new RawCode("Etq1"),
        "Здоровья восстановлено",
        "Покой"
    )
    public static readonly HEAL_INTERVAL = new AbilityRealLevelField(
        new RawCode("Etq2"),
        "Интервал лечения",
        "Покой"
    )
    public static readonly BUILDING_REDUCTION = new AbilityRealLevelField(
        new RawCode("Etq3"),
        "Уменьшение скорости строительства",
        "Покой"
    )
    public static readonly INITIAL_IMMUNITY_DURATION = new AbilityRealLevelField(
        new RawCode("Etq4"),
        "Нач. продолжительность иммунитета",
        "Покой"
    )
    public static readonly MAX_LIFE_DRAINED_PER_SECOND_PERCENT = new AbilityRealLevelField(
        new RawCode("Udd1"),
        "Макс. здоровья украдено в секунду (new RawCode(%)",
        "Порча"
    )
    public static readonly BUILDING_REDUCTION_UDD2 = new AbilityRealLevelField(
        new RawCode("Udd2"),
        "Уменьшение скорости строительства",
        "Порча"
    )
    public static readonly ARMOR_DURATION = new AbilityRealLevelField(
        new RawCode("Ufa1"),
        "Долговечность брони",
        "Ледяная броня"
    )
    public static readonly ARMOR_BONUS_UFA2 = new AbilityRealLevelField(
        new RawCode("Ufa2"),
        "Увеличение брони",
        "Ледяная броня"
    )
    public static readonly AREA_OF_EFFECT_DAMAGE = new AbilityRealLevelField(
        new RawCode("Ufn1"),
        "Область воздействия урона",
        "Ледяная звезда"
    )
    public static readonly SPECIFIC_TARGET_DAMAGE_UFN2 = new AbilityRealLevelField(
        new RawCode("Ufn2"),
        "Поражение особой цели",
        "Ледяная звезда"
    )
    public static readonly DAMAGE_BONUS_HFA1 = new AbilityRealLevelField(
        new RawCode("Hfa1"),
        "Дополнительный урон",
        "Огненные стрелы"
    )
    public static readonly DAMAGE_DEALT_ESF1 = new AbilityRealLevelField(
        new RawCode("Esf1"),
        "Нанесено урона",
        "Звездопад"
    )
    public static readonly DAMAGE_INTERVAL_ESF2 = new AbilityRealLevelField(
        new RawCode("Esf2"),
        "Интервал урона",
        "Звездопад"
    )
    public static readonly BUILDING_REDUCTION_ESF3 = new AbilityRealLevelField(
        new RawCode("Esf3"),
        "Уменьшение скорости строительства",
        "Звездопад"
    )
    public static readonly DAMAGE_BONUS_PERCENT = new AbilityRealLevelField(
        new RawCode("Ear1"),
        "Дополнительный урон (new RawCode(%)",
        "Аура меткости"
    )
    public static readonly DEFENSE_BONUS_HAV1 = new AbilityRealLevelField(
        new RawCode("Hav1"),
        "Дополнительная защита",
        "Мощь гор"
    )
    public static readonly HIT_POINT_BONUS = new AbilityRealLevelField(
        new RawCode("Hav2"),
        "Дополнительное здоровье",
        "Мощь гор"
    )
    public static readonly DAMAGE_BONUS_HAV3 = new AbilityRealLevelField(
        new RawCode("Hav3"),
        "Дополнительный урон",
        "Мощь гор"
    )
    public static readonly MAGIC_DAMAGE_REDUCTION_HAV4 = new AbilityRealLevelField(
        new RawCode("Hav4"),
        "Снижение магического урона",
        "Мощь гор"
    )
    public static readonly CHANCE_TO_BASH = new AbilityRealLevelField(
        new RawCode("Hbh1"),
        "Шанс на сильный удар",
        "Сильный удар"
    )
    public static readonly DAMAGE_MULTIPLIER_HBH2 = new AbilityRealLevelField(
        new RawCode("Hbh2"),
        "Увеличение урона",
        "Сильный удар"
    )
    public static readonly DAMAGE_BONUS_HBH3 = new AbilityRealLevelField(
        new RawCode("Hbh3"),
        "Дополнительный урон",
        "Сильный удар"
    )
    public static readonly CHANCE_TO_MISS_HBH4 = new AbilityRealLevelField(
        new RawCode("Hbh4"),
        "Шанс на промах",
        "Сильный удар"
    )
    public static readonly DAMAGE_HTB1 = new AbilityRealLevelField(
        new RawCode("Htb1"),
        "Урон",
        "Молот бурь"
    )
    public static readonly AOE_DAMAGE = new AbilityRealLevelField(
        new RawCode("Htc1"),
        "Радиус поражения: урон",
        "Удар грома"
    )
    public static readonly SPECIFIC_TARGET_DAMAGE_HTC2 = new AbilityRealLevelField(
        new RawCode("Htc2"),
        "Поражение особой цели",
        "Удар грома"
    )
    public static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3 = new AbilityRealLevelField(
        new RawCode("Htc3"),
        "Уменьшение скорости перемещения (new RawCode(%)",
        "Удар грома"
    )
    public static readonly ATTACK_SPEED_REDUCTION_PERCENT_HTC4 = new AbilityRealLevelField(
        new RawCode("Htc4"),
        "Уменьшение скорости атаки (new RawCode(%)",
        "Удар грома"
    )
    public static readonly ARMOR_BONUS_HAD1 = new AbilityRealLevelField(
        new RawCode("Had1"),
        "Увеличение брони",
        "Доспехи веры"
    )
    public static readonly AMOUNT_HEALED_DAMAGED_HHB1 = new AbilityRealLevelField(
        new RawCode("Hhb1"),
        "Число вылеченных и поврежденных",
        "Благодать"
    )
    public static readonly EXTRA_DAMAGE_HCA1 = new AbilityRealLevelField(
        new RawCode("Hca1"),
        "Дополнительный урон",
        "Ледяные стрелы"
    )
    public static readonly MOVEMENT_SPEED_FACTOR_HCA2 = new AbilityRealLevelField(
        new RawCode("Hca2"),
        "Фактор скорости перемещения",
        "Ледяные стрелы"
    )
    public static readonly ATTACK_SPEED_FACTOR_HCA3 = new AbilityRealLevelField(
        new RawCode("Hca3"),
        "Фактор скорости атаки",
        "Ледяные стрелы"
    )
    public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_OAE1 = new AbilityRealLevelField(
        new RawCode("Oae1"),
        "Увеличение скорости при перемещении",
        "Аура выносливости"
    )
    public static readonly ATTACK_SPEED_INCREASE_PERCENT_OAE2 = new AbilityRealLevelField(
        new RawCode("Oae2"),
        "Увеличение скорости атаки (new RawCode(%)",
        "Аура выносливости"
    )
    public static readonly REINCARNATION_DELAY = new AbilityRealLevelField(
        new RawCode("Ore1"),
        "Задержка перерождения",
        "Перерождение"
    )
    public static readonly DAMAGE_OSH1 = new AbilityRealLevelField(
        new RawCode("Osh1"),
        "Урон",
        "Волна Силы"
    )
    public static readonly MAXIMUM_DAMAGE_OSH2 = new AbilityRealLevelField(
        new RawCode("Osh2"),
        "Максимальный урон",
        "Волна Силы"
    )
    public static readonly DISTANCE_OSH3 = new AbilityRealLevelField(
        new RawCode("Osh3"),
        "Расстояние",
        "Волна Силы"
    )
    public static readonly FINAL_AREA_OSH4 = new AbilityRealLevelField(
        new RawCode("Osh4"),
        "Финальная область",
        "Волна Силы"
    )
    public static readonly GRAPHIC_DELAY_NFD1 = new AbilityRealLevelField(
        new RawCode("Nfd1"),
        "Задержка графики",
        "Перст смерти (new RawCode(Архимонд)"
    )
    public static readonly GRAPHIC_DURATION_NFD2 = new AbilityRealLevelField(
        new RawCode("Nfd2"),
        "Длительность графики",
        "Перст смерти (new RawCode(Архимонд)"
    )
    public static readonly DAMAGE_NFD3 = new AbilityRealLevelField(
        new RawCode("Nfd3"),
        "Урон",
        "Перст смерти (new RawCode(Архимонд)"
    )
    public static readonly SUMMONED_UNIT_DAMAGE_AMS1 = new AbilityRealLevelField(
        new RawCode("Ams1"),
        "Урон от вызванной боевой единицы",
        "Защитная аура"
    )
    public static readonly MAGIC_DAMAGE_REDUCTION_AMS2 = new AbilityRealLevelField(
        new RawCode("Ams2"),
        "Снижение магического урона",
        "Защитная аура"
    )
    public static readonly AURA_DURATION = new AbilityRealLevelField(
        new RawCode("Apl1"),
        "Длительность ауры",
        "Ядовитое облако"
    )
    public static readonly DAMAGE_PER_SECOND_APL2 = new AbilityRealLevelField(
        new RawCode("Apl2"),
        "Урона в секунду",
        "Ядовитое облако"
    )
    public static readonly DURATION_OF_PLAGUE_WARD = new AbilityRealLevelField(
        new RawCode("Apl3"),
        "Длительность защиты от чумы",
        "Ядовитое облако"
    )
    public static readonly AMOUNT_OF_HIT_POINTS_REGENERATED = new AbilityRealLevelField(
        new RawCode("Oar1"),
        "Объем восстановленного здоровья",
        "Дух-целитель (new RawCode(дух-целитель)"
    )
    public static readonly ATTACK_DAMAGE_INCREASE_AKB1 = new AbilityRealLevelField(
        new RawCode("Akb1"),
        "Увеличение урона при атаке",
        "Боевой марш"
    )
    public static readonly MANA_LOSS_ADM1 = new AbilityRealLevelField(
        new RawCode("Adm1"),
        "Потеря маны",
        "Рассеять чары"
    )
    public static readonly SUMMONED_UNIT_DAMAGE_ADM2 = new AbilityRealLevelField(
        new RawCode("Adm2"),
        "Урон от вызванной боевой единицы",
        "Рассеять чары"
    )
    public static readonly EXPANSION_AMOUNT = new AbilityRealLevelField(
        new RawCode("Bli1"),
        "Объем экспансии",
        "Наведение порчи"
    )
    public static readonly INTERVAL_DURATION_BGM2 = new AbilityRealLevelField(
        new RawCode("Bgm2"),
        "Длительность интервала",
        "Проклятие рудника"
    )
    public static readonly RADIUS_OF_MINING_RING = new AbilityRealLevelField(
        new RawCode("Bgm4"),
        "Радиус кольца вокруг рудника",
        "Проклятие рудника"
    )
    public static readonly ATTACK_SPEED_INCREASE_PERCENT_BLO1 = new AbilityRealLevelField(
        new RawCode("Blo1"),
        "Увеличение скорости атаки (new RawCode(%)",
        "Кровожадность"
    )
    public static readonly MOVEMENT_SPEED_INCREASE_PERCENT_BLO2 = new AbilityRealLevelField(
        new RawCode("Blo2"),
        "Увеличение скорости при перемещении (new RawCode(%)",
        "Кровожадность"
    )
    public static readonly SCALING_FACTOR = new AbilityRealLevelField(
        new RawCode("Blo3"),
        "Фактор масштаба",
        "Кровожадность"
    )
    public static readonly HIT_POINTS_PER_SECOND_CAN1 = new AbilityRealLevelField(
        new RawCode("Can1"),
        "Здоровья в секунду",
        "Каннибализм"
    )
    public static readonly MAX_HIT_POINTS = new AbilityRealLevelField(
        new RawCode("Can2"),
        "Макс. здоровья",
        "Каннибализм"
    )
    public static readonly DAMAGE_PER_SECOND_DEV2 = new AbilityRealLevelField(
        new RawCode("Dev2"),
        "Урона в секунду",
        "Еда"
    )
    public static readonly MOVEMENT_UPDATE_FREQUENCY_CHD1 = new AbilityRealLevelField(
        new RawCode("Chd1"),
        "Частота обновления перемещений",
        "Парашютист (new RawCode(враг)"
    )
    public static readonly ATTACK_UPDATE_FREQUENCY_CHD2 = new AbilityRealLevelField(
        new RawCode("Chd2"),
        "Частота обновления атак",
        "Парашютист (new RawCode(враг)"
    )
    public static readonly SUMMONED_UNIT_DAMAGE_CHD3 = new AbilityRealLevelField(
        new RawCode("Chd3"),
        "Урон от вызванной боевой единицы",
        "Парашютист (new RawCode(враг)"
    )
    public static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1 = new AbilityRealLevelField(
        new RawCode("Cri1"),
        "Уменьшение скорости перемещения (new RawCode(%)",
        "Увечье"
    )
    public static readonly ATTACK_SPEED_REDUCTION_PERCENT_CRI2 = new AbilityRealLevelField(
        new RawCode("Cri2"),
        "Уменьшение скорости атаки (new RawCode(%)",
        "Увечье"
    )
    public static readonly DAMAGE_REDUCTION_CRI3 = new AbilityRealLevelField(
        new RawCode("Cri3"),
        "Снижение урона",
        "Увечье"
    )
    public static readonly CHANCE_TO_MISS_CRS1 = new AbilityRealLevelField(
        new RawCode("Crs1"),
        "Шанс на промах",
        "Проклятие"
    )
    public static readonly FULL_DAMAGE_RADIUS_DDA1 = new AbilityRealLevelField(
        new RawCode("Dda1"),
        "Радиус полного урона",
        "Урон от взрыва"
    )
    public static readonly FULL_DAMAGE_AMOUNT_DDA2 = new AbilityRealLevelField(
        new RawCode("Dda2"),
        "Объем полного урона",
        "Урон от взрыва"
    )
    public static readonly PARTIAL_DAMAGE_RADIUS = new AbilityRealLevelField(
        new RawCode("Dda3"),
        "Радиус частичного урона",
        "Урон от взрыва"
    )
    public static readonly PARTIAL_DAMAGE_AMOUNT = new AbilityRealLevelField(
        new RawCode("Dda4"),
        "Объем частичного урона",
        "Урон от взрыва"
    )
    public static readonly BUILDING_DAMAGE_FACTOR_SDS1 = new AbilityRealLevelField(
        new RawCode("Sds1"),
        "Фактор урона зданию",
        "Взорвать"
    )
    public static readonly MAX_DAMAGE_UCO5 = new AbilityRealLevelField(
        new RawCode("Uco5"),
        "Макс. урон",
        "Самоубийство"
    )
    public static readonly MOVE_SPEED_BONUS_UCO6 = new AbilityRealLevelField(
        new RawCode("Uco6"),
        "Повышение скорости перемещения",
        "Самоубийство"
    )
    public static readonly DAMAGE_TAKEN_PERCENT_DEF1 = new AbilityRealLevelField(
        new RawCode("Def1"),
        "Получено урона (new RawCode(%)",
        "Укрыться за щитом"
    )
    public static readonly DAMAGE_DEALT_PERCENT_DEF2 = new AbilityRealLevelField(
        new RawCode("Def2"),
        "Нанесено урона (new RawCode(%)",
        "Укрыться за щитом"
    )
    public static readonly MOVEMENT_SPEED_FACTOR_DEF3 = new AbilityRealLevelField(
        new RawCode("Def3"),
        "Фактор скорости перемещения",
        "Укрыться за щитом"
    )
    public static readonly ATTACK_SPEED_FACTOR_DEF4 = new AbilityRealLevelField(
        new RawCode("Def4"),
        "Фактор скорости атаки",
        "Укрыться за щитом"
    )
    public static readonly MAGIC_DAMAGE_REDUCTION_DEF5 = new AbilityRealLevelField(
        new RawCode("Def5"),
        "Снижение магического урона",
        "Укрыться за щитом"
    )
    public static readonly CHANCE_TO_DEFLECT = new AbilityRealLevelField(
        new RawCode("Def6"),
        "Вероятность отклонения",
        "Укрыться за щитом"
    )
    public static readonly DEFLECT_DAMAGE_TAKEN_PIERCING = new AbilityRealLevelField(
        new RawCode("Def7"),
        "Отклонение полученного урона (new RawCode(дальний бой)",
        "Укрыться за щитом"
    )
    public static readonly DEFLECT_DAMAGE_TAKEN_SPELLS = new AbilityRealLevelField(
        new RawCode("Def8"),
        "Отклонение полученного урона (new RawCode(заклинания)",
        "Укрыться за щитом"
    )
    public static readonly RIP_DELAY = new AbilityRealLevelField(
        new RawCode("Eat1"),
        "Задержка волны",
        "Съесть дерево"
    )
    public static readonly EAT_DELAY = new AbilityRealLevelField(
        new RawCode("Eat2"),
        "Задержка съедения",
        "Съесть дерево"
    )
    public static readonly HIT_POINTS_GAINED_EAT3 = new AbilityRealLevelField(
        new RawCode("Eat3"),
        "Получено здоровья",
        "Съесть дерево"
    )
    public static readonly AIR_UNIT_LOWER_DURATION = new AbilityRealLevelField(
        new RawCode("Ens1"),
        "Длительность снижения летающей боевой единицы",
        "Ловчий"
    )
    public static readonly AIR_UNIT_HEIGHT = new AbilityRealLevelField(
        new RawCode("Ens2"),
        "Высота полета летающей боевой единицы",
        "Ловчий"
    )
    public static readonly MELEE_ATTACK_RANGE = new AbilityRealLevelField(
        new RawCode("Ens3"),
        "Дистанция атаки в ближнем бою",
        "Ловчий"
    )
    public static readonly INTERVAL_DURATION_EGM2 = new AbilityRealLevelField(
        new RawCode("Egm2"),
        "Длительность интервала",
        "Оплетение рудника"
    )
    public static readonly EFFECT_DELAY_FLA2 = new AbilityRealLevelField(
        new RawCode("Fla2"),
        "Задержка эффекта",
        "Осветительный заряд"
    )
    public static readonly MINING_DURATION = new AbilityRealLevelField(
        new RawCode("Gld2"),
        "Длительность золотодобычи",
        "Рудник"
    )
    public static readonly RADIUS_OF_GRAVESTONES = new AbilityRealLevelField(
        new RawCode("Gyd2"),
        "Радиус надгробных плит",
        "Создать труп"
    )
    public static readonly RADIUS_OF_CORPSES = new AbilityRealLevelField(
        new RawCode("Gyd3"),
        "Радиус трупов",
        "Создать труп"
    )
    public static readonly HIT_POINTS_GAINED_HEA1 = new AbilityRealLevelField(
        new RawCode("Hea1"),
        "Получено здоровья",
        "Лечение"
    )
    public static readonly DAMGE_INCREASE_PERCENT_INF1 = new AbilityRealLevelField(
        new RawCode("Inf1"),
        "Увеличение урона (new RawCode(%)",
        "Духовное пламя"
    )
    public static readonly AUTOCAST_RANGE = new AbilityRealLevelField(
        new RawCode("Inf3"),
        "Дальность автоматического применения заклинаний",
        "Духовное пламя"
    )
    public static readonly LIFE_REGEN_RATE = new AbilityRealLevelField(
        new RawCode("Inf4"),
        "Скорость восстановления здоровья",
        "Духовное пламя"
    )
    public static readonly GRAPHIC_DELAY_LIT1 = new AbilityRealLevelField(
        new RawCode("Lit1"),
        "Задержка графики",
        "Грозовая атака"
    )
    public static readonly GRAPHIC_DURATION_LIT2 = new AbilityRealLevelField(
        new RawCode("Lit2"),
        "Длительность графики",
        "Грозовая атака"
    )
    public static readonly DAMAGE_PER_SECOND_LSH1 = new AbilityRealLevelField(
        new RawCode("Lsh1"),
        "Урона в секунду",
        "Щит молний"
    )
    public static readonly MANA_GAINED = new AbilityRealLevelField(
        new RawCode("Mbt1"),
        "Получено здоровья",
        "Восстановить ману и здоровье"
    )
    public static readonly HIT_POINTS_GAINED_MBT2 = new AbilityRealLevelField(
        new RawCode("Mbt2"),
        "Получено маны",
        "Восстановить ману и здоровье"
    )
    public static readonly AUTOCAST_REQUIREMENT = new AbilityRealLevelField(
        new RawCode("Mbt3"),
        "Требование к автоматическому применению заклинаний",
        "Восстановить ману и здоровье"
    )
    public static readonly WATER_HEIGHT = new AbilityRealLevelField(
        new RawCode("Mbt4"),
        "Высота уровня воды",
        "Восстановить ману и здоровье"
    )
    public static readonly ACTIVATION_DELAY_MIN1 = new AbilityRealLevelField(
        new RawCode("Min1"),
        "Задержка запуска",
        "Мина - взрывается (new RawCode(гоблинская мина)"
    )
    public static readonly INVISIBILITY_TRANSITION_TIME = new AbilityRealLevelField(
        new RawCode("Min2"),
        "Время перехода в невидимость",
        "Мина - взрывается (new RawCode(гоблинская мина)"
    )
    public static readonly ACTIVATION_RADIUS = new AbilityRealLevelField(
        new RawCode("Neu1"),
        "Радиус запуска",
        "Выбрать героя"
    )
    public static readonly AMOUNT_REGENERATED = new AbilityRealLevelField(
        new RawCode("Arm1"),
        "Восстановление",
        "Восстановление маны (new RawCode(нейтральный)"
    )
    public static readonly DAMAGE_PER_SECOND_POI1 = new AbilityRealLevelField(
        new RawCode("Poi1"),
        "Урона в секунду",
        "Ядовитое жало"
    )
    public static readonly ATTACK_SPEED_FACTOR_POI2 = new AbilityRealLevelField(
        new RawCode("Poi2"),
        "Фактор скорости атаки",
        "Ядовитое жало"
    )
    public static readonly MOVEMENT_SPEED_FACTOR_POI3 = new AbilityRealLevelField(
        new RawCode("Poi3"),
        "Фактор скорости перемещения",
        "Ядовитое жало"
    )
    public static readonly EXTRA_DAMAGE_POA1 = new AbilityRealLevelField(
        new RawCode("Poa1"),
        "Дополнительный урон",
        "Отравленные стрелы"
    )
    public static readonly DAMAGE_PER_SECOND_POA2 = new AbilityRealLevelField(
        new RawCode("Poa2"),
        "Урона в секунду",
        "Отравленные стрелы"
    )
    public static readonly ATTACK_SPEED_FACTOR_POA3 = new AbilityRealLevelField(
        new RawCode("Poa3"),
        "Фактор скорости атаки",
        "Отравленные стрелы"
    )
    public static readonly MOVEMENT_SPEED_FACTOR_POA4 = new AbilityRealLevelField(
        new RawCode("Poa4"),
        "Фактор скорости перемещения",
        "Отравленные стрелы"
    )
    public static readonly DAMAGE_AMPLIFICATION = new AbilityRealLevelField(
        new RawCode("Pos2"),
        "Увеличение урона",
        "Одержимость (new RawCode(непрерывное)"
    )
    public static readonly CHANCE_TO_STOMP_PERCENT = new AbilityRealLevelField(
        new RawCode("War1"),
        "Шанс на громовую поступь (new RawCode(%)",
        "Сокрушение"
    )
    public static readonly DAMAGE_DEALT_WAR2 = new AbilityRealLevelField(
        new RawCode("War2"),
        "Нанесено урона",
        "Сокрушение"
    )
    public static readonly FULL_DAMAGE_RADIUS_WAR3 = new AbilityRealLevelField(
        new RawCode("War3"),
        "Радиус полного урона",
        "Сокрушение"
    )
    public static readonly HALF_DAMAGE_RADIUS_WAR4 = new AbilityRealLevelField(
        new RawCode("War4"),
        "Радиус половинного урона",
        "Сокрушение"
    )
    public static readonly SUMMONED_UNIT_DAMAGE_PRG3 = new AbilityRealLevelField(
        new RawCode("Prg3"),
        "Урон от вызванной боевой единицы",
        "Очищение"
    )
    public static readonly UNIT_PAUSE_DURATION = new AbilityRealLevelField(
        new RawCode("Prg4"),
        "Длительность паузы: воин",
        "Очищение"
    )
    public static readonly HERO_PAUSE_DURATION = new AbilityRealLevelField(
        new RawCode("Prg5"),
        "Длительность паузы: герой",
        "Очищение"
    )
    public static readonly HIT_POINTS_GAINED_REJ1 = new AbilityRealLevelField(
        new RawCode("Rej1"),
        "Получено здоровья",
        "Омоложение"
    )
    public static readonly MANA_POINTS_GAINED_REJ2 = new AbilityRealLevelField(
        new RawCode("Rej2"),
        "Получено маны",
        "Омоложение"
    )
    public static readonly MINIMUM_LIFE_REQUIRED = new AbilityRealLevelField(
        new RawCode("Rpb3"),
        "Минимум требуемого здоровья",
        "восстановить"
    )
    public static readonly MINIMUM_MANA_REQUIRED = new AbilityRealLevelField(
        new RawCode("Rpb4"),
        "Минимум требуемой маны",
        "восстановить"
    )
    public static readonly REPAIR_COST_RATIO = new AbilityRealLevelField(
        new RawCode("Rep1"),
        "Коэффициент стоимости ремонта",
        "Ремонтировать"
    )
    public static readonly REPAIR_TIME_RATIO = new AbilityRealLevelField(
        new RawCode("Rep2"),
        "Коэффициент времени ремонта",
        "Ремонтировать"
    )
    public static readonly POWER_BUILD_COST = new AbilityRealLevelField(
        new RawCode("Rep3"),
        "Цена ускор. постройки",
        "Ремонтировать"
    )
    public static readonly POWER_BUILD_RATE = new AbilityRealLevelField(
        new RawCode("Rep4"),
        "Темп ускор. постройки",
        "Ремонтировать"
    )
    public static readonly NAVAL_RANGE_BONUS = new AbilityRealLevelField(
        new RawCode("Rep5"),
        "Дополнительная дальность на море",
        "Ремонтировать"
    )
    public static readonly DAMAGE_INCREASE_PERCENT_ROA1 = new AbilityRealLevelField(
        new RawCode("Roa1"),
        "Увеличение урона (new RawCode(%)",
        "Рев"
    )
    public static readonly LIFE_REGENERATION_RATE = new AbilityRealLevelField(
        new RawCode("Roa3"),
        "Скорость восстановления здоровья",
        "Рев"
    )
    public static readonly MANA_REGEN = new AbilityRealLevelField(
        new RawCode("Roa4"),
        "Восст. маны",
        "Рев"
    )
    public static readonly DAMAGE_INCREASE = new AbilityRealLevelField(
        new RawCode("Nbr1"),
        "Увеличение ущерба",
        "Рев"
    )
    public static readonly SALVAGE_COST_RATIO = new AbilityRealLevelField(
        new RawCode("Sal1"),
        "Коэффициент стоимости спасения",
        "Грабеж"
    )
    public static readonly IN_FLIGHT_SIGHT_RADIUS = new AbilityRealLevelField(
        new RawCode("Esn1"),
        "Радиус обзора в полете",
        "Сторожевая сова"
    )
    public static readonly HOVERING_SIGHT_RADIUS = new AbilityRealLevelField(
        new RawCode("Esn2"),
        "Радиус обзора в парении",
        "Сторожевая сова"
    )
    public static readonly HOVERING_HEIGHT = new AbilityRealLevelField(
        new RawCode("Esn3"),
        "Высота парения",
        "Сторожевая сова"
    )
    public static readonly DURATION_OF_OWLS = new AbilityRealLevelField(
        new RawCode("Esn5"),
        "Время действия сов",
        "Сторожевая сова"
    )
    public static readonly FADE_DURATION = new AbilityRealLevelField(
        new RawCode("Shm1"),
        "Длительность затемнения",
        "Невидимость по ночам"
    )
    public static readonly DAY_NIGHT_DURATION = new AbilityRealLevelField(
        new RawCode("Shm2"),
        "Длительность дня и ночи",
        "Невидимость по ночам"
    )
    public static readonly ACTION_DURATION = new AbilityRealLevelField(
        new RawCode("Shm3"),
        "Длительность действия",
        "Невидимость по ночам"
    )
    public static readonly MOVEMENT_SPEED_FACTOR_SLO1 = new AbilityRealLevelField(
        new RawCode("Slo1"),
        "Фактор скорости перемещения",
        "Замедление"
    )
    public static readonly ATTACK_SPEED_FACTOR_SLO2 = new AbilityRealLevelField(
        new RawCode("Slo2"),
        "Фактор скорости атаки",
        "Замедление"
    )
    public static readonly DAMAGE_PER_SECOND_SPO1 = new AbilityRealLevelField(
        new RawCode("Spo1"),
        "Урона в секунду",
        "Яд"
    )
    public static readonly MOVEMENT_SPEED_FACTOR_SPO2 = new AbilityRealLevelField(
        new RawCode("Spo2"),
        "Фактор скорости перемещения",
        "Яд"
    )
    public static readonly ATTACK_SPEED_FACTOR_SPO3 = new AbilityRealLevelField(
        new RawCode("Spo3"),
        "Фактор скорости атаки",
        "Яд"
    )
    public static readonly ACTIVATION_DELAY_STA1 = new AbilityRealLevelField(
        new RawCode("Sta1"),
        "Задержка запуска",
        "Колдовская ловушка"
    )
    public static readonly DETECTION_RADIUS_STA2 = new AbilityRealLevelField(
        new RawCode("Sta2"),
        "Радиус обнаружения",
        "Колдовская ловушка"
    )
    public static readonly DETONATION_RADIUS = new AbilityRealLevelField(
        new RawCode("Sta3"),
        "Радиус взрыва",
        "Колдовская ловушка"
    )
    public static readonly STUN_DURATION_STA4 = new AbilityRealLevelField(
        new RawCode("Sta4"),
        "Длительность оглушения",
        "Колдовская ловушка"
    )
    public static readonly ATTACK_SPEED_BONUS_PERCENT = new AbilityRealLevelField(
        new RawCode("Uhf1"),
        "Дополнительная скорость атаки (new RawCode(%)",
        "Ярость Проклятых"
    )
    public static readonly DAMAGE_PER_SECOND_UHF2 = new AbilityRealLevelField(
        new RawCode("Uhf2"),
        "Урона в секунду",
        "Ярость Проклятых"
    )
    public static readonly LUMBER_PER_INTERVAL = new AbilityRealLevelField(
        new RawCode("Wha1"),
        "Древесины за интервал времени",
        "Добывать ресурсы (new RawCode(светляток в руднике или около дерева)"
    )
    public static readonly ART_ATTACHMENT_HEIGHT = new AbilityRealLevelField(
        new RawCode("Wha3"),
        "Высота графического приложения",
        "Добывать ресурсы (new RawCode(светлячок в руднике или около дерева)"
    )
    public static readonly TELEPORT_AREA_WIDTH = new AbilityRealLevelField(
        new RawCode("Wrp1"),
        "Ширина области телепорта",
        "Перемещение через портал"
    )
    public static readonly TELEPORT_AREA_HEIGHT = new AbilityRealLevelField(
        new RawCode("Wrp2"),
        "Высота области телепорта",
        "Перемещение через портал"
    )
    public static readonly LIFE_STOLEN_PER_ATTACK = new AbilityRealLevelField(
        new RawCode("Ivam"),
        "Жизни украдено за атаку",
        "Предмет: вампиризм"
    )
    public static readonly DAMAGE_BONUS_IDAM = new AbilityRealLevelField(
        new RawCode("Idam"),
        "Дополнительный урон",
        "Предмет: доп. урон от магии холода"
    )
    public static readonly CHANCE_TO_HIT_UNITS_PERCENT = new AbilityRealLevelField(
        new RawCode("Iob2"),
        "Шанс поразить войска (new RawCode(%)",
        "Предмет: Черная стрела"
    )
    public static readonly CHANCE_TO_HIT_HEROS_PERCENT = new AbilityRealLevelField(
        new RawCode("Iob3"),
        "Шанс поразить героев (new RawCode(%)",
        "Предмет: Черная стрела"
    )
    public static readonly CHANCE_TO_HIT_SUMMONS_PERCENT = new AbilityRealLevelField(
        new RawCode("Iob4"),
        "Шанс поразить вызванных (new RawCode(%)",
        "Предмет: Черная стрела"
    )
    public static readonly DELAY_FOR_TARGET_EFFECT = new AbilityRealLevelField(
        new RawCode("Idel"),
        "Задержка для целевого эффекта",
        "Осветительная ракета"
    )
    public static readonly DAMAGE_DEALT_PERCENT_OF_NORMAL = new AbilityRealLevelField(
        new RawCode("Iild"),
        "Нанесено урона (new RawCode(% от нормы)",
        "Предмет: иллюзии"
    )
    public static readonly DAMAGE_RECEIVED_MULTIPLIER = new AbilityRealLevelField(
        new RawCode("Iilw"),
        "Увеличение полученного урона",
        "Предмет: иллюзии"
    )
    public static readonly MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL = new AbilityRealLevelField(
        new RawCode("Imrp"),
        "Дополнительное восстановление маны (new RawCode(коэффициент от нормы)",
        "Предмет: регенерация маны"
    )
    public static readonly MOVEMENT_SPEED_INCREASE_ISPI = new AbilityRealLevelField(
        new RawCode("Ispi"),
        "Увеличение скорости перемещения",
        "Предмет: временное повышение скорости"
    )
    public static readonly DAMAGE_PER_SECOND_IDPS = new AbilityRealLevelField(
        new RawCode("Idps"),
        "Урона в секунду",
        "Щит молний (new RawCode(предмет)"
    )
    public static readonly ATTACK_DAMAGE_INCREASE_CAC1 = new AbilityRealLevelField(
        new RawCode("Cac1"),
        "Увеличение урона при атаке",
        "Боевой дух"
    )
    public static readonly DAMAGE_PER_SECOND_COR1 = new AbilityRealLevelField(
        new RawCode("Cor1"),
        "Урона в секунду",
        "Едкое дыхание"
    )
    public static readonly ATTACK_SPEED_INCREASE_ISX1 = new AbilityRealLevelField(
        new RawCode("Isx1"),
        "Увеличение скорости атаки",
        "Предмет: увеличение скорости боя (new RawCode(Перчатки Скорости)"
    )
    public static readonly DAMAGE_WRS1 = new AbilityRealLevelField(
        new RawCode("Wrs1"),
        "Урон",
        "Громовая поступь"
    )
    public static readonly TERRAIN_DEFORMATION_AMPLITUDE = new AbilityRealLevelField(
        new RawCode("Wrs2"),
        "Амплитуда деформации рельефа",
        "Громовая поступь (new RawCode(враг 1)"
    )
    public static readonly DAMAGE_CTC1 = new AbilityRealLevelField(
        new RawCode("Ctc1"),
        "Урон",
        "Удар по земле (new RawCode(враг)"
    )
    public static readonly EXTRA_DAMAGE_TO_TARGET = new AbilityRealLevelField(
        new RawCode("Ctc2"),
        "Дополнительный урон цели",
        "Удар по земле (new RawCode(враг)"
    )
    public static readonly MOVEMENT_SPEED_REDUCTION = new AbilityRealLevelField(
        new RawCode("Ctc3"),
        "Снижение скорости перемещения",
        "Удар по земле (new RawCode(враг)"
    )
    public static readonly ATTACK_SPEED_REDUCTION = new AbilityRealLevelField(
        new RawCode("Ctc4"),
        "Снижение скорости атаки",
        "Удар по земле (new RawCode(враг)"
    )
    public static readonly DAMAGE_CTB1 = new AbilityRealLevelField(
        new RawCode("Ctb1"),
        "Урон",
        "Бросить камень"
    )
    public static readonly CASTING_DELAY_SECONDS = new AbilityRealLevelField(
        new RawCode("Uds2"),
        "Задержка заклинания (new RawCode(секунды)",
        "Зов Тьмы"
    )
    public static readonly MANA_LOSS_PER_UNIT_DTN1 = new AbilityRealLevelField(
        new RawCode("Dtn1"),
        "Потеря маны (new RawCode(на боевую единицу)",
        "Самопожертвование"
    )
    public static readonly DAMAGE_TO_SUMMONED_UNITS_DTN2 = new AbilityRealLevelField(
        new RawCode("Dtn2"),
        "Урон вызванным войскам",
        "Самопожертвование"
    )
    public static readonly TRANSITION_TIME_SECONDS = new AbilityRealLevelField(
        new RawCode("Ivs1"),
        "Время перемещения (new RawCode(секунды)",
        "Невидимость"
    )
    public static readonly DRAINED_PER_SECOND_NMR1 = new AbilityRealLevelField(
        new RawCode("Nmr1"),
        "Украдено маны в секунду",
        "Слабоумие"
    )
    public static readonly CHANCE_TO_REDUCE_DAMAGE_PERCENT = new AbilityRealLevelField(
        new RawCode("Ssk1"),
        "Шанс на снижение урона (new RawCode(%)",
        "Каменные доспехи"
    )
    public static readonly MINIMUM_DAMAGE = new AbilityRealLevelField(
        new RawCode("Ssk2"),
        "Минимальный урон",
        "Каменные доспехи"
    )
    public static readonly IGNORED_DAMAGE = new AbilityRealLevelField(
        new RawCode("Ssk3"),
        "Отклоненный урон",
        "Каменные доспехи"
    )
    public static readonly FULL_DAMAGE_DEALT = new AbilityRealLevelField(
        new RawCode("Hfs1"),
        "Нанесено полного урона",
        "Огненный столб"
    )
    public static readonly FULL_DAMAGE_INTERVAL = new AbilityRealLevelField(
        new RawCode("Hfs2"),
        "Интервал полного урона",
        "Огненный столб"
    )
    public static readonly HALF_DAMAGE_DEALT = new AbilityRealLevelField(
        new RawCode("Hfs3"),
        "Нанесенный половинный урон",
        "Огненный столб"
    )
    public static readonly HALF_DAMAGE_INTERVAL = new AbilityRealLevelField(
        new RawCode("Hfs4"),
        "Интервал половинного урона",
        "Огненный столб"
    )
    public static readonly BUILDING_REDUCTION_HFS5 = new AbilityRealLevelField(
        new RawCode("Hfs5"),
        "Уменьшение скорости строительства",
        "Огненный столб"
    )
    public static readonly MAXIMUM_DAMAGE_HFS5 = new AbilityRealLevelField(
        new RawCode("Hfs6"),
        "Максимальный урон",
        "Огненный столб"
    )
    public static readonly MANA_PER_HIT_POINT = new AbilityRealLevelField(
        new RawCode("Nms1"),
        "Маны на единицу здоровья",
        "Магический щит"
    )
    public static readonly DAMAGE_ABSORBED_PERCENT = new AbilityRealLevelField(
        new RawCode("Nms2"),
        "Поглощено ущерба (new RawCode(%)",
        "Магический щит"
    )
    public static readonly WAVE_DISTANCE = new AbilityRealLevelField(
        new RawCode("Uim1"),
        "Дистанция волны",
        "Пронзающая Смерть"
    )
    public static readonly WAVE_TIME_SECONDS = new AbilityRealLevelField(
        new RawCode("Uim2"),
        "Время волны (new RawCode(секунды)",
        "Пронзающая Смерть"
    )
    public static readonly DAMAGE_DEALT_UIM3 = new AbilityRealLevelField(
        new RawCode("Uim3"),
        "Нанесено урона",
        "Пронзающая Смерть"
    )
    public static readonly AIR_TIME_SECONDS_UIM4 = new AbilityRealLevelField(
        new RawCode("Uim4"),
        "Время в воздухе (new RawCode(секунды)",
        "Пронзающая Смерть"
    )
    public static readonly UNIT_RELEASE_INTERVAL_SECONDS = new AbilityRealLevelField(
        new RawCode("Uls2"),
        "Интервал отпускания боевой единицы (new RawCode(секунды)",
        "Москиты"
    )
    public static readonly DAMAGE_RETURN_FACTOR = new AbilityRealLevelField(
        new RawCode("Uls4"),
        "Фактор возвращенного урона",
        "Москиты"
    )
    public static readonly DAMAGE_RETURN_THRESHOLD = new AbilityRealLevelField(
        new RawCode("Uls5"),
        "Порог возвращенного урона",
        "Москиты"
    )
    public static readonly RETURNED_DAMAGE_FACTOR = new AbilityRealLevelField(
        new RawCode("Uts1"),
        "Фактор возвращенного урона",
        "Панцирь с шипами"
    )
    public static readonly RECEIVED_DAMAGE_FACTOR = new AbilityRealLevelField(
        new RawCode("Uts2"),
        "Фактор полученного ущерба",
        "Панцирь с шипами"
    )
    public static readonly DEFENSE_BONUS_UTS3 = new AbilityRealLevelField(
        new RawCode("Uts3"),
        "Дополнительная защита",
        "Панцирь с шипами"
    )
    public static readonly DAMAGE_BONUS_NBA1 = new AbilityRealLevelField(
        new RawCode("Nba1"),
        "Дополнительный урон",
        "Черная стрела"
    )
    public static readonly SUMMONED_UNIT_DURATION_SECONDS_NBA3 = new AbilityRealLevelField(
        new RawCode("Nba3"),
        "Длительность вызова боевой единицы (new RawCode(секунды)",
        "Черная стрела"
    )
    public static readonly MANA_PER_SUMMONED_HIT_POINT = new AbilityRealLevelField(
        new RawCode("Cmg2"),
        "Маны на единицу здоровья вызванного",
        "Захват контроля"
    )
    public static readonly CHARGE_FOR_CURRENT_LIFE = new AbilityRealLevelField(
        new RawCode("Cmg3"),
        "Заряд за текущую жизнь",
        "Захват контроля"
    )
    public static readonly HIT_POINTS_DRAINED = new AbilityRealLevelField(
        new RawCode("Ndr1"),
        "Похищено здоровья",
        "Похищение жизни"
    )
    public static readonly MANA_POINTS_DRAINED = new AbilityRealLevelField(
        new RawCode("Ndr2"),
        "Похищено маны",
        "Похищение жизни"
    )
    public static readonly DRAIN_INTERVAL_SECONDS = new AbilityRealLevelField(
        new RawCode("Ndr3"),
        "Интервал похищения (new RawCode(секунды)",
        "Похищение жизни"
    )
    public static readonly LIFE_TRANSFERED_PER_SECOND = new AbilityRealLevelField(
        new RawCode("Ndr4"),
        "Ед. здоровья в секунду",
        "Похищение жизни"
    )
    public static readonly MANA_TRANSFERED_PER_SECOND = new AbilityRealLevelField(
        new RawCode("Ndr5"),
        "Ед. маны в секунду",
        "Похищение жизни"
    )
    public static readonly BONUS_LIFE_FACTOR = new AbilityRealLevelField(
        new RawCode("Ndr6"),
        "Фактор доп. здоровья",
        "Похищение жизни"
    )
    public static readonly BONUS_LIFE_DECAY = new AbilityRealLevelField(
        new RawCode("Ndr7"),
        "Исчезновение доп. здоровья",
        "Похищение жизни"
    )
    public static readonly BONUS_MANA_FACTOR = new AbilityRealLevelField(
        new RawCode("Ndr8"),
        "Фактор доп. маны",
        "Похищение жизни"
    )
    public static readonly BONUS_MANA_DECAY = new AbilityRealLevelField(
        new RawCode("Ndr9"),
        "Исчезновение доп. маны",
        "Похищение жизни"
    )
    public static readonly CHANCE_TO_MISS_PERCENT = new AbilityRealLevelField(
        new RawCode("Nsi2"),
        "Шанс на промах (new RawCode(%)",
        "Безмолвие"
    )
    public static readonly MOVEMENT_SPEED_MODIFIER = new AbilityRealLevelField(
        new RawCode("Nsi3"),
        "Модификатор скорости перемещения",
        "Безмолвие"
    )
    public static readonly ATTACK_SPEED_MODIFIER = new AbilityRealLevelField(
        new RawCode("Nsi4"),
        "Модификатор скорости боя",
        "Безмолвие"
    )
    public static readonly DAMAGE_PER_SECOND_TDG1 = new AbilityRealLevelField(
        new RawCode("Tdg1"),
        "Урона в секунду",
        "Аура повреждения зданий (new RawCode(торнадо)"
    )
    public static readonly MEDIUM_DAMAGE_RADIUS_TDG2 = new AbilityRealLevelField(
        new RawCode("Tdg2"),
        "Радиус среднего урона",
        "Аура повреждения зданий (new RawCode(торнадо)"
    )
    public static readonly MEDIUM_DAMAGE_PER_SECOND = new AbilityRealLevelField(
        new RawCode("Tdg3"),
        "Среднего урона в секунду",
        "Аура повреждения зданий (new RawCode(торнадо)"
    )
    public static readonly SMALL_DAMAGE_RADIUS_TDG4 = new AbilityRealLevelField(
        new RawCode("Tdg4"),
        "Радиус малого урона",
        "Аура повреждения зданий (new RawCode(торнадо)"
    )
    public static readonly SMALL_DAMAGE_PER_SECOND = new AbilityRealLevelField(
        new RawCode("Tdg5"),
        "Малого урона в секунду",
        "Аура повреждения зданий (new RawCode(торнадо)"
    )
    public static readonly AIR_TIME_SECONDS_TSP1 = new AbilityRealLevelField(
        new RawCode("Tsp1"),
        "Время в воздухе (new RawCode(секунды)",
        "Вихрь торнадо (new RawCode(торнадо)"
    )
    public static readonly MINIMUM_HIT_INTERVAL_SECONDS = new AbilityRealLevelField(
        new RawCode("Tsp2"),
        "Минимальный интервал между ударами (new RawCode(секунды)"
    )
    public static readonly DAMAGE_PER_SECOND_NBF5 = new AbilityRealLevelField(
        new RawCode("Nbf5"),
        "Урона в секунду",
        "Огненное дыхание"
    )
    public static readonly MAXIMUM_RANGE = new AbilityRealLevelField(
        new RawCode("Ebl1"),
        "Максимальная область",
        "Скачок"
    )
    public static readonly MINIMUM_RANGE = new AbilityRealLevelField(
        new RawCode("Ebl2"),
        "Минимальная область",
        "Скачок"
    )
    public static readonly DAMAGE_PER_TARGET_EFK1 = new AbilityRealLevelField(
        new RawCode("Efk1"),
        "Урона на цель",
        "Веерный бросок"
    )
    public static readonly MAXIMUM_TOTAL_DAMAGE = new AbilityRealLevelField(
        new RawCode("Efk2"),
        "Максимальный суммарный урон",
        "Веерный бросок"
    )
    public static readonly MAXIMUM_SPEED_ADJUSTMENT = new AbilityRealLevelField(
        new RawCode("Efk4"),
        "Регулировка максимальной скорости",
        "Веерный бросок"
    )
    public static readonly DECAYING_DAMAGE = new AbilityRealLevelField(
        new RawCode("Esh1"),
        "Ущерб от Порчи",
        "Отравленный нож"
    )
    public static readonly MOVEMENT_SPEED_FACTOR_ESH2 = new AbilityRealLevelField(
        new RawCode("Esh2"),
        "Фактор скорости перемещения",
        "Отравленный нож"
    )
    public static readonly ATTACK_SPEED_FACTOR = new AbilityRealLevelField(
        new RawCode("Esh3"),
        "Фактор скорости атаки",
        "Отравленный нож"
    )
    public static readonly DECAY_POWER = new AbilityRealLevelField(
        new RawCode("Esh4"),
        "Сила Порчи",
        "Отравленный нож"
    )
    public static readonly INITIAL_DAMAGE_ESH5 = new AbilityRealLevelField(
        new RawCode("Esh5"),
        "Начальный урон",
        "Отравленный нож"
    )
    public static readonly MAXIMUM_LIFE_ABSORBED = new AbilityRealLevelField(
        new RawCode("abs1"),
        "Максимум поглощенного здоровья",
        "Поглощение маны"
    )
    public static readonly MAXIMUM_MANA_ABSORBED = new AbilityRealLevelField(
        new RawCode("abs2"),
        "Максимум поглощенной маны",
        "Поглощение маны"
    )
    public static readonly MOVEMENT_SPEED_INCREASE_BSK1 = new AbilityRealLevelField(
        new RawCode("bsk1"),
        "Увеличение скорости перемещения",
        "Безумие"
    )
    public static readonly ATTACK_SPEED_INCREASE_BSK2 = new AbilityRealLevelField(
        new RawCode("bsk2"),
        "Увеличение скорости атаки",
        "Безумие"
    )
    public static readonly DAMAGE_TAKEN_INCREASE = new AbilityRealLevelField(
        new RawCode("bsk3"),
        "Увеличение полученного урона",
        "Безумие"
    )
    public static readonly LIFE_PER_UNIT = new AbilityRealLevelField(
        new RawCode("dvm1"),
        "Здоровья на боевую единицу",
        "Поглощение чар"
    )
    public static readonly MANA_PER_UNIT = new AbilityRealLevelField(
        new RawCode("dvm2"),
        "Маны на боевую единицу",
        "Поглощение чар"
    )
    public static readonly LIFE_PER_BUFF = new AbilityRealLevelField(
        new RawCode("dvm3"),
        "Здоровья на заклинание",
        "Поглощение чар"
    )
    public static readonly MANA_PER_BUFF = new AbilityRealLevelField(
        new RawCode("dvm4"),
        "Маны на заклинание",
        "Поглощение чар"
    )
    public static readonly SUMMONED_UNIT_DAMAGE_DVM5 = new AbilityRealLevelField(
        new RawCode("dvm5"),
        "Урон от вызванной боевой единицы",
        "Поглощение чар"
    )
    public static readonly DAMAGE_BONUS_FAK1 = new AbilityRealLevelField(
        new RawCode("fak1"),
        "Дополнительный урон",
        "Сфера Небытия"
    )
    public static readonly MEDIUM_DAMAGE_FACTOR_FAK2 = new AbilityRealLevelField(
        new RawCode("fak2"),
        "Фактор среднего урона",
        "Сфера Небытия"
    )
    public static readonly SMALL_DAMAGE_FACTOR_FAK3 = new AbilityRealLevelField(
        new RawCode("fak3"),
        "Фактор малого урона",
        "Сфера Небытия"
    )
    public static readonly FULL_DAMAGE_RADIUS_FAK4 = new AbilityRealLevelField(
        new RawCode("fak4"),
        "Радиус полного урона",
        "Сфера Небытия"
    )
    public static readonly HALF_DAMAGE_RADIUS_FAK5 = new AbilityRealLevelField(
        new RawCode("fak5"),
        "Радиус половинного урона",
        "Сфера Небытия"
    )
    public static readonly EXTRA_DAMAGE_PER_SECOND = new AbilityRealLevelField(
        new RawCode("liq1"),
        "Дополнительный урон в секунду",
        "Жидкий огонь"
    )
    public static readonly MOVEMENT_SPEED_REDUCTION_LIQ2 = new AbilityRealLevelField(
        new RawCode("liq2"),
        "Снижение скорости перемещения",
        "Жидкий огонь"
    )
    public static readonly ATTACK_SPEED_REDUCTION_LIQ3 = new AbilityRealLevelField(
        new RawCode("liq3"),
        "Снижение скорости атаки",
        "Жидкий огонь"
    )
    public static readonly MAGIC_DAMAGE_FACTOR = new AbilityRealLevelField(
        new RawCode("mim1"),
        "Фактор магического урона",
        "Невосприимчивость к магии"
    )
    public static readonly UNIT_DAMAGE_PER_MANA_POINT = new AbilityRealLevelField(
        new RawCode("mfl1"),
        "Боевая единица: урона на единицу маны",
        "Заклинание Крови"
    )
    public static readonly HERO_DAMAGE_PER_MANA_POINT = new AbilityRealLevelField(
        new RawCode("mfl2"),
        "Герой: урона на единицу маны",
        "Заклинание Крови"
    )
    public static readonly UNIT_MAXIMUM_DAMAGE = new AbilityRealLevelField(
        new RawCode("mfl3"),
        "Боевая единица: максимальный урон",
        "Заклинание Крови"
    )
    public static readonly HERO_MAXIMUM_DAMAGE = new AbilityRealLevelField(
        new RawCode("mfl4"),
        "Герой: максимальный урон",
        "Заклинание Крови"
    )
    public static readonly DAMAGE_COOLDOWN = new AbilityRealLevelField(
        new RawCode("mfl5"),
        "Урон при перезарядке",
        "Заклинание Крови"
    )
    public static readonly DISTRIBUTED_DAMAGE_FACTOR_SPL1 = new AbilityRealLevelField(
        new RawCode("spl1"),
        "Фактор распределенного урона",
        "Эмпатия"
    )
    public static readonly LIFE_REGENERATED = new AbilityRealLevelField(
        new RawCode("irl1"),
        "Восстановлено здоровья",
        "Лечебный эликсир"
    )
    public static readonly MANA_REGENERATED = new AbilityRealLevelField(
        new RawCode("irl2"),
        "Восстановлено маны",
        "Лечебный эликсир"
    )
    public static readonly MANA_LOSS_PER_UNIT_IDC1 = new AbilityRealLevelField(
        new RawCode("idc1"),
        "Потеря маны на боевую единицу",
        "Предмет: волна развеивания чар"
    )
    public static readonly SUMMONED_UNIT_DAMAGE_IDC2 = new AbilityRealLevelField(
        new RawCode("idc2"),
        "Урон от вызванной боевой единицы",
        "Предмет: волна развеивания чар"
    )
    public static readonly ACTIVATION_DELAY_IMO2 = new AbilityRealLevelField(
        new RawCode("imo2"),
        "Задержка запуска",
        "Приманка"
    )
    public static readonly LURE_INTERVAL_SECONDS = new AbilityRealLevelField(
        new RawCode("imo3"),
        "Интервал подчинения (new RawCode(секунды)",
        "Приманка"
    )
    public static readonly DAMAGE_BONUS_ISR1 = new AbilityRealLevelField(
        new RawCode("isr1"),
        "Дополнительный урон",
        "Уменьшение урона от магии"
    )
    public static readonly DAMAGE_REDUCTION_ISR2 = new AbilityRealLevelField(
        new RawCode("isr2"),
        "Снижение урона",
        "Уменьшение урона от магии"
    )
    public static readonly DAMAGE_BONUS_IPV1 = new AbilityRealLevelField(
        new RawCode("ipv1"),
        "Дополнительный урон",
        "Зелье Вампиризма"
    )
    public static readonly LIFE_STEAL_AMOUNT = new AbilityRealLevelField(
        new RawCode("ipv2"),
        "Количество украденного здоровья",
        "Зелье Вампиризма"
    )
    public static readonly LIFE_RESTORED_FACTOR = new AbilityRealLevelField(
        new RawCode("ast1"),
        "Фактор восстановленного здоровья",
        "Помощь предков"
    )
    public static readonly MANA_RESTORED_FACTOR = new AbilityRealLevelField(
        new RawCode("ast2"),
        "Фактор восстановленной маны",
        "Помощь предков"
    )
    public static readonly ATTACH_DELAY = new AbilityRealLevelField(
        new RawCode("gra1"),
        "Задержка атаки",
        "Вырвать дерево"
    )
    public static readonly REMOVE_DELAY = new AbilityRealLevelField(
        new RawCode("gra2"),
        "Задержка удаления",
        "Вырвать дерево"
    )
    public static readonly HERO_REGENERATION_DELAY = new AbilityRealLevelField(
        new RawCode("Nsa2"),
        "Задержка восстановления героя",
        "Посох Спасения"
    )
    public static readonly UNIT_REGENERATION_DELAY = new AbilityRealLevelField(
        new RawCode("Nsa3"),
        "Задержка восстановления боевой единицы",
        "Посох Спасения"
    )
    public static readonly MAGIC_DAMAGE_REDUCTION_NSA4 = new AbilityRealLevelField(
        new RawCode("Nsa4"),
        "Снижение магического урона",
        "Посох Спасения"
    )
    public static readonly HIT_POINTS_PER_SECOND_NSA5 = new AbilityRealLevelField(
        new RawCode("Nsa5"),
        "Здоровья в секунду",
        "Посох Спасения"
    )
    public static readonly DAMAGE_TO_SUMMONED_UNITS_IXS1 = new AbilityRealLevelField(
        new RawCode("Ixs1"),
        "Урон вызванным войскам",
        "Предмет: невосприимчивость к магии"
    )
    public static readonly MAGIC_DAMAGE_REDUCTION_IXS2 = new AbilityRealLevelField(
        new RawCode("Ixs2"),
        "Снижение магического урона",
        "Предмет: невосприимчивость к магии"
    )
    public static readonly SUMMONED_UNIT_DURATION = new AbilityRealLevelField(
        new RawCode("Npa6"),
        "Время жизни вызванного существа",
        "Паразит"
    )
    public static readonly SHIELD_COOLDOWN_TIME = new AbilityRealLevelField(
        new RawCode("Nse1"),
        "Время перезарядки щита",
        "Защита (new RawCode(руна)"
    )
    public static readonly DAMAGE_PER_SECOND_NDO1 = new AbilityRealLevelField(
        new RawCode("Ndo1"),
        "Урона в секунду",
        "Печать Преисподней"
    )
    public static readonly SUMMONED_UNIT_DURATION_SECONDS_NDO3 = new AbilityRealLevelField(
        new RawCode("Ndo3"),
        "Длительность вызова боевой единицы (new RawCode(секунды)",
        "Печать Преисподней"
    )
    public static readonly MEDIUM_DAMAGE_RADIUS_FLK1 = new AbilityRealLevelField(
        new RawCode("flk1"),
        "Радиус среднего урона",
        "Разрывные снаряды"
    )
    public static readonly SMALL_DAMAGE_RADIUS_FLK2 = new AbilityRealLevelField(
        new RawCode("flk2"),
        "Радиус малого урона",
        "Разрывные снаряды"
    )
    public static readonly FULL_DAMAGE_AMOUNT_FLK3 = new AbilityRealLevelField(
        new RawCode("flk3"),
        "Объем полного урона",
        "Разрывные снаряды"
    )
    public static readonly MEDIUM_DAMAGE_AMOUNT = new AbilityRealLevelField(
        new RawCode("flk4"),
        "Объем среднего урона",
        "Разрывные снаряды"
    )
    public static readonly SMALL_DAMAGE_AMOUNT = new AbilityRealLevelField(
        new RawCode("flk5"),
        "Объем малого урона",
        "Разрывные снаряды"
    )
    public static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1 = new AbilityRealLevelField(
        new RawCode("Hbn1"),
        "Уменьшение скорости перемещения (new RawCode(%)",
        "Изгнание в астрал"
    )
    public static readonly ATTACK_SPEED_REDUCTION_PERCENT_HBN2 = new AbilityRealLevelField(
        new RawCode("Hbn2"),
        "Уменьшение скорости боя (new RawCode(%)",
        "Изгнание в астрал"
    )
    public static readonly MAX_MANA_DRAINED_UNITS = new AbilityRealLevelField(
        new RawCode("fbk1"),
        "Макс. украденной маны: войска",
        "Сожжение маны (new RawCode(ведьмак)"
    )
    public static readonly DAMAGE_RATIO_UNITS_PERCENT = new AbilityRealLevelField(
        new RawCode("fbk2"),
        "Коэффициент урона: войска (new RawCode(%)",
        "Сожжение маны (new RawCode(ведьмак)"
    )
    public static readonly MAX_MANA_DRAINED_HEROS = new AbilityRealLevelField(
        new RawCode("fbk3"),
        "Макс. украденной маны: герои",
        "Сожжение маны (new RawCode(ведьмак)"
    )
    public static readonly DAMAGE_RATIO_HEROS_PERCENT = new AbilityRealLevelField(
        new RawCode("fbk4"),
        "Коэффициент урона: герои (new RawCode(%)",
        "Сожжение маны (new RawCode(ведьмак)"
    )
    public static readonly SUMMONED_DAMAGE = new AbilityRealLevelField(
        new RawCode("fbk5"),
        "Урон маг. существам",
        "Сожжение маны (new RawCode(ведьмак)"
    )
    public static readonly DISTRIBUTED_DAMAGE_FACTOR_NCA1 = new AbilityRealLevelField(
        new RawCode("nca1"),
        "Фактор распределенного урона",
        "Демоническая сила"
    )
    public static readonly INITIAL_DAMAGE_PXF1 = new AbilityRealLevelField(
        new RawCode("pxf1"),
        "Начальный урон",
        "Пламя феникса"
    )
    public static readonly DAMAGE_PER_SECOND_PXF2 = new AbilityRealLevelField(
        new RawCode("pxf2"),
        "Урона в секунду",
        "Пламя феникса"
    )
    public static readonly DAMAGE_PER_SECOND_MLS1 = new AbilityRealLevelField(
        new RawCode("mls1"),
        "Урона в секунду",
        "Огненное лассо"
    )
    public static readonly BEAST_COLLISION_RADIUS = new AbilityRealLevelField(
        new RawCode("Nst2"),
        "Радиус столкновения со зверем",
        "Стадо ящериц"
    )
    public static readonly DAMAGE_AMOUNT_NST3 = new AbilityRealLevelField(
        new RawCode("Nst3"),
        "Объем урона",
        "Стадо ящериц"
    )
    public static readonly DAMAGE_RADIUS = new AbilityRealLevelField(
        new RawCode("Nst4"),
        "Радиус урона",
        "Стадо ящериц"
    )
    public static readonly DAMAGE_DELAY = new AbilityRealLevelField(
        new RawCode("Nst5"),
        "Задержка урона",
        "Стадо ящериц"
    )
    public static readonly FOLLOW_THROUGH_TIME = new AbilityRealLevelField(
        new RawCode("Ncl1"),
        "Следовать в течение времени",
        "Канал"
    )
    public static readonly ART_DURATION = new AbilityRealLevelField(
        new RawCode("Ncl4"),
        "Длительность графики",
        "Канал"
    )
    public static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1 = new AbilityRealLevelField(
        new RawCode("Nab1"),
        "Уменьшение скорости перемещения (new RawCode(%)",
        "Кислотная бомба"
    )
    public static readonly ATTACK_SPEED_REDUCTION_PERCENT_NAB2 = new AbilityRealLevelField(
        new RawCode("Nab2"),
        "Уменьшение скорости боя (new RawCode(%)",
        "Кислотная бомба"
    )
    public static readonly PRIMARY_DAMAGE = new AbilityRealLevelField(
        new RawCode("Nab4"),
        "Основной урон",
        "Кислотная бомба"
    )
    public static readonly SECONDARY_DAMAGE = new AbilityRealLevelField(
        new RawCode("Nab5"),
        "Дополнительный урон",
        "Кислотная бомба"
    )
    public static readonly DAMAGE_INTERVAL_NAB6 = new AbilityRealLevelField(
        new RawCode("Nab6"),
        "Интервал урона",
        "Кислотная бомба"
    )
    public static readonly GOLD_COST_FACTOR = new AbilityRealLevelField(
        new RawCode("Ntm1"),
        "Требуется золота",
        "Трансмутация"
    )
    public static readonly LUMBER_COST_FACTOR = new AbilityRealLevelField(
        new RawCode("Ntm2"),
        "Требуется древесины",
        "Трансмутация"
    )
    public static readonly MOVE_SPEED_BONUS_NEG1 = new AbilityRealLevelField(
        new RawCode("Neg1"),
        "Повышение скорости перемещения",
        "Техника"
    )
    public static readonly DAMAGE_BONUS_NEG2 = new AbilityRealLevelField(
        new RawCode("Neg2"),
        "Увеличение урона",
        "Техника"
    )
    public static readonly DAMAGE_AMOUNT_NCS1 = new AbilityRealLevelField(
        new RawCode("Ncs1"),
        "Урон",
        "Ракетный удар"
    )
    public static readonly DAMAGE_INTERVAL_NCS2 = new AbilityRealLevelField(
        new RawCode("Ncs2"),
        "Интервал урона",
        "Ракетный удар"
    )
    public static readonly MAX_DAMAGE_NCS4 = new AbilityRealLevelField(
        new RawCode("Ncs4"),
        "Макс. урон",
        "Ракетный удар"
    )
    public static readonly BUILDING_DAMAGE_FACTOR_NCS5 = new AbilityRealLevelField(
        new RawCode("Ncs5"),
        "Фактор урона зданиям",
        "Ракетный удар"
    )
    public static readonly EFFECT_DURATION = new AbilityRealLevelField(
        new RawCode("Ncs6"),
        "Время действия",
        "Ракетный удар"
    )
    public static readonly SPAWN_INTERVAL_NSY1 = new AbilityRealLevelField(
        new RawCode("Nsy1"),
        "Интверал порождения",
        "Мини-завод"
    )
    public static readonly SPAWN_UNIT_DURATION = new AbilityRealLevelField(
        new RawCode("Nsy3"),
        "Время жизни порожденного воина",
        "Мини-завод"
    )
    public static readonly SPAWN_UNIT_OFFSET = new AbilityRealLevelField(
        new RawCode("Nsy4"),
        "Смещение порожденного воина",
        "Мини-завод"
    )
    public static readonly LEASH_RANGE_NSY5 = new AbilityRealLevelField(
        new RawCode("Nsy5"),
        "Радиус подчинения",
        "Мини-завод"
    )
    public static readonly SPAWN_INTERVAL_NFY1 = new AbilityRealLevelField(
        new RawCode("Nfy1"),
        "Интервал порождения",
        "Завод"
    )
    public static readonly LEASH_RANGE_NFY2 = new AbilityRealLevelField(
        new RawCode("Nfy2"),
        "Радиус подчинения",
        "Завод"
    )
    public static readonly CHANCE_TO_DEMOLISH = new AbilityRealLevelField(
        new RawCode("Nde1"),
        "Вероятность уничтожения",
        "Разгром"
    )
    public static readonly DAMAGE_MULTIPLIER_BUILDINGS = new AbilityRealLevelField(
        new RawCode("Nde2"),
        "Увеличение урона (new RawCode(здания)",
        "Разгром"
    )
    public static readonly DAMAGE_MULTIPLIER_UNITS = new AbilityRealLevelField(
        new RawCode("Nde3"),
        "Увеличение урона (new RawCode(войска)",
        "Разгром"
    )
    public static readonly DAMAGE_MULTIPLIER_HEROES = new AbilityRealLevelField(
        new RawCode("Nde4"),
        "Увеличение урона (new RawCode(герои)",
        "Разгром"
    )
    public static readonly BONUS_DAMAGE_MULTIPLIER = new AbilityRealLevelField(
        new RawCode("Nic1"),
        "Доп. увеличение урона",
        "Оживший огонь"
    )
    public static readonly DEATH_DAMAGE_FULL_AMOUNT = new AbilityRealLevelField(
        new RawCode("Nic2"),
        "Посмертный урон: полный объем",
        "Оживший огонь"
    )
    public static readonly DEATH_DAMAGE_FULL_AREA = new AbilityRealLevelField(
        new RawCode("Nic3"),
        "Посмертный урон: полный радиус",
        "Оживший огонь"
    )
    public static readonly DEATH_DAMAGE_HALF_AMOUNT = new AbilityRealLevelField(
        new RawCode("Nic4"),
        "Посмертный урон: половинный объем",
        "Оживший огонь"
    )
    public static readonly DEATH_DAMAGE_HALF_AREA = new AbilityRealLevelField(
        new RawCode("Nic5"),
        "Посмертный урон: половинный радиус",
        "Оживший огонь"
    )
    public static readonly DEATH_DAMAGE_DELAY = new AbilityRealLevelField(
        new RawCode("Nic6"),
        "Посмертный урон: задержка",
        "Оживший огонь"
    )
    public static readonly DAMAGE_AMOUNT_NSO1 = new AbilityRealLevelField(
        new RawCode("Nso1"),
        "Урон",
        "Пламя Обреченности"
    )
    public static readonly DAMAGE_PERIOD = new AbilityRealLevelField(
        new RawCode("Nso2"),
        "Длительность урона",
        "Пламя Обреченности"
    )
    public static readonly DAMAGE_PENALTY = new AbilityRealLevelField(
        new RawCode("Nso3"),
        "Уменьшение урона",
        "Пламя Обреченности"
    )
    public static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4 = new AbilityRealLevelField(
        new RawCode("Nso4"),
        "Уменьшение скорости перемещения (new RawCode(%)",
        "Пламя Обреченности"
    )
    public static readonly ATTACK_SPEED_REDUCTION_PERCENT_NSO5 = new AbilityRealLevelField(
        new RawCode("Nso5"),
        "Уменьшение скорости боя (new RawCode(%)",
        "Пламя Обреченности"
    )
    public static readonly SPLIT_DELAY = new AbilityRealLevelField(
        new RawCode("Nlm2"),
        "Задержка деления",
        "Тварь из Недр"
    )
    public static readonly MAX_HITPOINT_FACTOR = new AbilityRealLevelField(
        new RawCode("Nlm4"),
        "Фактор макс. здоровья",
        "Тварь из Недр"
    )
    public static readonly LIFE_DURATION_SPLIT_BONUS = new AbilityRealLevelField(
        new RawCode("Nlm5"),
        "Деление: доп. срок жизни",
        "Тварь из Недр"
    )
    public static readonly WAVE_INTERVAL = new AbilityRealLevelField(
        new RawCode("Nvc3"),
        "Интервал между волнами",
        "Вулкан"
    )
    public static readonly BUILDING_DAMAGE_FACTOR_NVC4 = new AbilityRealLevelField(
        new RawCode("Nvc4"),
        "Фактор урона зданиям",
        "Вулкан"
    )
    public static readonly FULL_DAMAGE_AMOUNT_NVC5 = new AbilityRealLevelField(
        new RawCode("Nvc5"),
        "Полный объем урона",
        "Вулкан"
    )
    public static readonly HALF_DAMAGE_FACTOR = new AbilityRealLevelField(
        new RawCode("Nvc6"),
        "Фактор половинного урона",
        "Вулкан"
    )
    public static readonly INTERVAL_BETWEEN_PULSES = new AbilityRealLevelField(
        new RawCode("Tau5"),
        "Время между импульсами",
        "Оскорбление"
    )
}
