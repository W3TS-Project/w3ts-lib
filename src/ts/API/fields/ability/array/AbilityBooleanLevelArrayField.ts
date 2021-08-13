/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityBooleanLevelArrayField(i: integer): abilitybooleanlevelarrayfield

export class AbilityBooleanLevelArrayField extends AbilityField<abilitybooleanlevelarrayfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityBooleanLevelArrayField, rawCode, title, desc)
    }
}
