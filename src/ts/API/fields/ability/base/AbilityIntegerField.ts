/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityIntegerField(i: integer): abilityintegerfield

export class AbilityIntegerField extends AbilityField<abilityintegerfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityIntegerField, rawCode, title, desc)
    }
}
