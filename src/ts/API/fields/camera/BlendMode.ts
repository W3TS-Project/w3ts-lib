/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertBlendMode(i: integer): blendmode

export class BlendMode extends Field<blendmode> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertBlendMode(id), id)
    }
}
