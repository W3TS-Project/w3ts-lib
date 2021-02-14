/** @noSelfInFile **/
// @ts-nocheck

import { Destructable } from "../handles/destructable";

declare function BlzSetAbilityTooltip(abilCode:number,tooltip:string,level:number):void
declare function BlzSetAbilityActivatedTooltip(abilCode:number,tooltip:string,level:number):void
declare function BlzSetAbilityExtendedTooltip(abilCode:number,extendedTooltip:string,level:number):void
declare function BlzSetAbilityActivatedExtendedTooltip(abilCode:number,extendedTooltip:string,level:number):void
declare function BlzSetAbilityResearchTooltip(abilCode:number,researchTooltip:string,level:number):void
declare function BlzSetAbilityResearchExtendedTooltip(abilCode:number,researchExtendedTooltip:string,level:number):void
declare function BlzGetAbilityTooltip(abilCode:number,level:number):string
declare function BlzGetAbilityActivatedTooltip(abilCode:number,level:number):string
declare function BlzGetAbilityExtendedTooltip(abilCode:number,level:number):string
declare function BlzGetAbilityActivatedExtendedTooltip(abilCode:number,level:number):string
declare function BlzGetAbilityResearchTooltip(abilCode:number,level:number):string
declare function BlzGetAbilityResearchExtendedTooltip(abilCode:number,level:number):string
declare function BlzSetAbilityIcon(abilCode:number,iconPath:string):void
declare function BlzGetAbilityIcon(abilCode:number):string
declare function BlzSetAbilityActivatedIcon(abilCode:number,iconPath:string):void
declare function BlzGetAbilityActivatedIcon(abilCode:number):string
declare function BlzGetAbilityPosX(abilCode:number):number
declare function BlzGetAbilityPosY(abilCode:number):number
declare function BlzSetAbilityPosX(abilCode:number,x:number):void
declare function BlzSetAbilityPosY(abilCode:number,y:number):void
declare function BlzGetAbilityActivatedPosX(abilCode:number):number
declare function BlzGetAbilityActivatedPosY(abilCode:number):number
declare function BlzSetAbilityActivatedPosX(abilCode:number,x:number):void
declare function BlzSetAbilityActivatedPosY(abilCode:number,y:number):void
declare function BlzGetAbilityManaCost(abilId:number,level:number):number
declare function BlzGetAbilityCooldown(abilId:number,level:number):number

export class CodeAbility {
    
}