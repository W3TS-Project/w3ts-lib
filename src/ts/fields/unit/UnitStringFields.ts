import { UnitStringField } from "../../API/fields/unit/UnitStringField"
import { RawCode } from "../../RawCode"

export abstract class UnitStringFields {
    public static readonly NAME = new UnitStringField(RawCode.get("unam"), "Текст - Название")
    public static readonly PROPER_NAMES = new UnitStringField(
        RawCode.get("upro"),
        "Текст - Имена собственные"
    )
    /**
     * Не найдено в РО
     */
    public static readonly GROUND_TEXTURE = new UnitStringField(RawCode.get("uubs"))
    public static readonly SHADOW_IMAGE_UNIT = new UnitStringField(
        RawCode.get("ushu"),
        "Графика - Отображение тени (боевая единица)"
    )
}
