import { UnitEvent } from "../../API/fields/events/UnitEvent"

export abstract class UnitEvents {
    static readonly DAMAGED = UnitEvent.convert(52)
    static readonly DAMAGING = UnitEvent.convert(314)
    static readonly DEATH = UnitEvent.convert(53)
    static readonly DECAY = UnitEvent.convert(54)
    static readonly DETECTED = UnitEvent.convert(55)
    static readonly HIDDEN = UnitEvent.convert(56)
    static readonly SELECTED = UnitEvent.convert(57)
    static readonly DESELECTED = UnitEvent.convert(58)

    static readonly STATE_LIMIT = UnitEvent.convert(59)

    // Events which may have a filter for the "other unit"
    static readonly ACQUIRED_TARGET = UnitEvent.convert(60)
    static readonly TARGET_IN_RANGE = UnitEvent.convert(61)
    static readonly ATTACKED = UnitEvent.convert(62)
    static readonly RESCUED = UnitEvent.convert(63)

    static readonly CONSTRUCT_CANCEL = UnitEvent.convert(64)
    static readonly CONSTRUCT_FINISH = UnitEvent.convert(65)

    static readonly UPGRADE_START = UnitEvent.convert(66)
    static readonly UPGRADE_CANCEL = UnitEvent.convert(67)
    static readonly UPGRADE_FINISH = UnitEvent.convert(68)

    // Events which involve the specified unit performing training of other units
    static readonly TRAIN_START = UnitEvent.convert(69)
    static readonly TRAIN_CANCEL = UnitEvent.convert(70)
    static readonly TRAIN_FINISH = UnitEvent.convert(71)

    static readonly RESEARCH_START = UnitEvent.convert(72)
    static readonly RESEARCH_CANCEL = UnitEvent.convert(73)
    static readonly RESEARCH_FINISH = UnitEvent.convert(74)

    static readonly ISSUED_ORDER = UnitEvent.convert(75)
    static readonly ISSUED_POINT_ORDER = UnitEvent.convert(76)
    static readonly ISSUED_TARGET_ORDER = UnitEvent.convert(77)

    static readonly HERO_LEVEL = UnitEvent.convert(78)
    static readonly HERO_SKILL = UnitEvent.convert(79)

    static readonly HERO_REVIVABLE = UnitEvent.convert(80)
    static readonly HERO_REVIVE_START = UnitEvent.convert(81)
    static readonly HERO_REVIVE_CANCEL = UnitEvent.convert(82)
    static readonly HERO_REVIVE_FINISH = UnitEvent.convert(83)

    static readonly SUMMON = UnitEvent.convert(84)

    static readonly DROP_ITEM = UnitEvent.convert(85)
    static readonly PICK_UP_ITEM = UnitEvent.convert(86)
    static readonly USE_ITEM = UnitEvent.convert(87)

    static readonly LOADED = UnitEvent.convert(88)

    static readonly SELL = UnitEvent.convert(286)
    static readonly CHANGE_OWNER = UnitEvent.convert(287)
    static readonly SELL_ITEM = UnitEvent.convert(288)
    static readonly SPELL_CHANNEL = UnitEvent.convert(289)
    static readonly SPELL_CAST = UnitEvent.convert(290)
    static readonly SPELL_EFFECT = UnitEvent.convert(291)
    static readonly SPELL_FINISH = UnitEvent.convert(292)
    static readonly SPELL_END_CAST = UnitEvent.convert(293)
    static readonly PAWN_ITEM = UnitEvent.convert(294)
}
