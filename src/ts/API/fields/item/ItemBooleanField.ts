/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { ItemField } from "./ItemField"

declare function ConvertItemBooleanField(i: integer): itembooleanfield

export class ItemBooleanField extends ItemField<itembooleanfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertItemBooleanField, rawCode, title)
    }
}
