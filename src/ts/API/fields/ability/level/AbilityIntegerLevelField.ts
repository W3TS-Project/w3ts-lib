/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityIntegerLevelField(i: integer): abilityintegerlevelfield

export class AbilityIntegerLevelField extends AbilityField<abilityintegerlevelfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityIntegerLevelField, rawCode, title, desc)
    }
}
