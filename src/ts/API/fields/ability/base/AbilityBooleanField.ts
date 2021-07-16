/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityBooleanField(i: integer): abilitybooleanfield

export class AbilityBooleanField extends AbilityField<abilitybooleanfield> {
    public constructor(rawCode: RawCode, title?: string, desc?: string) {
        super(ConvertAbilityBooleanField(rawCode.getId()), rawCode, title, desc)
    }
}
