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

export class AbilityRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом способности"
    public icon: string
    public activatedIcon: string
    public posX: integer
    public posY: integer
    public activatedPosX: integer
    public activatedPosY: integer

    public constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
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

    public setTooltip(tooltip: string, level: integer) {
        BlzSetAbilityTooltip(this.id, tooltip, Math.floor(level))
        return this
    }

    public setActivatedTooltip(tooltip: string, level: integer) {
        BlzSetAbilityActivatedTooltip(this.id, tooltip, Math.floor(level))
        return this
    }

    public setExtendedTooltip(extendedTooltip: string, level: integer) {
        BlzSetAbilityExtendedTooltip(this.id, extendedTooltip, Math.floor(level))
        return this
    }

    public setActivatedExtendedTooltip(extendedTooltip: string, level: integer) {
        BlzSetAbilityActivatedExtendedTooltip(this.id, extendedTooltip, Math.floor(level))
        return this
    }

    public setResearchTooltip(researchTooltip: string, level: integer) {
        BlzSetAbilityResearchTooltip(this.id, researchTooltip, Math.floor(level))
        return this
    }

    public setResearchExtendedTooltip(researchExtendedTooltip: string, level: integer) {
        BlzSetAbilityResearchExtendedTooltip(this.id, researchExtendedTooltip, Math.floor(level))
        return this
    }

    public getTooltip(level: integer): string {
        return BlzGetAbilityTooltip(this.id, Math.floor(level))
    }

    public getActivatedTooltip(level: integer): string {
        return BlzGetAbilityActivatedTooltip(this.id, Math.floor(level))
    }

    public getExtendedTooltip(level: integer): string {
        return BlzGetAbilityExtendedTooltip(this.id, Math.floor(level))
    }

    public getActivatedExtendedTooltip(level: integer): string {
        return BlzGetAbilityActivatedExtendedTooltip(this.id, Math.floor(level))
    }

    public getResearchTooltip(level: integer): string {
        return BlzGetAbilityResearchTooltip(this.id, Math.floor(level))
    }

    public getResearchExtendedTooltip(level: integer): string {
        return BlzGetAbilityResearchExtendedTooltip(this.id, Math.floor(level))
    }

    public setIcon(iconPath: string) {
        BlzSetAbilityIcon(this.id, iconPath)
        this.icon = iconPath
        return this
    }

    public getIcon(): string {
        return BlzGetAbilityIcon(this.id)
    }

    public setActivatedIcon(iconPath: string) {
        BlzSetAbilityActivatedIcon(this.id, iconPath)
        this.activatedIcon = iconPath
        return this
    }

    public getActivatedIcon(): string {
        return BlzGetAbilityActivatedIcon(this.id)
    }

    public getPosX(): integer {
        return BlzGetAbilityPosX(this.id)
    }

    public getPosY(): integer {
        return BlzGetAbilityPosY(this.id)
    }

    public setPosX(x: integer) {
        BlzSetAbilityPosX(this.id, Math.floor(x))
        this.posX = x
        return this
    }

    public setPosY(y: integer) {
        BlzSetAbilityPosY(this.id, Math.floor(y))
        this.posY = y
        return this
    }

    public getActivatedPosX(): integer {
        return BlzGetAbilityActivatedPosX(this.id)
    }

    public getActivatedPosY(): integer {
        return BlzGetAbilityActivatedPosY(this.id)
    }

    public setActivatedPosX(x: integer) {
        BlzSetAbilityActivatedPosX(this.id, Math.floor(x))
        this.activatedPosX = x
        return this
    }

    public setActivatedPosY(y: integer) {
        BlzSetAbilityActivatedPosY(this.id, Math.floor(y))
        this.activatedPosY = y
        return this
    }

    public getManaCost(level: integer): integer {
        return BlzGetAbilityManaCost(this.id, Math.floor(level))
    }

    public getCooldown(level: integer): real {
        return BlzGetAbilityCooldown(this.id, Math.floor(level))
    }

    public getEffect(t: EffectType, index: integer) {
        return GetAbilityEffect(this.chars, t.getHandle() as effecttype, Math.floor(index))
    }

    public getEffectById(t: EffectType, index: integer) {
        return GetAbilityEffectById(this.id, t.getHandle() as effecttype, Math.floor(index))
    }

    public getSound(t: SoundType) {
        return GetAbilitySound(this.chars, t.getHandle() as soundtype)
    }

    public getSoundById(t: SoundType) {
        return GetAbilitySoundById(this.id, t.getHandle() as soundtype)
    }

    public static get(rawCode: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return super.get(rawCode, isBasicCheck) as AbilityRawCode
    }

    protected static check(id: rawcode): boolean {
        if (!super.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: rawcode) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}