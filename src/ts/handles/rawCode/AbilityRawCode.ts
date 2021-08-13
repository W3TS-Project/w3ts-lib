/** @noSelfInFile **/
//@ts-nocheck

import { EffectType } from "../../API/fields/other/EffectType"
import { SoundType } from "../../API/fields/sound/SoundType"
import { RawCode } from "../../RawCode"

declare function BlzSetAbilityTooltip(abilCode: integer, tooltip: string, level: integer): void
declare function BlzSetAbilityActivatedTooltip(
    abilCode: integer,
    tooltip: string,
    level: integer
): void
declare function BlzSetAbilityExtendedTooltip(
    abilCode: integer,
    extendedTooltip: string,
    level: integer
): void
declare function BlzSetAbilityActivatedExtendedTooltip(
    abilCode: integer,
    extendedTooltip: string,
    level: integer
): void
declare function BlzSetAbilityResearchTooltip(
    abilCode: integer,
    researchTooltip: string,
    level: integer
): void
declare function BlzSetAbilityResearchExtendedTooltip(
    abilCode: integer,
    researchExtendedTooltip: string,
    level: integer
): void
declare function BlzGetAbilityTooltip(abilCode: integer, level: integer): string
declare function BlzGetAbilityActivatedTooltip(abilCode: integer, level: integer): string
declare function BlzGetAbilityExtendedTooltip(abilCode: integer, level: integer): string
declare function BlzGetAbilityActivatedExtendedTooltip(abilCode: integer, level: integer): string
declare function BlzGetAbilityResearchTooltip(abilCode: integer, level: integer): string
declare function BlzGetAbilityResearchExtendedTooltip(abilCode: integer, level: integer): string
declare function BlzSetAbilityIcon(abilCode: integer, iconPath: string): void
declare function BlzGetAbilityIcon(abilCode: integer): string
declare function BlzSetAbilityActivatedIcon(abilCode: integer, iconPath: string): void
declare function BlzGetAbilityActivatedIcon(abilCode: integer): string
declare function BlzGetAbilityPosX(abilCode: integer): integer
declare function BlzGetAbilityPosY(abilCode: integer): integer
declare function BlzSetAbilityPosX(abilCode: integer, x: integer): void
declare function BlzSetAbilityPosY(abilCode: integer, y: integer): void
declare function BlzGetAbilityActivatedPosX(abilCode: integer): integer
declare function BlzGetAbilityActivatedPosY(abilCode: integer): integer
declare function BlzSetAbilityActivatedPosX(abilCode: integer, x: integer): void
declare function BlzSetAbilityActivatedPosY(abilCode: integer, y: integer): void
declare function BlzGetAbilityManaCost(abilId: integer, level: integer): integer
declare function BlzGetAbilityCooldown(abilId: integer, level: integer): real
declare function GetAbilityEffect(abilityString: string, t: effecttype, index: integer): string
declare function GetAbilityEffectById(abilityId: integer, t: effecttype, index: integer): string
declare function GetAbilitySound(abilityString: string, t: soundtype): string
declare function GetAbilitySoundById(abilityId: integer, t: soundtype): string

export type AbilityRawCodeType = AbilityRawCode | rawcode

export class AbilityRawCode extends RawCode {
    static readonly ERROR_MESSAGE = "Равкод не является равкодом способности"
    icon: string
    activatedIcon: string
    posX: integer
    posY: integer
    activatedPosX: integer
    activatedPosY: integer

    constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            AbilityRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
        this.icon = this.getIcon()
        this.activatedIcon = this.getActivatedIcon()
        this.posX = this.getPosX()
        this.posY = this.getPosY()
        this.activatedPosX = this.getActivatedPosX()
        this.activatedPosY = this.getActivatedPosY()
    }

    setTooltip(tooltip: string, level: integer) {
        BlzSetAbilityTooltip(this.id, tooltip, Math.floor(level))
        return this
    }

    setActivatedTooltip(tooltip: string, level: integer) {
        BlzSetAbilityActivatedTooltip(this.id, tooltip, Math.floor(level))
        return this
    }

    setExtendedTooltip(extendedTooltip: string, level: integer) {
        BlzSetAbilityExtendedTooltip(this.id, extendedTooltip, Math.floor(level))
        return this
    }

    setActivatedExtendedTooltip(extendedTooltip: string, level: integer) {
        BlzSetAbilityActivatedExtendedTooltip(this.id, extendedTooltip, Math.floor(level))
        return this
    }

    setResearchTooltip(researchTooltip: string, level: integer) {
        BlzSetAbilityResearchTooltip(this.id, researchTooltip, Math.floor(level))
        return this
    }

    setResearchExtendedTooltip(researchExtendedTooltip: string, level: integer) {
        BlzSetAbilityResearchExtendedTooltip(this.id, researchExtendedTooltip, Math.floor(level))
        return this
    }

    getTooltip(level: integer): string {
        return BlzGetAbilityTooltip(this.id, Math.floor(level))
    }

    getActivatedTooltip(level: integer): string {
        return BlzGetAbilityActivatedTooltip(this.id, Math.floor(level))
    }

    getExtendedTooltip(level: integer): string {
        return BlzGetAbilityExtendedTooltip(this.id, Math.floor(level))
    }

    getActivatedExtendedTooltip(level: integer): string {
        return BlzGetAbilityActivatedExtendedTooltip(this.id, Math.floor(level))
    }

    getResearchTooltip(level: integer): string {
        return BlzGetAbilityResearchTooltip(this.id, Math.floor(level))
    }

    getResearchExtendedTooltip(level: integer): string {
        return BlzGetAbilityResearchExtendedTooltip(this.id, Math.floor(level))
    }

    setIcon(iconPath: string) {
        BlzSetAbilityIcon(this.id, iconPath)
        this.icon = iconPath
        return this
    }

    getIcon(): string {
        return BlzGetAbilityIcon(this.id)
    }

    setActivatedIcon(iconPath: string) {
        BlzSetAbilityActivatedIcon(this.id, iconPath)
        this.activatedIcon = iconPath
        return this
    }

    getActivatedIcon(): string {
        return BlzGetAbilityActivatedIcon(this.id)
    }

    getPosX(): integer {
        return BlzGetAbilityPosX(this.id)
    }

    getPosY(): integer {
        return BlzGetAbilityPosY(this.id)
    }

    setPosX(x: integer) {
        BlzSetAbilityPosX(this.id, Math.floor(x))
        this.posX = x
        return this
    }

    setPosY(y: integer) {
        BlzSetAbilityPosY(this.id, Math.floor(y))
        this.posY = y
        return this
    }

    getActivatedPosX(): integer {
        return BlzGetAbilityActivatedPosX(this.id)
    }

    getActivatedPosY(): integer {
        return BlzGetAbilityActivatedPosY(this.id)
    }

    setActivatedPosX(x: integer) {
        BlzSetAbilityActivatedPosX(this.id, Math.floor(x))
        this.activatedPosX = x
        return this
    }

    setActivatedPosY(y: integer) {
        BlzSetAbilityActivatedPosY(this.id, Math.floor(y))
        this.activatedPosY = y
        return this
    }

    getManaCost(level: integer): integer {
        return BlzGetAbilityManaCost(this.id, Math.floor(level))
    }

    getCooldown(level: integer): real {
        return BlzGetAbilityCooldown(this.id, Math.floor(level))
    }

    getEffect(t: EffectType, index: integer) {
        return GetAbilityEffect(this.chars, t.getHandle() as effecttype, Math.floor(index))
    }

    getEffectById(t: EffectType, index: integer) {
        return GetAbilityEffectById(this.id, t.getHandle() as effecttype, Math.floor(index))
    }

    getSound(t: SoundType) {
        return GetAbilitySound(this.chars, t.getHandle() as soundtype)
    }

    getSoundById(t: SoundType) {
        return GetAbilitySoundById(this.id, t.getHandle() as soundtype)
    }

    static get(rawCode: AbilityRawCodeType, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return RawCode.get(rawCode, isBasicCheck) as AbilityRawCode
    }

    static check(id: AbilityRawCodeType): boolean {
        if (!RawCode.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: AbilityRawCodeType) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
