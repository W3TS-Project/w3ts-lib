/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityStringLevelField(i: integer): abilitystringlevelfield

export class AbilityStringLevelField extends AbilityField<abilitystringlevelfield> {
    public constructor(rawCode: RawCode, title?: string, desc?: string) {
        super(ConvertAbilityStringLevelField(rawCode.getId()), rawCode, title, desc)
    }
}
