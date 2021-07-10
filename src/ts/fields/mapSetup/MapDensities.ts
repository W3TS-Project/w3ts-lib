import { MapDensity } from "../../API/fields/mapSetup/MapDensity";

export abstract class MapDensities {
	public static readonly NONE = new MapDensity(0)
	public static readonly LIGHT = new MapDensity(1)
	public static readonly MEDIUM = new MapDensity(2)
	public static readonly HEAVY = new MapDensity(3)
}