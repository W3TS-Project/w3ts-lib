/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityRealLevelArrayField(i: integer): abilityreallevelarrayfield

export class AbilityRealLevelArrayField extends AbilityField<abilityreallevelarrayfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityRealLevelArrayField, rawCode, title, desc)
    }
}
