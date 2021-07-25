/** @noSelfInFile **/
//@ts-nocheck

import { Destructable } from "./Destructable"
import { Force } from "./Force"
import { Group } from "./Group"
import { Item } from "./Item"
import { MapPlayer } from "./MapPlayer"
import { MapLocation } from "./MapLocation"
import { Sound } from "./Sound"
import { Widget } from "./Widget"
import { UnitStates } from "../fields/unit/UnitStates"
import { UnitState } from "../API/fields/unit/UnitState"

declare function CreateUnit(id: player, unitid: integer, x: real, y: real, face: real): unit
declare function CreateUnitByName(
    whichPlayer: player,
    unitname: string,
    x: real,
    y: real,
    face: real
): unit
declare function CreateUnitAtLoc(
    id: player,
    unitid: integer,
    whichLocation: location,
    face: real
): unit
declare function CreateUnitAtLocByName(
    id: player,
    unitname: string,
    whichLocation: location,
    face: real
): unit
declare function CreateCorpse(
    whichPlayer: player,
    unitid: integer,
    x: real,
    y: real,
    face: real
): unit
declare function KillUnit(whichUnit: unit): void
declare function RemoveUnit(whichUnit: unit): void
declare function ShowUnit(whichUnit: unit, show: boolean): void
declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: real): void
declare function SetUnitX(whichUnit: unit, newX: real): void
declare function SetUnitY(whichUnit: unit, newY: real): void
declare function SetUnitPosition(whichUnit: unit, newX: real, newY: real): void
declare function SetUnitPositionLoc(whichUnit: unit, whichLocation: location): void
declare function SetUnitFacing(whichUnit: unit, facingAngle: real): void
declare function SetUnitFacingTimed(whichUnit: unit, facingAngle: real, duration: real): void
declare function SetUnitMoveSpeed(whichUnit: unit, newSpeed: real): void
declare function SetUnitFlyHeight(whichUnit: unit, newHeight: real, rate: real): void
declare function SetUnitTurnSpeed(whichUnit: unit, newTurnSpeed: real): void
declare function SetUnitPropWindow(whichUnit: unit, newPropWindowAngle: real): void
declare function SetUnitAcquireRange(whichUnit: unit, newAcquireRange: real): void
declare function SetUnitCreepGuard(whichUnit: unit, creepGuard: boolean): void
declare function GetUnitAcquireRange(whichUnit: unit): real
declare function GetUnitTurnSpeed(whichUnit: unit): real
declare function GetUnitPropWindow(whichUnit: unit): real
declare function GetUnitFlyHeight(whichUnit: unit): real
declare function GetUnitDefaultAcquireRange(whichUnit: unit): real
declare function GetUnitDefaultTurnSpeed(whichUnit: unit): real
declare function GetUnitDefaultPropWindow(whichUnit: unit): real
declare function GetUnitDefaultFlyHeight(whichUnit: unit): real
declare function SetUnitOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): void
declare function SetUnitColor(whichUnit: unit, whichColor: playercolor): void
declare function SetUnitScale(whichUnit: unit, scaleX: real, scaleY: real, scaleZ: real): void
declare function SetUnitTimeScale(whichUnit: unit, timeScale: real): void
declare function SetUnitBlendTime(whichUnit: unit, blendTime: real): void
declare function SetUnitVertexColor(
    whichUnit: unit,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function QueueUnitAnimation(whichUnit: unit, whichAnimation: string): void
declare function SetUnitAnimation(whichUnit: unit, whichAnimation: string): void
declare function SetUnitAnimationByIndex(whichUnit: unit, whichAnimation: integer): void
declare function SetUnitAnimationWithRarity(
    whichUnit: unit,
    whichAnimation: string,
    rarity: raritycontrol
): void
declare function AddUnitAnimationProperties(
    whichUnit: unit,
    animProperties: string,
    add: boolean
): void
declare function SetUnitLookAt(
    whichUnit: unit,
    whichBone: string,
    lookAtTarget: unit,
    offsetX: real,
    offsetY: real,
    offsetZ: real
): void
declare function ResetUnitLookAt(whichUnit: unit): void
declare function SetUnitRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): void
declare function SetUnitRescueRange(whichUnit: unit, range: number): void
declare function SetHeroStr(whichHero: unit, newStr: integer, permanent: boolean): void
declare function SetHeroAgi(whichHero: unit, newAgi: integer, permanent: boolean): void
declare function SetHeroInt(whichHero: unit, newInt: integer, permanent: boolean): void
declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): integer
declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): integer
declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): integer
declare function UnitStripHeroLevel(whichHero: unit, howManyLevels: integer): boolean
declare function GetHeroXP(whichHero: unit): integer
declare function SetHeroXP(whichHero: unit, newXpVal: integer, showEyeCandy: boolean): void
declare function GetHeroSkillPoints(whichHero: unit): integer
declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: integer): boolean
declare function AddHeroXP(whichHero: unit, xpToAdd: integer, showEyeCandy: boolean): void
declare function SetHeroLevel(whichHero: unit, level: integer, showEyeCandy: boolean): void
declare function GetHeroLevel(whichHero: unit): integer
declare function GetUnitLevel(whichUnit: unit): integer
declare function GetHeroProperName(whichHero: unit): string
declare function SuspendHeroXP(whichHero: unit, flag: boolean): void
declare function IsSuspendedXP(whichHero: unit): boolean
declare function SelectHeroSkill(whichHero: unit, abilcode: integer): void
declare function GetUnitAbilityLevel(whichUnit: unit, abilcode: integer): integer
declare function DecUnitAbilityLevel(whichUnit: unit, abilcode: integer): integer
declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: integer): integer
declare function SetUnitAbilityLevel(whichUnit: unit, abilcode: integer, level: integer): integer
declare function ReviveHero(whichHero: unit, x: real, y: real, doEyecandy: boolean): boolean
declare function ReviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean
declare function SetUnitExploded(whichUnit: unit, exploded: boolean): void
declare function SetUnitInvulnerable(whichUnit: unit, flag: boolean): void
declare function PauseUnit(whichUnit: unit, flag: boolean): void
declare function IsUnitPaused(whichHero: unit): boolean
declare function SetUnitPathing(whichUnit: unit, flag: boolean): void
declare function SelectUnit(whichUnit: unit, flag: boolean): void
declare function GetUnitPointValue(whichUnit: unit): integer
declare function GetUnitPointValueByType(unitType: integer): integer
declare function UnitAddItem(whichUnit: unit, whichItem: item): boolean
declare function UnitAddItemById(whichUnit: unit, itemId: integer): item
declare function UnitAddItemToSlotById(whichUnit: unit, itemId: integer, itemSlot: integer): boolean
declare function UnitRemoveItem(whichUnit: unit, whichItem: item): void
declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: integer): item
declare function UnitHasItem(whichUnit: unit, whichItem: item): boolean
declare function UnitItemInSlot(whichUnit: unit, itemSlot: integer): item
declare function UnitInventorySize(whichUnit: unit): integer
declare function UnitDropItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean
declare function UnitDropItemSlot(whichUnit: unit, whichItem: item, slot: integer): boolean
declare function UnitDropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean
declare function UnitUseItem(whichUnit: unit, whichItem: item): boolean
declare function UnitUseItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean
declare function UnitUseItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean
declare function GetUnitX(whichUnit: unit): real
declare function GetUnitY(whichUnit: unit): real
declare function GetUnitLoc(whichUnit: unit): location
declare function GetUnitFacing(whichUnit: unit): real
declare function GetUnitMoveSpeed(whichUnit: unit): real
declare function GetUnitDefaultMoveSpeed(whichUnit: unit): real
declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): real
declare function GetOwningPlayer(whichUnit: unit): player
declare function GetUnitTypeId(whichUnit: unit): integer
declare function GetUnitRace(whichUnit: unit): race
declare function GetUnitName(whichUnit: unit): string
declare function GetUnitFoodUsed(whichUnit: unit): integer
declare function GetUnitFoodMade(whichUnit: unit): integer
declare function GetFoodMade(unitId: integer): integer
declare function GetFoodUsed(unitId: integer): integer
declare function SetUnitUseFood(whichUnit: unit, useFood: boolean): void
declare function GetUnitRallyPoint(whichUnit: unit): location
declare function GetUnitRallyUnit(whichUnit: unit): unit
declare function GetUnitRallyDestructable(whichUnit: unit): destructable
declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean
declare function IsUnitInForce(whichUnit: unit, whichForce: force): boolean
declare function IsUnitOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitAlly(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitEnemy(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitVisible(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitDetected(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitInvisible(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitFogged(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitMasked(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitSelected(whichUnit: unit, whichPlayer: player): boolean
declare function IsUnitRace(whichUnit: unit, whichRace: race): boolean
declare function IsUnitType(whichUnit: unit, whichUnitType: unittype): boolean
declare function IsUnit(whichUnit: unit, whichSpecifiedUnit: unit): boolean
declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: number): boolean
declare function IsUnitInRangeXY(whichUnit: unit, x: number, y: number, distance: number): boolean
declare function IsUnitInRangeLoc(
    whichUnit: unit,
    whichLocation: location,
    distance: number
): boolean
declare function IsUnitHidden(whichUnit: unit): boolean
declare function IsUnitIllusion(whichUnit: unit): boolean
declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean
declare function IsUnitLoaded(whichUnit: unit): boolean
declare function IsHeroUnitId(unitId: number): boolean
declare function IsUnitIdType(unitId: number, whichUnitType: unittype): boolean
declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): void
declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): void
declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean
declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean
declare function UnitAddAbility(whichUnit: unit, abilityId: number): boolean
declare function UnitRemoveAbility(whichUnit: unit, abilityId: number): boolean
declare function UnitMakeAbilityPermanent(
    whichUnit: unit,
    permanent: boolean,
    abilityId: number
): boolean
declare function UnitRemoveBuffs(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean
): void
declare function UnitRemoveBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
): void
declare function UnitHasBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
): boolean
declare function UnitCountBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
): number
declare function UnitAddSleep(whichUnit: unit, add: boolean): void
declare function UnitCanSleep(whichUnit: unit): boolean
declare function UnitAddSleepPerm(whichUnit: unit, add: boolean): void
declare function UnitCanSleepPerm(whichUnit: unit): boolean
declare function UnitIsSleeping(whichUnit: unit): boolean
declare function UnitWakeUp(whichUnit: unit): void
declare function UnitApplyTimedLife(whichUnit: unit, buffId: number, duration: number): void
declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean
declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean
declare function UnitResetCooldown(whichUnit: unit): void
declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: number): void
declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: number): void
declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void
declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): void
declare function UnitDamagePoint(
    whichUnit: unit,
    delay: number,
    radius: number,
    x: number,
    y: number,
    amount: number,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean
declare function UnitDamageTarget(
    whichUnit: unit,
    target: widget,
    amount: number,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean
declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean
declare function IssueImmediateOrderById(whichUnit: unit, order: number): boolean
declare function IssuePointOrder(whichUnit: unit, order: string, x: number, y: number): boolean
declare function IssuePointOrderLoc(
    whichUnit: unit,
    order: string,
    whichLocation: location
): boolean
declare function IssuePointOrderById(whichUnit: unit, order: number, x: number, y: number): boolean
declare function IssuePointOrderByIdLoc(
    whichUnit: unit,
    order: number,
    whichLocation: location
): boolean
declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean
declare function IssueTargetOrderById(whichUnit: unit, order: number, targetWidget: widget): boolean
declare function IssueInstantPointOrder(
    whichUnit: unit,
    order: string,
    x: number,
    y: number,
    instantTargetWidget: widget
): boolean
declare function IssueInstantPointOrderById(
    whichUnit: unit,
    order: number,
    x: number,
    y: number,
    instantTargetWidget: widget
): boolean
declare function IssueInstantTargetOrder(
    whichUnit: unit,
    order: string,
    targetWidget: widget,
    instantTargetWidget: widget
): boolean
declare function IssueInstantTargetOrderById(
    whichUnit: unit,
    order: number,
    targetWidget: widget,
    instantTargetWidget: widget
): boolean
declare function IssueBuildOrder(
    whichPeon: unit,
    unitToBuild: string,
    x: number,
    y: number
): boolean
declare function IssueBuildOrderById(whichPeon: unit, unitId: number, x: number, y: number): boolean
declare function IssueNeutralImmediateOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string): boolean
declare function IssueNeutralImmediateOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer): boolean
declare function IssueNeutralPointOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: real, y: real): boolean
declare function IssueNeutralPointOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer, x: real, y: real): boolean
declare function IssueNeutralTargetOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget): boolean
declare function IssueNeutralTargetOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer, target: widget): boolean
declare function GetUnitCurrentOrder(whichUnit: unit): number
declare function SetResourceAmount(whichUnit: unit, amount: number): void
declare function AddResourceAmount(whichUnit: unit, amount: number): void
declare function GetResourceAmount(whichUnit: unit): number
declare function WaygateGetDestinationX(waygate: unit): number
declare function WaygateGetDestinationY(waygate: unit): number
declare function WaygateSetDestination(waygate: unit, x: number, y: number): void
declare function WaygateActivate(waygate: unit, activate: boolean): void
declare function WaygateIsActive(waygate: unit): boolean
declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void
declare function AddItemToStock(whichUnit: unit, itemId: integer, currentStock: integer, stockMax: integer): void
declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void
declare function AddUnitToStock(whichUnit: unit, unitId: integer, currentStock: integer, stockMax: integer): void
declare function RemoveItemFromAllStock(itemId: integer): void
declare function RemoveItemFromStock(whichUnit: unit, itemId: integer): void
declare function RemoveUnitFromAllStock(unitId: integer): void
declare function RemoveUnitFromStock(whichUnit: unit, unitId: integer): void
declare function SetAllItemTypeSlots(slots: integer): void
declare function SetAllUnitTypeSlots(slots: integer): void
declare function SetItemTypeSlots(whichUnit: unit, slots: number): void
declare function SetUnitTypeSlots(whichUnit: unit, slots: number): void
declare function GetUnitUserData(whichUnit: unit): number
declare function SetUnitUserData(whichUnit: unit, data: number): void
declare function BlzGetUnitMaxHP(whichUnit: unit): number
declare function BlzSetUnitMaxHP(whichUnit: unit, hp: number): void
declare function BlzGetUnitMaxMana(whichUnit: unit): number
declare function BlzSetUnitMaxMana(whichUnit: unit, mana: number): void
declare function BlzSetUnitName(whichUnit: unit, name: string): void
declare function BlzSetHeroProperName(whichUnit: unit, heroProperName: string): void
declare function BlzGetUnitBaseDamage(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitBaseDamage(
    whichUnit: unit,
    baseDamage: number,
    weaponIndex: number
): void
declare function BlzGetUnitDiceNumber(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitDiceNumber(
    whichUnit: unit,
    diceNumber: number,
    weaponIndex: number
): void
declare function BlzGetUnitDiceSides(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitDiceSides(whichUnit: unit, diceSides: number, weaponIndex: number): void
declare function BlzGetUnitAttackCooldown(whichUnit: unit, weaponIndex: number): number
declare function BlzSetUnitAttackCooldown(
    whichUnit: unit,
    cooldown: number,
    weaponIndex: number
): void
declare function BlzGetUnitArmor(whichUnit: unit): number
declare function BlzSetUnitArmor(whichUnit: unit, armorAmount: number): void
declare function BlzUnitHideAbility(whichUnit: unit, abilId: number, flag: boolean): void
declare function BlzUnitDisableAbility(
    whichUnit: unit,
    abilId: number,
    flag: boolean,
    hideUI: boolean
): void
declare function BlzUnitCancelTimedLife(whichUnit: unit): void
declare function BlzIsUnitSelectable(whichUnit: unit): boolean
declare function BlzIsUnitInvulnerable(whichUnit: unit): boolean
declare function BlzUnitInterruptAttack(whichUnit: unit): void
declare function BlzGetUnitCollisionSize(whichUnit: unit): number
declare function BlzSetUnitAbilityCooldown(
    whichUnit: unit,
    abilId: number,
    level: number,
    cooldown: number
): void
declare function BlzGetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number): number
declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: unit, abilId: number): number
declare function BlzEndUnitAbilityCooldown(whichUnit: unit, abilCode: number): void
declare function BlzGetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number): number
declare function BlzSetUnitAbilityManaCost(
    whichUnit: unit,
    abilId: number,
    level: number,
    manaCost: number
): void
declare function BlzGetLocalUnitZ(whichUnit: unit): number
declare function BlzGetUnitZ(whichUnit: unit): number
declare function BlzGetUnitAbility(whichUnit: unit, abilId: number): ability
declare function BlzGetUnitAbilityByIndex(whichUnit: unit, index: number): ability
declare function BlzPauseUnitEx(whichUnit: unit, flag: boolean): void
declare function BlzGetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield): boolean
declare function BlzGetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield): number
declare function BlzGetUnitRealField(whichUnit: unit, whichField: unitrealfield): number
declare function BlzGetUnitStringField(whichUnit: unit, whichField: unitstringfield): string
declare function BlzSetUnitBooleanField(
    whichUnit: unit,
    whichField: unitbooleanfield,
    value: boolean
): boolean
declare function BlzSetUnitIntegerField(
    whichUnit: unit,
    whichField: unitintegerfield,
    value: number
): boolean
declare function BlzSetUnitRealField(
    whichUnit: unit,
    whichField: unitrealfield,
    value: number
): boolean
declare function BlzSetUnitStringField(
    whichUnit: unit,
    whichField: unitstringfield,
    value: string
): boolean
declare function BlzGetUnitWeaponBooleanField(
    whichUnit: unit,
    whichField: unitweaponbooleanfield,
    index: number
): boolean
declare function BlzGetUnitWeaponIntegerField(
    whichUnit: unit,
    whichField: unitweaponintegerfield,
    index: number
): number
declare function BlzGetUnitWeaponRealField(
    whichUnit: unit,
    whichField: unitweaponrealfield,
    index: number
): number
declare function BlzGetUnitWeaponStringField(
    whichUnit: unit,
    whichField: unitweaponstringfield,
    index: number
): string
declare function BlzSetUnitWeaponBooleanField(
    whichUnit: unit,
    whichField: unitweaponbooleanfield,
    index: number,
    value: boolean
): boolean
declare function BlzSetUnitWeaponIntegerField(
    whichUnit: unit,
    whichField: unitweaponintegerfield,
    index: number,
    value: number
): boolean
declare function BlzSetUnitWeaponRealField(
    whichUnit: unit,
    whichField: unitweaponrealfield,
    index: number,
    value: number
): boolean
declare function BlzSetUnitWeaponStringField(
    whichUnit: unit,
    whichField: unitweaponstringfield,
    index: number,
    value: string
): boolean

