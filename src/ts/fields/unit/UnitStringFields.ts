import { UnitStringField } from "../../API/fields/unit/UnitStringField";
import { RawCode } from "../../RawCode";

export abstract class UnitStringFields {
  public static readonly NAME = new UnitStringField(new RawCode('unam'), 'Текст - Название')
	public static readonly PROPER_NAMES = new UnitStringField(new RawCode('upro'), 'Текст - Имена собственные')
	/**
	 * Не найдено в РО
	 */
	public static readonly GROUND_TEXTURE = new UnitStringField(new RawCode('uubs'))
	public static readonly SHADOW_IMAGE_UNIT = new UnitStringField(new RawCode('ushu'), 'Графика - Отображение тени (new RawCode(боевая единица)')
}