/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertPathingType(i: integer): pathingtype

export class PathingType extends Field<pathingtype> {
  public constructor(id: integer) {
    super(ConvertPathingType(id), id)
  }
}