/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertOriginFrameType(i: integer): originframetype

export class FrameOriginType extends Field<originframetype> {
  public constructor(id: integer) {
    super(ConvertOriginFrameType(id), id)
  }
}
