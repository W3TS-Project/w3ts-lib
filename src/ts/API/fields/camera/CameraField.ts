/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertCameraField(i: integer): camerafield

export class CameraField extends Field<camerafield> {
    static convert(id: integer) {
        return this.proto_convert(ConvertCameraField, id)
    }
}