declare function UnitAddIndicator(
    whichUnit: unit,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function RemoveGuardPosition(hUnit: unit): void
declare function RecycleGuardPosition(hUnit: unit): void
declare function RemoveAllGuardPositions(num: player): void
declare function GetTriggerUnit(): unit
declare function GetEnteringUnit(): unit
declare function GetLeavingUnit(): unit
declare function GetLevelingUnit(): unit
declare function GetLearningUnit(): unit
declare function GetFilterUnit(): unit
declare function GetEnumUnit(): unit

declare function BlzCreateUnitWithSkin(
    id: player,
    unitid: number,
    x: number,
    y: number,
    face: number,
    skinId: number
): unit
declare function BlzGetUnitSkin(whichUnit: unit): number
declare function BlzSetUnitSkin(whichUnit: unit, skinId: number): void
declare function BlzStartUnitAbilityCooldown(
    whichUnit: unit,
    abilCode: number,
    cooldown: number
): void
declare function BlzSetUnitFacingEx(whichUnit: unit, facingAngle: number): void
declare function BlzShowUnitTeamGlow(whichUnit: unit, show: boolean): void

export class Unit extends Widget {
    public readonly handle!: unit

    constructor(
        owner: MapPlayer,
        unitId: integer,
        x: real,
        y: real,
        face: real,
        skinId?: integer
    ) {
        super(skinId ? BlzCreateUnitWithSkin(owner.getHandle, unitId, x, y, face, skinId) : CreateUnit(owner.getHandle, unitId, x, y, face))
    }

    public set acquireRange(value: number) {
        SetUnitAcquireRange(this.getHandle, value)
    }

    public get acquireRange() {
        return GetUnitPropWindow(this.getHandle)
    }

    public get agility() {
        return GetHeroAgi(this.getHandle, false)
    }

    public set agility(value: number) {
        SetHeroAgi(this.getHandle, value, true)
    }

    public get armor() {
        return BlzGetUnitArmor(this.getHandle)
    }

    public set armor(armorAmount: number) {
        BlzSetUnitArmor(this.getHandle, armorAmount)
    }

    public set canSleep(flag: boolean) {
        UnitAddSleep(this.getHandle, flag)
    }

    public get canSleep() {
        return UnitCanSleep(this.getHandle)
    }

    public get collisionSize() {
        return BlzGetUnitCollisionSize(this.getHandle)
    }

    public set color(whichColor: playercolor) {
        SetUnitColor(this.getHandle, whichColor)
    }

    public get currentOrder() {
        return GetUnitCurrentOrder(this.getHandle)
    }

    public get defaultAcquireRange() {
        return GetUnitDefaultAcquireRange(this.getHandle)
    }

    public get defaultFlyHeight() {
        return GetUnitDefaultFlyHeight(this.getHandle)
    }

    public get defaultMoveSpeed() {
        return GetUnitDefaultMoveSpeed(this.getHandle)
    }

    public get defaultPropWindow() {
        return GetUnitDefaultPropWindow(this.getHandle)
    }

    public get defaultTurnSpeed() {
        return GetUnitDefaultTurnSpeed(this.getHandle)
    }

    public get experience() {
        return GetHeroXP(this.getHandle)
    }

    public set experience(newXpVal: number) {
        SetHeroXP(this.getHandle, newXpVal, true)
    }

    public set facing(value: number) {
        SetUnitFacing(this.getHandle, value)
    }

    public get facing() {
        return GetUnitFacing(this.getHandle)
    }

    public get foodMade() {
        return GetUnitFoodMade(this.getHandle)
    }

    public get foodUsed() {
        return GetUnitFoodUsed(this.getHandle)
    }

    public get ignoreAlarmToggled() {
        return UnitIgnoreAlarmToggled(this.getHandle)
    }

    public get intelligence() {
        return GetHeroInt(this.getHandle, false)
    }

    public set intelligence(value: number) {
        SetHeroInt(this.getHandle, value, true)
    }

    public get inventorySize() {
        return UnitInventorySize(this.getHandle)
    }

    public set invulnerable(flag: boolean) {
        SetUnitInvulnerable(this.getHandle, flag)
    }

    public get invulnerable() {
        return BlzIsUnitInvulnerable(this.getHandle)
    }

    public get level() {
        return GetUnitLevel(this.getHandle)
    }

    public get localZ() {
        return BlzGetLocalUnitZ(this.getHandle)
    }

    public get mana() {
        return this.getState(UnitStates.MANA)
    }

    public set mana(value: number) {
        this.setState(UnitStates.MANA, value)
    }

    public get maxLife() {
        return BlzGetUnitMaxHP(this.getHandle)
    }

    public set maxLife(value: number) {
        BlzSetUnitMaxHP(this.getHandle, value)
    }

    public get maxMana() {
        return BlzGetUnitMaxMana(this.getHandle)
    }

    public set maxMana(value: number) {
        BlzSetUnitMaxMana(this.getHandle, value)
    }

    public set moveSpeed(value: number) {
        SetUnitMoveSpeed(this.getHandle, value)
    }

    public get moveSpeed() {
        return GetUnitMoveSpeed(this.getHandle)
    }

    get name() {
        return GetUnitName(this.getHandle)
    }

    set name(value: string) {
        BlzSetUnitName(this.getHandle, value)
    }

    public set nameProper(value: string) {
        BlzSetHeroProperName(this.getHandle, value)
    }

    public get nameProper() {
        return GetHeroProperName(this.getHandle)
    }

    public set owner(whichPlayer: MapPlayer) {
        SetUnitOwner(this.getHandle, whichPlayer.getHandle, true)
    }

    public get owner() {
        return MapPlayer.fromHandle(GetOwningPlayer(this.getHandle))
    }

    public set paused(flag: boolean) {
        PauseUnit(this.getHandle, flag)
    }

    public get paused() {
        return IsUnitPaused(this.getHandle)
    }

    public get MapLocation() {
        return MapLocation.fromHandle(GetUnitLoc(this.getHandle))
    }

    public set MapLocation(whichPoint: MapLocation) {
        SetUnitPositionLoc(this.getHandle, whichPoint.getHandle)
    }

    public get pointValue() {
        return GetUnitPointValue(this.getHandle)
    }

    public set propWindow(value: number) {
        SetUnitPropWindow(this.getHandle, value)
    }

    public get propWindow() {
        return GetUnitAcquireRange(this.getHandle)
    }

    public get race() {
        return GetUnitRace(this.getHandle)
    }

    public get rallyDestructable() {
        return Destructable.fromHandle(GetUnitRallyDestructable(this.getHandle))
    }

    public get rallyPoint() {
        return MapLocation.fromHandle(GetUnitRallyPoint(this.getHandle))
    }

    public get rallyUnit() {
        return Unit.fromHandle(GetUnitRallyUnit(this.getHandle))
    }

    public set resourceAmount(amount: number) {
        SetResourceAmount(this.getHandle, amount)
    }

    public get resourceAmount() {
        return GetResourceAmount(this.getHandle)
    }

    public get selectable() {
        return BlzIsUnitSelectable(this.getHandle)
    }

    // public set selectionScale(scale: number) {
    //     this.setField(UNIT_RF_SELECTION_SCALE, scale)
    // }

    // public get selectionScale() {
    //     const result = this.getField(UNIT_RF_SELECTION_SCALE)
    //     return typeof result === "number" ? result : 0
    // }

    public set show(flag: boolean) {
        ShowUnit(this.getHandle, flag)
    }

    public get show() {
        return IsUnitHidden(this.getHandle)
    }

    public get skin() {
        return BlzGetUnitSkin(this.getHandle)
    }

    public set skin(skinId: number) {
        BlzSetUnitSkin(this.getHandle, skinId)
    }

    public get skillPoints() {
        return GetHeroSkillPoints(this.getHandle)
    }

    public set skillPoints(skillPointDelta: number) {
        UnitModifySkillPoints(this.getHandle, skillPointDelta)
    }

    public get sleeping() {
        return UnitIsSleeping(this.getHandle)
    }

    public get strength() {
        return GetHeroStr(this.getHandle, false)
    }

    public set strength(value: number) {
        SetHeroStr(this.getHandle, value, true)
    }

    public set turnSpeed(value: number) {
        SetUnitTurnSpeed(this.getHandle, value)
    }

    public get turnSpeed() {
        return GetUnitTurnSpeed(this.getHandle)
    }

    public get typeId() {
        return GetUnitTypeId(this.getHandle)
    }

    public get userData() {
        return GetUnitUserData(this.getHandle)
    }

    public set userData(value: number) {
        SetUnitUserData(this.getHandle, value)
    }

    public set waygateActive(flag: boolean) {
        WaygateActivate(this.getHandle, flag)
    }

    public get waygateActive() {
        return WaygateIsActive(this.getHandle)
    }

    public get x() {
        return GetUnitX(this.getHandle)
    }

    public set x(value: number) {
        SetUnitX(this.getHandle, value)
    }

    public get y() {
        return GetUnitY(this.getHandle)
    }

    public set y(value: number) {
        SetUnitY(this.getHandle, value)
    }

    public get z() {
        return BlzGetUnitZ(this.getHandle)
    }

    public addAbility(abilityId: number) {
        return UnitAddAbility(this.getHandle, abilityId)
    }

    public addAnimationProps(animProperties: string, add: boolean) {
        AddUnitAnimationProperties(this.getHandle, animProperties, add)
    }

    public addExperience(xpToAdd: number, showEyeCandy: boolean) {
        AddHeroXP(this.getHandle, xpToAdd, showEyeCandy)
    }

    // public addIndicator(red: number, blue: number, green: number, alpha: number) {
    //     UnitAddIndicator(this.getHandle, red, blue, green, alpha)
    // }

    public addItem(whichItem: Item) {
        return UnitAddItem(this.getHandle, whichItem.getHandle)
    }

    public addItemById(itemId: number) {
        return UnitAddItemById(this.getHandle, itemId)
    }

    public addItemToSlotById(itemId: number, itemSlot: number) {
        return UnitAddItemToSlotById(this.getHandle, itemId, itemSlot)
    }

    public addItemToStock(itemId: number, currentStock: number, stockMax: number) {
        AddItemToStock(this.getHandle, itemId, currentStock, stockMax)
    }

    public addResourceAmount(amount: number) {
        AddResourceAmount(this.getHandle, amount)
    }

    public addSleepPerm(add: boolean) {
        UnitAddSleepPerm(this.getHandle, add)
    }

    public addType(whichUnitType: unittype) {
        return UnitAddType(this.getHandle, whichUnitType)
    }

    public addUnitToStock(unitId: number, currentStock: number, stockMax: number) {
        AddUnitToStock(this.getHandle, unitId, currentStock, stockMax)
    }

    public applyTimedLife(buffId: number, duration: number) {
        UnitApplyTimedLife(this.getHandle, buffId, duration)
    }

    public cancelTimedLife() {
        BlzUnitCancelTimedLife(this.getHandle)
    }

    public canSleepPerm() {
        return UnitCanSleepPerm(this.getHandle)
    }

    public countBuffs(
        removePositive: boolean,
        removeNegative: boolean,
        magic: boolean,
        physical: boolean,
        timedLife: boolean,
        aura: boolean,
        autoDispel: boolean
    ) {
        return UnitCountBuffsEx(
            this.getHandle,
            removePositive,
            removeNegative,
            magic,
            physical,
            timedLife,
            aura,
            autoDispel
        )
    }

    public damageAt(
        delay: number,
        radius: number,
        x: number,
        y: number,
        amount: number,
        attack: boolean,
        ranged: boolean,
        attackType: attacktype,
        damageType: damagetype,
        weaponType: weapontype
    ) {
        return UnitDamagePoint(
            this.getHandle,
            delay,
            radius,
            x,
            y,
            amount,
            attack,
            ranged,
            attackType,
            damageType,
            weaponType
        )
    }

    public damageTarget(
        target: widget,
        amount: number,
        radius: number,
        attack: boolean,
        ranged: boolean,
        attackType: attacktype,
        damageType: damagetype,
        weaponType: weapontype
    ) {
        return UnitDamageTarget(
            this.getHandle,
            target,
            amount,
            attack,
            ranged,
            attackType,
            damageType,
            weaponType
        )
    }

    public decAbilityLevel(abilCode: number) {
        return DecUnitAbilityLevel(this.getHandle, abilCode)
    }

    public destroy() {
        RemoveUnit(this.getHandle)
    }

    public disableAbility(abilId: number, flag: boolean, hideUI: boolean) {
        BlzUnitHideAbility(this.getHandle, abilId, flag)
    }

    public dropItem(whichItem: Item, x: number, y: number) {
        return UnitDropItemPoint(this.getHandle, whichItem.getHandle, x, y)
    }

    public dropItemFromSlot(whichItem: Item, slot: number) {
        return UnitDropItemSlot(this.getHandle, whichItem.getHandle, slot)
    }

    public dropItemTarget(whichItem: Item, target: Widget /* | Unit | Item | Destructable*/) {
        return UnitDropItemTarget(this.getHandle, whichItem.getHandle, target.getHandle)
    }

    public endAbilityCooldown(abilCode: number) {
        BlzEndUnitAbilityCooldown(this.getHandle, abilCode)
    }

    public getAbility(abilId: number) {
        return BlzGetUnitAbility(this.getHandle, abilId)
    }

    public getAbilityByIndex(index: number) {
        return BlzGetUnitAbilityByIndex(this.getHandle, index)
    }

    public getAbilityCooldown(abilId: number, level: number) {
        return BlzGetUnitAbilityCooldown(this.getHandle, abilId, level)
    }

    public getAbilityCooldownRemaining(abilId: number, level: number) {
        return BlzGetUnitAbilityCooldownRemaining(this.getHandle, abilId)
    }

    public getAbilityLevel(abilCode: number) {
        return GetUnitAbilityLevel(this.getHandle, abilCode)
    }

    public getAbilityManaCost(abilId: number, level: number) {
        return BlzGetUnitAbilityManaCost(this.getHandle, abilId, level)
    }

    public getAgility(includeBonuses: boolean) {
        return GetHeroAgi(this.getHandle, includeBonuses)
    }

    public getAttackCooldown(weaponIndex: number) {
        return BlzGetUnitAttackCooldown(this.getHandle, weaponIndex)
    }

    public getBaseDamage(weaponIndex: number) {
        return BlzGetUnitBaseDamage(this.getHandle, weaponIndex)
    }

    public getDiceNumber(weaponIndex: number) {
        return BlzGetUnitDiceNumber(this.getHandle, weaponIndex)
    }

    public getDiceSides(weaponIndex: number) {
        return BlzGetUnitDiceSides(this.getHandle, weaponIndex)
    }

    public getField(field: unitbooleanfield | unitintegerfield | unitrealfield | unitstringfield) {
        const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

        switch (fieldType) {
            case "unitbooleanfield":
                const fieldBool: unitbooleanfield = field as unitbooleanfield

                return BlzGetUnitBooleanField(this.getHandle, fieldBool)
            case "unitintegerfield":
                const fieldInt: unitintegerfield = field as unitintegerfield

                return BlzGetUnitIntegerField(this.getHandle, fieldInt)
            case "unitrealfield":
                const fieldReal: unitrealfield = field as unitrealfield

                return BlzGetUnitRealField(this.getHandle, fieldReal)
            case "unitstringfield":
                const fieldString: unitstringfield = field as unitstringfield

                return BlzGetUnitStringField(this.getHandle, fieldString)
            default:
                return 0
        }
    }

    public getflyHeight() {
        return GetUnitFlyHeight(this.getHandle)
    }

    public getHeroLevel() {
        return GetHeroLevel(this.getHandle)
    }

    public getIgnoreAlarm(flag: boolean) {
        return UnitIgnoreAlarm(this.getHandle, flag)
    }

    public getIntelligence(includeBonuses: boolean) {
        return GetHeroInt(this.getHandle, includeBonuses)
    }

    public getItemInSlot(slot: number) {
        return UnitItemInSlot(this.getHandle, slot)
    }

    public getState(whichUnitState: UnitState) {
        return GetUnitState(this.getHandle, whichUnitState.getHandle)
    }

    public getStrength(includeBonuses: boolean) {
        return GetHeroStr(this.getHandle, includeBonuses)
    }

    public hasBuffs(
        removePositive: boolean,
        removeNegative: boolean,
        magic: boolean,
        physical: boolean,
        timedLife: boolean,
        aura: boolean,
        autoDispel: boolean
    ) {
        return UnitHasBuffsEx(
            this.getHandle,
            removePositive,
            removeNegative,
            magic,
            physical,
            timedLife,
            aura,
            autoDispel
        )
    }

    public hasItem(whichItem: Item) {
        return UnitHasItem(this.getHandle, whichItem.getHandle)
    }

    public hideAbility(abilId: number, flag: boolean) {
        BlzUnitHideAbility(this.getHandle, abilId, flag)
    }

    public incAbilityLevel(abilCode: number) {
        return IncUnitAbilityLevel(this.getHandle, abilCode)
    }

    public inForce(whichForce: Force) {
        return IsUnitInForce(this.getHandle, whichForce.getHandle)
    }

    public inGroup(whichGroup: Group) {
        return IsUnitInGroup(this.getHandle, whichGroup.getHandle)
    }

    public inRange(x: number, y: number, distance: number) {
        return IsUnitInRangeXY(this.getHandle, x, y, distance)
    }

    public inRangeOfPoint(whichPoint: MapLocation, distance: number) {
        return IsUnitInRangeLoc(this.getHandle, whichPoint.getHandle, distance)
    }

    public inRangeOfUnit(otherUnit: Unit, distance: number) {
        return IsUnitInRange(this.getHandle, otherUnit.handle, distance)
    }

    public interruptAttack() {
        BlzUnitInterruptAttack(this.getHandle)
    }

    public inTransport(whichTransport: Unit) {
        return IsUnitInTransport(this.getHandle, whichTransport.handle)
    }

    public isAlly(whichPlayer: MapPlayer) {
        return IsUnitAlly(this.getHandle, whichPlayer.getHandle)
    }

    public isEnemy(whichPlayer: MapPlayer) {
        return IsUnitEnemy(this.getHandle, whichPlayer.getHandle)
    }

    public isExperienceSuspended() {
        return IsSuspendedXP(this.getHandle)
    }

    public isFogged(whichPlayer: MapPlayer) {
        return IsUnitFogged(this.getHandle, whichPlayer.getHandle)
    }

    public isHero() {
        return IsHeroUnitId(this.typeId)
    }

    public isIllusion() {
        return IsUnitIllusion(this.getHandle)
    }

    public isLoaded() {
        return IsUnitLoaded(this.getHandle)
    }

    public isMasked(whichPlayer: MapPlayer) {
        return IsUnitMasked(this.getHandle, whichPlayer.getHandle)
    }

    public isSelected(whichPlayer: MapPlayer) {
        return IsUnitSelected(this.getHandle, whichPlayer.getHandle)
    }

    public issueBuildOrder(unit: string | number, x: number, y: number) {
        return typeof unit === "string"
            ? IssueBuildOrder(this.getHandle, unit, x, y)
            : IssueBuildOrderById(this.getHandle, unit, x, y)
    }

    public issueImmediateOrder(order: string | number) {
        return typeof order === "string"
            ? IssueImmediateOrder(this.getHandle, order)
            : IssueImmediateOrderById(this.getHandle, order)
    }

    public issueInstantOrderAt(
        order: string | number,
        x: number,
        y: number,
        instantTargetWidget: Widget
    ) {
        return typeof order === "string"
            ? IssueInstantPointOrder(this.getHandle, order, x, y, instantTargetWidget.getHandle)
            : IssueInstantPointOrderById(this.getHandle, order, x, y, instantTargetWidget.getHandle)
    }

    public issueInstantTargetOrder(
        order: string | number,
        targetWidget: Widget,
        instantTargetWidget: Widget
    ) {
        return typeof order === "string"
            ? IssueInstantTargetOrder(
                  this.getHandle,
                  order,
                  targetWidget.getHandle,
                  instantTargetWidget.getHandle
              )
            : IssueInstantTargetOrderById(
                  this.getHandle,
                  order,
                  targetWidget.getHandle,
                  instantTargetWidget.getHandle
              )
    }

    public issueOrderAt(order: string | number, x: number, y: number) {
        return typeof order === "string"
            ? IssuePointOrder(this.getHandle, order, x, y)
            : IssuePointOrderById(this.getHandle, order, x, y)
    }

    public issuePointOrder(order: string | number, whichPoint: MapLocation) {
        return typeof order === "string"
            ? IssuePointOrderLoc(this.getHandle, order, whichPoint.getHandle)
            : IssuePointOrderByIdLoc(this.getHandle, order, whichPoint.getHandle)
    }

    public issueTargetOrder(order: string | number, targetWidget: Widget) {
        return typeof order === "string"
            ? IssueTargetOrder(this.getHandle, order, targetWidget.getHandle)
            : IssueTargetOrderById(this.getHandle, order, targetWidget.getHandle)
    }

    public isUnit(whichSpecifiedUnit: Unit) {
        return IsUnit(this.getHandle, whichSpecifiedUnit.handle)
    }

    public isUnitType(whichUnitType: unittype) {
        return IsUnitType(this.getHandle, whichUnitType)
    }

    public isVisible(whichPlayer: MapPlayer) {
        return IsUnitVisible(this.getHandle, whichPlayer.getHandle)
    }

    public kill() {
        KillUnit(this.getHandle)
    }

    public lookAt(
        whichBone: string,
        lookAtTarget: Unit,
        offsetX: number,
        offsetY: number,
        offsetZ: number
    ) {
        SetUnitLookAt(this.getHandle, whichBone, lookAtTarget.handle, offsetX, offsetY, offsetZ)
    }

    public makeAbilityPermanent(permanent: boolean, abilityId: number) {
        UnitMakeAbilityPermanent(this.getHandle, permanent, abilityId)
    }

    public modifySkillPoints(skillPointDelta: number) {
        return UnitModifySkillPoints(this.getHandle, skillPointDelta)
    }

    public pauseEx(flag: boolean) {
        BlzPauseUnitEx(this.getHandle, flag)
    }

    public pauseTimedLife(flag: boolean) {
        UnitPauseTimedLife(this.getHandle, flag)
    }

    public queueAnimation(whichAnimation: string) {
        QueueUnitAnimation(this.getHandle, whichAnimation)
    }

    public recycleGuardPosition() {
        RecycleGuardPosition(this.getHandle)
    }

    public removeAbility(abilityId: number) {
        return UnitRemoveAbility(this.getHandle, abilityId)
    }

    public removeBuffs(removePositive: boolean, removeNegative: boolean) {
        UnitRemoveBuffs(this.getHandle, removePositive, removeNegative)
    }

    public removeBuffsEx(
        removePositive: boolean,
        removeNegative: boolean,
        magic: boolean,
        physical: boolean,
        timedLife: boolean,
        aura: boolean,
        autoDispel: boolean
    ) {
        UnitRemoveBuffsEx(
            this.getHandle,
            removePositive,
            removeNegative,
            magic,
            physical,
            timedLife,
            aura,
            autoDispel
        )
    }

    public removeGuardPosition() {
        RemoveGuardPosition(this.getHandle)
    }

    public removeItem(whichItem: Item) {
        UnitRemoveItem(this.getHandle, whichItem.getHandle)
    }

    public removeItemFromSlot(itemSlot: number) {
        return UnitRemoveItemFromSlot(this.getHandle, itemSlot)
    }

    public removeItemFromStock(itemId: number) {
        RemoveItemFromStock(this.getHandle, itemId)
    }

    public removeType(whichUnitType: unittype) {
        return UnitAddType(this.getHandle, whichUnitType)
    }

    public removeUnitFromStock(itemId: number) {
        RemoveUnitFromStock(this.getHandle, itemId)
    }

    public resetCooldown() {
        UnitResetCooldown(this.getHandle)
    }

    public resetLookAt() {
        ResetUnitLookAt(this.getHandle)
    }

    public revive(x: number, y: number, doEyecandy: boolean) {
        return ReviveHero(this.getHandle, x, y, doEyecandy)
    }

    public reviveAtPoint(whichPoint: MapLocation, doEyecandy: boolean) {
        return ReviveHeroLoc(this.getHandle, whichPoint.getHandle, doEyecandy)
    }

    public select(flag: boolean) {
        SelectUnit(this.getHandle, flag)
    }

    public selectSkill(abilCode: number) {
        SelectHeroSkill(this.getHandle, abilCode)
    }

    public setAbilityCooldown(abilId: number, level: number, cooldown: number) {
        BlzSetUnitAbilityCooldown(this.getHandle, abilId, level, cooldown)
    }

    public setAbilityLevel(abilCode: number, level: number) {
        return SetUnitAbilityLevel(this.getHandle, abilCode, level)
    }

    public setAbilityManaCost(abilId: number, level: number, manaCost: number) {
        BlzSetUnitAbilityManaCost(this.getHandle, abilId, level, manaCost)
    }

    public setAgility(value: number, permanent: boolean) {
        SetHeroAgi(this.getHandle, value, permanent)
    }

    public setAnimation(whichAnimation: string | number) {
        if (typeof whichAnimation === "string") {
            SetUnitAnimation(this.getHandle, whichAnimation)
        } else {
            SetUnitAnimationByIndex(this.getHandle, whichAnimation)
        }
    }

    public setAnimationWithRarity(whichAnimation: string, rarity: raritycontrol) {
        SetUnitAnimationWithRarity(this.getHandle, whichAnimation, rarity)
    }

    public setAttackCooldown(cooldown: number, weaponIndex: number) {
        BlzSetUnitAttackCooldown(this.getHandle, cooldown, weaponIndex)
    }

    public setBaseDamage(baseDamage: number, weaponIndex: number) {
        BlzSetUnitBaseDamage(this.getHandle, baseDamage, weaponIndex)
    }

    public setBlendTime(timeScale: number) {
        SetUnitBlendTime(this.getHandle, timeScale)
    }

    public setConstructionProgress(constructionPercentage: number) {
        UnitSetConstructionProgress(this.getHandle, constructionPercentage)
    }

    public setCreepGuard(creepGuard: boolean) {
        SetUnitCreepGuard(this.getHandle, creepGuard)
    }

    public setDiceNumber(diceNumber: number, weaponIndex: number) {
        BlzSetUnitDiceNumber(this.getHandle, diceNumber, weaponIndex)
    }

    public setDiceSides(diceSides: number, weaponIndex: number) {
        BlzSetUnitDiceSides(this.getHandle, diceSides, weaponIndex)
    }

    public setExperience(newXpVal: number, showEyeCandy: boolean) {
        SetHeroXP(this.getHandle, newXpVal, showEyeCandy)
    }

    public setExploded(exploded: boolean) {
        SetUnitExploded(this.getHandle, exploded)
    }

    public setFacingEx(facingAngle: number) {
        BlzSetUnitFacingEx(this.getHandle, facingAngle)
    }

    public setField(
        field: unitbooleanfield | unitintegerfield | unitrealfield | unitstringfield,
        value: boolean | number | string
    ) {
        const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

        if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
            return BlzSetUnitBooleanField(this.getHandle, field as unitbooleanfield, value)
        } else if (fieldType === "unitintegerfield" && typeof value === "number") {
            return BlzSetUnitIntegerField(this.getHandle, field as unitintegerfield, value)
        } else if (fieldType === "unitrealfield" && typeof value === "number") {
            return BlzSetUnitRealField(this.getHandle, field as unitrealfield, value)
        } else if (fieldType === "unitstringfield" && typeof value === "string") {
            return BlzSetUnitStringField(this.getHandle, field as unitstringfield, value)
        }

        return false
    }

    public setflyHeight(value: number, rate: number) {
        SetUnitFlyHeight(this.getHandle, value, rate)
    }

    public setHeroLevel(level: number, showEyeCandy: boolean) {
        SetHeroLevel(this.getHandle, level, showEyeCandy)
    }

    public setIntelligence(value: number, permanent: boolean) {
        SetHeroInt(this.getHandle, value, permanent)
    }

    public setItemTypeSlots(slots: number) {
        SetItemTypeSlots(this.getHandle, slots)
    }

    public setOwner(whichPlayer: MapPlayer, changeColor: boolean) {
        SetUnitOwner(this.getHandle, whichPlayer.getHandle, changeColor)
    }

    public setPathing(flag: boolean) {
        SetUnitPathing(this.getHandle, flag)
    }

    public setPosition(x: number, y: number) {
        SetUnitPosition(this.getHandle, x, y)
    }

    public setRescuable(byWhichPlayer: MapPlayer, flag: boolean) {
        SetUnitRescuable(this.getHandle, byWhichPlayer.getHandle, flag)
    }

    public setRescueRange(range: number) {
        SetUnitRescueRange(this.getHandle, range)
    }

    public setScale(scaleX: number, scaleY: number, scaleZ: number) {
        SetUnitScale(this.getHandle, scaleX, scaleY, scaleZ)
    }

    public setState(whichUnitState: UnitState, newVal: number) {
        SetUnitState(this.getHandle, whichUnitState.getHandle, newVal)
    }

    public setStrength(value: number, permanent: boolean) {
        SetHeroStr(this.getHandle, value, permanent)
    }

    public setTimeScale(timeScale: number) {
        SetUnitTimeScale(this.getHandle, timeScale)
    }

    public setUnitAttackCooldown(cooldown: number, weaponIndex: number) {
        BlzSetUnitAttackCooldown(this.getHandle, cooldown, weaponIndex)
    }

    public setUnitTypeSlots(slots: number) {
        SetUnitTypeSlots(this.getHandle, slots)
    }

    public setUpgradeProgress(upgradePercentage: number) {
        UnitSetUpgradeProgress(this.getHandle, upgradePercentage)
    }

    public setUseAltIcon(flag: boolean) {
        UnitSetUsesAltIcon(this.getHandle, flag)
    }

    public setUseFood(useFood: boolean) {
        SetUnitUseFood(this.getHandle, useFood)
    }

    public setVertexColor(red: number, green: number, blue: number, alpha: number) {
        SetUnitVertexColor(this.getHandle, red, green, blue, alpha)
    }

    public shareVision(whichPlayer: MapPlayer, share: boolean) {
        UnitShareVision(this.getHandle, whichPlayer.getHandle, share)
    }

    public showTeamGlow(show: boolean) {
        BlzShowUnitTeamGlow(this.getHandle, show)
    }

    public startAbilityCooldown(abilCode: number, cooldown: number) {
        BlzStartUnitAbilityCooldown(this.getHandle, abilCode, cooldown)
    }

    public stripLevels(howManyLevels: number) {
        return UnitStripHeroLevel(this.getHandle, howManyLevels)
    }

    public suspendDecay(suspend: boolean) {
        UnitSuspendDecay(this.getHandle, suspend)
    }

    public suspendExperience(flag: boolean) {
        SuspendHeroXP(this.getHandle, flag)
    }

    public useItem(whichItem: Item) {
        return UnitUseItem(this.getHandle, whichItem.getHandle)
    }

    public useItemAt(whichItem: Item, x: number, y: number) {
        return UnitUseItemPoint(this.getHandle, whichItem.getHandle, x, y)
    }

    public useItemTarget(whichItem: Item, target: Widget) {
        return UnitUseItemTarget(this.getHandle, whichItem.getHandle, target.getHandle)
    }

    public wakeUp() {
        UnitWakeUp(this.getHandle)
    }

    public waygateGetDestinationX() {
        return WaygateGetDestinationX(this.getHandle)
    }

    public waygateGetDestinationY() {
        return WaygateGetDestinationY(this.getHandle)
    }

    public waygateSetDestination(x: number, y: number) {
        WaygateSetDestination(this.getHandle, x, y)
    }

    public static foodMadeByType(unitId: number) {
        return GetFoodMade(unitId)
    }

    public static foodUsedByType(unitId: number) {
        return GetFoodUsed(unitId)
    }

    public static fromHandle(handle: unit): Unit {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggerUnit())
    }

    public static getPointValueByType(unitType: number) {
        return GetUnitPointValueByType(unitType)
    }

    public static isUnitIdHero(unitId: number) {
        return IsHeroUnitId(unitId)
    }

    public static isUnitIdType(unitId: number, whichUnitType: unittype) {
        return IsUnitIdType(unitId, whichUnitType)
    }

    public static fromEnum(): Unit {
        return this.fromHandle(GetEnumUnit())
    }

    public static fromFilter(): Unit {
        return this.fromHandle(GetFilterUnit())
    }

    public static getEntering(): Unit {
        return this.fromHandle(GetEnteringUnit())
    }

    public static getLeaving(): Unit {
        return this.fromHandle(GetLeavingUnit())
    }

    /**
     * EVENT_PLAYER_HERO_LEVEL
     * EVENT_UNIT_HERO_LEVEL
     * @returns Unit
     */
    public static getLeveling(): Unit {
        return this.fromHandle(GetLevelingUnit())
    }

    /**
     * EVENT_PLAYER_HERO_SKILL
     * EVENT_UNIT_HERO_SKILL
     * @returns Unit
     */
    public static getLearning(): Unit {
        return this.fromHandle(GetLearningUnit())
    }
}