/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertSoundType(i: integer): soundtype

export class SoundType extends Field<soundtype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertSoundType(id), id)
    }
}
