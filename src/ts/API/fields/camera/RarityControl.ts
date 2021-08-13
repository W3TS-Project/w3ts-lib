/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertRarityControl(i: integer): raritycontrol

export class RarityControl extends Field<raritycontrol> {
    static convert(id: integer) {
        return this.proto_convert(ConvertRarityControl, id)
    }
}
