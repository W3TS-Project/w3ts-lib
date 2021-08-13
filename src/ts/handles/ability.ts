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
    getBooleanField(whichField: AbilityBooleanField) {
        return BlzGetAbilityBooleanField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanfield)
    }

    getIntegerField(whichField: AbilityIntegerField): integer {
        return BlzGetAbilityIntegerField(this.getHandle() as ability, whichField.getHandle() as abilityintegerfield)
    }

    getRealField(whichField: AbilityRealField): real {
        return BlzGetAbilityRealField(this.getHandle() as ability, whichField.getHandle() as abilityrealfield)
    }

    getStringField(whichField: AbilityStringField) {
        return BlzGetAbilityStringField(this.getHandle() as ability, whichField.getHandle() as abilitystringfield)
    }

    getField(whichField: AbilityFieldType): Primitive | undefined {
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

    getBooleanLevelField(whichField: AbilityBooleanLevelField, level: integer) {
        return BlzGetAbilityBooleanLevelField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanlevelfield, Math.floor(level))
    }

    getIntegerLevelField(whichField: AbilityIntegerLevelField, level: integer): integer {
        return BlzGetAbilityIntegerLevelField(this.getHandle() as ability, whichField.getHandle() as abilityintegerlevelfield, Math.floor(level))
    }

    getRealLevelField(whichField: AbilityRealLevelField, level: integer): real {
        return BlzGetAbilityRealLevelField(this.getHandle() as ability, whichField.getHandle() as abilityreallevelfield, Math.floor(level))
    }

    getStringLevelField(whichField: AbilityStringLevelField, level: integer) {
        return BlzGetAbilityStringLevelField(this.getHandle() as ability, whichField.getHandle() as abilitystringlevelfield, Math.floor(level))
    }

    getLevelField(whichField: AbilityLevelFieldType, level: integer): Primitive | undefined {
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

    getBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, index: integer) {
        return BlzGetAbilityBooleanLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanlevelarrayfield, Math.floor(level), Math.floor(index))
    }

    getIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, index: integer): integer {
        return BlzGetAbilityIntegerLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityintegerlevelarrayfield, Math.floor(level), Math.floor(index))
    }

    getRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, index: integer): real {
        return BlzGetAbilityRealLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityreallevelarrayfield, Math.floor(level), Math.floor(index))
    }

    getStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, index: integer) {
        return BlzGetAbilityStringLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitystringlevelarrayfield, Math.floor(level), Math.floor(index))
    }

    getLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, index: integer): Primitive | undefined {
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

    setBooleanField(whichField: AbilityBooleanField, value: boolean) {
        return BlzSetAbilityBooleanField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanfield, value)
    }

    setIntegerField(whichField: AbilityIntegerField, value: integer) {
        return BlzSetAbilityIntegerField(this.getHandle() as ability, whichField.getHandle() as abilityintegerfield, Math.floor(value))
    }

    setRealField(whichField: AbilityRealField, value: real) {
        return BlzSetAbilityRealField(this.getHandle() as ability, whichField.getHandle() as abilityrealfield, value)
    }

    setStringField(whichField: AbilityStringField, value: string) {
        return BlzSetAbilityStringField(this.getHandle() as ability, whichField.getHandle() as abilitystringfield, value)
    }

    setField(whichField: AbilityFieldType, value: Primitive) {
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

    setBooleanLevelField(whichField: AbilityBooleanLevelField, level: integer, value: boolean) {
        return BlzSetAbilityBooleanLevelField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanlevelfield, Math.floor(level), value)
    }

    setIntegerLevelField(whichField: AbilityIntegerLevelField, level: integer, value: integer) {
        return BlzSetAbilityIntegerLevelField(this.getHandle() as ability, whichField.getHandle() as abilityintegerlevelfield, Math.floor(level), Math.floor(value))
    }

    setRealLevelField(whichField: AbilityRealLevelField, level: integer, value: real) {
        return BlzSetAbilityRealLevelField(this.getHandle() as ability, whichField.getHandle() as abilityreallevelfield, Math.floor(level), value)
    }

    setStringLevelField(whichField: AbilityStringLevelField, level: integer, value: string) {
        return BlzSetAbilityStringLevelField(this.getHandle() as ability, whichField.getHandle() as abilitystringlevelfield, Math.floor(level), value)
    }

    setLevelField(whichField: AbilityLevelFieldType, level: integer, value: Primitive) {
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

    setBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, index: integer, value: boolean) {
        return BlzSetAbilityBooleanLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanlevelarrayfield, Math.floor(level), Math.floor(index), value)
    }

    setIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, index: integer, value: integer) {
        return BlzSetAbilityIntegerLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityintegerlevelarrayfield, Math.floor(level), Math.floor(index), Math.floor(value))
    }

    setRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, index: integer, value: real) {
        return BlzSetAbilityRealLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityreallevelarrayfield, Math.floor(level), Math.floor(index), value)
    }

    setStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, index: integer, value: string) {
        return BlzSetAbilityStringLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitystringlevelarrayfield, Math.floor(level), Math.floor(index), value)
    }

    setLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, index: integer, value: Primitive) {
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

    addBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, value: boolean) {
        return BlzAddAbilityBooleanLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanlevelarrayfield, Math.floor(level), value)
    }

    addIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, value: integer) {
        return BlzAddAbilityIntegerLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityintegerlevelarrayfield, Math.floor(level), Math.floor(value))
    }

    addRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, value: real) {
        return BlzAddAbilityRealLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityreallevelarrayfield, Math.floor(level), value)
    }

    addStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, value: string) {
        return BlzAddAbilityStringLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitystringlevelarrayfield, Math.floor(level), value)
    }

    addLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, value: Primitive) {
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

    removeBooleanLevelArrayField(whichField: AbilityBooleanLevelArrayField, level: integer, value: boolean) {
        return BlzRemoveAbilityBooleanLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitybooleanlevelarrayfield, Math.floor(level), value)
    }

    removeIntegerLevelArrayField(whichField: AbilityIntegerLevelArrayField, level: integer, value: integer) {
        return BlzRemoveAbilityIntegerLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityintegerlevelarrayfield, Math.floor(level), Math.floor(value))
    }

    removeRealLevelArrayField(whichField: AbilityRealLevelArrayField, level: integer, value: real) {
        return BlzRemoveAbilityRealLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilityreallevelarrayfield, Math.floor(level), value)
    }

    removeStringLevelArrayField(whichField: AbilityStringLevelArrayField, level: integer, value: string) {
        return BlzRemoveAbilityStringLevelArrayField(this.getHandle() as ability, whichField.getHandle() as abilitystringlevelarrayfield, Math.floor(level), value)
    }

    removeLevelArrayField(whichField: AbilityLevelArrayFieldType, level: integer, value: Primitive) {
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

    static fromHandle(handle: ability) {
        return this.getObject(handle) as Ability
    }
}