import { Version } from "../API/fields/other/Version"

export abstract class Versions {
    static readonly REIGN_OF_CHAOS = Version.convert(0)
    static readonly FROZEN_THRONE = Version.convert(1)
}
