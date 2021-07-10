/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertMapFlag(i: integer): mapflag

export class MapFlag extends Field<mapflag> {
  public constructor(id: integer) {
    super(ConvertMapFlag(id), id)
  }
}