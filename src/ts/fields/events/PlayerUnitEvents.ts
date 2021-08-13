import { PlayerUnitEvent } from "../../API/fields/events/PlayerUnitEvent"

export abstract class PlayerUnitEvents {
    static readonly ATTACKED = PlayerUnitEvent.convert(18)
    static readonly RESCUED = PlayerUnitEvent.convert(19)

    static readonly DEATH = PlayerUnitEvent.convert(20)
    static readonly DECAY = PlayerUnitEvent.convert(21)

    static readonly DETECTED = PlayerUnitEvent.convert(22)
    static readonly HIDDEN = PlayerUnitEvent.convert(23)

    static readonly SELECTED = PlayerUnitEvent.convert(24)
    static readonly DESELECTED = PlayerUnitEvent.convert(25)

    static readonly CONSTRUCT_START = PlayerUnitEvent.convert(26)
    static readonly CONSTRUCT_CANCEL = PlayerUnitEvent.convert(27)
    static readonly CONSTRUCT_FINISH = PlayerUnitEvent.convert(28)

    static readonly UPGRADE_START = PlayerUnitEvent.convert(29)
    static readonly UPGRADE_CANCEL = PlayerUnitEvent.convert(30)
    static readonly UPGRADE_FINISH = PlayerUnitEvent.convert(31)

    static readonly TRAIN_START = PlayerUnitEvent.convert(32)
    static readonly TRAIN_CANCEL = PlayerUnitEvent.convert(33)
    static readonly TRAIN_FINISH = PlayerUnitEvent.convert(34)

    static readonly RESEARCH_START = PlayerUnitEvent.convert(35)
    static readonly RESEARCH_CANCEL = PlayerUnitEvent.convert(36)
    static readonly RESEARCH_FINISH = PlayerUnitEvent.convert(37)
    static readonly ISSUED_ORDER = PlayerUnitEvent.convert(38)
    static readonly ISSUED_POINT_ORDER = PlayerUnitEvent.convert(39)
    static readonly ISSUED_TARGET_ORDER = PlayerUnitEvent.convert(40)
    static readonly ISSUED_UNIT_ORDER = PlayerUnitEvent.convert(40)

    static readonly HERO_LEVEL = PlayerUnitEvent.convert(41)
    static readonly HERO_SKILL = PlayerUnitEvent.convert(42)

    static readonly HERO_REVIVABLE = PlayerUnitEvent.convert(43)

    static readonly HERO_REVIVE_START = PlayerUnitEvent.convert(44)
    static readonly HERO_REVIVE_CANCEL = PlayerUnitEvent.convert(45)
    static readonly HERO_REVIVE_FINISH = PlayerUnitEvent.convert(46)
    static readonly SUMMON = PlayerUnitEvent.convert(47)
    static readonly DROP_ITEM = PlayerUnitEvent.convert(48)
    static readonly PICK_UP_ITEM = PlayerUnitEvent.convert(49)
    static readonly USE_ITEM = PlayerUnitEvent.convert(50)

    static readonly LOADED = PlayerUnitEvent.convert(51)
    static readonly DAMAGED = PlayerUnitEvent.convert(308)
    static readonly DAMAGING = PlayerUnitEvent.convert(315)

    static readonly SELL = PlayerUnitEvent.convert(269)
    static readonly CHANGE_OWNER = PlayerUnitEvent.convert(270)
    static readonly SELL_ITEM = PlayerUnitEvent.convert(271)
    static readonly SPELL_CHANNEL = PlayerUnitEvent.convert(272)
    static readonly SPELL_CAST = PlayerUnitEvent.convert(273)
    static readonly SPELL_EFFECT = PlayerUnitEvent.convert(274)
    static readonly SPELL_FINISH = PlayerUnitEvent.convert(275)
    static readonly SPELL_END_CAST = PlayerUnitEvent.convert(276)
    static readonly PAWN_ITEM = PlayerUnitEvent.convert(277)
}
