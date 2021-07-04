/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../../../utils";
import { Field } from "../Field";

declare function ConvertTexMapFlags(i: integer): texmapflags

export class TexMapFlag extends Field<texmapflags> {
  public constructor(id: integer) {
    super(ConvertTexMapFlags(id), id)
  }
}