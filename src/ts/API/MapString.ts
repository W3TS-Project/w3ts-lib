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
    static integerToReal(i: integer): real {
        return I2R(i)
    }

    static realToInteger(r: real): integer {
        return R2I(r)
    }

    static integerToString(i: integer): string {
        return I2S(i)
    }

    static realToString(r: real): string {
        return R2S(r)
    }

    static realToStringW(r: real, width: integer, precision: integer): string {
        return R2SW(r, Math.floor(width), Math.floor(precision))
    }

    static stringToInteger(s: string): integer {
        return S2I(s)
    }

    static stringToReal(s: string): real {
        return S2R(s)
    }

    static subString(source: string, start: integer, ending: integer): string {
        return SubString(source, Math.floor(start), Math.floor(ending))
    }

    static stringLength(s: string): integer {
        return StringLength(s)
    }

    static stringCase(source: string, upper: boolean): string {
        return StringCase(source, upper)
    }

    static stringHash(s: string): integer {
        return StringHash(s)
    }

    static getLocalizedString(source: string): string {
        return GetLocalizedString(source)
    }

    static getLocalizedHotkey(source: string): integer {
        return GetLocalizedHotkey(source)
    }
}
