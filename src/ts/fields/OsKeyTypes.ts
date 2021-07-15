import { OsKeyType } from "../API/fields/other/OsKeyType";

export abstract class OsKeyTypes {
	public static readonly BACKSPACE = new OsKeyType(0x08)
	public static readonly TAB = new OsKeyType(0x09)
	public static readonly CLEAR = new OsKeyType(0x0C)
	public static readonly RETURN = new OsKeyType(0x0D)
	public static readonly SHIFT = new OsKeyType(0x10)
	public static readonly CONTROL = new OsKeyType(0x11)
	public static readonly ALT = new OsKeyType(0x12)
	public static readonly PAUSE = new OsKeyType(0x13)
	public static readonly CAPS_LOCK = new OsKeyType(0x14)
	public static readonly KANA = new OsKeyType(0x15)
	public static readonly HANGUL = new OsKeyType(0x15)
	public static readonly JUNJA = new OsKeyType(0x17)
	public static readonly FINAL = new OsKeyType(0x18)
	public static readonly NANJA = new OsKeyType(0x19)
	public static readonly KANJI = new OsKeyType(0x19)
	public static readonly ESCAPE = new OsKeyType(0x1B)
	public static readonly CONVERT = new OsKeyType(0x1C)
	public static readonly NON_CONVERT = new OsKeyType(0x1D)
	public static readonly ACCEPT = new OsKeyType(0x1E)
	public static readonly MODE_CHANGE = new OsKeyType(0x1F)
	public static readonly SPACE = new OsKeyType(0x20)
	public static readonly PAGE_UP = new OsKeyType(0x21)
	public static readonly PAGE_DOWN = new OsKeyType(0x22)
	public static readonly END = new OsKeyType(0x23)
	public static readonly HOME = new OsKeyType(0x24)
	public static readonly LEFT = new OsKeyType(0x25)
	public static readonly UP = new OsKeyType(0x26)
	public static readonly RIGHT = new OsKeyType(0x27)
	public static readonly DOWN = new OsKeyType(0x28)
	public static readonly SELECT = new OsKeyType(0x29)
	public static readonly PRINT = new OsKeyType(0x2A)
	public static readonly EXECUTE = new OsKeyType(0x2B)
	public static readonly PRINT_SCREEN = new OsKeyType(0x2C)
	public static readonly INSERT = new OsKeyType(0x2D)
	public static readonly DELETE = new OsKeyType(0x2E)
	public static readonly HELP = new OsKeyType(0x2F)
	public static readonly NUM_0 = new OsKeyType(0x30)
	public static readonly NUM_1 = new OsKeyType(0x31)
	public static readonly NUM_2 = new OsKeyType(0x32)
	public static readonly NUM_3 = new OsKeyType(0x33)
	public static readonly NUM_4 = new OsKeyType(0x34)
	public static readonly NUM_5 = new OsKeyType(0x35)
	public static readonly NUM_6 = new OsKeyType(0x36)
	public static readonly NUM_7 = new OsKeyType(0x37)
	public static readonly NUM_8 = new OsKeyType(0x38)
	public static readonly NUM_9 = new OsKeyType(0x39)
	public static readonly A = new OsKeyType(0x41)
	public static readonly B = new OsKeyType(0x42)
	public static readonly C = new OsKeyType(0x43)
	public static readonly D = new OsKeyType(0x44)
	public static readonly E = new OsKeyType(0x45)
	public static readonly F = new OsKeyType(0x46)
	public static readonly G = new OsKeyType(0x47)
	public static readonly H = new OsKeyType(0x48)
	public static readonly I = new OsKeyType(0x49)
	public static readonly J = new OsKeyType(0x4A)
	public static readonly K = new OsKeyType(0x4B)
	public static readonly L = new OsKeyType(0x4C)
	public static readonly M = new OsKeyType(0x4D)
	public static readonly N = new OsKeyType(0x4E)
	public static readonly O = new OsKeyType(0x4F)
	public static readonly P = new OsKeyType(0x50)
	public static readonly Q = new OsKeyType(0x51)
	public static readonly R = new OsKeyType(0x52)
	public static readonly S = new OsKeyType(0x53)
	public static readonly T = new OsKeyType(0x54)
	public static readonly U = new OsKeyType(0x55)
	public static readonly V = new OsKeyType(0x56)
	public static readonly W = new OsKeyType(0x57)
	public static readonly X = new OsKeyType(0x58)
	public static readonly Y = new OsKeyType(0x59)
	public static readonly Z = new OsKeyType(0x5A)
	public static readonly L_META = new OsKeyType(0x5B)
	public static readonly R_META = new OsKeyType(0x5C)
	public static readonly APPS = new OsKeyType(0x5D)
	public static readonly SLEEP = new OsKeyType(0x5F)
	public static readonly NUMPAD_0 = new OsKeyType(0x60)
	public static readonly NUMPAD_1 = new OsKeyType(0x61)
	public static readonly NUMPAD_2 = new OsKeyType(0x62)
	public static readonly NUMPAD_3 = new OsKeyType(0x63)
	public static readonly NUMPAD_4 = new OsKeyType(0x64)
	public static readonly NUMPAD_5 = new OsKeyType(0x65)
	public static readonly NUMPAD_6 = new OsKeyType(0x66)
	public static readonly NUMPAD_7 = new OsKeyType(0x67)
	public static readonly NUMPAD_8 = new OsKeyType(0x68)
	public static readonly NUMPAD_9 = new OsKeyType(0x69)
	public static readonly MULTIPLY = new OsKeyType(0x6A)
	public static readonly ADD = new OsKeyType(0x6B)
	public static readonly SEPARATOR = new OsKeyType(0x6C)
	public static readonly SUBTRACT = new OsKeyType(0x6D)
	public static readonly DECIMAL = new OsKeyType(0x6E)
	public static readonly DIVIDE = new OsKeyType(0x6F)
	public static readonly F1 = new OsKeyType(0x70)
	public static readonly F2 = new OsKeyType(0x71)
	public static readonly F3 = new OsKeyType(0x72)
	public static readonly F4 = new OsKeyType(0x73)
	public static readonly F5 = new OsKeyType(0x74)
	public static readonly F6 = new OsKeyType(0x75)
	public static readonly F7 = new OsKeyType(0x76)
	public static readonly F8 = new OsKeyType(0x77)
	public static readonly F9 = new OsKeyType(0x78)
	public static readonly F10 = new OsKeyType(0x79)
	public static readonly F11 = new OsKeyType(0x7A)
	public static readonly F12 = new OsKeyType(0x7B)
	public static readonly F13 = new OsKeyType(0x7C)
	public static readonly F14 = new OsKeyType(0x7D)
	public static readonly F15 = new OsKeyType(0x7E)
	public static readonly F16 = new OsKeyType(0x7F)
	public static readonly F17 = new OsKeyType(0x80)
	public static readonly F18 = new OsKeyType(0x81)
	public static readonly F19 = new OsKeyType(0x82)
	public static readonly F20 = new OsKeyType(0x83)
	public static readonly F21 = new OsKeyType(0x84)
	public static readonly F22 = new OsKeyType(0x85)
	public static readonly F23 = new OsKeyType(0x86)
	public static readonly F24 = new OsKeyType(0x87)
	public static readonly NUMLOCK = new OsKeyType(0x90)
	public static readonly SCROLLOCK = new OsKeyType(0x91)
	public static readonly OEM_NEC_EQUAL = new OsKeyType(0x92)
	public static readonly OEM_FJ_JISHO = new OsKeyType(0x92)
	public static readonly OEM_FJ_MASSHOU = new OsKeyType(0x93)
	public static readonly OEM_FJ_TOUROKU = new OsKeyType(0x94)
	public static readonly OEM_FJ_LOYA = new OsKeyType(0x95)
	public static readonly OEM_FJ_ROYA = new OsKeyType(0x96)
	public static readonly LSHIFT = new OsKeyType(0xA0)
	public static readonly RSHIFT = new OsKeyType(0xA1)
	public static readonly LCONTROL = new OsKeyType(0xA2)
	public static readonly RCONTROL = new OsKeyType(0xA3)
	public static readonly LALT = new OsKeyType(0xA4)
	public static readonly RALT = new OsKeyType(0xA5)
	public static readonly BROWSER_BACK = new OsKeyType(0xA6)
	public static readonly BROWSER_FORWARD = new OsKeyType(0xA7)
	public static readonly BROWSER_REFRESH = new OsKeyType(0xA8)
	public static readonly BROWSER_STOP = new OsKeyType(0xA9)
	public static readonly BROWSER_SEARCH = new OsKeyType(0xAA)
	public static readonly BROWSER_FAVORITES = new OsKeyType(0xAB)
	public static readonly BROWSER_HOME = new OsKeyType(0xAC)
	public static readonly VOLUME_MUTE = new OsKeyType(0xAD)
	public static readonly VOLUME_DOWN = new OsKeyType(0xAE)
	public static readonly VOLUME_UP = new OsKeyType(0xAF)
	public static readonly MEDIA_NEXT_TRACK = new OsKeyType(0xB0)
	public static readonly MEDIA_PREV_TRACK = new OsKeyType(0xB1)
	public static readonly MEDIA_STOP = new OsKeyType(0xB2)
	public static readonly MEDIA_PLAY_PAUSE = new OsKeyType(0xB3)
	public static readonly LAUNCH_MAIL = new OsKeyType(0xB4)
	public static readonly LAUNCH_MEDIA_SELECT = new OsKeyType(0xB5)
	public static readonly LAUNCH_APP1 = new OsKeyType(0xB6)
	public static readonly LAUNCH_APP2 = new OsKeyType(0xB7)
	public static readonly OEM_1 = new OsKeyType(0xBA)
	public static readonly OEM_PLUS = new OsKeyType(0xBB)
	public static readonly OEM_COMMA = new OsKeyType(0xBC)
	public static readonly OEM_MINUS = new OsKeyType(0xBD)
	public static readonly OEM_PERIOD = new OsKeyType(0xBE)
	public static readonly OEM_2 = new OsKeyType(0xBF)
	public static readonly OEM_3 = new OsKeyType(0xC0)
	public static readonly OEM_4 = new OsKeyType(0xDB)
	public static readonly OEM_5 = new OsKeyType(0xDC)
	public static readonly OEM_6 = new OsKeyType(0xDD)
	public static readonly OEM_7 = new OsKeyType(0xDE)
	public static readonly OEM_8 = new OsKeyType(0xDF)
	public static readonly OEM_AX = new OsKeyType(0xE1)
	public static readonly OEM_102 = new OsKeyType(0xE2)
	public static readonly ICO_HELP = new OsKeyType(0xE3)
	public static readonly ICO_00 = new OsKeyType(0xE4)
	public static readonly PROCESSKEY = new OsKeyType(0xE5)
	public static readonly ICO_CLEAR = new OsKeyType(0xE6)
	public static readonly PACKET = new OsKeyType(0xE7)
	public static readonly OEM_RESET = new OsKeyType(0xE9)
	public static readonly OEM_JUMP = new OsKeyType(0xEA)
	public static readonly OEM_PA1 = new OsKeyType(0xEB)
	public static readonly OEM_PA2 = new OsKeyType(0xEC)
	public static readonly OEM_PA3 = new OsKeyType(0xED)
	public static readonly OEM_WSCTRL = new OsKeyType(0xEE)
	public static readonly OEM_CUSEL = new OsKeyType(0xEF)
	public static readonly OEM_ATTN = new OsKeyType(0xF0)
	public static readonly OEM_FINISH = new OsKeyType(0xF1)
	public static readonly OEM_COPY = new OsKeyType(0xF2)
	public static readonly OEM_AUTO = new OsKeyType(0xF3)
	public static readonly OEM_ENLW = new OsKeyType(0xF4)
	public static readonly OEM_BACKTAB = new OsKeyType(0xF5)
	public static readonly ATTN = new OsKeyType(0xF6)
	public static readonly CRSEL = new OsKeyType(0xF7)
	public static readonly EXSEL = new OsKeyType(0xF8)
	public static readonly EREOF = new OsKeyType(0xF9)
	public static readonly PLAY = new OsKeyType(0xFA)
	public static readonly ZOOM = new OsKeyType(0xFB)
	public static readonly NONAME = new OsKeyType(0xFC)
	public static readonly PA1 = new OsKeyType(0xFD)
	public static readonly OEM_CLEAR = new OsKeyType(0xFE)
}