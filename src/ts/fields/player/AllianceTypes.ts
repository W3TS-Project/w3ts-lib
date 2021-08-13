import { AllianceType } from "../../API/fields/player/AllianceType"

export abstract class AllianceTypes {
    static readonly PASSIVE = AllianceType.convert(0)
    static readonly HELP_REQUEST = AllianceType.convert(1)
    static readonly HELP_RESPONSE = AllianceType.convert(2)
    static readonly SHARED_XP = AllianceType.convert(3)
    static readonly SHARED_SPELLS = AllianceType.convert(4)
    static readonly SHARED_VISION = AllianceType.convert(5)
    static readonly SHARED_CONTROL = AllianceType.convert(6)
    static readonly SHARED_ADVANCED_CONTROL = AllianceType.convert(7)
    static readonly RESCUABLE = AllianceType.convert(8)
    static readonly SHARED_VISION_FORCED = AllianceType.convert(9)
}
