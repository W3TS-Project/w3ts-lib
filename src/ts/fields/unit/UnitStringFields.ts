import { UnitStringField } from "../../API/fields/unit/UnitStringField"
import { RawCode } from "../../RawCode"

export abstract class UnitStringFields {
    static readonly NAME = new UnitStringField(RawCode.get("unam"), "Текст - Название")
    static readonly PROPER_NAMES = new UnitStringField(
        RawCode.get("upro"),
        "Текст - Имена собственные"
    )
    /**
     * Не найдено в РО
     */
    static readonly GROUND_TEXTURE = new UnitStringField(RawCode.get("uubs"))
    static readonly SHADOW_IMAGE_UNIT = new UnitStringField(
        RawCode.get("ushu"),
        "Графика - Отображение тени (боевая единица)"
    )
}
