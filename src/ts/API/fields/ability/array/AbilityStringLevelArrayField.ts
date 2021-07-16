/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityStringLevelArrayField(i: integer): abilitystringlevelarrayfield

export class AbilityStringLevelArrayField extends AbilityField<abilitystringlevelarrayfield> {
    public constructor(rawCode: RawCode, title?: string, desc?: string) {
        super(ConvertAbilityStringLevelArrayField(rawCode.getId()), rawCode, title, desc)
    }
}
