/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityStringLevelField(i: integer): abilitystringlevelfield

export class AbilityStringLevelField extends AbilityField<abilitystringlevelfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityStringLevelField, rawCode, title, desc)
    }
}
