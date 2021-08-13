/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityBooleanLevelField(i: integer): abilitybooleanlevelfield

export class AbilityBooleanLevelField extends AbilityField<abilitybooleanlevelfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityBooleanLevelField, rawCode, title, desc)
    }
}
