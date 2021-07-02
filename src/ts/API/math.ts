/** @noSelfInFile **/
// @ts-nocheck

import { integer, real } from "../Utils"

declare function Deg2Rad(degrees: real): real
declare function Rad2Deg(radians: real): real
declare function Sin(radians: real): real
declare function Cos(radians: real): real
declare function Tan(radians: real): real
// Expect values between -1 and 1...returns 0 for invalid input
declare function Asin(y: real): real
declare function Acos(x: real): real
declare function Atan(x: real): real
// Returns 0 if x and y are both 0
declare function Atan2(y: real, x: real): real
// Returns 0 if x <= 0
declare function SquareRoot(x: real): real
// computes x to the y power
// y == 0.0             => 1
// x ==0.0 and y < 0    => 0
declare function Pow(x: real, power: real): real

//  BlzFourCC2S                                 takes integer value returns string
//  BlzS2FourCC                                 takes string value returns integer

// Bit Operations
declare function BlzBitOr(x: integer, y: integer): integer
declare function BlzBitAnd(x: integer, y: integer): integer
declare function BlzBitXor(x: integer, y: integer): integer

declare function GetRandomInt(lowBound: integer, highBound: integer): integer
declare function GetRandomReal(lowBound: real, highBound: real): real
declare function SetRandomSeed(seed: integer): void

export const deg2Rad = Deg2Rad
export const rad2Deg = Rad2Deg
export const sin = Sin
export const cos = Cos
export const tan = Tan
export const asin = Asin
export const acos = Acos
export const atan = Atan
export const atan2 = Atan2
export const squareRoot = SquareRoot
export const pow = Pow
export const bitOr = BlzBitOr
export const bitAnd = BlzBitAnd
export const bitXor = BlzBitXor
export const getRandomInt = GetRandomInt
export const getRandomReal = GetRandomReal
export const setRandomSeed = SetRandomSeed
