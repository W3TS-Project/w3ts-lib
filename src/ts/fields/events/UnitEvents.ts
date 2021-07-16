import { UnitEvent } from "../../API/fields/events/UnitEvent"

export abstract class UnitEvents {
    public static readonly DAMAGED = new UnitEvent(52)
    public static readonly DAMAGING = new UnitEvent(314)
    public static readonly DEATH = new UnitEvent(53)
    public static readonly DECAY = new UnitEvent(54)
    public static readonly DETECTED = new UnitEvent(55)
    public static readonly HIDDEN = new UnitEvent(56)
    public static readonly SELECTED = new UnitEvent(57)
    public static readonly DESELECTED = new UnitEvent(58)

    public static readonly STATE_LIMIT = new UnitEvent(59)

    // Events which may have a filter for the "other unit"
    public static readonly ACQUIRED_TARGET = new UnitEvent(60)
    public static readonly TARGET_IN_RANGE = new UnitEvent(61)
    public static readonly ATTACKED = new UnitEvent(62)
    public static readonly RESUCED = new UnitEvent(63)

    public static readonly CONSTRUCT_CANCEL = new UnitEvent(64)
    public static readonly CONSTRUCT_FINISH = new UnitEvent(65)

    public static readonly UPGRADE_START = new UnitEvent(66)
    public static readonly UPGRADE_CANCEL = new UnitEvent(67)
    public static readonly UPGRADE_FINISH = new UnitEvent(68)

    // Events which involve the specified unit performing training of other units
    public static readonly TRAIN_START = new UnitEvent(69)
    public static readonly TRAIN_CANCEL = new UnitEvent(70)
    public static readonly TRAIN_FINISH = new UnitEvent(71)

    public static readonly RESEARCH_START = new UnitEvent(72)
    public static readonly RESEARCH_CANCEL = new UnitEvent(73)
    public static readonly RESEARCH_FINISH = new UnitEvent(74)

    public static readonly ISSUED_ORDER = new UnitEvent(75)
    public static readonly ISSUED_POINT_ORDER = new UnitEvent(76)
    public static readonly ISSUED_TARGET_ORDER = new UnitEvent(77)

    public static readonly HERO_LEVEL = new UnitEvent(78)
    public static readonly HERO_SKILL = new UnitEvent(79)

    public static readonly HERO_REVIVABLE = new UnitEvent(80)
    public static readonly HERO_REVIVE_START = new UnitEvent(81)
    public static readonly HERO_REVIVE_CANCEL = new UnitEvent(82)
    public static readonly HERO_REVIVE_FINISH = new UnitEvent(83)

    public static readonly SUMMON = new UnitEvent(84)

    public static readonly DROP_ITEM = new UnitEvent(85)
    public static readonly PICK_UP_ITEM = new UnitEvent(86)
    public static readonly USE_ITEM = new UnitEvent(87)

    public static readonly LOADED = new UnitEvent(88)

    public static readonly SELL = new UnitEvent(286)
    public static readonly CHANGE_OWNER = new UnitEvent(287)
    public static readonly SELL_ITEM = new UnitEvent(288)
    public static readonly SPELL_CHANNEL = new UnitEvent(289)
    public static readonly SPELL_CAST = new UnitEvent(290)
    public static readonly SPELL_EFFECT = new UnitEvent(291)
    public static readonly SPELL_FINISH = new UnitEvent(292)
    public static readonly SPELL_END_CAST = new UnitEvent(293)
    public static readonly PAWN_ITEM = new UnitEvent(294)
}
