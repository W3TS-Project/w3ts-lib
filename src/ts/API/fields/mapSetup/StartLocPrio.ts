/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertStartLocPrio(i: integer): startlocprio

export class StartLocPrio extends Field<startlocprio> {
  public constructor(id: integer) {
    super(ConvertStartLocPrio(id), id)
  }
}