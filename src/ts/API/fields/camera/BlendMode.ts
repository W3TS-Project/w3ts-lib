/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertBlendMode(i: integer): blendmode

export class BlendMode extends Field<blendmode> {
    static convert(id: integer) {
        return this.proto_convert(ConvertBlendMode, id)
    }
}
