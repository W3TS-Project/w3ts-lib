import { AbilityRealLevelField } from "../../../API/fields/ability/level/AbilityRealLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityRealLevelFields {
    static readonly CASTING_TIME = new AbilityRealLevelField(
        RawCode.get("acas"),
        "Время подготовки заклинания"
    )
    static readonly DURATION_NORMAL = new AbilityRealLevelField(
        RawCode.get("adur"),
        "Длительность: нормальная"
    )
    static readonly DURATION_HERO = new AbilityRealLevelField(
        RawCode.get("ahdu"),
        "Длительность воздействия: герой"
    )
    static readonly COOLDOWN = new AbilityRealLevelField(RawCode.get("acdn"), "Перезарядка")
    static readonly AREA_OF_EFFECT = new AbilityRealLevelField(
        RawCode.get("aare"),
        "Область воздействия"
    )
    static readonly CAST_RANGE = new AbilityRealLevelField(RawCode.get("aran"), "Радиус действия")
    static readonly DAMAGE_HBZ2 = new AbilityRealLevelField(RawCode.get("Hbz2"), "Урон", "Буран")
    static readonly BUILDING_REDUCTION_HBZ4 = new AbilityRealLevelField(
        RawCode.get("Hbz4"),
        "Уменьшение скорости строительства",
        "Буран"
    )
    static readonly DAMAGE_PER_SECOND_HBZ5 = new AbilityRealLevelField(
        RawCode.get("Hbz5"),
        "Урона в секунду",
        "Буран"
    )
    static readonly MAXIMUM_DAMAGE_PER_WAVE = new AbilityRealLevelField(
        RawCode.get("Hbz6"),
        "Макс. урон на волну",
        "Буран"
    )
    static readonly MANA_REGENERATION_INCREASE = new AbilityRealLevelField(
        RawCode.get("Hab1"),
        "Увеличение скорости восстановления маны",
        "Чародейская аура"
    )
    static readonly CASTING_DELAY = new AbilityRealLevelField(
        RawCode.get("Hmt2"),
        "Задержка заклинания",
        "Массовая телепортация"
    )
    static readonly DAMAGE_PER_SECOND_OWW1 = new AbilityRealLevelField(
        RawCode.get("Oww1"),
        "Урона в секунду",
        "Стальной вихрь"
    )
    static readonly MAGIC_DAMAGE_REDUCTION_OWW2 = new AbilityRealLevelField(
        RawCode.get("Oww2"),
        "Снижение магического урона",
        "Стальной вихрь"
    )
    static readonly CHANCE_TO_CRITICAL_STRIKE = new AbilityRealLevelField(
        RawCode.get("Ocr1"),
        "Шанс на критический удар",
        "Смертельный удар"
    )
    static readonly DAMAGE_MULTIPLIER_OCR2 = new AbilityRealLevelField(
        RawCode.get("Ocr2"),
        "Увеличение урона",
        "Смертельный удар"
    )
    static readonly DAMAGE_BONUS_OCR3 = new AbilityRealLevelField(
        RawCode.get("Ocr3"),
        "Дополнительный урон",
        "Смертельный удар"
    )
    static readonly CHANCE_TO_EVADE_OCR4 = new AbilityRealLevelField(
        RawCode.get("Ocr4"),
        "Шансы избежать",
        "Смертельный удар"
    )
    static readonly DAMAGE_DEALT_PERCENT_OMI2 = new AbilityRealLevelField(
        RawCode.get("Omi2"),
        "Нанесено урона (%)",
        "Иллюзия"
    )
    static readonly DAMAGE_TAKEN_PERCENT_OMI3 = new AbilityRealLevelField(
        RawCode.get("Omi3"),
        "Получено урона (%)",
        "Иллюзия"
    )
    static readonly ANIMATION_DELAY = new AbilityRealLevelField(
        RawCode.get("Omi4"),
        "Задержка анимации",
        "Иллюзия"
    )
    static readonly TRANSITION_TIME = new AbilityRealLevelField(
        RawCode.get("Owk1"),
        "Время перемещения",
        "Стремительность"
    )
    static readonly MOVEMENT_SPEED_INCREASE_PERCENT_OWK2 = new AbilityRealLevelField(
        RawCode.get("Owk2"),
        "Увеличение скорости при перемещении (%)",
        "Стремительность"
    )
    static readonly BACKSTAB_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Owk3"),
        "Урон от подлого удара",
        "Стремительность"
    )
    static readonly AMOUNT_HEALED_DAMAGED_UDC1 = new AbilityRealLevelField(
        RawCode.get("Udc1"),
        "Число вылеченных и поврежденных",
        "Лик смерти"
    )
    static readonly LIFE_CONVERTED_TO_MANA = new AbilityRealLevelField(
        RawCode.get("Udp1"),
        "Здоровье конвертируется в ману",
        "Смертельный союз"
    )
    static readonly LIFE_CONVERTED_TO_LIFE = new AbilityRealLevelField(
        RawCode.get("Udp2"),
        "Здоровье конвертируется в здоровье",
        "Смертельный союз"
    )
    static readonly MOVEMENT_SPEED_INCREASE_PERCENT_UAU1 = new AbilityRealLevelField(
        RawCode.get("Uau1"),
        "Увеличение скорости при перемещении (%)",
        "Аура Смерти"
    )
    static readonly LIFE_REGENERATION_INCREASE_PERCENT = new AbilityRealLevelField(
        RawCode.get("Uau2"),
        "Увеличение скорости восстановления здоровья (%)",
        "Аура Смерти"
    )
    static readonly CHANCE_TO_EVADE_EEV1 = new AbilityRealLevelField(
        RawCode.get("Eev1"),
        "Шансы избежать",
        "Змеиная ловкость"
    )
    static readonly DAMAGE_PER_INTERVAL = new AbilityRealLevelField(
        RawCode.get("Eim1"),
        "Урона за интервал времени",
        "Жар Преисподней"
    )
    static readonly MANA_DRAINED_PER_SECOND_EIM2 = new AbilityRealLevelField(
        RawCode.get("Eim2"),
        "Украдено маны в секунду",
        "Жар Преисподней"
    )
    static readonly BUFFER_MANA_REQUIRED = new AbilityRealLevelField(
        RawCode.get("Eim3"),
        "Требуется буфер маны",
        "Жар Преисподней"
    )
    static readonly MAX_MANA_DRAINED = new AbilityRealLevelField(
        RawCode.get("Emb1"),
        "Макс. украденной маны",
        "Магический огонь"
    )
    static readonly BOLT_DELAY = new AbilityRealLevelField(
        RawCode.get("Emb2"),
        "Задержка разряда",
        "Магический огонь"
    )
    static readonly BOLT_LIFETIME = new AbilityRealLevelField(
        RawCode.get("Emb3"),
        "Время жизни разряда",
        "Магический огонь"
    )
    static readonly ALTITUDE_ADJUSTMENT_DURATION = new AbilityRealLevelField(
        RawCode.get("Eme3"),
        "Длительность регулировки высоты",
        "Перевоплощение"
    )
    static readonly LANDING_DELAY_TIME = new AbilityRealLevelField(
        RawCode.get("Eme4"),
        "Время задержки приземления",
        "Перевоплощение"
    )
    static readonly ALTERNATE_FORM_HIT_POINT_BONUS = new AbilityRealLevelField(
        RawCode.get("Eme5"),
        "Альтернативная форма: дополнительное здоровье",
        "Перевоплощение"
    )
    static readonly MOVE_SPEED_INFO_PANEL_ONLY = new AbilityRealLevelField(
        RawCode.get("Ncr5"),
        "Повышение скорости перемещения (только инф. панель)",
        "Эликсир ярости"
    )
    static readonly ATTACK_SPEED_BONUS_INFO_PANEL_ONLY = new AbilityRealLevelField(
        RawCode.get("Ncr6"),
        "Повышение скорости боя (только инф. панель)",
        "Эликсир ярости"
    )
    static readonly LIFE_REGENERATION_PER_SECOND = new AbilityRealLevelField(
        RawCode.get("ave5"),
        "Скорость восстановления здоровья (в секунду)",
        "Сфинкс"
    )
    static readonly STUN_DURATION_USL1 = new AbilityRealLevelField(
        RawCode.get("Usl1"),
        "Длительность оглушения",
        "Сон"
    )
    static readonly ATTACK_DAMAGE_STOLEN_PERCENT = new AbilityRealLevelField(
        RawCode.get("Uav1"),
        "Украденный при атаке урон (%)",
        "Вампиризм"
    )
    static readonly DAMAGE_UCS1 = new AbilityRealLevelField(
        RawCode.get("Ucs1"),
        "Урон",
        "Темная стая"
    )
    static readonly MAX_DAMAGE_UCS2 = new AbilityRealLevelField(
        RawCode.get("Ucs2"),
        "Макс. урон",
        "Темная стая"
    )
    static readonly DISTANCE_UCS3 = new AbilityRealLevelField(
        RawCode.get("Ucs3"),
        "Расстояние",
        "Темная стая"
    )
    static readonly FINAL_AREA_UCS4 = new AbilityRealLevelField(
        RawCode.get("Ucs4"),
        "Финальная область",
        "Темная стая"
    )
    static readonly DAMAGE_UIN1 = new AbilityRealLevelField(
        RawCode.get("Uin1"),
        "Урон",
        "Огненный голем"
    )
    static readonly DURATION = new AbilityRealLevelField(
        RawCode.get("Uin2"),
        "Длительность",
        "Огненный голем"
    )
    static readonly IMPACT_DELAY = new AbilityRealLevelField(
        RawCode.get("Uin3"),
        "Задержка падения",
        "Огненный голем"
    )
    static readonly DAMAGE_PER_TARGET_OCL1 = new AbilityRealLevelField(
        RawCode.get("Ocl1"),
        "Урона на цель",
        "Цепь молний"
    )
    static readonly EFFECT_DELAY_OEQ1 = new AbilityRealLevelField(
        RawCode.get("Oeq1"),
        "Задержка эффекта",
        "Землетрясение"
    )
    static readonly DAMAGE_PER_SECOND_TO_BUILDINGS = new AbilityRealLevelField(
        RawCode.get("Oeq2"),
        "Здания: урона в секунду",
        "Землетрясение"
    )
    static readonly UNITS_SLOWED_PERCENT = new AbilityRealLevelField(
        RawCode.get("Oeq3"),
        "Войска замедлены (%)",
        "Землетрясение"
    )
    static readonly FINAL_AREA_OEQ4 = new AbilityRealLevelField(
        RawCode.get("Oeq4"),
        "Финальная область",
        "Землетрясение"
    )
    static readonly DAMAGE_PER_SECOND_EER1 = new AbilityRealLevelField(
        RawCode.get("Eer1"),
        "Урона в секунду",
        "Гнев деревьев"
    )
    static readonly DAMAGE_DEALT_TO_ATTACKERS = new AbilityRealLevelField(
        RawCode.get("Eah1"),
        "Нанесенный атакующим урон",
        "Аура возмездия"
    )
    static readonly LIFE_HEALED = new AbilityRealLevelField(
        RawCode.get("Etq1"),
        "Здоровья восстановлено",
        "Покой"
    )
    static readonly HEAL_INTERVAL = new AbilityRealLevelField(
        RawCode.get("Etq2"),
        "Интервал лечения",
        "Покой"
    )
    static readonly BUILDING_REDUCTION = new AbilityRealLevelField(
        RawCode.get("Etq3"),
        "Уменьшение скорости строительства",
        "Покой"
    )
    static readonly INITIAL_IMMUNITY_DURATION = new AbilityRealLevelField(
        RawCode.get("Etq4"),
        "Нач. продолжительность иммунитета",
        "Покой"
    )
    static readonly MAX_LIFE_DRAINED_PER_SECOND_PERCENT = new AbilityRealLevelField(
        RawCode.get("Udd1"),
        "Макс. здоровья украдено в секунду (%)",
        "Порча"
    )
    static readonly BUILDING_REDUCTION_UDD2 = new AbilityRealLevelField(
        RawCode.get("Udd2"),
        "Уменьшение скорости строительства",
        "Порча"
    )
    static readonly ARMOR_DURATION = new AbilityRealLevelField(
        RawCode.get("Ufa1"),
        "Долговечность брони",
        "Ледяная броня"
    )
    static readonly ARMOR_BONUS_UFA2 = new AbilityRealLevelField(
        RawCode.get("Ufa2"),
        "Увеличение брони",
        "Ледяная броня"
    )
    static readonly AREA_OF_EFFECT_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Ufn1"),
        "Область воздействия урона",
        "Ледяная звезда"
    )
    static readonly SPECIFIC_TARGET_DAMAGE_UFN2 = new AbilityRealLevelField(
        RawCode.get("Ufn2"),
        "Поражение особой цели",
        "Ледяная звезда"
    )
    static readonly DAMAGE_BONUS_HFA1 = new AbilityRealLevelField(
        RawCode.get("Hfa1"),
        "Дополнительный урон",
        "Огненные стрелы"
    )
    static readonly DAMAGE_DEALT_ESF1 = new AbilityRealLevelField(
        RawCode.get("Esf1"),
        "Нанесено урона",
        "Звездопад"
    )
    static readonly DAMAGE_INTERVAL_ESF2 = new AbilityRealLevelField(
        RawCode.get("Esf2"),
        "Интервал урона",
        "Звездопад"
    )
    static readonly BUILDING_REDUCTION_ESF3 = new AbilityRealLevelField(
        RawCode.get("Esf3"),
        "Уменьшение скорости строительства",
        "Звездопад"
    )
    static readonly DAMAGE_BONUS_PERCENT = new AbilityRealLevelField(
        RawCode.get("Ear1"),
        "Дополнительный урон (%)",
        "Аура меткости"
    )
    static readonly DEFENSE_BONUS_HAV1 = new AbilityRealLevelField(
        RawCode.get("Hav1"),
        "Дополнительная защита",
        "Мощь гор"
    )
    static readonly HIT_POINT_BONUS = new AbilityRealLevelField(
        RawCode.get("Hav2"),
        "Дополнительное здоровье",
        "Мощь гор"
    )
    static readonly DAMAGE_BONUS_HAV3 = new AbilityRealLevelField(
        RawCode.get("Hav3"),
        "Дополнительный урон",
        "Мощь гор"
    )
    static readonly MAGIC_DAMAGE_REDUCTION_HAV4 = new AbilityRealLevelField(
        RawCode.get("Hav4"),
        "Снижение магического урона",
        "Мощь гор"
    )
    static readonly CHANCE_TO_BASH = new AbilityRealLevelField(
        RawCode.get("Hbh1"),
        "Шанс на сильный удар",
        "Сильный удар"
    )
    static readonly DAMAGE_MULTIPLIER_HBH2 = new AbilityRealLevelField(
        RawCode.get("Hbh2"),
        "Увеличение урона",
        "Сильный удар"
    )
    static readonly DAMAGE_BONUS_HBH3 = new AbilityRealLevelField(
        RawCode.get("Hbh3"),
        "Дополнительный урон",
        "Сильный удар"
    )
    static readonly CHANCE_TO_MISS_HBH4 = new AbilityRealLevelField(
        RawCode.get("Hbh4"),
        "Шанс на промах",
        "Сильный удар"
    )
    static readonly DAMAGE_HTB1 = new AbilityRealLevelField(
        RawCode.get("Htb1"),
        "Урон",
        "Молот бурь"
    )
    static readonly AOE_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Htc1"),
        "Радиус поражения: урон",
        "Удар грома"
    )
    static readonly SPECIFIC_TARGET_DAMAGE_HTC2 = new AbilityRealLevelField(
        RawCode.get("Htc2"),
        "Поражение особой цели",
        "Удар грома"
    )
    static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3 = new AbilityRealLevelField(
        RawCode.get("Htc3"),
        "Уменьшение скорости перемещения (%)",
        "Удар грома"
    )
    static readonly ATTACK_SPEED_REDUCTION_PERCENT_HTC4 = new AbilityRealLevelField(
        RawCode.get("Htc4"),
        "Уменьшение скорости атаки (%)",
        "Удар грома"
    )
    static readonly ARMOR_BONUS_HAD1 = new AbilityRealLevelField(
        RawCode.get("Had1"),
        "Увеличение брони",
        "Доспехи веры"
    )
    static readonly AMOUNT_HEALED_DAMAGED_HHB1 = new AbilityRealLevelField(
        RawCode.get("Hhb1"),
        "Число вылеченных и поврежденных",
        "Благодать"
    )
    static readonly EXTRA_DAMAGE_HCA1 = new AbilityRealLevelField(
        RawCode.get("Hca1"),
        "Дополнительный урон",
        "Ледяные стрелы"
    )
    static readonly MOVEMENT_SPEED_FACTOR_HCA2 = new AbilityRealLevelField(
        RawCode.get("Hca2"),
        "Фактор скорости перемещения",
        "Ледяные стрелы"
    )
    static readonly ATTACK_SPEED_FACTOR_HCA3 = new AbilityRealLevelField(
        RawCode.get("Hca3"),
        "Фактор скорости атаки",
        "Ледяные стрелы"
    )
    static readonly MOVEMENT_SPEED_INCREASE_PERCENT_OAE1 = new AbilityRealLevelField(
        RawCode.get("Oae1"),
        "Увеличение скорости при перемещении",
        "Аура выносливости"
    )
    static readonly ATTACK_SPEED_INCREASE_PERCENT_OAE2 = new AbilityRealLevelField(
        RawCode.get("Oae2"),
        "Увеличение скорости атаки (%)",
        "Аура выносливости"
    )
    static readonly REINCARNATION_DELAY = new AbilityRealLevelField(
        RawCode.get("Ore1"),
        "Задержка перерождения",
        "Перерождение"
    )
    static readonly DAMAGE_OSH1 = new AbilityRealLevelField(
        RawCode.get("Osh1"),
        "Урон",
        "Волна Силы"
    )
    static readonly MAXIMUM_DAMAGE_OSH2 = new AbilityRealLevelField(
        RawCode.get("Osh2"),
        "Максимальный урон",
        "Волна Силы"
    )
    static readonly DISTANCE_OSH3 = new AbilityRealLevelField(
        RawCode.get("Osh3"),
        "Расстояние",
        "Волна Силы"
    )
    static readonly FINAL_AREA_OSH4 = new AbilityRealLevelField(
        RawCode.get("Osh4"),
        "Финальная область",
        "Волна Силы"
    )
    static readonly GRAPHIC_DELAY_NFD1 = new AbilityRealLevelField(
        RawCode.get("Nfd1"),
        "Задержка графики",
        "Перст смерти (Архимонд)"
    )
    static readonly GRAPHIC_DURATION_NFD2 = new AbilityRealLevelField(
        RawCode.get("Nfd2"),
        "Длительность графики",
        "Перст смерти (Архимонд)"
    )
    static readonly DAMAGE_NFD3 = new AbilityRealLevelField(
        RawCode.get("Nfd3"),
        "Урон",
        "Перст смерти (Архимонд)"
    )
    static readonly SUMMONED_UNIT_DAMAGE_AMS1 = new AbilityRealLevelField(
        RawCode.get("Ams1"),
        "Урон от вызванной боевой единицы",
        "Защитная аура"
    )
    static readonly MAGIC_DAMAGE_REDUCTION_AMS2 = new AbilityRealLevelField(
        RawCode.get("Ams2"),
        "Снижение магического урона",
        "Защитная аура"
    )
    static readonly AURA_DURATION = new AbilityRealLevelField(
        RawCode.get("Apl1"),
        "Длительность ауры",
        "Ядовитое облако"
    )
    static readonly DAMAGE_PER_SECOND_APL2 = new AbilityRealLevelField(
        RawCode.get("Apl2"),
        "Урона в секунду",
        "Ядовитое облако"
    )
    static readonly DURATION_OF_PLAGUE_WARD = new AbilityRealLevelField(
        RawCode.get("Apl3"),
        "Длительность защиты от чумы",
        "Ядовитое облако"
    )
    static readonly AMOUNT_OF_HIT_POINTS_REGENERATED = new AbilityRealLevelField(
        RawCode.get("Oar1"),
        "Объем восстановленного здоровья",
        "Дух-целитель (дух-целитель)"
    )
    static readonly ATTACK_DAMAGE_INCREASE_AKB1 = new AbilityRealLevelField(
        RawCode.get("Akb1"),
        "Увеличение урона при атаке",
        "Боевой марш"
    )
    static readonly MANA_LOSS_ADM1 = new AbilityRealLevelField(
        RawCode.get("Adm1"),
        "Потеря маны",
        "Рассеять чары"
    )
    static readonly SUMMONED_UNIT_DAMAGE_ADM2 = new AbilityRealLevelField(
        RawCode.get("Adm2"),
        "Урон от вызванной боевой единицы",
        "Рассеять чары"
    )
    static readonly EXPANSION_AMOUNT = new AbilityRealLevelField(
        RawCode.get("Bli1"),
        "Объем экспансии",
        "Наведение порчи"
    )
    static readonly INTERVAL_DURATION_BGM2 = new AbilityRealLevelField(
        RawCode.get("Bgm2"),
        "Длительность интервала",
        "Проклятие рудника"
    )
    static readonly RADIUS_OF_MINING_RING = new AbilityRealLevelField(
        RawCode.get("Bgm4"),
        "Радиус кольца вокруг рудника",
        "Проклятие рудника"
    )
    static readonly ATTACK_SPEED_INCREASE_PERCENT_BLO1 = new AbilityRealLevelField(
        RawCode.get("Blo1"),
        "Увеличение скорости атаки (%)",
        "Кровожадность"
    )
    static readonly MOVEMENT_SPEED_INCREASE_PERCENT_BLO2 = new AbilityRealLevelField(
        RawCode.get("Blo2"),
        "Увеличение скорости при перемещении (%)",
        "Кровожадность"
    )
    static readonly SCALING_FACTOR = new AbilityRealLevelField(
        RawCode.get("Blo3"),
        "Фактор масштаба",
        "Кровожадность"
    )
    static readonly HIT_POINTS_PER_SECOND_CAN1 = new AbilityRealLevelField(
        RawCode.get("Can1"),
        "Здоровья в секунду",
        "Каннибализм"
    )
    static readonly MAX_HIT_POINTS = new AbilityRealLevelField(
        RawCode.get("Can2"),
        "Макс. здоровья",
        "Каннибализм"
    )
    static readonly DAMAGE_PER_SECOND_DEV2 = new AbilityRealLevelField(
        RawCode.get("Dev2"),
        "Урона в секунду",
        "Еда"
    )
    static readonly MOVEMENT_UPDATE_FREQUENCY_CHD1 = new AbilityRealLevelField(
        RawCode.get("Chd1"),
        "Частота обновления перемещений",
        "Парашютист (враг)"
    )
    static readonly ATTACK_UPDATE_FREQUENCY_CHD2 = new AbilityRealLevelField(
        RawCode.get("Chd2"),
        "Частота обновления атак",
        "Парашютист (враг)"
    )
    static readonly SUMMONED_UNIT_DAMAGE_CHD3 = new AbilityRealLevelField(
        RawCode.get("Chd3"),
        "Урон от вызванной боевой единицы",
        "Парашютист (враг)"
    )
    static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1 = new AbilityRealLevelField(
        RawCode.get("Cri1"),
        "Уменьшение скорости перемещения (%)",
        "Увечье"
    )
    static readonly ATTACK_SPEED_REDUCTION_PERCENT_CRI2 = new AbilityRealLevelField(
        RawCode.get("Cri2"),
        "Уменьшение скорости атаки (%)",
        "Увечье"
    )
    static readonly DAMAGE_REDUCTION_CRI3 = new AbilityRealLevelField(
        RawCode.get("Cri3"),
        "Снижение урона",
        "Увечье"
    )
    static readonly CHANCE_TO_MISS_CRS1 = new AbilityRealLevelField(
        RawCode.get("Crs1"),
        "Шанс на промах",
        "Проклятие"
    )
    static readonly FULL_DAMAGE_RADIUS_DDA1 = new AbilityRealLevelField(
        RawCode.get("Dda1"),
        "Радиус полного урона",
        "Урон от взрыва"
    )
    static readonly FULL_DAMAGE_AMOUNT_DDA2 = new AbilityRealLevelField(
        RawCode.get("Dda2"),
        "Объем полного урона",
        "Урон от взрыва"
    )
    static readonly PARTIAL_DAMAGE_RADIUS = new AbilityRealLevelField(
        RawCode.get("Dda3"),
        "Радиус частичного урона",
        "Урон от взрыва"
    )
    static readonly PARTIAL_DAMAGE_AMOUNT = new AbilityRealLevelField(
        RawCode.get("Dda4"),
        "Объем частичного урона",
        "Урон от взрыва"
    )
    static readonly BUILDING_DAMAGE_FACTOR_SDS1 = new AbilityRealLevelField(
        RawCode.get("Sds1"),
        "Фактор урона зданию",
        "Взорвать"
    )
    static readonly MAX_DAMAGE_UCO5 = new AbilityRealLevelField(
        RawCode.get("Uco5"),
        "Макс. урон",
        "Самоубийство"
    )
    static readonly MOVE_SPEED_BONUS_UCO6 = new AbilityRealLevelField(
        RawCode.get("Uco6"),
        "Повышение скорости перемещения",
        "Самоубийство"
    )
    static readonly DAMAGE_TAKEN_PERCENT_DEF1 = new AbilityRealLevelField(
        RawCode.get("Def1"),
        "Получено урона (%)",
        "Укрыться за щитом"
    )
    static readonly DAMAGE_DEALT_PERCENT_DEF2 = new AbilityRealLevelField(
        RawCode.get("Def2"),
        "Нанесено урона (%)",
        "Укрыться за щитом"
    )
    static readonly MOVEMENT_SPEED_FACTOR_DEF3 = new AbilityRealLevelField(
        RawCode.get("Def3"),
        "Фактор скорости перемещения",
        "Укрыться за щитом"
    )
    static readonly ATTACK_SPEED_FACTOR_DEF4 = new AbilityRealLevelField(
        RawCode.get("Def4"),
        "Фактор скорости атаки",
        "Укрыться за щитом"
    )
    static readonly MAGIC_DAMAGE_REDUCTION_DEF5 = new AbilityRealLevelField(
        RawCode.get("Def5"),
        "Снижение магического урона",
        "Укрыться за щитом"
    )
    static readonly CHANCE_TO_DEFLECT = new AbilityRealLevelField(
        RawCode.get("Def6"),
        "Вероятность отклонения",
        "Укрыться за щитом"
    )
    static readonly DEFLECT_DAMAGE_TAKEN_PIERCING = new AbilityRealLevelField(
        RawCode.get("Def7"),
        "Отклонение полученного урона (дальний бой)",
        "Укрыться за щитом"
    )
    static readonly DEFLECT_DAMAGE_TAKEN_SPELLS = new AbilityRealLevelField(
        RawCode.get("Def8"),
        "Отклонение полученного урона (заклинания)",
        "Укрыться за щитом"
    )
    static readonly RIP_DELAY = new AbilityRealLevelField(
        RawCode.get("Eat1"),
        "Задержка волны",
        "Съесть дерево"
    )
    static readonly EAT_DELAY = new AbilityRealLevelField(
        RawCode.get("Eat2"),
        "Задержка съедения",
        "Съесть дерево"
    )
    static readonly HIT_POINTS_GAINED_EAT3 = new AbilityRealLevelField(
        RawCode.get("Eat3"),
        "Получено здоровья",
        "Съесть дерево"
    )
    static readonly AIR_UNIT_LOWER_DURATION = new AbilityRealLevelField(
        RawCode.get("Ens1"),
        "Длительность снижения летающей боевой единицы",
        "Ловчий"
    )
    static readonly AIR_UNIT_HEIGHT = new AbilityRealLevelField(
        RawCode.get("Ens2"),
        "Высота полета летающей боевой единицы",
        "Ловчий"
    )
    static readonly MELEE_ATTACK_RANGE = new AbilityRealLevelField(
        RawCode.get("Ens3"),
        "Дистанция атаки в ближнем бою",
        "Ловчий"
    )
    static readonly INTERVAL_DURATION_EGM2 = new AbilityRealLevelField(
        RawCode.get("Egm2"),
        "Длительность интервала",
        "Оплетение рудника"
    )
    static readonly EFFECT_DELAY_FLA2 = new AbilityRealLevelField(
        RawCode.get("Fla2"),
        "Задержка эффекта",
        "Осветительный заряд"
    )
    static readonly MINING_DURATION = new AbilityRealLevelField(
        RawCode.get("Gld2"),
        "Длительность золотодобычи",
        "Рудник"
    )
    static readonly RADIUS_OF_GRAVESTONES = new AbilityRealLevelField(
        RawCode.get("Gyd2"),
        "Радиус надгробных плит",
        "Создать труп"
    )
    static readonly RADIUS_OF_CORPSES = new AbilityRealLevelField(
        RawCode.get("Gyd3"),
        "Радиус трупов",
        "Создать труп"
    )
    static readonly HIT_POINTS_GAINED_HEA1 = new AbilityRealLevelField(
        RawCode.get("Hea1"),
        "Получено здоровья",
        "Лечение"
    )
    static readonly DAMGE_INCREASE_PERCENT_INF1 = new AbilityRealLevelField(
        RawCode.get("Inf1"),
        "Увеличение урона (%)",
        "Духовное пламя"
    )
    static readonly AUTOCAST_RANGE = new AbilityRealLevelField(
        RawCode.get("Inf3"),
        "Дальность автоматического применения заклинаний",
        "Духовное пламя"
    )
    static readonly LIFE_REGEN_RATE = new AbilityRealLevelField(
        RawCode.get("Inf4"),
        "Скорость восстановления здоровья",
        "Духовное пламя"
    )
    static readonly GRAPHIC_DELAY_LIT1 = new AbilityRealLevelField(
        RawCode.get("Lit1"),
        "Задержка графики",
        "Грозовая атака"
    )
    static readonly GRAPHIC_DURATION_LIT2 = new AbilityRealLevelField(
        RawCode.get("Lit2"),
        "Длительность графики",
        "Грозовая атака"
    )
    static readonly DAMAGE_PER_SECOND_LSH1 = new AbilityRealLevelField(
        RawCode.get("Lsh1"),
        "Урона в секунду",
        "Щит молний"
    )
    static readonly MANA_GAINED = new AbilityRealLevelField(
        RawCode.get("Mbt1"),
        "Получено здоровья",
        "Восстановить ману и здоровье"
    )
    static readonly HIT_POINTS_GAINED_MBT2 = new AbilityRealLevelField(
        RawCode.get("Mbt2"),
        "Получено маны",
        "Восстановить ману и здоровье"
    )
    static readonly AUTOCAST_REQUIREMENT = new AbilityRealLevelField(
        RawCode.get("Mbt3"),
        "Требование к автоматическому применению заклинаний",
        "Восстановить ману и здоровье"
    )
    static readonly WATER_HEIGHT = new AbilityRealLevelField(
        RawCode.get("Mbt4"),
        "Высота уровня воды",
        "Восстановить ману и здоровье"
    )
    static readonly ACTIVATION_DELAY_MIN1 = new AbilityRealLevelField(
        RawCode.get("Min1"),
        "Задержка запуска",
        "Мина - взрывается (гоблинская мина)"
    )
    static readonly INVISIBILITY_TRANSITION_TIME = new AbilityRealLevelField(
        RawCode.get("Min2"),
        "Время перехода в невидимость",
        "Мина - взрывается (гоблинская мина)"
    )
    static readonly ACTIVATION_RADIUS = new AbilityRealLevelField(
        RawCode.get("Neu1"),
        "Радиус запуска",
        "Выбрать героя"
    )
    static readonly AMOUNT_REGENERATED = new AbilityRealLevelField(
        RawCode.get("Arm1"),
        "Восстановление",
        "Восстановление маны (нейтральный)"
    )
    static readonly DAMAGE_PER_SECOND_POI1 = new AbilityRealLevelField(
        RawCode.get("Poi1"),
        "Урона в секунду",
        "Ядовитое жало"
    )
    static readonly ATTACK_SPEED_FACTOR_POI2 = new AbilityRealLevelField(
        RawCode.get("Poi2"),
        "Фактор скорости атаки",
        "Ядовитое жало"
    )
    static readonly MOVEMENT_SPEED_FACTOR_POI3 = new AbilityRealLevelField(
        RawCode.get("Poi3"),
        "Фактор скорости перемещения",
        "Ядовитое жало"
    )
    static readonly EXTRA_DAMAGE_POA1 = new AbilityRealLevelField(
        RawCode.get("Poa1"),
        "Дополнительный урон",
        "Отравленные стрелы"
    )
    static readonly DAMAGE_PER_SECOND_POA2 = new AbilityRealLevelField(
        RawCode.get("Poa2"),
        "Урона в секунду",
        "Отравленные стрелы"
    )
    static readonly ATTACK_SPEED_FACTOR_POA3 = new AbilityRealLevelField(
        RawCode.get("Poa3"),
        "Фактор скорости атаки",
        "Отравленные стрелы"
    )
    static readonly MOVEMENT_SPEED_FACTOR_POA4 = new AbilityRealLevelField(
        RawCode.get("Poa4"),
        "Фактор скорости перемещения",
        "Отравленные стрелы"
    )
    static readonly DAMAGE_AMPLIFICATION = new AbilityRealLevelField(
        RawCode.get("Pos2"),
        "Увеличение урона",
        "Одержимость (непрерывное)"
    )
    static readonly CHANCE_TO_STOMP_PERCENT = new AbilityRealLevelField(
        RawCode.get("War1"),
        "Шанс на громовую поступь (%)",
        "Сокрушение"
    )
    static readonly DAMAGE_DEALT_WAR2 = new AbilityRealLevelField(
        RawCode.get("War2"),
        "Нанесено урона",
        "Сокрушение"
    )
    static readonly FULL_DAMAGE_RADIUS_WAR3 = new AbilityRealLevelField(
        RawCode.get("War3"),
        "Радиус полного урона",
        "Сокрушение"
    )
    static readonly HALF_DAMAGE_RADIUS_WAR4 = new AbilityRealLevelField(
        RawCode.get("War4"),
        "Радиус половинного урона",
        "Сокрушение"
    )
    static readonly SUMMONED_UNIT_DAMAGE_PRG3 = new AbilityRealLevelField(
        RawCode.get("Prg3"),
        "Урон от вызванной боевой единицы",
        "Очищение"
    )
    static readonly UNIT_PAUSE_DURATION = new AbilityRealLevelField(
        RawCode.get("Prg4"),
        "Длительность паузы: воин",
        "Очищение"
    )
    static readonly HERO_PAUSE_DURATION = new AbilityRealLevelField(
        RawCode.get("Prg5"),
        "Длительность паузы: герой",
        "Очищение"
    )
    static readonly HIT_POINTS_GAINED_REJ1 = new AbilityRealLevelField(
        RawCode.get("Rej1"),
        "Получено здоровья",
        "Омоложение"
    )
    static readonly MANA_POINTS_GAINED_REJ2 = new AbilityRealLevelField(
        RawCode.get("Rej2"),
        "Получено маны",
        "Омоложение"
    )
    static readonly MINIMUM_LIFE_REQUIRED = new AbilityRealLevelField(
        RawCode.get("Rpb3"),
        "Минимум требуемого здоровья",
        "восстановить"
    )
    static readonly MINIMUM_MANA_REQUIRED = new AbilityRealLevelField(
        RawCode.get("Rpb4"),
        "Минимум требуемой маны",
        "восстановить"
    )
    static readonly REPAIR_COST_RATIO = new AbilityRealLevelField(
        RawCode.get("Rep1"),
        "Коэффициент стоимости ремонта",
        "Ремонтировать"
    )
    static readonly REPAIR_TIME_RATIO = new AbilityRealLevelField(
        RawCode.get("Rep2"),
        "Коэффициент времени ремонта",
        "Ремонтировать"
    )
    static readonly POWER_BUILD_COST = new AbilityRealLevelField(
        RawCode.get("Rep3"),
        "Цена ускор. постройки",
        "Ремонтировать"
    )
    static readonly POWER_BUILD_RATE = new AbilityRealLevelField(
        RawCode.get("Rep4"),
        "Темп ускор. постройки",
        "Ремонтировать"
    )
    static readonly NAVAL_RANGE_BONUS = new AbilityRealLevelField(
        RawCode.get("Rep5"),
        "Дополнительная дальность на море",
        "Ремонтировать"
    )
    static readonly DAMAGE_INCREASE_PERCENT_ROA1 = new AbilityRealLevelField(
        RawCode.get("Roa1"),
        "Увеличение урона (%)",
        "Рев"
    )
    static readonly LIFE_REGENERATION_RATE = new AbilityRealLevelField(
        RawCode.get("Roa3"),
        "Скорость восстановления здоровья",
        "Рев"
    )
    static readonly MANA_REGEN = new AbilityRealLevelField(
        RawCode.get("Roa4"),
        "Восст. маны",
        "Рев"
    )
    static readonly DAMAGE_INCREASE = new AbilityRealLevelField(
        RawCode.get("Nbr1"),
        "Увеличение ущерба",
        "Рев"
    )
    static readonly SALVAGE_COST_RATIO = new AbilityRealLevelField(
        RawCode.get("Sal1"),
        "Коэффициент стоимости спасения",
        "Грабеж"
    )
    static readonly IN_FLIGHT_SIGHT_RADIUS = new AbilityRealLevelField(
        RawCode.get("Esn1"),
        "Радиус обзора в полете",
        "Сторожевая сова"
    )
    static readonly HOVERING_SIGHT_RADIUS = new AbilityRealLevelField(
        RawCode.get("Esn2"),
        "Радиус обзора в парении",
        "Сторожевая сова"
    )
    static readonly HOVERING_HEIGHT = new AbilityRealLevelField(
        RawCode.get("Esn3"),
        "Высота парения",
        "Сторожевая сова"
    )
    static readonly DURATION_OF_OWLS = new AbilityRealLevelField(
        RawCode.get("Esn5"),
        "Время действия сов",
        "Сторожевая сова"
    )
    static readonly FADE_DURATION = new AbilityRealLevelField(
        RawCode.get("Shm1"),
        "Длительность затемнения",
        "Невидимость по ночам"
    )
    static readonly DAY_NIGHT_DURATION = new AbilityRealLevelField(
        RawCode.get("Shm2"),
        "Длительность дня и ночи",
        "Невидимость по ночам"
    )
    static readonly ACTION_DURATION = new AbilityRealLevelField(
        RawCode.get("Shm3"),
        "Длительность действия",
        "Невидимость по ночам"
    )
    static readonly MOVEMENT_SPEED_FACTOR_SLO1 = new AbilityRealLevelField(
        RawCode.get("Slo1"),
        "Фактор скорости перемещения",
        "Замедление"
    )
    static readonly ATTACK_SPEED_FACTOR_SLO2 = new AbilityRealLevelField(
        RawCode.get("Slo2"),
        "Фактор скорости атаки",
        "Замедление"
    )
    static readonly DAMAGE_PER_SECOND_SPO1 = new AbilityRealLevelField(
        RawCode.get("Spo1"),
        "Урона в секунду",
        "Яд"
    )
    static readonly MOVEMENT_SPEED_FACTOR_SPO2 = new AbilityRealLevelField(
        RawCode.get("Spo2"),
        "Фактор скорости перемещения",
        "Яд"
    )
    static readonly ATTACK_SPEED_FACTOR_SPO3 = new AbilityRealLevelField(
        RawCode.get("Spo3"),
        "Фактор скорости атаки",
        "Яд"
    )
    static readonly ACTIVATION_DELAY_STA1 = new AbilityRealLevelField(
        RawCode.get("Sta1"),
        "Задержка запуска",
        "Колдовская ловушка"
    )
    static readonly DETECTION_RADIUS_STA2 = new AbilityRealLevelField(
        RawCode.get("Sta2"),
        "Радиус обнаружения",
        "Колдовская ловушка"
    )
    static readonly DETONATION_RADIUS = new AbilityRealLevelField(
        RawCode.get("Sta3"),
        "Радиус взрыва",
        "Колдовская ловушка"
    )
    static readonly STUN_DURATION_STA4 = new AbilityRealLevelField(
        RawCode.get("Sta4"),
        "Длительность оглушения",
        "Колдовская ловушка"
    )
    static readonly ATTACK_SPEED_BONUS_PERCENT = new AbilityRealLevelField(
        RawCode.get("Uhf1"),
        "Дополнительная скорость атаки (%)",
        "Ярость Проклятых"
    )
    static readonly DAMAGE_PER_SECOND_UHF2 = new AbilityRealLevelField(
        RawCode.get("Uhf2"),
        "Урона в секунду",
        "Ярость Проклятых"
    )
    static readonly LUMBER_PER_INTERVAL = new AbilityRealLevelField(
        RawCode.get("Wha1"),
        "Древесины за интервал времени",
        "Добывать ресурсы (светляток в руднике или около дерева)"
    )
    static readonly ART_ATTACHMENT_HEIGHT = new AbilityRealLevelField(
        RawCode.get("Wha3"),
        "Высота графического приложения",
        "Добывать ресурсы (светлячок в руднике или около дерева)"
    )
    static readonly TELEPORT_AREA_WIDTH = new AbilityRealLevelField(
        RawCode.get("Wrp1"),
        "Ширина области телепорта",
        "Перемещение через портал"
    )
    static readonly TELEPORT_AREA_HEIGHT = new AbilityRealLevelField(
        RawCode.get("Wrp2"),
        "Высота области телепорта",
        "Перемещение через портал"
    )
    static readonly LIFE_STOLEN_PER_ATTACK = new AbilityRealLevelField(
        RawCode.get("Ivam"),
        "Жизни украдено за атаку",
        "Предмет: вампиризм"
    )
    static readonly DAMAGE_BONUS_IDAM = new AbilityRealLevelField(
        RawCode.get("Idam"),
        "Дополнительный урон",
        "Предмет: доп. урон от магии холода"
    )
    static readonly CHANCE_TO_HIT_UNITS_PERCENT = new AbilityRealLevelField(
        RawCode.get("Iob2"),
        "Шанс поразить войска (%)",
        "Предмет: Черная стрела"
    )
    static readonly CHANCE_TO_HIT_HEROS_PERCENT = new AbilityRealLevelField(
        RawCode.get("Iob3"),
        "Шанс поразить героев (%)",
        "Предмет: Черная стрела"
    )
    static readonly CHANCE_TO_HIT_SUMMONS_PERCENT = new AbilityRealLevelField(
        RawCode.get("Iob4"),
        "Шанс поразить вызванных (%)",
        "Предмет: Черная стрела"
    )
    static readonly DELAY_FOR_TARGET_EFFECT = new AbilityRealLevelField(
        RawCode.get("Idel"),
        "Задержка для целевого эффекта",
        "Осветительная ракета"
    )
    static readonly DAMAGE_DEALT_PERCENT_OF_NORMAL = new AbilityRealLevelField(
        RawCode.get("Iild"),
        "Нанесено урона (% от нормы)",
        "Предмет: иллюзии"
    )
    static readonly DAMAGE_RECEIVED_MULTIPLIER = new AbilityRealLevelField(
        RawCode.get("Iilw"),
        "Увеличение полученного урона",
        "Предмет: иллюзии"
    )
    static readonly MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL = new AbilityRealLevelField(
        RawCode.get("Imrp"),
        "Дополнительное восстановление маны (коэффициент от нормы)",
        "Предмет: регенерация маны"
    )
    static readonly MOVEMENT_SPEED_INCREASE_ISPI = new AbilityRealLevelField(
        RawCode.get("Ispi"),
        "Увеличение скорости перемещения",
        "Предмет: временное повышение скорости"
    )
    static readonly DAMAGE_PER_SECOND_IDPS = new AbilityRealLevelField(
        RawCode.get("Idps"),
        "Урона в секунду",
        "Щит молний (предмет)"
    )
    static readonly ATTACK_DAMAGE_INCREASE_CAC1 = new AbilityRealLevelField(
        RawCode.get("Cac1"),
        "Увеличение урона при атаке",
        "Боевой дух"
    )
    static readonly DAMAGE_PER_SECOND_COR1 = new AbilityRealLevelField(
        RawCode.get("Cor1"),
        "Урона в секунду",
        "Едкое дыхание"
    )
    static readonly ATTACK_SPEED_INCREASE_ISX1 = new AbilityRealLevelField(
        RawCode.get("Isx1"),
        "Увеличение скорости атаки",
        "Предмет: увеличение скорости боя (Перчатки Скорости)"
    )
    static readonly DAMAGE_WRS1 = new AbilityRealLevelField(
        RawCode.get("Wrs1"),
        "Урон",
        "Громовая поступь"
    )
    static readonly TERRAIN_DEFORMATION_AMPLITUDE = new AbilityRealLevelField(
        RawCode.get("Wrs2"),
        "Амплитуда деформации рельефа",
        "Громовая поступь (враг 1)"
    )
    static readonly DAMAGE_CTC1 = new AbilityRealLevelField(
        RawCode.get("Ctc1"),
        "Урон",
        "Удар по земле (враг)"
    )
    static readonly EXTRA_DAMAGE_TO_TARGET = new AbilityRealLevelField(
        RawCode.get("Ctc2"),
        "Дополнительный урон цели",
        "Удар по земле (враг)"
    )
    static readonly MOVEMENT_SPEED_REDUCTION = new AbilityRealLevelField(
        RawCode.get("Ctc3"),
        "Снижение скорости перемещения",
        "Удар по земле (враг)"
    )
    static readonly ATTACK_SPEED_REDUCTION = new AbilityRealLevelField(
        RawCode.get("Ctc4"),
        "Снижение скорости атаки",
        "Удар по земле (враг)"
    )
    static readonly DAMAGE_CTB1 = new AbilityRealLevelField(
        RawCode.get("Ctb1"),
        "Урон",
        "Бросить камень"
    )
    static readonly CASTING_DELAY_SECONDS = new AbilityRealLevelField(
        RawCode.get("Uds2"),
        "Задержка заклинания (секунды)",
        "Зов Тьмы"
    )
    static readonly MANA_LOSS_PER_UNIT_DTN1 = new AbilityRealLevelField(
        RawCode.get("Dtn1"),
        "Потеря маны (на боевую единицу)",
        "Самопожертвование"
    )
    static readonly DAMAGE_TO_SUMMONED_UNITS_DTN2 = new AbilityRealLevelField(
        RawCode.get("Dtn2"),
        "Урон вызванным войскам",
        "Самопожертвование"
    )
    static readonly TRANSITION_TIME_SECONDS = new AbilityRealLevelField(
        RawCode.get("Ivs1"),
        "Время перемещения (секунды)",
        "Невидимость"
    )
    static readonly DRAINED_PER_SECOND_NMR1 = new AbilityRealLevelField(
        RawCode.get("Nmr1"),
        "Украдено маны в секунду",
        "Слабоумие"
    )
    static readonly CHANCE_TO_REDUCE_DAMAGE_PERCENT = new AbilityRealLevelField(
        RawCode.get("Ssk1"),
        "Шанс на снижение урона (%)",
        "Каменные доспехи"
    )
    static readonly MINIMUM_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Ssk2"),
        "Минимальный урон",
        "Каменные доспехи"
    )
    static readonly IGNORED_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Ssk3"),
        "Отклоненный урон",
        "Каменные доспехи"
    )
    static readonly FULL_DAMAGE_DEALT = new AbilityRealLevelField(
        RawCode.get("Hfs1"),
        "Нанесено полного урона",
        "Огненный столб"
    )
    static readonly FULL_DAMAGE_INTERVAL = new AbilityRealLevelField(
        RawCode.get("Hfs2"),
        "Интервал полного урона",
        "Огненный столб"
    )
    static readonly HALF_DAMAGE_DEALT = new AbilityRealLevelField(
        RawCode.get("Hfs3"),
        "Нанесенный половинный урон",
        "Огненный столб"
    )
    static readonly HALF_DAMAGE_INTERVAL = new AbilityRealLevelField(
        RawCode.get("Hfs4"),
        "Интервал половинного урона",
        "Огненный столб"
    )
    static readonly BUILDING_REDUCTION_HFS5 = new AbilityRealLevelField(
        RawCode.get("Hfs5"),
        "Уменьшение скорости строительства",
        "Огненный столб"
    )
    static readonly MAXIMUM_DAMAGE_HFS5 = new AbilityRealLevelField(
        RawCode.get("Hfs6"),
        "Максимальный урон",
        "Огненный столб"
    )
    static readonly MANA_PER_HIT_POINT = new AbilityRealLevelField(
        RawCode.get("Nms1"),
        "Маны на единицу здоровья",
        "Магический щит"
    )
    static readonly DAMAGE_ABSORBED_PERCENT = new AbilityRealLevelField(
        RawCode.get("Nms2"),
        "Поглощено ущерба (%)",
        "Магический щит"
    )
    static readonly WAVE_DISTANCE = new AbilityRealLevelField(
        RawCode.get("Uim1"),
        "Дистанция волны",
        "Пронзающая Смерть"
    )
    static readonly WAVE_TIME_SECONDS = new AbilityRealLevelField(
        RawCode.get("Uim2"),
        "Время волны (секунды)",
        "Пронзающая Смерть"
    )
    static readonly DAMAGE_DEALT_UIM3 = new AbilityRealLevelField(
        RawCode.get("Uim3"),
        "Нанесено урона",
        "Пронзающая Смерть"
    )
    static readonly AIR_TIME_SECONDS_UIM4 = new AbilityRealLevelField(
        RawCode.get("Uim4"),
        "Время в воздухе (секунды)",
        "Пронзающая Смерть"
    )
    static readonly UNIT_RELEASE_INTERVAL_SECONDS = new AbilityRealLevelField(
        RawCode.get("Uls2"),
        "Интервал отпускания боевой единицы (секунды)",
        "Москиты"
    )
    static readonly DAMAGE_RETURN_FACTOR = new AbilityRealLevelField(
        RawCode.get("Uls4"),
        "Фактор возвращенного урона",
        "Москиты"
    )
    static readonly DAMAGE_RETURN_THRESHOLD = new AbilityRealLevelField(
        RawCode.get("Uls5"),
        "Порог возвращенного урона",
        "Москиты"
    )
    static readonly RETURNED_DAMAGE_FACTOR = new AbilityRealLevelField(
        RawCode.get("Uts1"),
        "Фактор возвращенного урона",
        "Панцирь с шипами"
    )
    static readonly RECEIVED_DAMAGE_FACTOR = new AbilityRealLevelField(
        RawCode.get("Uts2"),
        "Фактор полученного ущерба",
        "Панцирь с шипами"
    )
    static readonly DEFENSE_BONUS_UTS3 = new AbilityRealLevelField(
        RawCode.get("Uts3"),
        "Дополнительная защита",
        "Панцирь с шипами"
    )
    static readonly DAMAGE_BONUS_NBA1 = new AbilityRealLevelField(
        RawCode.get("Nba1"),
        "Дополнительный урон",
        "Черная стрела"
    )
    static readonly SUMMONED_UNIT_DURATION_SECONDS_NBA3 = new AbilityRealLevelField(
        RawCode.get("Nba3"),
        "Длительность вызова боевой единицы (секунды)",
        "Черная стрела"
    )
    static readonly MANA_PER_SUMMONED_HIT_POINT = new AbilityRealLevelField(
        RawCode.get("Cmg2"),
        "Маны на единицу здоровья вызванного",
        "Захват контроля"
    )
    static readonly CHARGE_FOR_CURRENT_LIFE = new AbilityRealLevelField(
        RawCode.get("Cmg3"),
        "Заряд за текущую жизнь",
        "Захват контроля"
    )
    static readonly HIT_POINTS_DRAINED = new AbilityRealLevelField(
        RawCode.get("Ndr1"),
        "Похищено здоровья",
        "Похищение жизни"
    )
    static readonly MANA_POINTS_DRAINED = new AbilityRealLevelField(
        RawCode.get("Ndr2"),
        "Похищено маны",
        "Похищение жизни"
    )
    static readonly DRAIN_INTERVAL_SECONDS = new AbilityRealLevelField(
        RawCode.get("Ndr3"),
        "Интервал похищения (секунды)",
        "Похищение жизни"
    )
    static readonly LIFE_TRANSFERED_PER_SECOND = new AbilityRealLevelField(
        RawCode.get("Ndr4"),
        "Ед. здоровья в секунду",
        "Похищение жизни"
    )
    static readonly MANA_TRANSFERED_PER_SECOND = new AbilityRealLevelField(
        RawCode.get("Ndr5"),
        "Ед. маны в секунду",
        "Похищение жизни"
    )
    static readonly BONUS_LIFE_FACTOR = new AbilityRealLevelField(
        RawCode.get("Ndr6"),
        "Фактор доп. здоровья",
        "Похищение жизни"
    )
    static readonly BONUS_LIFE_DECAY = new AbilityRealLevelField(
        RawCode.get("Ndr7"),
        "Исчезновение доп. здоровья",
        "Похищение жизни"
    )
    static readonly BONUS_MANA_FACTOR = new AbilityRealLevelField(
        RawCode.get("Ndr8"),
        "Фактор доп. маны",
        "Похищение жизни"
    )
    static readonly BONUS_MANA_DECAY = new AbilityRealLevelField(
        RawCode.get("Ndr9"),
        "Исчезновение доп. маны",
        "Похищение жизни"
    )
    static readonly CHANCE_TO_MISS_PERCENT = new AbilityRealLevelField(
        RawCode.get("Nsi2"),
        "Шанс на промах (%)",
        "Безмолвие"
    )
    static readonly MOVEMENT_SPEED_MODIFIER = new AbilityRealLevelField(
        RawCode.get("Nsi3"),
        "Модификатор скорости перемещения",
        "Безмолвие"
    )
    static readonly ATTACK_SPEED_MODIFIER = new AbilityRealLevelField(
        RawCode.get("Nsi4"),
        "Модификатор скорости боя",
        "Безмолвие"
    )
    static readonly DAMAGE_PER_SECOND_TDG1 = new AbilityRealLevelField(
        RawCode.get("Tdg1"),
        "Урона в секунду",
        "Аура повреждения зданий (торнадо)"
    )
    static readonly MEDIUM_DAMAGE_RADIUS_TDG2 = new AbilityRealLevelField(
        RawCode.get("Tdg2"),
        "Радиус среднего урона",
        "Аура повреждения зданий (торнадо)"
    )
    static readonly MEDIUM_DAMAGE_PER_SECOND = new AbilityRealLevelField(
        RawCode.get("Tdg3"),
        "Среднего урона в секунду",
        "Аура повреждения зданий (торнадо)"
    )
    static readonly SMALL_DAMAGE_RADIUS_TDG4 = new AbilityRealLevelField(
        RawCode.get("Tdg4"),
        "Радиус малого урона",
        "Аура повреждения зданий (торнадо)"
    )
    static readonly SMALL_DAMAGE_PER_SECOND = new AbilityRealLevelField(
        RawCode.get("Tdg5"),
        "Малого урона в секунду",
        "Аура повреждения зданий (торнадо)"
    )
    static readonly AIR_TIME_SECONDS_TSP1 = new AbilityRealLevelField(
        RawCode.get("Tsp1"),
        "Время в воздухе (секунды)",
        "Вихрь торнадо (торнадо)"
    )
    static readonly MINIMUM_HIT_INTERVAL_SECONDS = new AbilityRealLevelField(
        RawCode.get("Tsp2"),
        "Минимальный интервал между ударами (секунды)"
    )
    static readonly DAMAGE_PER_SECOND_NBF5 = new AbilityRealLevelField(
        RawCode.get("Nbf5"),
        "Урона в секунду",
        "Огненное дыхание"
    )
    static readonly MAXIMUM_RANGE = new AbilityRealLevelField(
        RawCode.get("Ebl1"),
        "Максимальная область",
        "Скачок"
    )
    static readonly MINIMUM_RANGE = new AbilityRealLevelField(
        RawCode.get("Ebl2"),
        "Минимальная область",
        "Скачок"
    )
    static readonly DAMAGE_PER_TARGET_EFK1 = new AbilityRealLevelField(
        RawCode.get("Efk1"),
        "Урона на цель",
        "Веерный бросок"
    )
    static readonly MAXIMUM_TOTAL_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Efk2"),
        "Максимальный суммарный урон",
        "Веерный бросок"
    )
    static readonly MAXIMUM_SPEED_ADJUSTMENT = new AbilityRealLevelField(
        RawCode.get("Efk4"),
        "Регулировка максимальной скорости",
        "Веерный бросок"
    )
    static readonly DECAYING_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Esh1"),
        "Ущерб от Порчи",
        "Отравленный нож"
    )
    static readonly MOVEMENT_SPEED_FACTOR_ESH2 = new AbilityRealLevelField(
        RawCode.get("Esh2"),
        "Фактор скорости перемещения",
        "Отравленный нож"
    )
    static readonly ATTACK_SPEED_FACTOR = new AbilityRealLevelField(
        RawCode.get("Esh3"),
        "Фактор скорости атаки",
        "Отравленный нож"
    )
    static readonly DECAY_POWER = new AbilityRealLevelField(
        RawCode.get("Esh4"),
        "Сила Порчи",
        "Отравленный нож"
    )
    static readonly INITIAL_DAMAGE_ESH5 = new AbilityRealLevelField(
        RawCode.get("Esh5"),
        "Начальный урон",
        "Отравленный нож"
    )
    static readonly MAXIMUM_LIFE_ABSORBED = new AbilityRealLevelField(
        RawCode.get("abs1"),
        "Максимум поглощенного здоровья",
        "Поглощение маны"
    )
    static readonly MAXIMUM_MANA_ABSORBED = new AbilityRealLevelField(
        RawCode.get("abs2"),
        "Максимум поглощенной маны",
        "Поглощение маны"
    )
    static readonly MOVEMENT_SPEED_INCREASE_BSK1 = new AbilityRealLevelField(
        RawCode.get("bsk1"),
        "Увеличение скорости перемещения",
        "Безумие"
    )
    static readonly ATTACK_SPEED_INCREASE_BSK2 = new AbilityRealLevelField(
        RawCode.get("bsk2"),
        "Увеличение скорости атаки",
        "Безумие"
    )
    static readonly DAMAGE_TAKEN_INCREASE = new AbilityRealLevelField(
        RawCode.get("bsk3"),
        "Увеличение полученного урона",
        "Безумие"
    )
    static readonly LIFE_PER_UNIT = new AbilityRealLevelField(
        RawCode.get("dvm1"),
        "Здоровья на боевую единицу",
        "Поглощение чар"
    )
    static readonly MANA_PER_UNIT = new AbilityRealLevelField(
        RawCode.get("dvm2"),
        "Маны на боевую единицу",
        "Поглощение чар"
    )
    static readonly LIFE_PER_BUFF = new AbilityRealLevelField(
        RawCode.get("dvm3"),
        "Здоровья на заклинание",
        "Поглощение чар"
    )
    static readonly MANA_PER_BUFF = new AbilityRealLevelField(
        RawCode.get("dvm4"),
        "Маны на заклинание",
        "Поглощение чар"
    )
    static readonly SUMMONED_UNIT_DAMAGE_DVM5 = new AbilityRealLevelField(
        RawCode.get("dvm5"),
        "Урон от вызванной боевой единицы",
        "Поглощение чар"
    )
    static readonly DAMAGE_BONUS_FAK1 = new AbilityRealLevelField(
        RawCode.get("fak1"),
        "Дополнительный урон",
        "Сфера Небытия"
    )
    static readonly MEDIUM_DAMAGE_FACTOR_FAK2 = new AbilityRealLevelField(
        RawCode.get("fak2"),
        "Фактор среднего урона",
        "Сфера Небытия"
    )
    static readonly SMALL_DAMAGE_FACTOR_FAK3 = new AbilityRealLevelField(
        RawCode.get("fak3"),
        "Фактор малого урона",
        "Сфера Небытия"
    )
    static readonly FULL_DAMAGE_RADIUS_FAK4 = new AbilityRealLevelField(
        RawCode.get("fak4"),
        "Радиус полного урона",
        "Сфера Небытия"
    )
    static readonly HALF_DAMAGE_RADIUS_FAK5 = new AbilityRealLevelField(
        RawCode.get("fak5"),
        "Радиус половинного урона",
        "Сфера Небытия"
    )
    static readonly EXTRA_DAMAGE_PER_SECOND = new AbilityRealLevelField(
        RawCode.get("liq1"),
        "Дополнительный урон в секунду",
        "Жидкий огонь"
    )
    static readonly MOVEMENT_SPEED_REDUCTION_LIQ2 = new AbilityRealLevelField(
        RawCode.get("liq2"),
        "Снижение скорости перемещения",
        "Жидкий огонь"
    )
    static readonly ATTACK_SPEED_REDUCTION_LIQ3 = new AbilityRealLevelField(
        RawCode.get("liq3"),
        "Снижение скорости атаки",
        "Жидкий огонь"
    )
    static readonly MAGIC_DAMAGE_FACTOR = new AbilityRealLevelField(
        RawCode.get("mim1"),
        "Фактор магического урона",
        "Невосприимчивость к магии"
    )
    static readonly UNIT_DAMAGE_PER_MANA_POINT = new AbilityRealLevelField(
        RawCode.get("mfl1"),
        "Боевая единица: урона на единицу маны",
        "Заклинание Крови"
    )
    static readonly HERO_DAMAGE_PER_MANA_POINT = new AbilityRealLevelField(
        RawCode.get("mfl2"),
        "Герой: урона на единицу маны",
        "Заклинание Крови"
    )
    static readonly UNIT_MAXIMUM_DAMAGE = new AbilityRealLevelField(
        RawCode.get("mfl3"),
        "Боевая единица: максимальный урон",
        "Заклинание Крови"
    )
    static readonly HERO_MAXIMUM_DAMAGE = new AbilityRealLevelField(
        RawCode.get("mfl4"),
        "Герой: максимальный урон",
        "Заклинание Крови"
    )
    static readonly DAMAGE_COOLDOWN = new AbilityRealLevelField(
        RawCode.get("mfl5"),
        "Урон при перезарядке",
        "Заклинание Крови"
    )
    static readonly DISTRIBUTED_DAMAGE_FACTOR_SPL1 = new AbilityRealLevelField(
        RawCode.get("spl1"),
        "Фактор распределенного урона",
        "Эмпатия"
    )
    static readonly LIFE_REGENERATED = new AbilityRealLevelField(
        RawCode.get("irl1"),
        "Восстановлено здоровья",
        "Лечебный эликсир"
    )
    static readonly MANA_REGENERATED = new AbilityRealLevelField(
        RawCode.get("irl2"),
        "Восстановлено маны",
        "Лечебный эликсир"
    )
    static readonly MANA_LOSS_PER_UNIT_IDC1 = new AbilityRealLevelField(
        RawCode.get("idc1"),
        "Потеря маны на боевую единицу",
        "Предмет: волна развеивания чар"
    )
    static readonly SUMMONED_UNIT_DAMAGE_IDC2 = new AbilityRealLevelField(
        RawCode.get("idc2"),
        "Урон от вызванной боевой единицы",
        "Предмет: волна развеивания чар"
    )
    static readonly ACTIVATION_DELAY_IMO2 = new AbilityRealLevelField(
        RawCode.get("imo2"),
        "Задержка запуска",
        "Приманка"
    )
    static readonly LURE_INTERVAL_SECONDS = new AbilityRealLevelField(
        RawCode.get("imo3"),
        "Интервал подчинения (секунды)",
        "Приманка"
    )
    static readonly DAMAGE_BONUS_ISR1 = new AbilityRealLevelField(
        RawCode.get("isr1"),
        "Дополнительный урон",
        "Уменьшение урона от магии"
    )
    static readonly DAMAGE_REDUCTION_ISR2 = new AbilityRealLevelField(
        RawCode.get("isr2"),
        "Снижение урона",
        "Уменьшение урона от магии"
    )
    static readonly DAMAGE_BONUS_IPV1 = new AbilityRealLevelField(
        RawCode.get("ipv1"),
        "Дополнительный урон",
        "Зелье Вампиризма"
    )
    static readonly LIFE_STEAL_AMOUNT = new AbilityRealLevelField(
        RawCode.get("ipv2"),
        "Количество украденного здоровья",
        "Зелье Вампиризма"
    )
    static readonly LIFE_RESTORED_FACTOR = new AbilityRealLevelField(
        RawCode.get("ast1"),
        "Фактор восстановленного здоровья",
        "Помощь предков"
    )
    static readonly MANA_RESTORED_FACTOR = new AbilityRealLevelField(
        RawCode.get("ast2"),
        "Фактор восстановленной маны",
        "Помощь предков"
    )
    static readonly ATTACH_DELAY = new AbilityRealLevelField(
        RawCode.get("gra1"),
        "Задержка атаки",
        "Вырвать дерево"
    )
    static readonly REMOVE_DELAY = new AbilityRealLevelField(
        RawCode.get("gra2"),
        "Задержка удаления",
        "Вырвать дерево"
    )
    static readonly HERO_REGENERATION_DELAY = new AbilityRealLevelField(
        RawCode.get("Nsa2"),
        "Задержка восстановления героя",
        "Посох Спасения"
    )
    static readonly UNIT_REGENERATION_DELAY = new AbilityRealLevelField(
        RawCode.get("Nsa3"),
        "Задержка восстановления боевой единицы",
        "Посох Спасения"
    )
    static readonly MAGIC_DAMAGE_REDUCTION_NSA4 = new AbilityRealLevelField(
        RawCode.get("Nsa4"),
        "Снижение магического урона",
        "Посох Спасения"
    )
    static readonly HIT_POINTS_PER_SECOND_NSA5 = new AbilityRealLevelField(
        RawCode.get("Nsa5"),
        "Здоровья в секунду",
        "Посох Спасения"
    )
    static readonly DAMAGE_TO_SUMMONED_UNITS_IXS1 = new AbilityRealLevelField(
        RawCode.get("Ixs1"),
        "Урон вызванным войскам",
        "Предмет: невосприимчивость к магии"
    )
    static readonly MAGIC_DAMAGE_REDUCTION_IXS2 = new AbilityRealLevelField(
        RawCode.get("Ixs2"),
        "Снижение магического урона",
        "Предмет: невосприимчивость к магии"
    )
    static readonly SUMMONED_UNIT_DURATION = new AbilityRealLevelField(
        RawCode.get("Npa6"),
        "Время жизни вызванного существа",
        "Паразит"
    )
    static readonly SHIELD_COOLDOWN_TIME = new AbilityRealLevelField(
        RawCode.get("Nse1"),
        "Время перезарядки щита",
        "Защита (руна)"
    )
    static readonly DAMAGE_PER_SECOND_NDO1 = new AbilityRealLevelField(
        RawCode.get("Ndo1"),
        "Урона в секунду",
        "Печать Преисподней"
    )
    static readonly SUMMONED_UNIT_DURATION_SECONDS_NDO3 = new AbilityRealLevelField(
        RawCode.get("Ndo3"),
        "Длительность вызова боевой единицы (секунды)",
        "Печать Преисподней"
    )
    static readonly MEDIUM_DAMAGE_RADIUS_FLK1 = new AbilityRealLevelField(
        RawCode.get("flk1"),
        "Радиус среднего урона",
        "Разрывные снаряды"
    )
    static readonly SMALL_DAMAGE_RADIUS_FLK2 = new AbilityRealLevelField(
        RawCode.get("flk2"),
        "Радиус малого урона",
        "Разрывные снаряды"
    )
    static readonly FULL_DAMAGE_AMOUNT_FLK3 = new AbilityRealLevelField(
        RawCode.get("flk3"),
        "Объем полного урона",
        "Разрывные снаряды"
    )
    static readonly MEDIUM_DAMAGE_AMOUNT = new AbilityRealLevelField(
        RawCode.get("flk4"),
        "Объем среднего урона",
        "Разрывные снаряды"
    )
    static readonly SMALL_DAMAGE_AMOUNT = new AbilityRealLevelField(
        RawCode.get("flk5"),
        "Объем малого урона",
        "Разрывные снаряды"
    )
    static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1 = new AbilityRealLevelField(
        RawCode.get("Hbn1"),
        "Уменьшение скорости перемещения (%)",
        "Изгнание в астрал"
    )
    static readonly ATTACK_SPEED_REDUCTION_PERCENT_HBN2 = new AbilityRealLevelField(
        RawCode.get("Hbn2"),
        "Уменьшение скорости боя (%)",
        "Изгнание в астрал"
    )
    static readonly MAX_MANA_DRAINED_UNITS = new AbilityRealLevelField(
        RawCode.get("fbk1"),
        "Макс. украденной маны: войска",
        "Сожжение маны (ведьмак)"
    )
    static readonly DAMAGE_RATIO_UNITS_PERCENT = new AbilityRealLevelField(
        RawCode.get("fbk2"),
        "Коэффициент урона: войска (%)",
        "Сожжение маны (ведьмак)"
    )
    static readonly MAX_MANA_DRAINED_HEROS = new AbilityRealLevelField(
        RawCode.get("fbk3"),
        "Макс. украденной маны: герои",
        "Сожжение маны (ведьмак)"
    )
    static readonly DAMAGE_RATIO_HEROS_PERCENT = new AbilityRealLevelField(
        RawCode.get("fbk4"),
        "Коэффициент урона: герои (%)",
        "Сожжение маны (ведьмак)"
    )
    static readonly SUMMONED_DAMAGE = new AbilityRealLevelField(
        RawCode.get("fbk5"),
        "Урон маг. существам",
        "Сожжение маны (ведьмак)"
    )
    static readonly DISTRIBUTED_DAMAGE_FACTOR_NCA1 = new AbilityRealLevelField(
        RawCode.get("nca1"),
        "Фактор распределенного урона",
        "Демоническая сила"
    )
    static readonly INITIAL_DAMAGE_PXF1 = new AbilityRealLevelField(
        RawCode.get("pxf1"),
        "Начальный урон",
        "Пламя феникса"
    )
    static readonly DAMAGE_PER_SECOND_PXF2 = new AbilityRealLevelField(
        RawCode.get("pxf2"),
        "Урона в секунду",
        "Пламя феникса"
    )
    static readonly DAMAGE_PER_SECOND_MLS1 = new AbilityRealLevelField(
        RawCode.get("mls1"),
        "Урона в секунду",
        "Огненное лассо"
    )
    static readonly BEAST_COLLISION_RADIUS = new AbilityRealLevelField(
        RawCode.get("Nst2"),
        "Радиус столкновения со зверем",
        "Стадо ящериц"
    )
    static readonly DAMAGE_AMOUNT_NST3 = new AbilityRealLevelField(
        RawCode.get("Nst3"),
        "Объем урона",
        "Стадо ящериц"
    )
    static readonly DAMAGE_RADIUS = new AbilityRealLevelField(
        RawCode.get("Nst4"),
        "Радиус урона",
        "Стадо ящериц"
    )
    static readonly DAMAGE_DELAY = new AbilityRealLevelField(
        RawCode.get("Nst5"),
        "Задержка урона",
        "Стадо ящериц"
    )
    static readonly FOLLOW_THROUGH_TIME = new AbilityRealLevelField(
        RawCode.get("Ncl1"),
        "Следовать в течение времени",
        "Канал"
    )
    static readonly ART_DURATION = new AbilityRealLevelField(
        RawCode.get("Ncl4"),
        "Длительность графики",
        "Канал"
    )
    static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1 = new AbilityRealLevelField(
        RawCode.get("Nab1"),
        "Уменьшение скорости перемещения (%)",
        "Кислотная бомба"
    )
    static readonly ATTACK_SPEED_REDUCTION_PERCENT_NAB2 = new AbilityRealLevelField(
        RawCode.get("Nab2"),
        "Уменьшение скорости боя (%)",
        "Кислотная бомба"
    )
    static readonly PRIMARY_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Nab4"),
        "Основной урон",
        "Кислотная бомба"
    )
    static readonly SECONDARY_DAMAGE = new AbilityRealLevelField(
        RawCode.get("Nab5"),
        "Дополнительный урон",
        "Кислотная бомба"
    )
    static readonly DAMAGE_INTERVAL_NAB6 = new AbilityRealLevelField(
        RawCode.get("Nab6"),
        "Интервал урона",
        "Кислотная бомба"
    )
    static readonly GOLD_COST_FACTOR = new AbilityRealLevelField(
        RawCode.get("Ntm1"),
        "Требуется золота",
        "Трансмутация"
    )
    static readonly LUMBER_COST_FACTOR = new AbilityRealLevelField(
        RawCode.get("Ntm2"),
        "Требуется древесины",
        "Трансмутация"
    )
    static readonly MOVE_SPEED_BONUS_NEG1 = new AbilityRealLevelField(
        RawCode.get("Neg1"),
        "Повышение скорости перемещения",
        "Техника"
    )
    static readonly DAMAGE_BONUS_NEG2 = new AbilityRealLevelField(
        RawCode.get("Neg2"),
        "Увеличение урона",
        "Техника"
    )
    static readonly DAMAGE_AMOUNT_NCS1 = new AbilityRealLevelField(
        RawCode.get("Ncs1"),
        "Урон",
        "Ракетный удар"
    )
    static readonly DAMAGE_INTERVAL_NCS2 = new AbilityRealLevelField(
        RawCode.get("Ncs2"),
        "Интервал урона",
        "Ракетный удар"
    )
    static readonly MAX_DAMAGE_NCS4 = new AbilityRealLevelField(
        RawCode.get("Ncs4"),
        "Макс. урон",
        "Ракетный удар"
    )
    static readonly BUILDING_DAMAGE_FACTOR_NCS5 = new AbilityRealLevelField(
        RawCode.get("Ncs5"),
        "Фактор урона зданиям",
        "Ракетный удар"
    )
    static readonly EFFECT_DURATION = new AbilityRealLevelField(
        RawCode.get("Ncs6"),
        "Время действия",
        "Ракетный удар"
    )
    static readonly SPAWN_INTERVAL_NSY1 = new AbilityRealLevelField(
        RawCode.get("Nsy1"),
        "Интверал порождения",
        "Мини-завод"
    )
    static readonly SPAWN_UNIT_DURATION = new AbilityRealLevelField(
        RawCode.get("Nsy3"),
        "Время жизни порожденного воина",
        "Мини-завод"
    )
    static readonly SPAWN_UNIT_OFFSET = new AbilityRealLevelField(
        RawCode.get("Nsy4"),
        "Смещение порожденного воина",
        "Мини-завод"
    )
    static readonly LEASH_RANGE_NSY5 = new AbilityRealLevelField(
        RawCode.get("Nsy5"),
        "Радиус подчинения",
        "Мини-завод"
    )
    static readonly SPAWN_INTERVAL_NFY1 = new AbilityRealLevelField(
        RawCode.get("Nfy1"),
        "Интервал порождения",
        "Завод"
    )
    static readonly LEASH_RANGE_NFY2 = new AbilityRealLevelField(
        RawCode.get("Nfy2"),
        "Радиус подчинения",
        "Завод"
    )
    static readonly CHANCE_TO_DEMOLISH = new AbilityRealLevelField(
        RawCode.get("Nde1"),
        "Вероятность уничтожения",
        "Разгром"
    )
    static readonly DAMAGE_MULTIPLIER_BUILDINGS = new AbilityRealLevelField(
        RawCode.get("Nde2"),
        "Увеличение урона (здания)",
        "Разгром"
    )
    static readonly DAMAGE_MULTIPLIER_UNITS = new AbilityRealLevelField(
        RawCode.get("Nde3"),
        "Увеличение урона (войска)",
        "Разгром"
    )
    static readonly DAMAGE_MULTIPLIER_HEROES = new AbilityRealLevelField(
        RawCode.get("Nde4"),
        "Увеличение урона (герои)",
        "Разгром"
    )
    static readonly BONUS_DAMAGE_MULTIPLIER = new AbilityRealLevelField(
        RawCode.get("Nic1"),
        "Доп. увеличение урона",
        "Оживший огонь"
    )
    static readonly DEATH_DAMAGE_FULL_AMOUNT = new AbilityRealLevelField(
        RawCode.get("Nic2"),
        "Посмертный урон: полный объем",
        "Оживший огонь"
    )
    static readonly DEATH_DAMAGE_FULL_AREA = new AbilityRealLevelField(
        RawCode.get("Nic3"),
        "Посмертный урон: полный радиус",
        "Оживший огонь"
    )
    static readonly DEATH_DAMAGE_HALF_AMOUNT = new AbilityRealLevelField(
        RawCode.get("Nic4"),
        "Посмертный урон: половинный объем",
        "Оживший огонь"
    )
    static readonly DEATH_DAMAGE_HALF_AREA = new AbilityRealLevelField(
        RawCode.get("Nic5"),
        "Посмертный урон: половинный радиус",
        "Оживший огонь"
    )
    static readonly DEATH_DAMAGE_DELAY = new AbilityRealLevelField(
        RawCode.get("Nic6"),
        "Посмертный урон: задержка",
        "Оживший огонь"
    )
    static readonly DAMAGE_AMOUNT_NSO1 = new AbilityRealLevelField(
        RawCode.get("Nso1"),
        "Урон",
        "Пламя Обреченности"
    )
    static readonly DAMAGE_PERIOD = new AbilityRealLevelField(
        RawCode.get("Nso2"),
        "Длительность урона",
        "Пламя Обреченности"
    )
    static readonly DAMAGE_PENALTY = new AbilityRealLevelField(
        RawCode.get("Nso3"),
        "Уменьшение урона",
        "Пламя Обреченности"
    )
    static readonly MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4 = new AbilityRealLevelField(
        RawCode.get("Nso4"),
        "Уменьшение скорости перемещения (%)",
        "Пламя Обреченности"
    )
    static readonly ATTACK_SPEED_REDUCTION_PERCENT_NSO5 = new AbilityRealLevelField(
        RawCode.get("Nso5"),
        "Уменьшение скорости боя (%)",
        "Пламя Обреченности"
    )
    static readonly SPLIT_DELAY = new AbilityRealLevelField(
        RawCode.get("Nlm2"),
        "Задержка деления",
        "Тварь из Недр"
    )
    static readonly MAX_HITPOINT_FACTOR = new AbilityRealLevelField(
        RawCode.get("Nlm4"),
        "Фактор макс. здоровья",
        "Тварь из Недр"
    )
    static readonly LIFE_DURATION_SPLIT_BONUS = new AbilityRealLevelField(
        RawCode.get("Nlm5"),
        "Деление: доп. срок жизни",
        "Тварь из Недр"
    )
    static readonly WAVE_INTERVAL = new AbilityRealLevelField(
        RawCode.get("Nvc3"),
        "Интервал между волнами",
        "Вулкан"
    )
    static readonly BUILDING_DAMAGE_FACTOR_NVC4 = new AbilityRealLevelField(
        RawCode.get("Nvc4"),
        "Фактор урона зданиям",
        "Вулкан"
    )
    static readonly FULL_DAMAGE_AMOUNT_NVC5 = new AbilityRealLevelField(
        RawCode.get("Nvc5"),
        "Полный объем урона",
        "Вулкан"
    )
    static readonly HALF_DAMAGE_FACTOR = new AbilityRealLevelField(
        RawCode.get("Nvc6"),
        "Фактор половинного урона",
        "Вулкан"
    )
    static readonly INTERVAL_BETWEEN_PULSES = new AbilityRealLevelField(
        RawCode.get("Tau5"),
        "Время между импульсами",
        "Оскорбление"
    )
}
