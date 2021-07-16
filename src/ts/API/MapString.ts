/** @noSelfInFile **/
//@ts-nocheck

declare function I2R(i: integer): real
declare function R2I(r: real): integer
declare function I2S(i: integer): string
declare function R2S(r: real): string
declare function R2SW(r: real, width: integer, precision: integer): string
declare function S2I(s: string): integer
declare function S2R(s: string): real
declare function SubString(source: string, start: integer, ending: integer): string
declare function StringLength(s: string): integer
declare function StringCase(source: string, upper: boolean): string
declare function StringHash(s: string): integer

declare function GetLocalizedString(source: string): string
declare function GetLocalizedHotkey(source: string): integer

export abstract class MapString {
    public static integerToReal(i: integer): real {
        return I2R(i)
    }

    public static realToInteger(r: real): integer {
        return R2I(r)
    }

    public static integerToString(i: integer): string {
        return I2S(i)
    }

    public static realToString(r: real): string {
        return R2S(r)
    }

    public static realToStringW(r: real, width: integer, precision: integer): string {
        return R2SW(r, Math.round(width), Math.round(precision))
    }

    public static stringToInteger(s: string): integer {
        return S2I(s)
    }

    public static stringToReal(s: string): real {
        return S2R(s)
    }

    public static subString(source: string, start: integer, ending: integer): string {
        return SubString(source, Math.round(start), Math.round(ending))
    }

    public static stringLength(s: string): integer {
        return StringLength(s)
    }

    public static stringCase(source: string, upper: boolean): string {
        return StringCase(source, upper)
    }

    public static stringHash(s: string): integer {
        return StringHash(s)
    }

    public static getLocalizedString(source: string): string {
        return GetLocalizedString(source)
    }

    public static getLocalizedHotkey(source: string): integer {
        return GetLocalizedHotkey(source)
    }
}
