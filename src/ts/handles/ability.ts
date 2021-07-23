/** @noSelfInFile **/
//@ts-nocheck

import { AbilityBooleanLevelArrayField } from "../API/fields/ability/array/AbilityBooleanLevelArrayField"
import { AbilityIntegerLevelArrayField } from "../API/fields/ability/array/AbilityIntegerLevelArrayField"
import { AbilityRealLevelArrayField } from "../API/fields/ability/array/AbilityRealLevelArrayField"
import { AbilityStringLevelArrayField } from "../API/fields/ability/array/AbilityStringLevelArrayField"
import { AbilityBooleanField } from "../API/fields/ability/base/AbilityBooleanField"
import { AbilityIntegerField } from "../API/fields/ability/base/AbilityIntegerField"
import { AbilityRealField } from "../API/fields/ability/base/AbilityRealField"
import { AbilityStringField } from "../API/fields/ability/base/AbilityStringField"
import { AbilityBooleanLevelField } from "../API/fields/ability/level/AbilityBooleanLevelField"
import { AbilityIntegerLevelField } from "../API/fields/ability/level/AbilityIntegerLevelField"
import { AbilityRealLevelField } from "../API/fields/ability/level/AbilityRealLevelField"
import { AbilityStringLevelField } from "../API/fields/ability/level/AbilityStringLevelField"
import { Handle } from "./Handle"

declare function BlzGetAbilityBooleanField(whichAbility: ability, whichField: abilitybooleanfield): boolean
declare function BlzGetAbilityIntegerField(whichAbility: ability, whichField: abilityintegerfield): integer
declare function BlzGetAbilityRealField(whichAbility: ability, whichField: abilityrealfield): real
declare function BlzGetAbilityStringField(whichAbility: ability, whichField: abilitystringfield): string
declare function BlzGetAbilityBooleanLevelField(whichAbility: ability, whichField: abilitybooleanlevelfield, level: integer): boolean 
declare function BlzGetAbilityIntegerLevelField(whichAbility: ability, whichField: abilityintegerlevelfield, level: integer): integer
declare function BlzGetAbilityRealLevelField(whichAbility: ability, whichField: abilityreallevelfield, level: integer): real
declare function BlzGetAbilityStringLevelField(whichAbility: ability, whichField: abilitystringlevelfield, level: integer): string
declare function BlzGetAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, index: integer): boolean
declare function BlzGetAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, index: integer): integer
declare function BlzGetAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, index: integer): real
declare function BlzGetAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, index: integer): string
declare function BlzSetAbilityBooleanField(whichAbility: ability, whichField: abilitybooleanfield, value: boolean): boolean
declare function BlzSetAbilityIntegerField(whichAbility: ability, whichField: abilityintegerfield, value: integer): boolean
declare function BlzSetAbilityRealField(whichAbility: ability, whichField: abilityrealfield, value: real): boolean
declare function BlzSetAbilityStringField(whichAbility: ability, whichField: abilitystringfield, value: string): boolean
declare function BlzSetAbilityBooleanLevelField(whichAbility: ability, whichField: abilitybooleanlevelfield, level: integer, value: boolean): boolean
declare function BlzSetAbilityIntegerLevelField(whichAbility: ability, whichField: abilityintegerlevelfield, level: integer, value: integer): boolean
declare function BlzSetAbilityRealLevelField(whichAbility: ability, whichField: abilityreallevelfield, level: integer, value: real): boolean
declare function BlzSetAbilityStringLevelField(whichAbility: ability, whichField: abilitystringlevelfield, level: integer, value: string): boolean
declare function BlzSetAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, index: integer, value: boolean): boolean
declare function BlzSetAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, index: integer, value: integer): boolean
declare function BlzSetAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, index: integer, value: real): boolean
declare function BlzSetAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, index: integer, value: string): boolean
declare function BlzAddAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, value: boolean): boolean
declare function BlzAddAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, value: integer): boolean
declare function BlzAddAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, value: real): boolean
declare function BlzAddAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, value: string): boolean
declare function BlzRemoveAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, value: boolean): boolean
declare function BlzRemoveAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, value: integer): boolean
declare function BlzRemoveAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, value: real): boolean
declare function BlzRemoveAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, value: string): boolean

export type AbilityFieldType = AbilityBooleanField | AbilityIntegerField | AbilityRealField | AbilityStringField

export type AbilityLevelFieldType = AbilityBooleanLevelField | AbilityIntegerLevelField | AbilityRealLevelField | AbilityStringLevelField

export type AbilityLevelArrayFieldType = AbilityBooleanLevelArrayField | AbilityIntegerLevelArrayField | AbilityRealLevelArrayField | AbilityStringLevelArrayField

export class Ability extends Handle<ability> {
    public getBooleanField(whichField: AbilityBooleanField) {
        return BlzGetAbilityBooleanField(this.getHandle, whichField.getHandle)
    }

