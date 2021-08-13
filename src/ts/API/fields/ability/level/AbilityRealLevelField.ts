/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityRealLevelField(i: integer): abilityreallevelfield

export class AbilityRealLevelField extends AbilityField<abilityreallevelfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityRealLevelField, rawCode, title, desc)
    }
}
