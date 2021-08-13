/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityBooleanField(i: integer): abilitybooleanfield

export class AbilityBooleanField extends AbilityField<abilitybooleanfield> {
    constructor(rawCode: RawCodeType, title?: string, desc?: string) {
        super(ConvertAbilityBooleanField, rawCode, title, desc)
    }
}
