/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertSoundType(i: integer): soundtype

export class SoundType extends Field<soundtype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertSoundType, id)
    }
}
