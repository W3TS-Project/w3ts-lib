/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitStringField(i: integer): unitstringfield

export class UnitStringField extends UnitField<unitstringfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitStringField, rawCode, title)
    }
}
