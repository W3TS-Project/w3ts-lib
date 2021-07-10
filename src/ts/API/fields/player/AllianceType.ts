/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertAliianceType(i: integer): alliancetype

export class AllianceType extends Field<alliancetype> {
  public constructor(id: integer) {
    super(ConvertAliianceType(id), id)
  }
}