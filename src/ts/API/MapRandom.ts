/** @noSelfInFile **/
// @ts-nocheck

import { ItemType } from "./fields/item/ItemType"

declare function GetRandomInt(lowBound: integer, highBound: integer): integer
declare function GetRandomReal(lowBound: real, highBound: real): real
declare function ChooseRandomCreep(level: integer): integer
declare function ChooseRandomNPBuilding(): integer
declare function ChooseRandomItem(level: integer): integer
declare function ChooseRandomItemEx(whichType: itemtype, level: integer): integer
declare function SetRandomSeed(seed: integer): void

export abstract class MapRandom {
    public static getInt(lowBound: integer, highBound: integer): integer {
        return GetRandomInt(Math.floor(lowBound), Math.floor(highBound))
    }

    public static getReal(lowBound: real, highBound: real): real {
        return GetRandomReal(lowBound, highBound)
    }

    /**
     * Choose any random unit/item. (NP means Neutral Passive)
     * @param level level
     * @returns integer
     */
    public static chooseCreep(level: integer): integer {
        return ChooseRandomCreep(Math.floor(level))
    }

    public static chooseNPBuilding(): integer {
        return ChooseRandomNPBuilding()
    }

    public static chooseItem(level: integer): integer {
        return ChooseRandomItem(Math.floor(level))
    }

    public static chooseItemEx(whichType: ItemType, level: integer): integer {
        return ChooseRandomItemEx(whichType.getHandle, Math.floor(level))
    }

    public static setSeed(seed: integer) {
        SetRandomSeed(Math.floor(seed))
        return this
    }
}
