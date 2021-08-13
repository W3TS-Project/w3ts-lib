/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityStringField(i: integer): abilitystringfield

export class AbilityStringField extends AbilityField<abilitystringfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityStringField, rawCode, title, desc)
    }
}
