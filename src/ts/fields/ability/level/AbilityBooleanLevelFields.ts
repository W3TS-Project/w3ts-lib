import { AbilityBooleanLevelField } from "../../../API/fields/ability/level/AbilityBooleanLevelField"
import { RawCode } from "../../../RawCode"

export abstract class AbilityBooleanLevelFields {
    static readonly PERCENT_BONUS_HAB2 = new AbilityBooleanLevelField(
        RawCode.get("Hab2"),
        "Процент повышения",
        "Чародейская аура"
    )
    static readonly USE_TELEPORT_CLUSTERING_HMT3 = new AbilityBooleanLevelField(
        RawCode.get("Hmt3"),
        "Использовать объединение телепортов в кластеры",
        "Массовая телепортация"
    )
    static readonly NEVER_MISS_OCR5 = new AbilityBooleanLevelField(
        RawCode.get("Ocr5"),
        "Без промаха",
        "Смертельный удар"
    )
    static readonly EXCLUDE_ITEM_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Ocr6"),
        undefined,
        "Смертельный удар"
    )
    static readonly BACKSTAB_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Owk4"),
        "Урон от подлого удара",
        "Стремительность"
    )
    static readonly INHERIT_UPGRADES_UAN3 = new AbilityBooleanLevelField(
        RawCode.get("Uan3"),
        "Наследование усовершенствований",
        "Гальванизация"
    )
    static readonly MANA_CONVERSION_AS_PERCENT = new AbilityBooleanLevelField(
        RawCode.get("Udp3"),
        "Преобразование маны (в процентах)",
        "Смертельный союз"
    )
    static readonly LIFE_CONVERSION_AS_PERCENT = new AbilityBooleanLevelField(
        RawCode.get("Udp4"),
        "Преобразование здоровья (в процентах)",
        "Смертельный союз"
    )
    static readonly LEAVE_TARGET_ALIVE = new AbilityBooleanLevelField(
        RawCode.get("Udp5"),
        "Оставить цель в живых",
        "Смертельный союз"
    )
    static readonly PERCENT_BONUS_UAU3 = new AbilityBooleanLevelField(
        RawCode.get("Uau3"),
        "Процент повышения",
        "Аура Смерти"
    )
    static readonly DAMAGE_IS_PERCENT_RECEIVED = new AbilityBooleanLevelField(
        RawCode.get("Eah2"),
        "Полученный урон в процентах",
        "Аура Возмездия"
    )
    static readonly MELEE_BONUS = new AbilityBooleanLevelField(
        RawCode.get("Ear2"),
        "Преимущество в ближнем бою",
        "Аура Меткости"
    )
    static readonly RANGED_BONUS = new AbilityBooleanLevelField(
        RawCode.get("Ear3"),
        "Преимущество в дальнем бою",
        "Аура Меткости"
    )
    static readonly FLAT_BONUS = new AbilityBooleanLevelField(
        RawCode.get("Ear4"),
        "Общее преимущество",
        "Аура Меткости"
    )
    static readonly NEVER_MISS_HBH5 = new AbilityBooleanLevelField(
        RawCode.get("Hbh5"),
        "Без промаха",
        "Сильный удар"
    )
    static readonly PERCENT_BONUS_HAD2 = new AbilityBooleanLevelField(
        RawCode.get("Had2"),
        "Процент повышения",
        "Доспехи веры"
    )
    static readonly CAN_DEACTIVATE = new AbilityBooleanLevelField(
        RawCode.get("Hds1"),
        "Может отменить",
        "Божественный щит"
    )
    static readonly RAISED_UNITS_ARE_INVULNERABLE = new AbilityBooleanLevelField(
        RawCode.get("Hre2"),
        "Оживленные войска неуязвимы",
        "Воскрешение"
    )
    static readonly PERCENTAGE_OAR2 = new AbilityBooleanLevelField(
        RawCode.get("Oar2"),
        "Процент",
        "Дух-целитель"
    )
    static readonly SUMMON_BUSY_UNITS = new AbilityBooleanLevelField(
        RawCode.get("Btl2"),
        "Войска, занятые вызовом",
        "Боевая тревога"
    )
    static readonly CREATES_BLIGHT = new AbilityBooleanLevelField(
        RawCode.get("Bli2"),
        "Наводит порчу",
        "Распространение порчи"
    )
    static readonly EXPLODES_ON_DEATH = new AbilityBooleanLevelField(
        RawCode.get("Sds6"),
        "Взрыв после гибели",
        "Взорвать (подрывная бригада)"
    )
    static readonly ALWAYS_AUTOCAST_FAE2 = new AbilityBooleanLevelField(
        RawCode.get("Fae2"),
        "Постоянное автоматическое применение",
        "Волшебный огонь"
    )
    static readonly REGENERATE_ONLY_AT_NIGHT = new AbilityBooleanLevelField(
        RawCode.get("Mbt5"),
        "Восстановление только ночью",
        "Восстановить ману и здоровье"
    )
    static readonly SHOW_SELECT_UNIT_BUTTON = new AbilityBooleanLevelField(
        RawCode.get("Neu3"),
        "Показать кнопку выбора боевой единицы",
        "Выбрать героя"
    )
    static readonly SHOW_UNIT_INDICATOR = new AbilityBooleanLevelField(
        RawCode.get("Neu4"),
        "Показать индикатор боевой единицы",
        "Выбрать героя"
    )
    static readonly CHARGE_OWNING_PLAYER = new AbilityBooleanLevelField(
        RawCode.get("Ans6"),
        "Заряд игрока-владельца",
        "Поставка ресурсов"
    )
    static readonly PERCENTAGE_ARM2 = new AbilityBooleanLevelField(
        RawCode.get("Arm2"),
        "Процент",
        "Восстановление маны (нейтральный)"
    )
    static readonly TARGET_IS_INVULNERABLE = new AbilityBooleanLevelField(
        RawCode.get("Pos3"),
        "Цель неуязвима",
        "Одержимость (непрерывное)"
    )
    static readonly TARGET_IS_MAGIC_IMMUNE = new AbilityBooleanLevelField(
        RawCode.get("Pos4"),
        "Цель невосприимчива к магии",
        "Одержимость (непрерывное)"
    )
    static readonly KILL_ON_CASTER_DEATH = new AbilityBooleanLevelField(
        RawCode.get("Ucb6"),
        "Убить после гибели мага",
        "Трупоеды"
    )
    static readonly NO_TARGET_REQUIRED_REJ4 = new AbilityBooleanLevelField(
        RawCode.get("Rej4"),
        "Не требуется цели",
        "Омоложение"
    )
    static readonly ACCEPTS_GOLD = new AbilityBooleanLevelField(
        RawCode.get("Rtn1"),
        "Принимает золото",
        "Вернуть золото/древесину"
    )
    static readonly ACCEPTS_LUMBER = new AbilityBooleanLevelField(
        RawCode.get("Rtn2"),
        "Принимает древесину",
        "Вернуть золото/древесину"
    )
    static readonly PREFER_HOSTILES_ROA5 = new AbilityBooleanLevelField(
        RawCode.get("Roa5"),
        "Предпочтение противникам",
        "Рев"
    )
    static readonly PREFER_FRIENDLIES_ROA6 = new AbilityBooleanLevelField(
        RawCode.get("Roa6"),
        "Предпочтение союзникам",
        "Рев"
    )
    static readonly ROOTED_TURNING = new AbilityBooleanLevelField(
        RawCode.get("Roo3"),
        "Укоренившееся древо: поворот",
        "Пустить корни"
    )
    static readonly ALWAYS_AUTOCAST_SLO3 = new AbilityBooleanLevelField(
        RawCode.get("Slo3"),
        "Скрыть кнопку",
        "Замедление"
    )
    static readonly HIDE_BUTTON = new AbilityBooleanLevelField(
        RawCode.get("Ihid"),
        "Скрыть кнопку",
        "Повышение характеристик"
    )
    static readonly USE_TELEPORT_CLUSTERING_ITP2 = new AbilityBooleanLevelField(
        RawCode.get("Itp2"),
        "Использовать объединение телепортов в кластеры",
        "Предмет: Возвращение"
    )
    static readonly IMMUNE_TO_MORPH_EFFECTS = new AbilityBooleanLevelField(
        RawCode.get("Eth1"),
        "Иммунитет к эффектам трансформации",
        "Дух (видимый)"
    )
    static readonly DOES_NOT_BLOCK_BUILDINGS = new AbilityBooleanLevelField(
        RawCode.get("Eth2"),
        "Не блокирует здания",
        "Дух (видимый)"
    )
    static readonly AUTO_ACQUIRE_ATTACK_TARGETS = new AbilityBooleanLevelField(
        RawCode.get("Gho1"),
        "Автонахождение целей атаки",
        "Дух"
    )
    static readonly IMMUNE_TO_MORPH_EFFECTS_GHO2 = new AbilityBooleanLevelField(
        RawCode.get("Gho2"),
        "Иммунитет к эффектам трансформации",
        "Дух"
    )
    static readonly DO_NOT_BLOCK_BUILDINGS = new AbilityBooleanLevelField(
        RawCode.get("Gho3"),
        "Не блокирует здания",
        "Дух"
    )
    static readonly INCLUDE_RANGED_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Ssk4"),
        "Включая урон в дальнем бою",
        "Каменные доспехи"
    )
    static readonly INCLUDE_MELEE_DAMAGE = new AbilityBooleanLevelField(
        RawCode.get("Ssk5"),
        "Включая урон в ближнем бою",
        "Каменные доспехи"
    )
    static readonly MOVE_TO_PARTNER = new AbilityBooleanLevelField(
        RawCode.get("coa2"),
        "К партнеру",
        "Оседлать гиппогрифа"
    )
    static readonly CAN_BE_DISPELLED = new AbilityBooleanLevelField(
        RawCode.get("cyc1"),
        "Можно рассеять",
        "Смерч"
    )
    static readonly IGNORE_FRIENDLY_BUFFS = new AbilityBooleanLevelField(
        RawCode.get("dvm6"),
        "Невосприимчивость к дружественным заклинаниям",
        "Поглощение чар"
    )
    static readonly DROP_ITEMS_ON_DEATH = new AbilityBooleanLevelField(
        RawCode.get("inv2"),
        "Бросить предметы после смерти",
        "Предметы (герой)"
    )
    static readonly CAN_USE_ITEMS = new AbilityBooleanLevelField(
        RawCode.get("inv3"),
        "Может использовать предметы",
        "Предметы (герой)"
    )
    static readonly CAN_GET_ITEMS = new AbilityBooleanLevelField(
        RawCode.get("inv4"),
        "Может подобрать предметы",
        "Предметы (герой)"
    )
    static readonly CAN_DROP_ITEMS = new AbilityBooleanLevelField(
        RawCode.get("inv5"),
        "Может бросить предметы",
        "Предметы (герой)"
    )
    static readonly REPAIRS_ALLOWED = new AbilityBooleanLevelField(
        RawCode.get("liq4"),
        "Возможно восстановление",
        "Жидкий огонь"
    )
    static readonly CASTER_ONLY_SPLASH = new AbilityBooleanLevelField(
        RawCode.get("mfl6"),
        "Побочный урон - только магу",
        "Заклинание Крови"
    )
    static readonly NO_TARGET_REQUIRED_IRL4 = new AbilityBooleanLevelField(
        RawCode.get("irl4"),
        "Не требуется цели",
        "Лечебный эликсир"
    )
    static readonly DISPEL_ON_ATTACK = new AbilityBooleanLevelField(
        RawCode.get("irl5"),
        "Рассеивание при атаке",
        "Лечебный эликсир"
    )
    static readonly AMOUNT_IS_RAW_VALUE = new AbilityBooleanLevelField(
        RawCode.get("ipv3"),
        "Объем - чистое значение",
        "Зелье Вампиризма"
    )
    static readonly SHARED_SPELL_COOLDOWN = new AbilityBooleanLevelField(
        RawCode.get("spb2"),
        "Перезарядка общего заклинания",
        "Книга заклинаний"
    )
    static readonly SLEEP_ONCE = new AbilityBooleanLevelField(
        RawCode.get("sla1"),
        "Спит всегда",
        "Спит всегда"
    )
    static readonly ALLOW_ON_ANY_PLAYER_SLOT = new AbilityBooleanLevelField(
        RawCode.get("sla2"),
        "Допустимо для любой ячейки игрока",
        "Спит всегда"
    )
    static readonly DISABLE_OTHER_ABILITIES = new AbilityBooleanLevelField(
        RawCode.get("Ncl5"),
        "Отключить прочие способности",
        "Канал"
    )
    static readonly ALLOW_BOUNTY = new AbilityBooleanLevelField(
        RawCode.get("Ntm4"),
        "Награда за убийство",
        "Трансмутация"
    )
}
