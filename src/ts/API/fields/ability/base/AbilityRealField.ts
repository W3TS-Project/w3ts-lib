/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityRealField(i: integer): abilityrealfield

export class AbilityRealField extends AbilityField<abilityrealfield> {
    public constructor(rawCode: RawCode, title?: string, desc?: string) {
        super(ConvertAbilityRealField(rawCode.getId()), rawCode, title, desc)
    }
}
