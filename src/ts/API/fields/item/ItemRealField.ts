/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { ItemField } from "./ItemField"

declare function ConvertItemRealField(i: integer): itemrealfield

export class ItemRealField extends ItemField<itemrealfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertItemRealField, rawCode, title)
    }
}
