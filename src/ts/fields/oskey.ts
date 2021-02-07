/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertOsKeyType = (i: number) => oskeytype

const c = ConvertOsKeyType

export const OsKeyType = {
    Backspace: c(0x08),
    Tab: c(0x09),
    Clear: c(0x0c),
    Return: c(0x0d),
    Shift: c(0x10),
    Control: c(0x11),
    Alt: c(0x12),
    Pause: c(0x13),
    CapsLock: c(0x14),
    Kana: c(0x15),
    Hangul: c(0x15),
    Junja: c(0x17),
    Final: c(0x18),
    Nanja: c(0x19),
    Kanji: c(0x19),
    Escape: c(0x1b),
    Convert: c(0x1c),
    NonConvert: c(0x1d),
    Accept: c(0x1e),
    ModeChange: c(0x1f),
    Space: c(0x20),
    PageUp: c(0x21),
    PageDown: c(0x22),
    End: c(0x23),
    Home: c(0x24),
    Left: c(0x25),
    Up: c(0x26),
    Right: c(0x27),
    Down: c(0x28),
    Select: c(0x29),
    Print: c(0x2a),
    Execute: c(0x2b),
    PrintScreen: c(0x2c),
    Insert: c(0x2d),
    Delete: c(0x2e),
    Help: c(0x2f),
    0: c(0x30),
    1: c(0x31),
    2: c(0x32),
    3: c(0x33),
    4: c(0x34),
    5: c(0x35),
    6: c(0x36),
    7: c(0x37),
    8: c(0x38),
    9: c(0x39),
    A: c(0x41),
    B: c(0x42),
    C: c(0x43),
    D: c(0x44),
    E: c(0x45),
    F: c(0x46),
    G: c(0x47),
    H: c(0x48),
    I: c(0x49),
    J: c(0x4a),
    K: c(0x4b),
    L: c(0x4c),
    M: c(0x4d),
    N: c(0x4e),
    O: c(0x4f),
    P: c(0x50),
    Q: c(0x51),
    R: c(0x52),
    S: c(0x53),
    T: c(0x54),
    U: c(0x55),
    V: c(0x56),
    W: c(0x57),
    X: c(0x58),
    Y: c(0x59),
    Z: c(0x5a),
    LMeta: c(0x5b),
    RMeta: c(0x5c),
    Apps: c(0x5d),
    Sleep: c(0x5f),
    Numpad0: c(0x60),
    Numpad1: c(0x61),
    Numpad2: c(0x62),
    Numpad3: c(0x63),
    Numpad4: c(0x64),
    Numpad5: c(0x65),
    Numpad6: c(0x66),
    Numpad7: c(0x67),
    Numpad8: c(0x68),
    Numpad9: c(0x69),
    Multiply: c(0x6a),
    Add: c(0x6b),
    Separator: c(0x6c),
    Subtract: c(0x6d),
    Decimal: c(0x6e),
    Divide: c(0x6f),
    F1: c(0x70),
    F2: c(0x71),
    F3: c(0x72),
    F4: c(0x73),
    F5: c(0x74),
    F6: c(0x75),
    F7: c(0x76),
    F8: c(0x77),
    F9: c(0x78),
    F10: c(0x79),
    F11: c(0x7a),
    F12: c(0x7b),
    F13: c(0x7c),
    F14: c(0x7d),
    F15: c(0x7e),
    F16: c(0x7f),
    F17: c(0x80),
    F18: c(0x81),
    F19: c(0x82),
    F20: c(0x83),
    F21: c(0x84),
    F22: c(0x85),
    F23: c(0x86),
    F24: c(0x87),
    Numlock: c(0x90),
    Scrollock: c(0x91),
    OemNecEqual: c(0x92),
    OemFJJisho: c(0x92),
    OemFJMasshou: c(0x93),
    OemFJTouroku: c(0x94),
    OemFJLoya: c(0x95),
    OemFJRoya: c(0x96),
    LSHift: c(0xa0),
    RSHift: c(0xa1),
    LControl: c(0xa2),
    RControl: c(0xa3),
    LAlt: c(0xa4),
    RAlt: c(0xa5),
    BrowserBack: c(0xa6),
    BrowserForward: c(0xa7),
    BrowserRefresh: c(0xa8),
    BrowserStop: c(0xa9),
    BrowserSearch: c(0xaa),
    BrowserFavorites: c(0xab),
    BrowserHome: c(0xac),
    VolumeMute: c(0xad),
    VolumeDown: c(0xae),
    VolumeUp: c(0xaf),
    MediaNextTrack: c(0xb0),
    MediaPrevTrack: c(0xb1),
    MediaStop: c(0xb2),
    MediaPlayPause: c(0xb3),
    LaunchMail: c(0xb4),
    LaunchMediaSelect: c(0xb5),
    LaunchApp1: c(0xb6),
    LaunchApp2: c(0xb7),
    Oem1: c(0xba),
    OemPlus: c(0xbb),
    OemComma: c(0xbc),
    OemMinus: c(0xbd),
    OemPeriod: c(0xbe),
    Oem2: c(0xbf),
    Oem3: c(0xc0),
    Oem4: c(0xdb),
    Oem5: c(0xdc),
    Oem6: c(0xdd),
    Oem7: c(0xde),
    Oem8: c(0xdf),
    OemAX: c(0xe1),
    Oem102: c(0xe2),
    IcoHelp: c(0xe3),
    Ico00: c(0xe4),
    ProcessKey: c(0xe5),
    IcoClear: c(0xe6),
    Packet: c(0xe7),
    OemReset: c(0xe9),
    OemJump: c(0xea),
    OemPA1: c(0xeb),
    OemPA2: c(0xec),
    OemPA3: c(0xed),
    OemWSCTRL: c(0xee),
    OemCusel: c(0xef),
    OemAttn: c(exf0),
    OemFinish: c(0xf1),
    OemCopy: c(0xf2),
    OemAuto: c(0xf3),
    OemEnlw: c(0xf4),
    OemBackTab: c(0xf5),
    Attn: c(0xf6),
    Crsel: c(0xf7),
    Exsel: c(0xf8),
    Ereof: c(0xf9),
    Play: c(0xfa),
    Zoom: c(0xfb),
    NoName: c(0xfc),
    PA1: c(0xfd),
    OemClear: c(0xfe)
}
