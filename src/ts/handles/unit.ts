/** @noSelfInFile **/
//@ts-nocheck

import { Destructable } from "./Destructable"
import { Force } from "./Force"
import { Group } from "./Group"
import { Item } from "./Item"
import { MapPlayer } from "./MapPlayer"
import { MapLocation } from "./MapLocation"
import { Widget } from "./Widget"
import { UnitState } from "../API/fields/unit/UnitState"
import { UnitRawCode } from "./rawCode/UnitRawCode"
import { Position } from "../Package"
import { PlayerColor } from "../API/fields/player/PlayerColor"
import { RarityControl } from "../API/fields/camera/RarityControl"
import { AbilityRawCode } from "./rawCode/AbilityRawCode"
import { ItemRawCode } from "./rawCode/ItemRawCode"
import { Race } from "../API/fields/other/Race"
import { Point } from "./Point"
import { UnitType } from "../API/fields/unit/UnitType"
import { BuffRawCode } from "./rawCode/BuffRawCode"
import { AttackType } from "../API/fields/unit/AttackType"
import { DamageType } from "../API/fields/unit/DamageType"
import { WeaponType } from "../API/fields/unit/WeaponType"
import { Order } from "../Order"
import { Ability } from "./Ability"
import { UnitBooleanField } from "../API/fields/unit/UnitBooleanField"
import { UnitIntegerField } from "../API/fields/unit/UnitIntegerField"
import { UnitRealField } from "../API/fields/unit/UnitRealField"
import { UnitStringField } from "../API/fields/unit/UnitStringField"
import { UnitWeaponBooleanField } from "../API/fields/unit/UnitWeaponBooleanField"
import { UnitWeaponIntegerField } from "../API/fields/unit/UnitWeaponIntegerField"
import { UnitWeaponRealField } from "../API/fields/unit/UnitWeaponRealField"
import { UnitWeaponStringField } from "../API/fields/unit/UnitWeaponStringField"

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
declare function SetUnitRescueRange(whichUnit: unit, range: real): void
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
declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: real): boolean
declare function IsUnitInRangeXY(whichUnit: unit, x: real, y: real, distance: real): boolean
declare function IsUnitInRangeLoc(whichUnit: unit, whichLocation: location, distance: real): boolean
declare function IsUnitHidden(whichUnit: unit): boolean
declare function IsUnitIllusion(whichUnit: unit): boolean
declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean
declare function IsUnitLoaded(whichUnit: unit): boolean
declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): void
declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): void
declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean
declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean
declare function UnitAddAbility(whichUnit: unit, abilityId: integer): boolean
declare function UnitRemoveAbility(whichUnit: unit, abilityId: integer): boolean
declare function UnitMakeAbilityPermanent(
    whichUnit: unit,
    permanent: boolean,
    abilityId: integer
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
declare function UnitApplyTimedLife(whichUnit: unit, buffId: integer, duration: real): void
declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean
declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean
declare function UnitResetCooldown(whichUnit: unit): void
declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: integer): void
declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: integer): void
declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void
declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): void
declare function UnitDamagePoint(
    whichUnit: unit,
    delay: real,
    radius: real,
    x: real,
    y: real,
    amount: real,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean
declare function UnitDamageTarget(
    whichUnit: unit,
    target: widget,
    amount: real,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean
declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean
declare function IssueImmediateOrderById(whichUnit: unit, order: integer): boolean
declare function IssuePointOrder(whichUnit: unit, order: string, x: real, y: real): boolean
declare function IssuePointOrderLoc(
    whichUnit: unit,
    order: string,
    whichLocation: location
): boolean
declare function IssuePointOrderById(whichUnit: unit, order: integer, x: real, y: real): boolean
declare function IssuePointOrderByIdLoc(
    whichUnit: unit,
    order: integer,
    whichLocation: location
): boolean
declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean
declare function IssueTargetOrderById(
    whichUnit: unit,
    order: integer,
    targetWidget: widget
): boolean
declare function IssueInstantPointOrder(
    whichUnit: unit,
    order: string,
    x: real,
    y: real,
    instantTargetWidget: widget
): boolean
declare function IssueInstantPointOrderById(
    whichUnit: unit,
    order: integer,
    x: real,
    y: real,
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
declare function IssueBuildOrder(whichPeon: unit, unitToBuild: string, x: real, y: real): boolean
declare function IssueBuildOrderById(whichPeon: unit, unitId: integer, x: real, y: real): boolean
declare function IssueNeutralImmediateOrder(
    forWhichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string
): boolean
declare function IssueNeutralImmediateOrderById(
    forWhichPlayer: player,
    neutralStructure: unit,
    unitId: integer
): boolean
declare function IssueNeutralPointOrder(
    forWhichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string,
    x: real,
    y: real
): boolean
declare function IssueNeutralPointOrderById(
    forWhichPlayer: player,
    neutralStructure: unit,
    unitId: integer,
    x: real,
    y: real
): boolean
declare function IssueNeutralTargetOrder(
    forWhichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string,
    target: widget
): boolean
declare function IssueNeutralTargetOrderById(
    forWhichPlayer: player,
    neutralStructure: unit,
    unitId: integer,
    target: widget
): boolean
declare function GetUnitCurrentOrder(whichUnit: unit): integer
declare function SetResourceAmount(whichUnit: unit, amount: integer): void
declare function AddResourceAmount(whichUnit: unit, amount: integer): void
declare function GetResourceAmount(whichUnit: unit): integer
declare function WaygateGetDestinationX(waygate: unit): real
declare function WaygateGetDestinationY(waygate: unit): real
declare function WaygateSetDestination(waygate: unit, x: real, y: real): void
declare function WaygateActivate(waygate: unit, activate: boolean): void
declare function WaygateIsActive(waygate: unit): boolean
declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void
declare function AddItemToStock(
    whichUnit: unit,
    itemId: integer,
    currentStock: integer,
    stockMax: integer
): void
declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void
declare function AddUnitToStock(
    whichUnit: unit,
    unitId: integer,
    currentStock: integer,
    stockMax: integer
): void
declare function RemoveItemFromAllStock(itemId: integer): void
declare function RemoveItemFromStock(whichUnit: unit, itemId: integer): void
declare function RemoveUnitFromAllStock(unitId: integer): void
declare function RemoveUnitFromStock(whichUnit: unit, unitId: integer): void
declare function SetAllItemTypeSlots(slots: integer): void
declare function SetAllUnitTypeSlots(slots: integer): void
declare function SetItemTypeSlots(whichUnit: unit, slots: integer): void
declare function SetUnitTypeSlots(whichUnit: unit, slots: integer): void
declare function GetUnitUserData(whichUnit: unit): integer
declare function SetUnitUserData(whichUnit: unit, data: integer): void
declare function BlzGetUnitMaxHP(whichUnit: unit): integer
declare function BlzSetUnitMaxHP(whichUnit: unit, hp: integer): void
declare function BlzGetUnitMaxMana(whichUnit: unit): integer
declare function BlzSetUnitMaxMana(whichUnit: unit, mana: integer): void
declare function BlzSetUnitName(whichUnit: unit, name: string): void
declare function BlzSetHeroProperName(whichUnit: unit, heroProperName: string): void
declare function BlzGetUnitBaseDamage(whichUnit: unit, weaponIndex: integer): integer
declare function BlzSetUnitBaseDamage(
    whichUnit: unit,
    baseDamage: integer,
    weaponIndex: integer
): void
declare function BlzGetUnitDiceNumber(whichUnit: unit, weaponIndex: integer): integer
declare function BlzSetUnitDiceNumber(
    whichUnit: unit,
    diceNumber: integer,
    weaponIndex: integer
): void
declare function BlzGetUnitDiceSides(whichUnit: unit, weaponIndex: integer): integer
declare function BlzSetUnitDiceSides(
    whichUnit: unit,
    diceSides: integer,
    weaponIndex: integer
): void
declare function BlzGetUnitAttackCooldown(whichUnit: unit, weaponIndex: integer): real
declare function BlzSetUnitAttackCooldown(
    whichUnit: unit,
    cooldown: real,
    weaponIndex: integer
): void
declare function BlzGetUnitArmor(whichUnit: unit): real
declare function BlzSetUnitArmor(whichUnit: unit, armorAmount: real): void
declare function BlzUnitHideAbility(whichUnit: unit, abilId: integer, flag: boolean): void
declare function BlzUnitDisableAbility(
    whichUnit: unit,
    abilId: integer,
    flag: boolean,
    hideUI: boolean
): void
declare function BlzUnitCancelTimedLife(whichUnit: unit): void
declare function BlzIsUnitSelectable(whichUnit: unit): boolean
declare function BlzIsUnitInvulnerable(whichUnit: unit): boolean
declare function BlzUnitInterruptAttack(whichUnit: unit): void
declare function BlzGetUnitCollisionSize(whichUnit: unit): real
declare function BlzSetUnitAbilityCooldown(
    whichUnit: unit,
    abilId: integer,
    level: integer,
    cooldown: real
): void
declare function BlzGetUnitAbilityCooldown(whichUnit: unit, abilId: integer, level: integer): real
declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: unit, abilId: integer): real
declare function BlzEndUnitAbilityCooldown(whichUnit: unit, abilCode: integer): void
declare function BlzGetUnitAbilityManaCost(
    whichUnit: unit,
    abilId: integer,
    level: integer
): integer
declare function BlzSetUnitAbilityManaCost(
    whichUnit: unit,
    abilId: integer,
    level: integer,
    manaCost: integer
): void
declare function BlzGetLocalUnitZ(whichUnit: unit): real
declare function BlzGetUnitZ(whichUnit: unit): real
declare function BlzGetUnitAbility(whichUnit: unit, abilId: integer): ability
declare function BlzGetUnitAbilityByIndex(whichUnit: unit, index: integer): ability
declare function BlzPauseUnitEx(whichUnit: unit, flag: boolean): void
declare function BlzGetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield): boolean
declare function BlzGetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield): integer
declare function BlzGetUnitRealField(whichUnit: unit, whichField: unitrealfield): real
declare function BlzGetUnitStringField(whichUnit: unit, whichField: unitstringfield): string
declare function BlzSetUnitBooleanField(
    whichUnit: unit,
    whichField: unitbooleanfield,
    value: boolean
): boolean
declare function BlzSetUnitIntegerField(
    whichUnit: unit,
    whichField: unitintegerfield,
    value: integer
): boolean
declare function BlzSetUnitRealField(
    whichUnit: unit,
    whichField: unitrealfield,
    value: real
): boolean
declare function BlzSetUnitStringField(
    whichUnit: unit,
    whichField: unitstringfield,
    value: string
): boolean
declare function BlzGetUnitWeaponBooleanField(
    whichUnit: unit,
    whichField: unitweaponbooleanfield,
    index: integer
): boolean
declare function BlzGetUnitWeaponIntegerField(
    whichUnit: unit,
    whichField: unitweaponintegerfield,
    index: integer
): integer
declare function BlzGetUnitWeaponRealField(
    whichUnit: unit,
    whichField: unitweaponrealfield,
    index: integer
): real
declare function BlzGetUnitWeaponStringField(
    whichUnit: unit,
    whichField: unitweaponstringfield,
    index: integer
): string
declare function BlzSetUnitWeaponBooleanField(
    whichUnit: unit,
    whichField: unitweaponbooleanfield,
    index: integer,
    value: boolean
): boolean
declare function BlzSetUnitWeaponIntegerField(
    whichUnit: unit,
    whichField: unitweaponintegerfield,
    index: integer,
    value: integer
): boolean
declare function BlzSetUnitWeaponRealField(
    whichUnit: unit,
    whichField: unitweaponrealfield,
    index: integer,
    value: real
): boolean
declare function BlzSetUnitWeaponStringField(
    whichUnit: unit,
    whichField: unitweaponstringfield,
    index: integer,
    value: string
): boolean

