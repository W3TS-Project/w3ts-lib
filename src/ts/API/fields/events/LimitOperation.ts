/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertLimitOp(i: integer): limitop

export class LimitOperation extends Field<limitop> {
  public constructor(id: integer) {
    super(ConvertLimitOp(id), id)
  }
}