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
    static getInt(lowBound: integer, highBound: integer): integer {
        return GetRandomInt(Math.floor(lowBound), Math.floor(highBound))
    }

    static getReal(lowBound: real, highBound: real): real {
        return GetRandomReal(lowBound, highBound)
    }

    /**
     * Choose any random unit/item. (NP means Neutral Passive)
     * @param level level
     * @returns integer
     */
    static chooseCreep(level: integer): integer {
        return ChooseRandomCreep(Math.floor(level))
    }

    static chooseNPBuilding(): integer {
        return ChooseRandomNPBuilding()
    }

    static chooseItem(level: integer): integer {
        return ChooseRandomItem(Math.floor(level))
    }

    static chooseItemEx(whichType: ItemType, level: integer): integer {
        return ChooseRandomItemEx(whichType.getHandle() as itemtype, Math.floor(level))
    }

    static setSeed(seed: integer) {
        SetRandomSeed(Math.floor(seed))
        return this
    }
}
