/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitIntegerField(i: integer): unitintegerfield

export class UnitIntegerField extends UnitField<unitintegerfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitIntegerField, rawCode, title)
    }
}
