/** @noSelfInFile **/
// @ts-nocheck

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

export abstract class MapMath {
    public static deg2Rad(degrees: real): real {
        return Deg2Rad(degrees)
    }

    public static rad2Deg(radians: real): real {
        return Rad2Deg(radians)
    }

    public static sin(radians: real): real {
        return Sin(radians)
    }

    public static cos(radians: real): real {
        return Cos(radians)
    }

    public static tan(radians: real): real {
        return Tan(radians)
    }

    public static asin(y: real): real {
        return Asin(y)
    }

    public static acos(x: real): real {
        return Acos(x)
    }

    public static atan(x: real): real {
        return Atan(x)
    }

    public static atan2(y: real, x: real): real {
        return Atan2(y, x)
    }

    public static squareRoot(x: real): real {
        return SquareRoot(x)
    }

    public static pow(x: real, power: real): real {
        return Pow(x, power)
    }

    public static bitOr(x: integer, y: integer): integer {
        return BlzBitOr(Math.floor(x), Math.floor(y))
    }

    public static bitAnd(x: integer, y: integer): integer {
        return BlzBitAnd(Math.floor(x), Math.floor(y))
    }

    public static bitXor(x: integer, y: integer): integer {
        return BlzBitXor(Math.floor(x), Math.floor(y))
    }
}
