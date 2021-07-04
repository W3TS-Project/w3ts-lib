/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../../../utils";
import { Field } from "../Field";

declare function ConvertCameraField(i: integer): camerafield

export class CameraField extends Field<camerafield> {
  public constructor(id: integer) {
    super(ConvertCameraField(id), id)
  }
}