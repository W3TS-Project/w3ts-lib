/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertMapControl(i: integer): mapcontrol

export class MapControl extends Field<mapcontrol> {
  public constructor(id: integer) {
    super(ConvertMapControl(id), id)
  }
}