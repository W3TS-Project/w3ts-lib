/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./handle"

export class Ability extends Handle<ability> {
    public static fromHandle(handle: ability): Ability {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: Ability): ability {
        return this.getHandle(handleObject)
    }
}

// ---@param abilityString string
// ---@param t effecttype
// ---@param index integer
// ---@return string
// function GetAbilityEffect(abilityString, t, index) end

// ---@param abilityId integer
// ---@param t effecttype
// ---@param index integer
// ---@return string
// function GetAbilityEffectById(abilityId, t, index) end

// ---@param abilityString string
// ---@param t soundtype
// ---@return string
// function GetAbilitySound(abilityString, t) end

// ---@param abilityId integer
// ---@param t soundtype
// ---@return string
// function GetAbilitySoundById(abilityId, t) end
