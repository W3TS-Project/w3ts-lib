/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertCameraField(i: integer): camerafield

export class CameraField extends Field<camerafield> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertCameraField(id), id)
    }
}
