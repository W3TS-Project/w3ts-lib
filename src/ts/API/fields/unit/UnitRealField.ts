/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitRealField(i: integer): unitrealfield

export class UnitRealField extends UnitField<unitrealfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitRealField, rawCode, title)
    }
}
