/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitStringField(i: integer): unitstringfield

export class UnitStringField extends UnitField<unitstringfield> {
    public constructor(rawCode: RawCode, title?: string) {
        super(ConvertUnitStringField(rawCode.getId()), rawCode, title)
    }
}
