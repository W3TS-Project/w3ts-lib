/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityRealField(i: integer): abilityrealfield

export class AbilityRealField extends AbilityField<abilityrealfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityRealField, rawCode, title, desc)
    }
}
