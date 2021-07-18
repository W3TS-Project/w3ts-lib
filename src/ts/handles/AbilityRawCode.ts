/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../RawCode"

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

export class AbilityRawCode extends RawCode {
    public setTooltip(tooltip: string, level: integer) {
        BlzSetAbilityTooltip(this.id, tooltip, Math.round(level))
        return this
    }

    public setActivatedTooltip(tooltip: string, level: integer) {
        BlzSetAbilityActivatedTooltip(this.id, tooltip, Math.round(level))
        return this
    }

    public setExtendedTooltip(extendedTooltip: string, level: integer) {
        BlzSetAbilityExtendedTooltip(this.id, extendedTooltip, Math.round(level))
        return this
    }

    public setActivatedExtendedTooltip(extendedTooltip: string, level: integer) {
        BlzSetAbilityActivatedExtendedTooltip(this.id, extendedTooltip, Math.round(level))
        return this
    }

    public setResearchTooltip(researchTooltip: string, level: integer) {
        BlzSetAbilityResearchTooltip(this.id, researchTooltip, Math.round(level))
        return this
    }

    public setResearchExtendedTooltip(researchExtendedTooltip: string, level: integer) {
        BlzSetAbilityResearchExtendedTooltip(this.id, researchExtendedTooltip, Math.round(level))
        return this
    }

    public getTooltip(level: integer): string {
        return BlzGetAbilityTooltip(this.id, Math.round(level))
    }

    public getActivatedTooltip(level: integer): string {
        return BlzGetAbilityActivatedTooltip(this.id, Math.round(level))
    }

    public getExtendedTooltip(level: integer): string {
        return BlzGetAbilityExtendedTooltip(this.id, Math.round(level))
    }

    public getActivatedExtendedTooltip(level: integer): string {
        return BlzGetAbilityActivatedExtendedTooltip(this.id, Math.round(level))
    }

    public getResearchTooltip(level: integer): string {
        return BlzGetAbilityResearchTooltip(this.id, Math.round(level))
    }

    public getResearchExtendedTooltip(level: integer): string {
        return BlzGetAbilityResearchExtendedTooltip(this.id, Math.round(level))
    }

    public setIcon(iconPath: string) {
        BlzSetAbilityIcon(this.id, iconPath)
        return this
    }

    public getIcon(): string {
        return BlzGetAbilityIcon(this.id)
    }

    public setActivatedIcon(iconPath: string) {
        BlzSetAbilityActivatedIcon(this.id, iconPath)
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
        BlzSetAbilityPosX(this.id, Math.round(x))
        return this
    }

    public setPosY(y: integer) {
        BlzSetAbilityPosY(this.id, Math.round(y))
        return this
    }

    public getActivatedPosX(): integer {
        return BlzGetAbilityActivatedPosX(this.id)
    }

    public getActivatedPosY(): integer {
        return BlzGetAbilityActivatedPosY(this.id)
    }

    public setActivatedPosX(x: integer) {
        BlzSetAbilityActivatedPosX(this.id, Math.round(x))
        return this
    }

    public setActivatedPosY(y: integer) {
        BlzSetAbilityActivatedPosY(this.id, Math.round(y))
        return this
    }

    public getManaCost(level: integer): integer {
        return BlzGetAbilityManaCost(this.id, Math.round(level))
    }

    public getCooldown(level: integer): real {
        return BlzGetAbilityCooldown(this.id, Math.round(level))
    }
}
