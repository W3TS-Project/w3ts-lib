import { AbilityBooleanLevelField } from "../../../API/fields/ability/level/AbilityBooleanLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityBooleanLevelFields {
    public static readonly PERCENT_BONUS_HAB2 = new AbilityBooleanLevelField(
        RawCode.get("Hab2"),
        "Процент повышения",
        "Чародейская аура"
    )
    public static readonly USE_TELEPORT_CLUSTERING_HMT3 = new AbilityBooleanLevelField(
        RawCode.get("Hmt3"),
        "Использовать объединение телепортов в кластеры",
        "Массовая телепортация"
    )
    public static readonly NEVER_MISS_OCR5 = new AbilityBooleanLevelField(
        RawCode.get("Ocr5"),
        "Без промаха",
        "Смертельный удар"
    )
    public static readonly EXCLUDE_ITEM_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Ocr6"),
        undefined,
        "Смертельный удар"
    )
    public static readonly BACKSTAB_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Owk4"),
        "Урон от подлого удара",
        "Стремительность"
    )
    public static readonly INHERIT_UPGRADES_UAN3 = new AbilityBooleanLevelField(
        RawCode.get("Uan3"),
        "Наследование усовершенствований",
        "Гальванизация"
    )
    public static readonly MANA_CONVERSION_AS_PERCENT = new AbilityBooleanLevelField(
        RawCode.get("Udp3"),
        "Преобразование маны (в процентах)",
        "Смертельный союз"
    )
    public static readonly LIFE_CONVERSION_AS_PERCENT = new AbilityBooleanLevelField(
        RawCode.get("Udp4"),
        "Преобразование здоровья (в процентах)",
        "Смертельный союз"
    )
    public static readonly LEAVE_TARGET_ALIVE = new AbilityBooleanLevelField(
        RawCode.get("Udp5"),
        "Оставить цель в живых",
        "Смертельный союз"
    )
    public static readonly PERCENT_BONUS_UAU3 = new AbilityBooleanLevelField(
        RawCode.get("Uau3"),
        "Процент повышения",
        "Аура Смерти"
    )
    public static readonly DAMAGE_IS_PERCENT_RECEIVED = new AbilityBooleanLevelField(
        RawCode.get("Eah2"),
        "Полученный урон в процентах",
        "Аура Возмездия"
    )
    public static readonly MELEE_BONUS = new AbilityBooleanLevelField(
        RawCode.get("Ear2"),
        "Преимущество в ближнем бою",
        "Аура Меткости"
    )
    public static readonly RANGED_BONUS = new AbilityBooleanLevelField(
        RawCode.get("Ear3"),
        "Преимущество в дальнем бою",
        "Аура Меткости"
    )
    public static readonly FLAT_BONUS = new AbilityBooleanLevelField(
        RawCode.get("Ear4"),
        "Общее преимущество",
        "Аура Меткости"
    )
    public static readonly NEVER_MISS_HBH5 = new AbilityBooleanLevelField(
        RawCode.get("Hbh5"),
        "Без промаха",
        "Сильный удар"
    )
    public static readonly PERCENT_BONUS_HAD2 = new AbilityBooleanLevelField(
        RawCode.get("Had2"),
        "Процент повышения",
        "Доспехи веры"
    )
    public static readonly CAN_DEACTIVATE = new AbilityBooleanLevelField(
        RawCode.get("Hds1"),
        "Может отменить",
        "Божественный щит"
    )
    public static readonly RAISED_UNITS_ARE_INVULNERABLE = new AbilityBooleanLevelField(
        RawCode.get("Hre2"),
        "Оживленные войска неуязвимы",
        "Воскрешение"
    )
    public static readonly PERCENTAGE_OAR2 = new AbilityBooleanLevelField(
        RawCode.get("Oar2"),
        "Процент",
        "Дух-целитель"
    )
    public static readonly SUMMON_BUSY_UNITS = new AbilityBooleanLevelField(
        RawCode.get("Btl2"),
        "Войска, занятые вызовом",
        "Боевая тревога"
    )
    public static readonly CREATES_BLIGHT = new AbilityBooleanLevelField(
        RawCode.get("Bli2"),
        "Наводит порчу",
        "Распространение порчи"
    )
    public static readonly EXPLODES_ON_DEATH = new AbilityBooleanLevelField(
        RawCode.get("Sds6"),
        "Взрыв после гибели",
        "Взорвать (подрывная бригада)"
    )
    public static readonly ALWAYS_AUTOCAST_FAE2 = new AbilityBooleanLevelField(
        RawCode.get("Fae2"),
        "Постоянное автоматическое применение",
        "Волшебный огонь"
    )
    public static readonly REGENERATE_ONLY_AT_NIGHT = new AbilityBooleanLevelField(
        RawCode.get("Mbt5"),
        "Восстановление только ночью",
        "Восстановить ману и здоровье"
    )
    public static readonly SHOW_SELECT_UNIT_BUTTON = new AbilityBooleanLevelField(
        RawCode.get("Neu3"),
        "Показать кнопку выбора боевой единицы",
        "Выбрать героя"
    )
    public static readonly SHOW_UNIT_INDICATOR = new AbilityBooleanLevelField(
        RawCode.get("Neu4"),
        "Показать индикатор боевой единицы",
        "Выбрать героя"
    )
    public static readonly CHARGE_OWNING_PLAYER = new AbilityBooleanLevelField(
        RawCode.get("Ans6"),
        "Заряд игрока-владельца",
        "Поставка ресурсов"
    )
    public static readonly PERCENTAGE_ARM2 = new AbilityBooleanLevelField(
        RawCode.get("Arm2"),
        "Процент",
        "Восстановление маны (нейтральный)"
    )
    public static readonly TARGET_IS_INVULNERABLE = new AbilityBooleanLevelField(
        RawCode.get("Pos3"),
        "Цель неуязвима",
        "Одержимость (непрерывное)"
    )
    public static readonly TARGET_IS_MAGIC_IMMUNE = new AbilityBooleanLevelField(
        RawCode.get("Pos4"),
        "Цель невосприимчива к магии",
        "Одержимость (непрерывное)"
    )
    public static readonly KILL_ON_CASTER_DEATH = new AbilityBooleanLevelField(
        RawCode.get("Ucb6"),
        "Убить после гибели мага",
        "Трупоеды"
    )
    public static readonly NO_TARGET_REQUIRED_REJ4 = new AbilityBooleanLevelField(
        RawCode.get("Rej4"),
        "Не требуется цели",
        "Омоложение"
    )
    public static readonly ACCEPTS_GOLD = new AbilityBooleanLevelField(
        RawCode.get("Rtn1"),
        "Принимает золото",
        "Вернуть золото/древесину"
    )
    public static readonly ACCEPTS_LUMBER = new AbilityBooleanLevelField(
        RawCode.get("Rtn2"),
        "Принимает древесину",
        "Вернуть золото/древесину"
    )
    public static readonly PREFER_HOSTILES_ROA5 = new AbilityBooleanLevelField(
        RawCode.get("Roa5"),
        "Предпочтение противникам",
        "Рев"
    )
    public static readonly PREFER_FRIENDLIES_ROA6 = new AbilityBooleanLevelField(
        RawCode.get("Roa6"),
        "Предпочтение союзникам",
        "Рев"
    )
    public static readonly ROOTED_TURNING = new AbilityBooleanLevelField(
        RawCode.get("Roo3"),
        "Укоренившееся древо: поворот",
        "Пустить корни"
    )
    public static readonly ALWAYS_AUTOCAST_SLO3 = new AbilityBooleanLevelField(
        RawCode.get("Slo3"),
        "Скрыть кнопку",
        "Замедление"
    )
    public static readonly HIDE_BUTTON = new AbilityBooleanLevelField(
        RawCode.get("Ihid"),
        "Скрыть кнопку",
        "Повышение характеристик"
    )
    public static readonly USE_TELEPORT_CLUSTERING_ITP2 = new AbilityBooleanLevelField(
        RawCode.get("Itp2"),
        "Использовать объединение телепортов в кластеры",
        "Предмет: Возвращение"
    )
    public static readonly IMMUNE_TO_MORPH_EFFECTS = new AbilityBooleanLevelField(
        RawCode.get("Eth1"),
        "Иммунитет к эффектам трансформации",
        "Дух (видимый)"
    )
    public static readonly DOES_NOT_BLOCK_BUILDINGS = new AbilityBooleanLevelField(
        RawCode.get("Eth2"),
        "Не блокирует здания",
        "Дух (видимый)"
    )
    public static readonly AUTO_ACQUIRE_ATTACK_TARGETS = new AbilityBooleanLevelField(
        RawCode.get("Gho1"),
        "Автонахождение целей атаки",
        "Дух"
    )
    public static readonly IMMUNE_TO_MORPH_EFFECTS_GHO2 = new AbilityBooleanLevelField(
        RawCode.get("Gho2"),
        "Иммунитет к эффектам трансформации",
        "Дух"
    )
    public static readonly DO_NOT_BLOCK_BUILDINGS = new AbilityBooleanLevelField(
        RawCode.get("Gho3"),
        "Не блокирует здания",
        "Дух"
    )
    public static readonly INCLUDE_RANGED_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Ssk4"),
        "Включая урон в дальнем бою",
        "Каменные доспехи"
    )
    public static readonly INCLUDE_MELEE_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Ssk5"),
        "Включая урон в ближнем бою",
        "Каменные доспехи"
    )
    public static readonly MOVE_TO_PARTNER = new AbilityBooleanLevelField(
        RawCode.get("coa2"),
        "К партнеру",
        "Оседлать гиппогрифа"
    )
    public static readonly CAN_BE_DISPELLED = new AbilityBooleanLevelField(
        RawCode.get("cyc1"),
        "Можно рассеять",
        "Смерч"
    )
    public static readonly IGNORE_FRIENDLY_BUFFS = new AbilityBooleanLevelField(
        RawCode.get("dvm6"),
        "Невосприимчивость к дружественным заклинаниям",
        "Поглощение чар"
    )
    public static readonly DROP_ITEMS_ON_DEATH = new AbilityBooleanLevelField(
        RawCode.get("inv2"),
        "Бросить предметы после смерти",
        "Предметы (герой)"
    )
    public static readonly CAN_USE_ITEMS = new AbilityBooleanLevelField(
        RawCode.get("inv3"),
        "Может использовать предметы",
        "Предметы (герой)"
    )
    public static readonly CAN_GET_ITEMS = new AbilityBooleanLevelField(
        RawCode.get("inv4"),
        "Может подобрать предметы",
        "Предметы (герой)"
    )
    public static readonly CAN_DROP_ITEMS = new AbilityBooleanLevelField(
        RawCode.get("inv5"),
        "Может бросить предметы",
        "Предметы (герой)"
    )
    public static readonly REPAIRS_ALLOWED = new AbilityBooleanLevelField(
        RawCode.get("liq4"),
        "Возможно восстановление",
        "Жидкий огонь"
    )
    public static readonly CASTER_ONLY_SPLASH = new AbilityBooleanLevelField(
        RawCode.get("mfl6"),
        "Побочный урон - только магу",
        "Заклинание Крови"
    )
    public static readonly NO_TARGET_REQUIRED_IRL4 = new AbilityBooleanLevelField(
        RawCode.get("irl4"),
        "Не требуется цели",
        "Лечебный эликсир"
    )
    public static readonly DISPEL_ON_ATTACK = new AbilityBooleanLevelField(
        RawCode.get("irl5"),
        "Рассеивание при атаке",
        "Лечебный эликсир"
    )
    public static readonly AMOUNT_IS_RAW_VALUE = new AbilityBooleanLevelField(
        RawCode.get("ipv3"),
        "Объем - чистое значение",
        "Зелье Вампиризма"
    )
    public static readonly SHARED_SPELL_COOLDOWN = new AbilityBooleanLevelField(
        RawCode.get("spb2"),
        "Перезарядка общего заклинания",
        "Книга заклинаний"
    )
    public static readonly SLEEP_ONCE = new AbilityBooleanLevelField(
        RawCode.get("sla1"),
        "Спит всегда",
        "Спит всегда"
    )
    public static readonly ALLOW_ON_ANY_PLAYER_SLOT = new AbilityBooleanLevelField(
        RawCode.get("sla2"),
        "Допустимо для любой ячейки игрока",
        "Спит всегда"
    )
    public static readonly DISABLE_OTHER_ABILITIES = new AbilityBooleanLevelField(
        RawCode.get("Ncl5"),
        "Отключить прочие способности",
        "Канал"
    )
    public static readonly ALLOW_BOUNTY = new AbilityBooleanLevelField(
        RawCode.get("Ntm4"),
        "Награда за убийство",
        "Трансмутация"
    )
}
