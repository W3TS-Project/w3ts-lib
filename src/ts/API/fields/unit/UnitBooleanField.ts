/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitBooleanField(i: integer): unitbooleanfield

export class UnitBooleanField extends UnitField<unitbooleanfield> {
    public constructor(rawCode: RawCode, title?: string) {
        super(ConvertUnitBooleanField(rawCode.getId()), rawCode, title)
    }
}