    public getIntegerField(whichField: AbilityIntegerField): integer {
        return BlzGetAbilityIntegerField(this.getHandle, whichField.getHandle)
    }

    public getRealField(whichField: AbilityRealField): real {
        return BlzGetAbilityRealField(this.getHandle, whichField.getHandle)
    }

    public getStringField(whichField: AbilityStringField) {
        return BlzGetAbilityStringField(this.getHandle, whichField.getHandle)
    }

    public getField(whichField: AbilityFieldType): Primitive | undefined {
        let field: Primitive | undefined
        if (whichField instanceof AbilityBooleanField) {
            field = this.getBooleanField(whichField)
        } else if (whichField instanceof AbilityIntegerField) {
            field = this.getIntegerField(whichField)
        } else if (whichField instanceof AbilityRealField) {
            field = this.getRealField(whichField)
        } else if (whichField instanceof AbilityStringField) {
            field = this.getStringField(whichField)
        }
        return field
    }

    public getBooleanLevelField(whichField: AbilityBooleanLevelField, level: integer) {
        return BlzGetAbilityBooleanLevelField(this.getHandle, whichField.getHandle, Math.round(level))
    }

    public getIntegerLevelField(whichField: AbilityIntegerLevelField, level: integer): integer {
        return BlzGetAbilityIntegerLevelField(this.getHandle, whichField.getHandle, Math.round(level))
    }

    public getRealLevelField(whichField: AbilityRealLevelField, level: integer): real {
        return BlzGetAbilityRealLevelField(this.getHandle, whichField.getHandle, Math.round(level))
    }

    public getStringLevelField(whichField: AbilityStringLevelField, level: integer) {
        return BlzGetAbilityStringLevelField(this.getHandle, whichField.getHandle, Math.round(level))
    }

    public getLevelField(whichField: AbilityLevelFieldType, level: integer): Primitive | undefined {
        let field: Primitive | undefined
        if (whichField instanceof AbilityBooleanLevelField) {
            field = this.getBooleanLevelField(whichField, level)
        } else if (whichField instanceof AbilityIntegerLevelField) {
            field = this.getIntegerLevelField(whichField, level)
        } else if (whichField instanceof AbilityRealLevelField) {
            field = this.getRealLevelField(whichField, level)
        } else if (whichField instanceof AbilityStringLevelField) {
            field = this.getStringLevelField(whichField, level)
        }
        return field
    }

