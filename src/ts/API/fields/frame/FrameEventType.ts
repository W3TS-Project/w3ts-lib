/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertFrameEventType(i: integer): frameeventtype

export class FrameEventType extends Field<frameeventtype> {
  public constructor(id: integer) {
    super(ConvertFrameEventType(id), id)
  }
}
