/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../../../utils";
import { Field } from "../Field";

declare function ConvertBlendMode(i: integer): blendmode

export class BlendMode extends Field<blendmode> {
  public constructor(id: integer) {
    super(ConvertBlendMode(id), id)
  }
}