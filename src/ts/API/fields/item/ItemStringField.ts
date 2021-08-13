/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { ItemField } from "./ItemField"

declare function ConvertItemStringField(i: integer): itemstringfield

export class ItemStringField extends ItemField<itemstringfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertItemStringField, rawCode, title)
    }
}
