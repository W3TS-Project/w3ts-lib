/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitRealField(i: integer): unitrealfield

export class UnitRealField extends UnitField<unitrealfield> {
    public constructor(rawCode: RawCode, title?: string) {
        super(ConvertUnitRealField(rawCode.getId()), rawCode, title)
    }
}
