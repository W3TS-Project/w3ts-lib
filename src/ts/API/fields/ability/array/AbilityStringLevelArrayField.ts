/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityStringLevelArrayField(i: integer): abilitystringlevelarrayfield

export class AbilityStringLevelArrayField extends AbilityField<abilitystringlevelarrayfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityStringLevelArrayField, rawCode, title, desc)
    }
}
