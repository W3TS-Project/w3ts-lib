import { CameraField } from "../../API/fields/camera/CameraField"

export abstract class CameraFields {
    public static readonly TARGET_DISTANCE = new CameraField(0)
    public static readonly FARZ = new CameraField(1)
    public static readonly ANGLE_OF_ATTACK = new CameraField(2)
    public static readonly FIELD_OF_VIEW = new CameraField(3)
    public static readonly ROLL = new CameraField(4)
    public static readonly ROTATION = new CameraField(5)
    public static readonly Z_OFFSET = new CameraField(6)
    public static readonly NEARZ = new CameraField(7)
    public static readonly LOCAL_PITCH = new CameraField(8)
    public static readonly LOCAL_YAW = new CameraField(9)
    public static readonly LOCAL_ROLL = new CameraField(10)
}
