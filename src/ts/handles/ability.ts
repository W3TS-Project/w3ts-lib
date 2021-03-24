import { Handle } from "./handle"

export class Ability extends Handle<ability> {
    constructor(handle: ability) {
        super(Handle.initFromHandle() ? undefined : handle)
    }

    static fromHandle(handle: ability): Ability {
        return this.getObject(handle)
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
