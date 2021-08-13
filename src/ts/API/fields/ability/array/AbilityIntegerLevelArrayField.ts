/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityIntegerLevelArrayField(i: integer): abilityintegerlevelarrayfield

export class AbilityIntegerLevelArrayField extends AbilityField<abilityintegerlevelarrayfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityIntegerLevelArrayField, rawCode, title, desc)
    }
}
