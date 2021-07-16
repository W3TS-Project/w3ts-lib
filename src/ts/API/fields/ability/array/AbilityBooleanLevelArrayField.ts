/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode"
import { AbilityField } from "../AbilityField"

declare function ConvertAbilityBooleanLevelArrayField(i: integer): abilitybooleanlevelarrayfield

export class AbilityBooleanLevelArrayField extends AbilityField<abilitybooleanlevelarrayfield> {
    public constructor(rawCode: RawCode, title?: string, desc?: string) {
        super(ConvertAbilityBooleanLevelArrayField(rawCode.getId()), rawCode, title, desc)
    }
}
