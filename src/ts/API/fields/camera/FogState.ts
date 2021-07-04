/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../../../utils";
import { Field } from "../Field";

declare function ConvertFogState(i: integer): fogstate

export class FogState extends Field<fogstate> {
  public constructor(id: integer) {
    super(ConvertFogState(id), id)
  }
}