declare function UnitAddIndicator(
    whichUnit: unit,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function RemoveGuardPosition(hUnit: unit): void
declare function RecycleGuardPosition(hUnit: unit): void
declare function GetTriggerUnit(): unit
declare function GetEnteringUnit(): unit
declare function GetLeavingUnit(): unit
declare function GetLevelingUnit(): unit
declare function GetLearningUnit(): unit
declare function GetFilterUnit(): unit
declare function GetEnumUnit(): unit
declare function CreateBlightedGoldmine(id: player, x: real, y: real, face: real): unit

declare function BlzCreateUnitWithSkin(
    id: player,
    unitid: integer,
    x: real,
    y: real,
    face: real,
    skinId: integer
): unit
declare function BlzGetUnitSkin(whichUnit: unit): integer
declare function BlzSetUnitSkin(whichUnit: unit, skinId: integer): void
declare function BlzStartUnitAbilityCooldown(
    whichUnit: unit,
    abilCode: integer,
    cooldown: real
): void
declare function BlzSetUnitFacingEx(whichUnit: unit, facingAngle: real): void
declare function BlzShowUnitTeamGlow(whichUnit: unit, show: boolean): void

export type UnitFieldType = UnitBooleanField | UnitIntegerField | UnitRealField | UnitStringField

export type UnitWeaponFieldType =
    | UnitWeaponBooleanField
    | UnitWeaponIntegerField
    | UnitWeaponRealField
    | UnitWeaponStringField

export class Unit extends Widget {
    public static createCoords(
        owner: MapPlayer,
        unitCode: UnitRawCode,
        x: real,
        y: real,
        face: real
    ) {
        return new this(CreateUnit(owner.getHandle() as player, unitCode.getId(), x, y, face))
    }

    public static createPos(owner: MapPlayer, unitCode: UnitRawCode, p: Position, face: real) {
        return this.createCoords(owner, unitCode, p.getX(), p.getY(), face)
    }

    public static createCoordsByName(
        whichPlayer: MapPlayer,
        unitname: string,
        x: real,
        y: real,
        face: real
    ) {
        return new this(CreateUnitByName(whichPlayer.getHandle() as player, unitname, x, y, face))
    }

    public static createPosByName(
        whichPlayer: MapPlayer,
        unitname: string,
        p: Position,
        face: real
    ) {
        return this.createCoordsByName(whichPlayer, unitname, p.getX(), p.getY(), face)
    }

    public static createAtLoc(
        whichPlayer: MapPlayer,
        unitCode: UnitRawCode,
        whichLocation: MapLocation,
        face: real
    ) {
        return new this(
            CreateUnitAtLoc(
                whichPlayer.getHandle() as player,
                unitCode.getId(),
                whichLocation.getHandle() as location,
                face
            )
        )
    }

    public static createAtLocByName(
        whichPlayer: MapPlayer,
        unitname: string,
        whichLocation: MapLocation,
        face: real
    ) {
        return new this(
            CreateUnitAtLocByName(
                whichPlayer.getHandle() as player,
                unitname,
                whichLocation.getHandle() as location,
                face
            )
        )
    }

    public static createCorpseCoords(
        whichPlayer: MapPlayer,
        unitCode: UnitRawCode,
        x: real,
        y: real,
        face: real
    ) {
        return new this(
            CreateCorpse(whichPlayer.getHandle() as player, unitCode.getId(), x, y, face)
        )
    }

    public static createCorpsePos(
        whichPlayer: MapPlayer,
        unitCode: UnitRawCode,
        p: Position,
        face: real
    ) {
        return this.createCorpseCoords(whichPlayer, unitCode, p.getX(), p.getY(), face)
    }

    public static createCoordsWithSkin(
        whichPlayer: MapPlayer,
        unitCode: UnitRawCode,
        x: real,
        y: real,
        face: real,
        skinCode: UnitRawCode
    ) {
        return new this(
            BlzCreateUnitWithSkin(
                whichPlayer.getHandle() as player,
                unitCode.getId(),
                x,
                y,
                face,
                skinCode.getId()
            )
        )
    }

    public static createPosWithSkin(
        whichPlayer: MapPlayer,
        unitCode: UnitRawCode,
        p: Position,
        face: real,
        skinCode: UnitRawCode
    ) {
        return this.createCoordsWithSkin(whichPlayer, unitCode, p.getX(), p.getY(), face, skinCode)
    }

    public static createBlightedGoldmineCoords(id: MapPlayer, x: real, y: real, face: real) {
        return new this(CreateBlightedGoldmine(id.getHandle() as player, x, y, face))
    }

    public static createBlightedGoldminePos(id: MapPlayer, p: Position, face: real) {
        return this.createBlightedGoldmineCoords(id, p.getX(), p.getY(), face)
    }

    public kill() {
        KillUnit(this.getHandle() as unit)
        return this
    }

    public remove() {
        RemoveUnit(this.getHandle() as unit)
        return this
    }

    public show(flag: boolean) {
        ShowUnit(this.getHandle() as unit, flag)
        return this
    }

    public setState(whichUnitState: UnitState, newVal: real) {
        SetUnitState(this.getHandle() as unit, whichUnitState.getHandle() as unitstate, newVal)
        return this
    }

    public setX(value: real) {
        SetUnitX(this.getHandle() as unit, value)
        return this
    }

    public setY(value: real) {
        SetUnitY(this.getHandle() as unit, value)
        return this
    }

    public setPositionCoords(x: real, y: real) {
        SetUnitPosition(this.getHandle() as unit, x, y)
        return this
    }

    public setPositionPos(p: Position) {
        return this.setPositionCoords(p.getX(), p.getY())
    }

    public setPositionLoc(whichLocation: MapLocation) {
        SetUnitPositionLoc(this.getHandle() as unit, whichLocation.getHandle() as location)
        return this
    }

    public setFacing(value: real) {
        SetUnitFacing(this.getHandle() as unit, value)
        return this
    }

    public setFacingTimed(facingAngle: real, duration: real) {
        SetUnitFacingTimed(this.getHandle() as unit, facingAngle, duration)
        return this
    }

    public setMoveSpeed(value: real) {
        SetUnitMoveSpeed(this.getHandle() as unit, value)
        return this
    }

    public setFlyHeight(value: real, rate: real) {
        SetUnitFlyHeight(this.getHandle() as unit, value, rate)
        return this
    }

    public setTurnSpeed(value: real) {
        SetUnitTurnSpeed(this.getHandle() as unit, value)
        return this
    }

    public setPropWindow(value: real) {
        SetUnitPropWindow(this.getHandle() as unit, value)
        return this
    }

    public setAcquireRange(value: real) {
        SetUnitAcquireRange(this.getHandle() as unit, value)
        return this
    }

    public setCreepGuard(creepGuard: boolean) {
        SetUnitCreepGuard(this.getHandle() as unit, creepGuard)
        return this
    }

    public getAcquireRange(): real {
        return GetUnitAcquireRange(this.getHandle() as unit)
    }

    public getTurnSpeed(): real {
        return GetUnitTurnSpeed(this.getHandle() as unit)
    }

    public getPropWindow(): real {
        return GetUnitPropWindow(this.getHandle() as unit)
    }

    public getFlyHeight(): real {
        return GetUnitFlyHeight(this.getHandle() as unit)
    }

    public getDefaultAcquireRange(): real {
        return GetUnitDefaultAcquireRange(this.getHandle() as unit)
    }

    public getDefaultTurnSpeed(): real {
        return GetUnitDefaultTurnSpeed(this.getHandle() as unit)
    }

    public getDefaultPropWindow(): real {
        return GetUnitDefaultPropWindow(this.getHandle() as unit)
    }

    public getDefaultFlyHeight(): real {
        return GetUnitDefaultFlyHeight(this.getHandle() as unit)
    }

    public setOwner(whichPlayer: MapPlayer, changeColor: boolean) {
        SetUnitOwner(this.getHandle() as unit, whichPlayer.getHandle() as player, changeColor)
        return this
    }

    public setColor(whichColor: PlayerColor) {
        SetUnitColor(this.getHandle() as unit, whichColor.getHandle() as playercolor)
        return this
    }

    public setScale(scaleX: real, scaleY: real, scaleZ: real) {
        SetUnitScale(this.getHandle() as unit, scaleX, scaleY, scaleZ)
        return this
    }

    public setTimeScale(timeScale: real) {
        SetUnitTimeScale(this.getHandle() as unit, timeScale)
        return this
    }

    public setBlendTime(timeScale: real) {
        SetUnitBlendTime(this.getHandle() as unit, timeScale)
        return this
    }

    public setVertexColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetUnitVertexColor(
            this.getHandle() as unit,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public queueAnimation(whichAnimation: string) {
        QueueUnitAnimation(this.getHandle() as unit, whichAnimation)
        return this
    }

    public setAnimation(whichAnimation: string | integer) {
        if (typeof whichAnimation === "string") {
            SetUnitAnimation(this.getHandle() as unit, whichAnimation)
        } else {
            SetUnitAnimationByIndex(this.getHandle() as unit, Math.floor(whichAnimation))
        }
        return this
    }

    public setAnimationWithRarity(whichAnimation: string, rarity: RarityControl) {
        SetUnitAnimationWithRarity(
            this.getHandle() as unit,
            whichAnimation,
            rarity.getHandle() as raritycontrol
        )
        return this
    }

    public addAnimationProperties(animProperties: string, add: boolean) {
        AddUnitAnimationProperties(this.getHandle() as unit, animProperties, add)
        return this
    }

    public setLookAt(
        whichBone: string,
        lookAtTarget: Unit,
        offsetX: real,
        offsetY: real,
        offsetZ: real
    ) {
        SetUnitLookAt(
            this.getHandle() as unit,
            whichBone,
            lookAtTarget.getHandle() as unit,
            offsetX,
            offsetY,
            offsetZ
        )
        return this
    }

    public resetLookAt() {
        ResetUnitLookAt(this.getHandle() as unit)
        return this
    }

    public setRescuable(byWhichPlayer: MapPlayer, flag: boolean) {
        SetUnitRescuable(this.getHandle() as unit, byWhichPlayer.getHandle() as player, flag)
        return this
    }

    public setRescueRange(range: real) {
        SetUnitRescueRange(this.getHandle() as unit, range)
        return this
    }

    public setStrength(value: integer, permanent: boolean = true) {
        SetHeroStr(this.getHandle() as unit, Math.floor(value), permanent)
        return this
    }

    public setAgility(value: integer, permanent: boolean = true) {
        SetHeroAgi(this.getHandle() as unit, Math.floor(value), permanent)
        return this
    }

    public setIntelligence(value: integer, permanent: boolean = true) {
        SetHeroInt(this.getHandle() as unit, Math.floor(value), permanent)
        return this
    }

    public getStrength(includeBonuses: boolean = false): integer {
        return GetHeroStr(this.getHandle() as unit, includeBonuses)
    }

    public getAgility(includeBonuses: boolean = false) {
        return GetHeroAgi(this.getHandle() as unit, includeBonuses)
    }

    public getIntelligence(includeBonuses: boolean = false) {
        return GetHeroInt(this.getHandle() as unit, includeBonuses)
    }

    public stripLevel(howManyLevels: integer) {
        return UnitStripHeroLevel(this.getHandle() as unit, Math.floor(howManyLevels))
    }

    public getXP(): integer {
        return GetHeroXP(this.getHandle() as unit)
    }

    public setXP(newXpVal: integer, showEyeCandy: boolean = true) {
        SetHeroXP(this.getHandle() as unit, Math.floor(newXpVal), showEyeCandy)
        return this
    }

    public getSkillPoints(): integer {
        return GetHeroSkillPoints(this.getHandle() as unit)
    }

    public modifySkillPoints(skillPointDelta: integer) {
        return UnitModifySkillPoints(this.getHandle() as unit, Math.floor(skillPointDelta))
    }

    public addXP(xpToAdd: integer, showEyeCandy: boolean = true) {
        AddHeroXP(this.getHandle() as unit, Math.floor(xpToAdd), showEyeCandy)
        return this
    }

    public setHeroLevel(level: integer, showEyeCandy: boolean = true) {
        SetHeroLevel(this.getHandle() as unit, Math.floor(level), showEyeCandy)
        return this
    }

    public getHeroLevel(): integer {
        return GetHeroLevel(this.getHandle() as unit)
    }

    public getLevel(): integer {
        return GetUnitLevel(this.getHandle() as unit)
    }

    public getProperName() {
        return GetHeroProperName(this.getHandle() as unit)
    }

    public suspendXP(flag: boolean) {
        SuspendHeroXP(this.getHandle() as unit, flag)
        return this
    }

    public isSuspendedXP() {
        return IsSuspendedXP(this.getHandle() as unit)
    }

    public selectSkill(abilCode: AbilityRawCode) {
        SelectHeroSkill(this.getHandle() as unit, abilCode.getId())
        return this
    }

    public getAbilityLevel(abilCode: AbilityRawCode): integer {
        return GetUnitAbilityLevel(this.getHandle() as unit, abilCode.getId())
    }

    public decAbilityLevel(abilCode: AbilityRawCode): integer {
        return DecUnitAbilityLevel(this.getHandle() as unit, abilCode.getId())
    }

    public incAbilityLevel(abilCode: AbilityRawCode): integer {
        return IncUnitAbilityLevel(this.getHandle() as unit, abilCode.getId())
    }

    public setAbilityLevel(abilCode: AbilityRawCode, level: integer) {
        return SetUnitAbilityLevel(this.getHandle() as unit, abilCode.getId(), Math.floor(level))
    }

    public reviveCoords(x: real, y: real, doEyecandy: boolean = true) {
        return ReviveHero(this.getHandle() as unit, x, y, doEyecandy)
    }

    public revivePos(p: Position, doEyecandy: boolean = true) {
        return this.reviveCoords(p.getX(), p.getY(), doEyecandy)
    }

    public reviveLoc(loc: MapLocation, doEyecandy: boolean = true) {
        return ReviveHeroLoc(this.getHandle() as unit, loc.getHandle() as location, doEyecandy)
    }

    public setExploded(exploded: boolean) {
        SetUnitExploded(this.getHandle() as unit, exploded)
        return this
    }

    public setInvulnerable(flag: boolean) {
        SetUnitInvulnerable(this.getHandle() as unit, flag)
        return this
    }

    public pause(flag: boolean) {
        PauseUnit(this.getHandle() as unit, flag)
        return this
    }

    public isPaused() {
        return IsUnitPaused(this.getHandle() as unit)
    }

    public setPathing(flag: boolean) {
        SetUnitPathing(this.getHandle() as unit, flag)
        return this
    }

    public select(flag: boolean) {
        SelectUnit(this.getHandle() as unit, flag)
        return this
    }

    public getPointValue(): integer {
        return GetUnitPointValue(this.getHandle() as unit)
    }

    public addItem(whichItem: Item) {
        return UnitAddItem(this.getHandle() as unit, whichItem.getHandle() as item)
    }

    public addItemByCode(itemCode: ItemRawCode): Item {
        return Item.fromHandle(UnitAddItemById(this.getHandle() as unit, itemCode.getId()))
    }

    public addItemToSlotByCode(itemCode: ItemRawCode, itemSlot: integer) {
        return UnitAddItemToSlotById(
            this.getHandle() as unit,
            itemCode.getId(),
            Math.floor(itemSlot)
        )
    }

    public removeItem(whichItem: Item) {
        UnitRemoveItem(this.getHandle() as unit, whichItem.getHandle() as item)
        return this
    }

    public removeItemFromSlot(itemSlot: integer): Item {
        return Item.fromHandle(
            UnitRemoveItemFromSlot(this.getHandle() as unit, Math.floor(itemSlot))
        )
    }

    public hasItem(whichItem: Item) {
        return UnitHasItem(this.getHandle() as unit, whichItem.getHandle() as item)
    }

    public getItemInSlot(slot: integer): Item {
        return Item.fromHandle(UnitItemInSlot(this.getHandle() as unit, Math.floor(slot)))
    }

    public getInventorySize(): integer {
        return UnitInventorySize(this.getHandle() as unit)
    }

    public dropItemCoords(whichItem: Item, x: real, y: real) {
        return UnitDropItemPoint(this.getHandle() as unit, whichItem.getHandle() as item, x, y)
    }

    public dropItemPos(whichItem: Item, p: Position) {
        return this.dropItemCoords(whichItem, p.getX(), p.getY())
    }

    public dropItemFromSlot(whichItem: Item, slot: integer) {
        return UnitDropItemSlot(
            this.getHandle() as unit,
            whichItem.getHandle() as item,
            Math.floor(slot)
        )
    }

    public dropItemTarget(whichItem: Item, target: Widget) {
        return UnitDropItemTarget(
            this.getHandle() as unit,
            whichItem.getHandle() as item,
            target.getHandle() as widget
        )
    }

    public useItem(whichItem: Item) {
        return UnitUseItem(this.getHandle() as unit, whichItem.getHandle() as item)
    }

    public useItemCoords(whichItem: Item, x: real, y: real) {
        return UnitUseItemPoint(this.getHandle() as unit, whichItem.getHandle() as item, x, y)
    }

    public useItemPos(whichItem: Item, p: Position) {
        return this.useItemCoords(whichItem, p.getX(), p.getY())
    }

    public useItemTarget(whichItem: Item, target: Widget) {
        return UnitUseItemTarget(
            this.getHandle() as unit,
            whichItem.getHandle() as item,
            target.getHandle() as widget
        )
    }

    public getX(): real {
        return GetUnitX(this.getHandle() as unit)
    }

    public getY(): real {
        return GetUnitY(this.getHandle() as unit)
    }

    public getLoc() {
        return MapLocation.fromHandle(GetUnitLoc(this.getHandle() as unit))
    }

    public getFacing(): real {
        return GetUnitFacing(this.getHandle() as unit)
    }

    public getMoveSpeed(): real {
        return GetUnitMoveSpeed(this.getHandle() as unit)
    }

    public getDefaultMoveSpeed(): real {
        return GetUnitDefaultMoveSpeed(this.getHandle() as unit)
    }

    public getState(whichUnitState: UnitState): real {
        return GetUnitState(this.getHandle() as unit, whichUnitState.getHandle() as unitstate)
    }

    public getOwningPlayer() {
        return MapPlayer.fromHandle(GetOwningPlayer(this.getHandle() as unit))
    }

    public getTypeId(): integer {
        return GetUnitTypeId(this.getHandle() as unit)
    }

    public getRawCode() {
        return UnitRawCode.get(this.getTypeId())
    }

    public getRace() {
        return Race.fromHandle(GetUnitRace(this.getHandle() as unit))
    }

    public getName() {
        return GetUnitName(this.getHandle() as unit)
    }

    public getFoodUsedCount(): integer {
        return GetUnitFoodUsed(this.getHandle() as unit)
    }

    public getFoodMadeCount(): integer {
        return GetUnitFoodMade(this.getHandle() as unit)
    }

    public setUseFood(useFood: boolean) {
        SetUnitUseFood(this.getHandle() as unit, useFood)
        return this
    }

    public getRallyLoc() {
        return MapLocation.fromHandle(GetUnitRallyPoint(this.getHandle() as unit))
    }

    public getRallyPoint() {
        return Point.fromLoc(this.getRallyLoc())
    }

    public getRallyUnit() {
        return Unit.fromHandle(GetUnitRallyUnit(this.getHandle() as unit))
    }

    public getRallyDestructable() {
        return Destructable.fromHandle(GetUnitRallyDestructable(this.getHandle() as unit))
    }

    public isInGroup(whichGroup: Group) {
        return IsUnitInGroup(this.getHandle() as unit, whichGroup.getHandle() as group)
    }

    public isInForce(whichForce: Force) {
        return IsUnitInForce(this.getHandle() as unit, whichForce.getHandle() as force)
    }

    public isOwnedByPlayer(whichPlayer: MapPlayer) {
        return IsUnitOwnedByPlayer(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isAlly(whichPlayer: MapPlayer) {
        return IsUnitAlly(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isEnemy(whichPlayer: MapPlayer) {
        return IsUnitEnemy(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isVisible(whichPlayer: MapPlayer) {
        return IsUnitVisible(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isDetected(whichPlayer: MapPlayer) {
        return IsUnitDetected(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isInvisible(whichPlayer: MapPlayer) {
        return IsUnitInvisible(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isFogged(whichPlayer: MapPlayer) {
        return IsUnitFogged(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isMasked(whichPlayer: MapPlayer) {
        return IsUnitMasked(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isSelected(whichPlayer: MapPlayer) {
        return IsUnitSelected(this.getHandle() as unit, whichPlayer.getHandle() as player)
    }

    public isRace(whichRace: Race) {
        return IsUnitRace(this.getHandle() as unit, whichRace.getHandle() as race)
    }

    public isType(whichUnitType: UnitType) {
        return IsUnitType(this.getHandle() as unit, whichUnitType.getHandle() as unittype)
    }

    public isUnit(whichSpecifiedUnit: Unit) {
        return IsUnit(this.getHandle() as unit, whichSpecifiedUnit.getHandle() as unit)
    }

    public isInRangeOfUnit(otherUnit: Unit, distance: real) {
        return IsUnitInRange(this.getHandle() as unit, otherUnit.getHandle() as unit, distance)
    }

    public isInRangeCoords(x: real, y: real, distance: real) {
        return IsUnitInRangeXY(this.getHandle() as unit, x, y, distance)
    }

    public isInRangePos(p: Position, distance: real) {
        return this.isInRangeCoords(p.getX(), p.getY(), distance)
    }

    public isInRangeOfLoc(whichPoint: MapLocation, distance: real) {
        return IsUnitInRangeLoc(
            this.getHandle() as unit,
            whichPoint.getHandle() as location,
            distance
        )
    }

    public isHidden() {
        return IsUnitHidden(this.getHandle() as unit)
    }

    public isIllusion() {
        return IsUnitIllusion(this.getHandle() as unit)
    }

    public isInTransport(whichTransport: Unit) {
        return IsUnitInTransport(this.getHandle() as unit, whichTransport.getHandle() as unit)
    }

    public isLoaded() {
        return IsUnitLoaded(this.getHandle() as unit)
    }

    public shareVision(whichPlayer: MapPlayer, share: boolean) {
        UnitShareVision(this.getHandle() as unit, whichPlayer.getHandle() as player, share)
        return this
    }

    public suspendDecay(suspend: boolean) {
        UnitSuspendDecay(this.getHandle() as unit, suspend)
        return this
    }

    public addType(whichUnitType: UnitType) {
        return UnitAddType(this.getHandle() as unit, whichUnitType.getHandle() as unittype)
    }

    public removeType(whichUnitType: UnitType) {
        return UnitRemoveType(this.getHandle() as unit, whichUnitType.getHandle() as unittype)
    }

    public addAbility(abilityCode: AbilityRawCode) {
        return UnitAddAbility(this.getHandle() as unit, abilityCode.getId())
    }

    public removeAbility(abilityCode: AbilityRawCode) {
        return UnitRemoveAbility(this.getHandle() as unit, abilityCode.getId())
    }

    public makeAbilityPermanent(abilityCode: AbilityRawCode, permanent: boolean) {
        UnitMakeAbilityPermanent(this.getHandle() as unit, permanent, abilityCode.getId())
    }

    public removeBuffs(removePositive: boolean, removeNegative: boolean) {
        UnitRemoveBuffs(this.getHandle() as unit, removePositive, removeNegative)
        return this
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
            this.getHandle() as unit,
            removePositive,
            removeNegative,
            magic,
            physical,
            timedLife,
            aura,
            autoDispel
        )
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
            this.getHandle() as unit,
            removePositive,
            removeNegative,
            magic,
            physical,
            timedLife,
            aura,
            autoDispel
        )
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
            this.getHandle() as unit,
            removePositive,
            removeNegative,
            magic,
            physical,
            timedLife,
            aura,
            autoDispel
        )
    }

    public addSleep(add: boolean) {
        UnitAddSleep(this.getHandle() as unit, add)
        return this
    }

    public canSleep() {
        return UnitCanSleep(this.getHandle() as unit)
    }

    public addSleepPerm(add: boolean) {
        UnitAddSleepPerm(this.getHandle() as unit, add)
        return this
    }

    public canSleepPerm() {
        return UnitCanSleepPerm(this.getHandle() as unit)
    }

    public isSleeping() {
        return UnitIsSleeping(this.getHandle() as unit)
    }

    public wakeUp() {
        UnitWakeUp(this.getHandle() as unit)
        return this
    }

    public applyTimedLife(buffCode: BuffRawCode, duration: real) {
        UnitApplyTimedLife(this.getHandle() as unit, buffCode.getId(), duration)
        return this
    }

    public ignoreAlarm(flag: boolean) {
        return UnitIgnoreAlarm(this.getHandle() as unit, flag)
    }

    public ignoreAlarmToggled() {
        return UnitIgnoreAlarmToggled(this.getHandle() as unit)
    }

    public resetCooldown() {
        UnitResetCooldown(this.getHandle() as unit)
        return this
    }

    public setConstructionProgress(constructionPercentage: integer) {
        UnitSetConstructionProgress(this.getHandle() as unit, Math.floor(constructionPercentage))
        return this
    }

    public setUpgradeProgress(upgradePercentage: integer) {
        UnitSetUpgradeProgress(this.getHandle() as unit, Math.floor(upgradePercentage))
        return this
    }

    public pauseTimedLife(flag: boolean) {
        UnitPauseTimedLife(this.getHandle() as unit, flag)
        return this
    }

    public setUsesAltIcon(flag: boolean) {
        UnitSetUsesAltIcon(this.getHandle() as unit, flag)
        return this
    }

    public damageCoords(
        delay: real,
        radius: real,
        x: real,
        y: real,
        amount: real,
        attack: boolean,
        ranged: boolean,
        attackType: AttackType,
        damageType: DamageType,
        weaponType: WeaponType
    ) {
        return UnitDamagePoint(
            this.getHandle() as unit,
            delay,
            radius,
            x,
            y,
            amount,
            attack,
            ranged,
            attackType.getHandle() as attacktype,
            damageType.getHandle() as damagetype,
            weaponType.getHandle() as weapontype
        )
    }

    public damagePos(
        delay: real,
        radius: real,
        p: Position,
        amount: real,
        attack: boolean,
        ranged: boolean,
        attackType: AttackType,
        damageType: DamageType,
        weaponType: WeaponType
    ) {
        return this.damageCoords(
            delay,
            radius,
            p.getX(),
            p.getY(),
            amount,
            attack,
            ranged,
            attackType,
            damageType,
            weaponType
        )
    }

    public damageTarget(
        target: Widget,
        amount: real,
        attack: boolean,
        ranged: boolean,
        attackType: AttackType,
        damageType: DamageType,
        weaponType: WeaponType
    ) {
        return UnitDamageTarget(
            this.getHandle() as unit,
            target.getHandle() as widget,
            amount,
            attack,
            ranged,
            attackType.getHandle() as attacktype,
            damageType.getHandle() as damagetype,
            weaponType.getHandle() as weapontype
        )
    }

    public issueImmediateOrder(order: Order | order) {
        return IssueImmediateOrderById(this.getHandle() as unit, Order.toId(order))
    }

    public issuePointOrderCoords(order: Order | order, x: real, y: real) {
        return IssuePointOrderById(this.getHandle() as unit, Order.toId(order), x, y)
    }

    public issuePointOrderPos(order: Order | order, p: Position) {
        return this.issuePointOrderCoords(order, p.getX(), p.getY())
    }

    public issuePointOrderLoc(order: Order | order, whichLocation: MapLocation) {
        return IssuePointOrderByIdLoc(
            this.getHandle() as unit,
            Order.toId(order),
            whichLocation.getHandle() as location
        )
    }

    public issueTargetOrder(order: Order | order, targetWidget: Widget) {
        return IssueTargetOrderById(
            this.getHandle() as unit,
            Order.toId(order),
            targetWidget.getHandle() as widget
        )
    }

    public issueInstantPointOrderCoords(
        order: Order | order,
        x: real,
        y: real,
        instantTargetWidget: Widget
    ) {
        return IssueInstantPointOrderById(
            this.getHandle() as unit,
            Order.toId(order),
            x,
            y,
            instantTargetWidget.getHandle() as widget
        )
    }

    public issueInstantPointOrderPos(
        order: Order | order,
        p: Position,
        instantTargetWidget: Widget
    ) {
        return this.issueInstantPointOrderCoords(order, p.getX(), p.getY(), instantTargetWidget)
    }

    public issueInstantTargetOrder(
        order: Order | order,
        targetWidget: Widget,
        instantTargetWidget: Widget
    ) {
        return IssueInstantTargetOrderById(
            this.getHandle() as unit,
            Order.toId(order),
            targetWidget.getHandle() as widget,
            instantTargetWidget.getHandle() as widget
        )
    }

    public issueBuildOrderCoords(unit: Order | order, x: real, y: real) {
        return IssueBuildOrderById(this.getHandle() as unit, Order.toId(unit), x, y)
    }

    public issueBuildOrderPos(unit: Order | order, p: Position) {
        return this.issueBuildOrderCoords(unit, p.getX(), p.getY())
    }

    public issueNeutralImmediateOrder(unit: Order | order, forWhichPlayer: MapPlayer) {
        return IssueNeutralImmediateOrderById(
            forWhichPlayer.getHandle() as player,
            this.getHandle() as unit,
            Order.toId(unit)
        )
    }

    public issueNeutralPointOrderCoords(
        unit: Order | order,
        forWhichPlayer: MapPlayer,
        x: real,
        y: real
    ) {
        return IssueNeutralPointOrderById(
            forWhichPlayer.getHandle() as player,
            this.getHandle() as unit,
            Order.toId(unit),
            x,
            y
        )
    }

    public issueNeutralPointOrderPos(unit: Order | order, forWhichPlayer: MapPlayer, p: Position) {
        return this.issueNeutralPointOrderCoords(unit, forWhichPlayer, p.getX(), p.getY())
    }

    public issueNeutralTargetOrder(unit: Order | order, forWhichPlayer: MapPlayer, target: Widget) {
        return IssueNeutralTargetOrderById(
            forWhichPlayer.getHandle() as player,
            this.getHandle() as unit,
            Order.toId(unit),
            target.getHandle() as widget
        )
    }

    public getCurrentOrderId(): integer {
        return GetUnitCurrentOrder(this.getHandle() as unit)
    }

    public getCurrentOrder() {
        return Order.get(this.getCurrentOrderId())
    }

    public setResourceAmount(amount: integer) {
        SetResourceAmount(this.getHandle() as unit, Math.floor(amount))
        return this
    }

    public addResourceAmount(amount: integer) {
        AddResourceAmount(this.getHandle() as unit, Math.floor(amount))
        return this
    }

    public getResourceAmount(): integer {
        return GetResourceAmount(this.getHandle() as unit)
    }

    public getWaygateDestinationX(): real {
        return WaygateGetDestinationX(this.getHandle() as unit)
    }

    public getWaygateDestinationY(): real {
        return WaygateGetDestinationY(this.getHandle() as unit)
    }

    public getWaygateDestinationPoint() {
        return new Point(this.getWaygateDestinationX(), this.getWaygateDestinationY())
    }

    public setWaygateDestinationCoords(x: real, y: real) {
        WaygateSetDestination(this.getHandle() as unit, x, y)
        return this
    }

    public setWaygateDestinationPos(p: Position) {
        return this.setWaygateDestinationCoords(p.getX(), p.getY())
    }

    public waygateActivate(flag: boolean) {
        WaygateActivate(this.getHandle() as unit, flag)
        return this
    }

    public isWaygateActive() {
        return WaygateIsActive(this.getHandle() as unit)
    }

    public addItemToStock(itemCode: ItemRawCode, currentStock: integer, stockMax: integer) {
        AddItemToStock(
            this.getHandle() as unit,
            itemCode.getId(),
            Math.floor(currentStock),
            Math.floor(stockMax)
        )
        return this
    }

    public addUnitToStock(unitCode: UnitRawCode, currentStock: integer, stockMax: integer) {
        AddUnitToStock(
            this.getHandle() as unit,
            unitCode.getId(),
            Math.floor(currentStock),
            Math.floor(stockMax)
        )
        return this
    }

    public removeItemFromStock(itemCode: ItemRawCode) {
        RemoveItemFromStock(this.getHandle() as unit, itemCode.getId())
        return this
    }

    public removeUnitFromStock(unitCode: UnitRawCode) {
        RemoveUnitFromStock(this.getHandle() as unit, unitCode.getId())
        return this
    }

    public static setAllItemTypeSlots(slots: integer) {
        SetAllItemTypeSlots(Math.floor(slots))
        return this
    }

    public static setAllUnitTypeSlots(slots: integer) {
        SetAllUnitTypeSlots(Math.floor(slots))
        return this
    }

    public setItemTypeSlots(slots: integer) {
        SetItemTypeSlots(this.getHandle() as unit, Math.floor(slots))
        return this
    }

    public setUnitTypeSlots(slots: integer) {
        SetUnitTypeSlots(this.getHandle() as unit, Math.floor(slots))
        return this
    }

    public getUserData(): integer {
        return GetUnitUserData(this.getHandle() as unit)
    }

    public setUserData(value: integer) {
        SetUnitUserData(this.getHandle() as unit, Math.floor(value))
        return this
    }

    public getMaxHP(): integer {
        return BlzGetUnitMaxHP(this.getHandle() as unit)
    }

    public setMaxHP(value: integer) {
        BlzSetUnitMaxHP(this.getHandle() as unit, Math.floor(value))
        return this
    }

    public getMaxMana(): integer {
        return BlzGetUnitMaxMana(this.getHandle() as unit)
    }

    public setMaxMana(value: integer) {
        BlzSetUnitMaxMana(this.getHandle() as unit, Math.floor(value))
        return this
    }

    public setName(value: string) {
        BlzSetUnitName(this.getHandle() as unit, value)
        return this
    }

    public setHeroProperName(value: string) {
        BlzSetHeroProperName(this.getHandle() as unit, value)
        return this
    }

    public getBaseDamage(weaponIndex: integer): integer {
        return BlzGetUnitBaseDamage(this.getHandle() as unit, Math.floor(weaponIndex))
    }

    public setBaseDamage(baseDamage: integer, weaponIndex: integer) {
        BlzSetUnitBaseDamage(
            this.getHandle() as unit,
            Math.floor(baseDamage),
            Math.floor(weaponIndex)
        )
        return this
    }

    public getDiceNumber(weaponIndex: integer): integer {
        return BlzGetUnitDiceNumber(this.getHandle() as unit, Math.floor(weaponIndex))
    }

    public setDiceNumber(diceNumber: integer, weaponIndex: integer) {
        BlzSetUnitDiceNumber(
            this.getHandle() as unit,
            Math.floor(diceNumber),
            Math.floor(weaponIndex)
        )
        return this
    }

    public getDiceSides(weaponIndex: integer): integer {
        return BlzGetUnitDiceSides(this.getHandle() as unit, Math.floor(weaponIndex))
    }

    public setDiceSides(diceSides: integer, weaponIndex: integer) {
        BlzSetUnitDiceSides(
            this.getHandle() as unit,
            Math.floor(diceSides),
            Math.floor(weaponIndex)
        )
        return this
    }

    public getAttackCooldown(weaponIndex: integer): real {
        return BlzGetUnitAttackCooldown(this.getHandle() as unit, Math.floor(weaponIndex))
    }

    public setAttackCooldown(cooldown: real, weaponIndex: integer) {
        BlzSetUnitAttackCooldown(this.getHandle() as unit, cooldown, Math.floor(weaponIndex))
        return this
    }

    public getArmor(): real {
        return BlzGetUnitArmor(this.getHandle() as unit)
    }

    public setArmor(armorAmount: real) {
        BlzSetUnitArmor(this.getHandle() as unit, armorAmount)
        return this
    }

    public hideAbility(abilCode: AbilityRawCode, flag: boolean) {
        BlzUnitHideAbility(this.getHandle() as unit, abilCode.getId(), flag)
        return this
    }

    public disableAbility(abilCode: AbilityRawCode, flag: boolean, hideUI: boolean) {
        BlzUnitDisableAbility(this.getHandle() as unit, abilCode.getId(), flag, hideUI)
        return this
    }

    public cancelTimedLife() {
        BlzUnitCancelTimedLife(this.getHandle() as unit)
        return this
    }

    public isSelectable() {
        return BlzIsUnitSelectable(this.getHandle() as unit)
    }

    public isInvulnerable() {
        return BlzIsUnitInvulnerable(this.getHandle() as unit)
    }

    public interruptAttack() {
        BlzUnitInterruptAttack(this.getHandle() as unit)
        return this
    }

    public getCollisionSize(): real {
        return BlzGetUnitCollisionSize(this.getHandle() as unit)
    }

    public setAbilityCooldown(abilCode: AbilityRawCode, level: integer, cooldown: real) {
        BlzSetUnitAbilityCooldown(
            this.getHandle() as unit,
            abilCode.getId(),
            Math.floor(level),
            cooldown
        )
        return this
    }

    public getAbilityCooldown(abilCode: AbilityRawCode, level: integer): real {
        return BlzGetUnitAbilityCooldown(
            this.getHandle() as unit,
            abilCode.getId(),
            Math.floor(level)
        )
    }

    public getAbilityCooldownRemaining(abilCode: AbilityRawCode): real {
        return BlzGetUnitAbilityCooldownRemaining(this.getHandle() as unit, abilCode.getId())
    }

    public endAbilityCooldown(abilCode: AbilityRawCode) {
        BlzEndUnitAbilityCooldown(this.getHandle() as unit, abilCode.getId())
        return this
    }

    public getAbilityManaCost(abilCode: AbilityRawCode, level: integer): integer {
        return BlzGetUnitAbilityManaCost(
            this.getHandle() as unit,
            abilCode.getId(),
            Math.floor(level)
        )
    }

    public setAbilityManaCost(abilCode: AbilityRawCode, level: integer, manaCost: integer) {
        BlzSetUnitAbilityManaCost(
            this.getHandle() as unit,
            abilCode.getId(),
            Math.floor(level),
            Math.floor(manaCost)
        )
        return this
    }

    public getLocalZ(): real {
        return BlzGetLocalUnitZ(this.getHandle() as unit)
    }

    public getZ(): real {
        return BlzGetUnitZ(this.getHandle() as unit)
    }

    public getAbility(abilCode: AbilityRawCode | rawcode) {
        return Ability.fromHandle(
            BlzGetUnitAbility(this.getHandle() as unit, AbilityRawCode.toId(abilCode))
        )
    }

    public getAbilityByIndex(index: integer) {
        return Ability.fromHandle(
            BlzGetUnitAbilityByIndex(this.getHandle() as unit, Math.floor(index))
        )
    }

    public pauseEx(flag: boolean) {
        BlzPauseUnitEx(this.getHandle() as unit, flag)
        return this
    }

    public getBooleanField(whichField: UnitBooleanField) {
        return BlzGetUnitBooleanField(
            this.getHandle() as unit,
            whichField.getHandle() as unitbooleanfield
        )
    }

    public getIntegerField(whichField: UnitIntegerField) {
        return BlzGetUnitIntegerField(
            this.getHandle() as unit,
            whichField.getHandle() as unitintegerfield
        )
    }

    public getRealField(whichField: UnitRealField) {
        return BlzGetUnitRealField(
            this.getHandle() as unit,
            whichField.getHandle() as unitrealfield
        )
    }

    public getStringField(whichField: UnitStringField) {
        return BlzGetUnitStringField(
            this.getHandle() as unit,
            whichField.getHandle() as unitstringfield
        )
    }

    public getField(whichField: UnitFieldType): Primitive | undefined {
        let result: Primitive | undefined
        if (whichField instanceof UnitBooleanField) {
            result = this.getBooleanField(whichField)
        } else if (whichField instanceof UnitIntegerField) {
            result = this.getIntegerField(whichField)
        } else if (whichField instanceof UnitRealField) {
            result = this.getRealField(whichField)
        } else if (whichField instanceof UnitStringField) {
            result = this.getStringField(whichField)
        }
        return result
    }

    public setBooleanField(whichField: UnitBooleanField, value: boolean) {
        return BlzSetUnitBooleanField(
            this.getHandle() as unit,
            whichField.getHandle() as unitbooleanfield,
            value
        )
    }

    public setIntegerField(whichField: UnitIntegerField, value: integer) {
        return BlzSetUnitIntegerField(
            this.getHandle() as unit,
            whichField.getHandle() as unitintegerfield,
            Math.floor(value)
        )
    }

    public setRealField(whichField: UnitRealField, value: real) {
        return BlzSetUnitRealField(
            this.getHandle() as unit,
            whichField.getHandle() as unitrealfield,
            value
        )
    }

    public setStringField(whichField: UnitStringField, value: string) {
        return BlzSetUnitStringField(
            this.getHandle() as unit,
            whichField.getHandle() as unitstringfield,
            value
        )
    }

    public setField(field: UnitFieldType, value: Primitive) {
        if (field instanceof UnitBooleanField && typeof value === "boolean") {
            return this.setBooleanField(field, value)
        } else if (field instanceof UnitIntegerField && typeof value === "number") {
            return this.setIntegerField(field, value)
        } else if (field instanceof UnitRealField && typeof value === "number") {
            return this.setRealField(field, value)
        } else if (field instanceof UnitStringField && typeof value === "string") {
            return this.setStringField(field, value)
        } else {
            error("Неверные аргументы вызова метода setField объекта класса Unit", 2)
        }
    }

    public getWeaponBooleanField(whichField: UnitWeaponBooleanField, index: integer) {
        return BlzGetUnitWeaponBooleanField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponbooleanfield,
            Math.floor(index)
        )
    }

    public getWeaponIntegerField(whichField: UnitWeaponIntegerField, index: integer) {
        return BlzGetUnitWeaponIntegerField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponintegerfield,
            Math.floor(index)
        )
    }

    public getWeaponRealField(whichField: UnitWeaponRealField, index: integer) {
        return BlzGetUnitWeaponRealField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponrealfield,
            Math.floor(index)
        )
    }

    public getWeaponStringField(whichField: UnitWeaponStringField, index: integer) {
        return BlzGetUnitWeaponStringField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponstringfield,
            Math.floor(index)
        )
    }

    public getWeaponField(field: UnitWeaponFieldType, index: integer): Primitive | undefined {
        let result: Primitive | undefined
        if (field instanceof UnitWeaponBooleanField) {
            result = this.getWeaponBooleanField(field, index)
        } else if (field instanceof UnitWeaponIntegerField) {
            result = this.getWeaponIntegerField(field, index)
        } else if (field instanceof UnitWeaponRealField) {
            result = this.getWeaponRealField(field, index)
        } else if (field instanceof UnitWeaponStringField) {
            result = this.getWeaponStringField(field, index)
        }
        return result
    }

    public setWeaponBooleanField(
        whichField: UnitWeaponBooleanField,
        index: integer,
        value: boolean
    ) {
        return BlzSetUnitWeaponBooleanField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponbooleanfield,
            Math.floor(index),
            value
        )
    }

    public setWeaponIntegerField(
        whichField: UnitWeaponIntegerField,
        index: integer,
        value: integer
    ) {
        return BlzSetUnitWeaponIntegerField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponintegerfield,
            Math.floor(index),
            Math.floor(value)
        )
    }

    public setWeaponRealField(whichField: UnitWeaponRealField, index: integer, value: real) {
        return BlzSetUnitWeaponRealField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponrealfield,
            Math.floor(index),
            value
        )
    }

    public setWeaponStringField(whichField: UnitWeaponStringField, index: integer, value: string) {
        return BlzSetUnitWeaponStringField(
            this.getHandle() as unit,
            whichField.getHandle() as unitweaponstringfield,
            Math.floor(index),
            value
        )
    }

    public setWeaponField(field: UnitWeaponFieldType, index: integer, value: Primitive) {
        if (field instanceof UnitWeaponBooleanField && typeof value === "boolean") {
            return this.setWeaponBooleanField(field, index, value)
        } else if (field instanceof UnitWeaponIntegerField && typeof value === "number") {
            return this.setWeaponIntegerField(field, index, value)
        } else if (field instanceof UnitWeaponRealField && typeof value === "number") {
            return this.setWeaponRealField(field, index, value)
        } else if (field instanceof UnitWeaponStringField && typeof value === "string") {
            return this.setWeaponStringField(field, index, value)
        } else {
            error("Неверные аргументы вызова метода setWeaponField объекта класса Unit", 2)
        }
    }

    public addIndicator(red: integer, blue: integer, green: integer, alpha: integer) {
        UnitAddIndicator(
            this.getHandle() as unit,
            Math.floor(red),
            Math.floor(blue),
            Math.floor(green),
            Math.floor(alpha)
        )
        return this
    }

    public removeGuardPosition() {
        RemoveGuardPosition(this.getHandle() as unit)
        return this
    }

    public recycleGuardPosition() {
        RecycleGuardPosition(this.getHandle() as unit)
        return this
    }

    public getSkin() {
        return UnitRawCode.get(BlzGetUnitSkin(this.getHandle() as unit))
    }

    public setSkin(skinId: UnitRawCode | rawcode) {
        BlzSetUnitSkin(this.getHandle() as unit, UnitRawCode.toId(skinId))
        return this
    }

    public startAbilityCooldown(abilCode: AbilityRawCode | rawcode, cooldown: real) {
        BlzStartUnitAbilityCooldown(this.getHandle() as unit, AbilityRawCode.toId(abilCode), cooldown)
        return this
    }

    public setFacingEx(facingAngle: real) {
        BlzSetUnitFacingEx(this.getHandle() as unit, facingAngle)
        return this
    }

    public showTeamGlow(show: boolean) {
        BlzShowUnitTeamGlow(this.getHandle() as unit, show)
        return this
    }

    public static fromHandle(handle: unit) {
        return super.getObject(handle) as Unit
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggerUnit())
    }

    public static getEntering() {
        return this.fromHandle(GetEnteringUnit())
    }

    public static getLeaving() {
        return this.fromHandle(GetLeavingUnit())
    }

    public static getLeveling(): Unit {
        return this.fromHandle(GetLevelingUnit())
    }

    public static getLearning(): Unit {
        return this.fromHandle(GetLearningUnit())
    }

    public static fromFilter() {
        return this.fromHandle(GetFilterUnit())
    }

    public static fromEnum() {
        return this.fromHandle(GetEnumUnit())
    }
}
