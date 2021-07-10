/** @noSelfInFile **/
//@ts-nocheck

import { integer } from "../../../utils";
import { Field } from "../Field";

declare function ConvertGameEvent(i: integer): gameevent

export class GameEvent extends Field<gameevent> {
  public constructor(id: integer) {
    super(ConvertGameEvent(id), id)
  }
}