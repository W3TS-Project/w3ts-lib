import { MapControl } from "../../API/fields/mapSetup/MapControl";

export abstract class MapControls {
	public static readonly USER = new MapControl(0)
	public static readonly COMPUTER = new MapControl(1)
	public static readonly RESCUABLE = new MapControl(2)
	public static readonly NEUTRAL = new MapControl(3)
	public static readonly CREEP = new MapControl(4)
	public static readonly NONE = new MapControl(5)
}