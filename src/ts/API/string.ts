/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../utils"

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

export const integerToReal = I2R
export const realToInteger = R2I
export const integerToString = I2S
export const realToString = R2S
export const realToStringW = R2SW
export const stringToInteger = S2I
export const stringToReal = S2R
export const subString = SubString
export const stringLength = StringLength
export const stringCase = StringCase
export const stringHash = StringHash

export const getLocalizedString = GetLocalizedString
export const getLocalizedHotkey = GetLocalizedHotkey
