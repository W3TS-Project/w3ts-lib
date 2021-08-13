import { CameraField } from "../../API/fields/camera/CameraField"

export abstract class CameraFields {
    static readonly TARGET_DISTANCE = CameraField.convert(0)
    static readonly FARZ = CameraField.convert(1)
    static readonly ANGLE_OF_ATTACK = CameraField.convert(2)
    static readonly FIELD_OF_VIEW = CameraField.convert(3)
    static readonly ROLL = CameraField.convert(4)
    static readonly ROTATION = CameraField.convert(5)
    static readonly Z_OFFSET = CameraField.convert(6)
    static readonly NEARZ = CameraField.convert(7)
    static readonly LOCAL_PITCH = CameraField.convert(8)
    static readonly LOCAL_YAW = CameraField.convert(9)
    static readonly LOCAL_ROLL = CameraField.convert(10)
}
