/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { ItemField } from "./ItemField"

declare function ConvertItemIntegerField(i: integer): itemintegerfield

export class ItemIntegerField extends ItemField<itemintegerfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertItemIntegerField, rawCode, title)
    }
}
