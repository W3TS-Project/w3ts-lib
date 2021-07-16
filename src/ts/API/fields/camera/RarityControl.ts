/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertRarityControl(i: integer): raritycontrol

export class RarityControl extends Field<raritycontrol> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertRarityControl(id), id)
    }
}
