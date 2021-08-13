/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitBooleanField(i: integer): unitbooleanfield

export class UnitBooleanField extends UnitField<unitbooleanfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitBooleanField, rawCode, title)
    }
}
