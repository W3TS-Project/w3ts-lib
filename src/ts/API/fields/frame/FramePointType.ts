/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertFramePointType(i: integer): framepointtype

export class FramePointType extends Field<framepointtype> {
  public constructor(id: integer) {
    super(ConvertFramePointType(id), id)
  }
}