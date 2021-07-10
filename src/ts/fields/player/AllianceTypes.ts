import { AllianceType } from "../../API/fields/player/AllianceType";

export abstract class AllianceTypes {
  public static readonly PASSIVE = new AllianceType(0)
	public static readonly HELP_REQUEST = new AllianceType(1)
	public static readonly HELP_RESPONSE = new AllianceType(2)
	public static readonly SHARED_XP = new AllianceType(3)
	public static readonly SHARED_SPELLS = new AllianceType(4)
	public static readonly SHARED_VISION = new AllianceType(5)
	public static readonly SHARED_CONTROL = new AllianceType(6)
	public static readonly SHARED_ADVANCED_CONTROL = new AllianceType(7)
	public static readonly RESCUABLE = new AllianceType(8)
	public static readonly SHARED_VISION_FORCED = new AllianceType(9)
}