    public getBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, index: integer) {
        return BlzGetAbilityBooleanLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index))
    }

    public getIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, index: integer): integer {
        return BlzGetAbilityIntegerLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index))
    }

    public getRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, index: integer): real {
        return BlzGetAbilityRealLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index))
    }

    public getStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, index: integer) {
        return BlzGetAbilityStringLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index))
    }

    public getLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, index: integer): Primitive | undefined {
        let field: Primitive | undefined
        if (whichField instanceof AbilityBooleanLevelArrayField) {
            field = this.getBooleanLevelArrayField(whichField, level, index)
        } else if (whichField instanceof AbilityIntegerLevelArrayField) {
            field = this.getIntegerLevelArrayField(whichField, level, index)
        } else if (whichField instanceof AbilityRealLevelArrayField) {
            field = this.getRealLevelArrayField(whichField, level, index)
        } else if (whichField instanceof AbilityStringLevelArrayField) {
            field = this.getStringLevelArrayField(whichField, level, index)
        }
        return field
    }

    public setBooleanField(whichField: AbilityBooleanField, value: boolean) {
        return BlzSetAbilityBooleanField(this.getHandle, whichField.getHandle, value)
    }

    public setIntegerField(whichField: AbilityIntegerField, value: integer) {
        return BlzSetAbilityIntegerField(this.getHandle, whichField.getHandle, Math.round(value))
    }

    public setRealField(whichField: AbilityRealField, value: real) {
        return BlzSetAbilityRealField(this.getHandle, whichField.getHandle, value)
    }

    public setStringField(whichField: AbilityStringField, value: string) {
        return BlzSetAbilityStringField(this.getHandle, whichField.getHandle, value)
    }

    public setField(whichField: AbilityFieldType, value: Primitive) {
        if (whichField instanceof AbilityBooleanField && typeof value === 'boolean') {
            return this.setBooleanField(whichField, value)
        } else if (whichField instanceof AbilityIntegerField && typeof value === 'number') {
            return this.setIntegerField(whichField, value)
        } else if (whichField instanceof AbilityRealField && typeof value === 'number') {
            return this.setRealField(whichField, value)
        } else if (whichField instanceof AbilityStringField && typeof value === 'string') {
            return this.setStringField(whichField, value)
        } else {
            error('Неверные аргументы вызова метода setField объекта класса Ability', 2)
        }
    }

    public setBooleanLevelField(whichField: AbilityBooleanLevelField, level: integer, value: boolean) {
        return BlzSetAbilityBooleanLevelField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public setIntegerLevelField(whichField: AbilityIntegerLevelField, level: integer, value: integer) {
        return BlzSetAbilityIntegerLevelField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(value))
    }

    public setRealLevelField(whichField: AbilityRealLevelField, level: integer, value: real) {
        return BlzSetAbilityRealLevelField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public setStringLevelField(whichField: AbilityStringLevelField, level: integer, value: string) {
        return BlzSetAbilityStringLevelField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public setLevelField(whichField: AbilityLevelFieldType, level: integer, value: Primitive) {
        if (whichField instanceof AbilityBooleanLevelField && typeof value === 'boolean') {
            this.setBooleanLevelField(whichField, level, value)
        } else if (whichField instanceof AbilityIntegerLevelField && typeof value === 'number') {
            this.setIntegerLevelField(whichField, level, value)
        } else if (whichField instanceof AbilityRealLevelField && typeof value === 'number') {
            this.setRealLevelField(whichField, level, value)
        } else if (whichField instanceof AbilityStringLevelField && typeof value === 'string') {
            this.setStringLevelField(whichField, level, value)
        } else {
            error('Неверные аргументы вызова метода setLevelField объекта класса Ability', 2)
        }
    }

    public setBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, index: integer, value: boolean) {
        return BlzSetAbilityBooleanLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index), value)
    }

    public setIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, index: integer, value: integer) {
        return BlzSetAbilityIntegerLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index), Math.round(value))
    }

    public setRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, index: integer, value: real) {
        return BlzSetAbilityRealLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index), value)
    }

    public setStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, index: integer, value: string) {
        return BlzSetAbilityStringLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(index), value)
    }

    public setLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, index: integer, value: Primitive) {
        if (whichField instanceof AbilityBooleanLevelArrayField && typeof value === 'boolean') {
            this.setBooleanLevelArrayField(whichField, level, index, value)
        } else if (whichField instanceof AbilityIntegerLevelArrayField && typeof value === 'number') {
            this.setIntegerLevelArrayField(whichField, level, index, value)
        } else if (whichField instanceof AbilityRealLevelArrayField && typeof value === 'number') {
            this.setRealLevelArrayField(whichField, level, index, value)
        } else if (whichField instanceof AbilityStringLevelArrayField && typeof value === 'string') {
            this.setStringLevelArrayField(whichField, level, index, value)
        } else {
            error('Неверные аргументы вызова метода setLevelArrayField объекта класса Ability', 2)
        }
    }

    public addBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, value: boolean) {
        return BlzAddAbilityBooleanLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public addIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, value: integer) {
        return BlzAddAbilityIntegerLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(value))
    }

    public addRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, value: real) {
        return BlzAddAbilityRealLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public addStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, value: string) {
        return BlzAddAbilityStringLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public addLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, value: Primitive) {
        if (whichField instanceof AbilityBooleanLevelArrayField && typeof value === 'boolean') {
            this.addBooleanLevelArrayField(whichField, level, value)
        } else if (whichField instanceof AbilityIntegerLevelArrayField && typeof value === 'number') {
            this.addIntegerLevelArrayField(whichField, level, value)
        } else if (whichField instanceof AbilityRealLevelArrayField && typeof value === 'number') {
            this.addRealLevelArrayField(whichField, level, value)
        } else if (whichField instanceof AbilityStringLevelArrayField && typeof value === 'string') {
            this.addStringLevelArrayField(whichField, level, value)
        } else {
            error('Неверные аргументы вызова метода addLevelArrayField объекта класса Ability', 2)
        }
    }

    public removeBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, value: boolean) {
        return BlzRemoveAbilityBooleanLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public removeIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, value: integer) {
        return BlzRemoveAbilityIntegerLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), Math.round(value))
    }

    public removeRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, value: real) {
        return BlzRemoveAbilityRealLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public removeStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, value: string) {
        return BlzRemoveAbilityStringLevelArrayField(this.getHandle, whichField.getHandle, Math.round(level), value)
    }

    public removeLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, value: Primitive) {
        if (whichField instanceof AbilityBooleanLevelArrayField && typeof value === 'boolean') {
            this.removeBooleanLevelArrayField(whichField, level, value)
        } else if (whichField instanceof AbilityIntegerLevelArrayField && typeof value === 'number') {
            this.removeIntegerLevelArrayField(whichField, level, value)
        } else if (whichField instanceof AbilityRealLevelArrayField && typeof value === 'number') {
            this.removeRealLevelArrayField(whichField, level, value)
        } else if (whichField instanceof AbilityStringLevelArrayField && typeof value === 'string') {
            this.removeStringLevelArrayField(whichField, level, value)
        } else {
            error('Неверные аргументы вызова метода removeLevelArrayField объекта класса Ability', 2)
        }
    }

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
