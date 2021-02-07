/** @noSelfInFile **/
// @ts-nocheck

declare function ConvertCameraField(i: number): camerafield

const c = ConvertCameraField

export const CameraField = {
    TargetDistance: c(0),
    Farz: c(1),
    AngleOfAttack: c(2),
    FieldOfView: c(3),
    Roll: c(4),
    Rotation: c(5),
    ZOffset: c(6),
    Nearz: c(7),
    LocalPitch: c(8),
    LocalYaw: c(9),
    LocalRoll: c(10)
}
