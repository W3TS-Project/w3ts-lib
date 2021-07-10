import { PlayerUnitEvent } from "../../API/fields/events/PlayerUnitEvent";

export abstract class PlayerUnitEvents {
	public static readonly ATTACKED = new PlayerUnitEvent(18)
	public static readonly RESCUED = new PlayerUnitEvent(19)

	public static readonly DEATH = new PlayerUnitEvent(20)
	public static readonly DECAY = new PlayerUnitEvent(21)

	public static readonly DETECTED = new PlayerUnitEvent(22)
	public static readonly HIDDEN = new PlayerUnitEvent(23)

	public static readonly SELECTED = new PlayerUnitEvent(24)
	public static readonly DESELECTED = new PlayerUnitEvent(25)

	public static readonly CONSTRUCT_START = new PlayerUnitEvent(26)
	public static readonly CONSTRUCT_CANCEL = new PlayerUnitEvent(27)
	public static readonly CONSTRUCT_FINISH = new PlayerUnitEvent(28)

	public static readonly UPGRADE_START = new PlayerUnitEvent(29)
	public static readonly UPGRADE_CANCEL = new PlayerUnitEvent(30)
	public static readonly UPGRADE_FINISH = new PlayerUnitEvent(31)

	public static readonly TRAIN_START = new PlayerUnitEvent(32)
	public static readonly TRAIN_CANCEL = new PlayerUnitEvent(33)
	public static readonly TRAIN_FINISH = new PlayerUnitEvent(34)

	public static readonly RESEARCH_START = new PlayerUnitEvent(35)
	public static readonly RESEARCH_CANCEL = new PlayerUnitEvent(36)
	public static readonly RESEARCH_FINISH = new PlayerUnitEvent(37)
	public static readonly ISSUED_ORDER = new PlayerUnitEvent(38)
	public static readonly ISSUED_POINT_ORDER = new PlayerUnitEvent(39)
	public static readonly ISSUED_TARGET_ORDER = new PlayerUnitEvent(40)
	public static readonly ISSUED_UNIT_ORDER = new PlayerUnitEvent(40)
	
	public static readonly HERO_LEVEL = new PlayerUnitEvent(41)
	public static readonly HERO_SKILL = new PlayerUnitEvent(42)

	public static readonly HERO_REVIVABLE = new PlayerUnitEvent(43)

	public static readonly HERO_REVIVE_START = new PlayerUnitEvent(44)
	public static readonly HERO_REVIVE_CANCEL = new PlayerUnitEvent(45)
	public static readonly HERO_REVIVE_FINISH = new PlayerUnitEvent(46)
	public static readonly SUMMON = new PlayerUnitEvent(47)
	public static readonly DROP_ITEM = new PlayerUnitEvent(48)
	public static readonly PICK_UP_ITEM = new PlayerUnitEvent(49)
	public static readonly USE_ITEM = new PlayerUnitEvent(50)

	public static readonly LOADED = new PlayerUnitEvent(51)
	public static readonly DAMAGED = new PlayerUnitEvent(308)
	public static readonly DAMAGING = new PlayerUnitEvent(315)

	public static readonly SELL = new PlayerUnitEvent(269)
	public static readonly CHANGE_OWNER = new PlayerUnitEvent(270)
	public static readonly SELL_ITEM = new PlayerUnitEvent(271)
	public static readonly SPELL_CHANNEL = new PlayerUnitEvent(272)
	public static readonly SPELL_CAST = new PlayerUnitEvent(273)
	public static readonly SPELL_EFFECT = new PlayerUnitEvent(274)
	public static readonly SPELL_FINISH = new PlayerUnitEvent(275)
	public static readonly SPELL_END_CAST = new PlayerUnitEvent(276)
	public static readonly PAWN_ITEM = new PlayerUnitEvent(277)
}