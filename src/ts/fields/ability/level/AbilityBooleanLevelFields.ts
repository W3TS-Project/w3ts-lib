import { AbilityBooleanLevelField } from "../../../API/fields/ability/level/AbilityBooleanLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityBooleanLevelFields {
    public static readonly PERCENT_BONUS_HAB2 = new AbilityBooleanLevelField(
        new RawCode("Hab2"),
        "Процент повышения",
        "Чародейская аура"
    )
    public static readonly USE_TELEPORT_CLUSTERING_HMT3 = new AbilityBooleanLevelField(
        new RawCode("Hmt3"),
        "Использовать объединение телепортов в кластеры",
        "Массовая телепортация"
    )
    public static readonly NEVER_MISS_OCR5 = new AbilityBooleanLevelField(
        new RawCode("Ocr5"),
        "Без промаха",
        "Смертельный удар"
    )
    public static readonly EXCLUDE_ITEM_DAMAGE = new AbilityBooleanLevelField(
        new RawCode("Ocr6"),
        undefined,
        "Смертельный удар"
    )
    public static readonly BACKSTAB_DAMAGE = new AbilityBooleanLevelField(
        new RawCode("Owk4"),
        "Урон от подлого удара",
        "Стремительность"
    )
    public static readonly INHERIT_UPGRADES_UAN3 = new AbilityBooleanLevelField(
        new RawCode("Uan3"),
        "Наследование усовершенствований",
        "Гальванизация"
    )
    public static readonly MANA_CONVERSION_AS_PERCENT = new AbilityBooleanLevelField(
        new RawCode("Udp3"),
        "Преобразование маны AbilityBooleanLevelField(new RawCode(в процентах)",
        "Смертельный союз"
    )
    public static readonly LIFE_CONVERSION_AS_PERCENT = new AbilityBooleanLevelField(
        new RawCode("Udp4"),
        "Преобразование здоровья AbilityBooleanLevelField(new RawCode(в процентах)",
        "Смертельный союз"
    )
    public static readonly LEAVE_TARGET_ALIVE = new AbilityBooleanLevelField(
        new RawCode("Udp5"),
        "Оставить цель в живых",
        "Смертельный союз"
    )
    public static readonly PERCENT_BONUS_UAU3 = new AbilityBooleanLevelField(
        new RawCode("Uau3"),
        "Процент повышения",
        "Аура Смерти"
    )
    public static readonly DAMAGE_IS_PERCENT_RECEIVED = new AbilityBooleanLevelField(
        new RawCode("Eah2"),
        "Полученный урон в процентах",
        "Аура Возмездия"
    )
    public static readonly MELEE_BONUS = new AbilityBooleanLevelField(
        new RawCode("Ear2"),
        "Преимущество в ближнем бою",
        "Аура Меткости"
    )
    public static readonly RANGED_BONUS = new AbilityBooleanLevelField(
        new RawCode("Ear3"),
        "Преимущество в дальнем бою",
        "Аура Меткости"
    )
    public static readonly FLAT_BONUS = new AbilityBooleanLevelField(
        new RawCode("Ear4"),
        "Общее преимущество",
        "Аура Меткости"
    )
    public static readonly NEVER_MISS_HBH5 = new AbilityBooleanLevelField(
        new RawCode("Hbh5"),
        "Без промаха",
        "Сильный удар"
    )
    public static readonly PERCENT_BONUS_HAD2 = new AbilityBooleanLevelField(
        new RawCode("Had2"),
        "Процент повышения",
        "Доспехи веры"
    )
    public static readonly CAN_DEACTIVATE = new AbilityBooleanLevelField(
        new RawCode("Hds1"),
        "Может отменить",
        "Божественный щит"
    )
    public static readonly RAISED_UNITS_ARE_INVULNERABLE = new AbilityBooleanLevelField(
        new RawCode("Hre2"),
        "Оживленные войска неуязвимы",
        "Воскрешение"
    )
    public static readonly PERCENTAGE_OAR2 = new AbilityBooleanLevelField(
        new RawCode("Oar2"),
        "Процент",
        "Дух-целитель"
    )
    public static readonly SUMMON_BUSY_UNITS = new AbilityBooleanLevelField(
        new RawCode("Btl2"),
        "Войска, занятые вызовом",
        "Боевая тревога"
    )
    public static readonly CREATES_BLIGHT = new AbilityBooleanLevelField(
        new RawCode("Bli2"),
        "Наводит порчу",
        "Распространение порчи"
    )
    public static readonly EXPLODES_ON_DEATH = new AbilityBooleanLevelField(
        new RawCode("Sds6"),
        "Взрыв после гибели",
        "Взорвать AbilityBooleanLevelField(new RawCode(подрывная бригада)"
    )
    public static readonly ALWAYS_AUTOCAST_FAE2 = new AbilityBooleanLevelField(
        new RawCode("Fae2"),
        "Постоянное автоматическое применение",
        "Волшебный огонь"
    )
    public static readonly REGENERATE_ONLY_AT_NIGHT = new AbilityBooleanLevelField(
        new RawCode("Mbt5"),
        "Восстановление только ночью",
        "Восстановить ману и здоровье"
    )
    public static readonly SHOW_SELECT_UNIT_BUTTON = new AbilityBooleanLevelField(
        new RawCode("Neu3"),
        "Показать кнопку выбора боевой единицы",
        "Выбрать героя"
    )
    public static readonly SHOW_UNIT_INDICATOR = new AbilityBooleanLevelField(
        new RawCode("Neu4"),
        "Показать индикатор боевой единицы",
        "Выбрать героя"
    )
    public static readonly CHARGE_OWNING_PLAYER = new AbilityBooleanLevelField(
        new RawCode("Ans6"),
        "Заряд игрока-владельца",
        "Поставка ресурсов"
    )
    public static readonly PERCENTAGE_ARM2 = new AbilityBooleanLevelField(
        new RawCode("Arm2"),
        "Процент",
        "Восстановление маны AbilityBooleanLevelField(new RawCode(нейтральный)"
    )
    public static readonly TARGET_IS_INVULNERABLE = new AbilityBooleanLevelField(
        new RawCode("Pos3"),
        "Цель неуязвима",
        "Одержимость AbilityBooleanLevelField(new RawCode(непрерывное)"
    )
    public static readonly TARGET_IS_MAGIC_IMMUNE = new AbilityBooleanLevelField(
        new RawCode("Pos4"),
        "Цель невосприимчива к магии",
        "Одержимость AbilityBooleanLevelField(new RawCode(непрерывное)"
    )
    public static readonly KILL_ON_CASTER_DEATH = new AbilityBooleanLevelField(
        new RawCode("Ucb6"),
        "Убить после гибели мага",
        "Трупоеды"
    )
    public static readonly NO_TARGET_REQUIRED_REJ4 = new AbilityBooleanLevelField(
        new RawCode("Rej4"),
        "Не требуется цели",
        "Омоложение"
    )
    public static readonly ACCEPTS_GOLD = new AbilityBooleanLevelField(
        new RawCode("Rtn1"),
        "Принимает золото",
        "Вернуть золото/древесину"
    )
    public static readonly ACCEPTS_LUMBER = new AbilityBooleanLevelField(
        new RawCode("Rtn2"),
        "Принимает древесину",
        "Вернуть золото/древесину"
    )
    public static readonly PREFER_HOSTILES_ROA5 = new AbilityBooleanLevelField(
        new RawCode("Roa5"),
        "Предпочтение противникам",
        "Рев"
    )
    public static readonly PREFER_FRIENDLIES_ROA6 = new AbilityBooleanLevelField(
        new RawCode("Roa6"),
        "Предпочтение союзникам",
        "Рев"
    )
    public static readonly ROOTED_TURNING = new AbilityBooleanLevelField(
        new RawCode("Roo3"),
        "Укоренившееся древо: поворот",
        "Пустить корни"
    )
    public static readonly ALWAYS_AUTOCAST_SLO3 = new AbilityBooleanLevelField(
        new RawCode("Slo3"),
        "Скрыть кнопку",
        "Замедление"
    )
    public static readonly HIDE_BUTTON = new AbilityBooleanLevelField(
        new RawCode("Ihid"),
        "Скрыть кнопку",
        "Повышение характеристик"
    )
    public static readonly USE_TELEPORT_CLUSTERING_ITP2 = new AbilityBooleanLevelField(
        new RawCode("Itp2"),
        "Использовать объединение телепортов в кластеры",
        "Предмет: Возвращение"
    )
    public static readonly IMMUNE_TO_MORPH_EFFECTS = new AbilityBooleanLevelField(
        new RawCode("Eth1"),
        "Иммунитет к эффектам трансформации",
        "Дух AbilityBooleanLevelField(new RawCode(видимый)"
    )
    public static readonly DOES_NOT_BLOCK_BUILDINGS = new AbilityBooleanLevelField(
        new RawCode("Eth2"),
        "Не блокирует здания",
        "Дух AbilityBooleanLevelField(new RawCode(видимый)"
    )
    public static readonly AUTO_ACQUIRE_ATTACK_TARGETS = new AbilityBooleanLevelField(
        new RawCode("Gho1"),
        "Автонахождение целей атаки",
        "Дух"
    )
    public static readonly IMMUNE_TO_MORPH_EFFECTS_GHO2 = new AbilityBooleanLevelField(
        new RawCode("Gho2"),
        "Иммунитет к эффектам трансформации",
        "Дух"
    )
    public static readonly DO_NOT_BLOCK_BUILDINGS = new AbilityBooleanLevelField(
        new RawCode("Gho3"),
        "Не блокирует здания",
        "Дух"
    )
    public static readonly INCLUDE_RANGED_DAMAGE = new AbilityBooleanLevelField(
        new RawCode("Ssk4"),
        "Включая урон в дальнем бою",
        "Каменные доспехи"
    )
    public static readonly INCLUDE_MELEE_DAMAGE = new AbilityBooleanLevelField(
        new RawCode("Ssk5"),
        "Включая урон в ближнем бою",
        "Каменные доспехи"
    )
    public static readonly MOVE_TO_PARTNER = new AbilityBooleanLevelField(
        new RawCode("coa2"),
        "К партнеру",
        "Оседлать гиппогрифа"
    )
    public static readonly CAN_BE_DISPELLED = new AbilityBooleanLevelField(
        new RawCode("cyc1"),
        "Можно рассеять",
        "Смерч"
    )
    public static readonly IGNORE_FRIENDLY_BUFFS = new AbilityBooleanLevelField(
        new RawCode("dvm6"),
        "Невосприимчивость к дружественным заклинаниям",
        "Поглощение чар"
    )
    public static readonly DROP_ITEMS_ON_DEATH = new AbilityBooleanLevelField(
        new RawCode("inv2"),
        "Бросить предметы после смерти",
        "Предметы AbilityBooleanLevelField(new RawCode(герой)"
    )
    public static readonly CAN_USE_ITEMS = new AbilityBooleanLevelField(
        new RawCode("inv3"),
        "Может использовать предметы",
        "Предметы AbilityBooleanLevelField(new RawCode(герой)"
    )
    public static readonly CAN_GET_ITEMS = new AbilityBooleanLevelField(
        new RawCode("inv4"),
        "Может подобрать предметы",
        "Предметы AbilityBooleanLevelField(new RawCode(герой)"
    )
    public static readonly CAN_DROP_ITEMS = new AbilityBooleanLevelField(
        new RawCode("inv5"),
        "Может бросить предметы",
        "Предметы AbilityBooleanLevelField(new RawCode(герой)"
    )
    public static readonly REPAIRS_ALLOWED = new AbilityBooleanLevelField(
        new RawCode("liq4"),
        "Возможно восстановление",
        "Жидкий огонь"
    )
    public static readonly CASTER_ONLY_SPLASH = new AbilityBooleanLevelField(
        new RawCode("mfl6"),
        "Побочный урон - только магу",
        "Заклинание Крови"
    )
    public static readonly NO_TARGET_REQUIRED_IRL4 = new AbilityBooleanLevelField(
        new RawCode("irl4"),
        "Не требуется цели",
        "Лечебный эликсир"
    )
    public static readonly DISPEL_ON_ATTACK = new AbilityBooleanLevelField(
        new RawCode("irl5"),
        "Рассеивание при атаке",
        "Лечебный эликсир"
    )
    public static readonly AMOUNT_IS_RAW_VALUE = new AbilityBooleanLevelField(
        new RawCode("ipv3"),
        "Объем - чистое значение",
        "Зелье Вампиризма"
    )
    public static readonly SHARED_SPELL_COOLDOWN = new AbilityBooleanLevelField(
        new RawCode("spb2"),
        "Перезарядка общего заклинания",
        "Книга заклинаний"
    )
    public static readonly SLEEP_ONCE = new AbilityBooleanLevelField(
        new RawCode("sla1"),
        "Спит всегда",
        "Спит всегда"
    )
    public static readonly ALLOW_ON_ANY_PLAYER_SLOT = new AbilityBooleanLevelField(
        new RawCode("sla2"),
        "Допустимо для любой ячейки игрока",
        "Спит всегда"
    )
    public static readonly DISABLE_OTHER_ABILITIES = new AbilityBooleanLevelField(
        new RawCode("Ncl5"),
        "Отключить прочие способности",
        "Канал"
    )
    public static readonly ALLOW_BOUNTY = new AbilityBooleanLevelField(
        new RawCode("Ntm4"),
        "Награда за убийство",
        "Трансмутация"
    )
}
