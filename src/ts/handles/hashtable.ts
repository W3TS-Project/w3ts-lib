/** @noSelfInFile **/
//@ts-nocheck

import { FogState } from "../API/fields/camera/FogState"
import { DialogEvent } from "../API/fields/events/DialogEvent"
import { Event } from "../API/fields/events/Event"
import { GameEvent } from "../API/fields/events/GameEvent"
import { LimitOperation } from "../API/fields/events/LimitOperation"
import { PlayerEvent } from "../API/fields/events/PlayerEvent"
import { PlayerUnitEvent } from "../API/fields/events/PlayerUnitEvent"
import { UnitEvent } from "../API/fields/events/UnitEvent"
import { WidgetEvent } from "../API/fields/events/WidgetEvent"
import { Events } from "../fields/events/Events"
import { ObjectOptions } from "../ObjectOptions"
import { Ability } from "./Ability"
import { Destructable } from "./Destructable"
import { Dialog } from "./Dialog"
import { DialogButton } from "./DialogButton"
import { FogModifier } from "./FogModifier"
import { Force } from "./Force"
import { Frame } from "./Frame"
import { Group } from "./Group"
import { Handle } from "./Handle"
import { Image } from "./Image"
import { Item } from "./Item"
import { ItemPool } from "./ItemPool"
import { LeaderBoard } from "./LeaderBoard"
import { Lightning } from "./Lightning"
import { MapLocation } from "./MapLocation"
import { MapPlayer } from "./MapPlayer"
import { MultiBoard, MultiboardItem } from "./MultiBoard"
import { Quest, QuestItem } from "./Quest"
import { Rectangle } from "./Rectangle"
import { Region } from "./Region"
import { Sound } from "./Sound"
import { SpecialEffect } from "./SpecialEffect"
import { SpellEffect } from "./SpellEffect"
import { TextTag } from "./TextTag"
import { Timer } from "./Timer"
import { TimerDialog } from "./TimerDialog"
import { Trackable } from "./Trackable"
import { Trigger } from "./Trigger"
import { Ubersplat } from "./Ubersplat"
import { Unit } from "./Unit"
import { UnitPool } from "./UnitPool"
import { Widget } from "./Widget"

declare function InitHashtable(): hashtable

declare function SaveInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: integer
): void
declare function SaveReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: real
): void
declare function SaveBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: boolean
): void
declare function SaveStr(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: string
): boolean
declare function SavePlayerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichPlayer: player
): boolean
declare function SaveWidgetHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichWidget: widget
): boolean
declare function SaveDestructableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichDestructable: destructable
): boolean
declare function SaveItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichItem: item
): boolean
declare function SaveUnitHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichUnit: unit
): boolean
declare function SaveAbilityHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichAbility: ability
): boolean
declare function SaveTimerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichTimer: timer
): boolean
declare function SaveTriggerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichTrigger: trigger
): boolean
declare function SaveTriggerConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichTriggercondition: triggercondition
): boolean
declare function SaveTriggerActionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichTriggeraction: triggeraction
): boolean
declare function SaveTriggerEventHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichEvent: event
): boolean
declare function SaveForceHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichForce: force
): boolean
declare function SaveGroupHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichGroup: group
): boolean
declare function SaveLocationHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichLocation: location
): boolean
declare function SaveRectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichRect: rect
): boolean
declare function SaveBooleanExprHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichBoolexpr: boolexpr
): boolean
declare function SaveSoundHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichSound: sound
): boolean
declare function SaveEffectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichEffect: effect
): boolean
declare function SaveUnitPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichUnitpool: unitpool
): boolean
declare function SaveItemPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichItempool: itempool
): boolean
declare function SaveQuestHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichQuest: quest
): boolean
declare function SaveQuestItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichQuestitem: questitem
): boolean
declare function SaveDefeatConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichDefeatcondition: defeatcondition
): boolean
declare function SaveTimerDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichTimerdialog: timerdialog
): boolean
declare function SaveLeaderboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichLeaderboard: leaderboard
): boolean
declare function SaveMultiboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichMultiboard: multiboard
): boolean
declare function SaveMultiboardItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichMultiboardItem: multiboarditem
): boolean
declare function SaveTrackableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichTrackable: trackable
): boolean
declare function SaveDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichDialog: dialog
): boolean
declare function SaveButtonHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichButton: button
): boolean
declare function SaveTextTagHandle(
    table: hashtable,
    parentKey: integer,
    childkey: integer,
    whichTexttag: texttag
): boolean
declare function SaveLightningHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichLightning: lightning
): boolean
declare function SaveImageHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichImage: image
): boolean
declare function SaveUbersplatHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichUbersplat: ubersplat
): boolean
declare function SaveRegionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichRegion: region
): boolean
declare function SaveFogStateHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichFogState: fogstate
): boolean
declare function SaveFogModifierHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichFogModifier: fogmodifier
): boolean
declare function SaveAgentHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichAgent: agent
): boolean
declare function SaveHashtableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichHashtable: hashtable
): boolean
declare function SaveFrameHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    whichFrameHandle: framehandle
): boolean

declare function LoadInteger(table: hashtable, parentKey: integer, childKey: integer): integer
declare function LoadReal(table: hashtable, parentKey: integer, childKey: integer): real
declare function LoadBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean
declare function LoadStr(table: hashtable, parentKey: integer, childKey: integer): string
declare function LoadPlayerHandle(table: hashtable, parentKey: integer, childKey: integer): player
declare function LoadWidgetHandle(table: hashtable, parentKey: integer, childKey: integer): widget
declare function LoadDestructableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): destructable
declare function LoadItemHandle(table: hashtable, parentKey: integer, childKey: integer): item
declare function LoadUnitHandle(table: hashtable, parentKey: integer, childKey: integer): unit
declare function LoadAbilityHandle(table: hashtable, parentKey: integer, childKey: integer): ability
declare function LoadTimerHandle(table: hashtable, parentKey: integer, childKey: integer): timer
declare function LoadTriggerHandle(table: hashtable, parentKey: integer, childKey: integer): trigger
declare function LoadTriggerConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): triggercondition
declare function LoadTriggerActionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): triggeraction
declare function LoadTriggerEventHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): event
declare function LoadForceHandle(table: hashtable, parentKey: integer, childKey: integer): force
declare function LoadGroupHandle(table: hashtable, parentKey: integer, childKey: integer): group
declare function LoadLocationHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): location
declare function LoadRectHandle(table: hashtable, parentKey: integer, childKey: integer): rect
declare function LoadBooleanExprHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolexpr
declare function LoadSoundHandle(table: hashtable, parentKey: integer, childKey: integer): sound
declare function LoadEffectHandle(table: hashtable, parentKey: integer, childKey: integer): effect
declare function LoadUnitPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): unitpool
declare function LoadItemPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): itempool
declare function LoadQuestHandle(table: hashtable, parentKey: integer, childKey: integer): quest
declare function LoadQuestItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): questitem
declare function LoadDefeatConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): defeatcondition
declare function LoadTimerDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): timerdialog
declare function LoadLeaderboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): leaderboard
declare function LoadMultiboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): multiboard
declare function LoadMultiboardItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): multiboarditem
declare function LoadTrackableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): trackable
declare function LoadDialogHandle(table: hashtable, parentKey: integer, childKey: integer): dialog
declare function LoadButtonHandle(table: hashtable, parentKey: integer, childKey: integer): button
declare function LoadTextTagHandle(table: hashtable, parentKey: integer, childKey: integer): texttag
declare function LoadLightningHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): lightning
declare function LoadImageHandle(table: hashtable, parentKey: integer, childKey: integer): image
declare function LoadUbersplatHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): ubersplat
declare function LoadRegionHandle(table: hashtable, parentKey: integer, childKey: integer): region
declare function LoadFogStateHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): fogstate
declare function LoadFogModifierHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): fogmodifier
declare function LoadHashtableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): hashtable
declare function LoadFrameHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): framehandle

declare function HaveSavedInteger(table: hashtable, parentKey: integer, childkey: integer): boolean
declare function HaveSavedReal(table: hashtable, parentKey: integer, childKey: integer): boolean
declare function HaveSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean
declare function HaveSavedString(table: hashtable, parentKey: integer, childKey: integer): boolean
declare function HaveSavedHandle(table: hashtable, parentKey: integer, childKey: integer): boolean

declare function RemoveSavedInteger(table: hashtable, parentKey: integer, childKey: integer): void
declare function RemoveSavedReal(table: hashtable, parentKey: integer, childKey: integer): void
declare function RemoveSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): void
declare function RemoveSavedString(table: hashtable, parentKey: integer, childKey: integer): void
declare function RemoveSavedHandle(table: hashtable, parentKey: integer, childKey: integer): void

declare function FlushParentHashtable(table: hashtable): void
declare function FlushChildHashtable(table: hashtable, parentKey: integer): void

export type EventType =
    | DialogEvent
    | GameEvent
    | LimitOperation
    | PlayerEvent
    | PlayerUnitEvent
    | UnitEvent
    | WidgetEvent

export class HashTable extends Handle<hashtable> {
    public constructor() {
        super(InitHashtable())
    }

    public saveInt(parentKey: integer, childKey: integer, value: integer) {
        SaveInteger(this.getHandle, Math.floor(parentKey), Math.floor(childKey), Math.floor(value))
        return this
    }

    public saveReal(parentKey: integer, childKey: integer, value: real) {
        SaveReal(this.getHandle, Math.floor(parentKey), Math.floor(childKey), value)
        return this
    }

    public saveBool(parentKey: integer, childKey: integer, value: boolean) {
        SaveBoolean(this.getHandle, Math.floor(parentKey), Math.floor(childKey), value)
        return this
    }

    public saveStr(parentKey: integer, childKey: integer, value: string) {
        return SaveStr(this.getHandle, Math.floor(parentKey), Math.floor(childKey), value)
    }

    public savePlayer(parentKey: integer, childKey: integer, whichPlayer: MapPlayer) {
        return SavePlayerHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichPlayer.getHandle
        )
    }

    public saveWidget(parentKey: integer, childKey: integer, whichWidget: Widget) {
        return SaveWidgetHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichWidget.getHandle
        )
    }

    public saveDestructable(
        parentKey: integer,
        childKey: integer,
        whichDestructable: Destructable
    ) {
        return SaveDestructableHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichDestructable.getHandle
        )
    }

    public saveItem(parentKey: integer, childKey: integer, whichItem: Item) {
        return SaveItemHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichItem.getHandle
        )
    }

    public saveUnit(parentKey: integer, childKey: integer, whichUnit: Unit) {
        return SaveUnitHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichUnit.getHandle
        )
    }

    public saveAbility(parentKey: integer, childKey: integer, whichAbility: Ability) {
        return SaveAbilityHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichAbility.getHandle
        )
    }

    public saveTimer(parentKey: integer, childKey: integer, whichTimer: Timer) {
        return SaveTimerHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichTimer.getHandle
        )
    }

    public saveTrigger(parentKey: integer, childKey: integer, whichTrigger: Trigger) {
        return SaveTriggerHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichTrigger.getHandle
        )
    }

    public saveTriggerCondition(
        parentKey: integer,
        childKey: integer,
        whichTriggercondition: triggercondition
    ) {
        return SaveTriggerConditionHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichTriggercondition
        )
    }

    public saveTriggerAction(
        parentKey: integer,
        childKey: integer,
        whichTriggeraction: triggeraction
    ) {
        return SaveTriggerActionHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichTriggeraction
        )
    }

    public saveTriggerEvent(parentKey: integer, childKey: integer, whichEvent: EventType) {
        return SaveTriggerEventHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichEvent.getHandle
        )
    }

    public saveForce(parentKey: integer, childKey: integer, whichForce: Force) {
        return SaveForceHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichForce.getHandle
        )
    }

    public saveGroup(parentKey: integer, childKey: integer, whichGroup: Group) {
        return SaveGroupHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichGroup.getHandle
        )
    }

    public saveLocation(parentKey: integer, childKey: integer, whichLocation: MapLocation) {
        return SaveLocationHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichLocation.getHandle
        )
    }

    public saveRect(parentKey: integer, childKey: integer, whichRect: Rectangle) {
        return SaveRectHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichRect.getHandle
        )
    }

    public saveBooleanExpr(parentKey: integer, childKey: integer, whichBoolexpr: boolexpr) {
        return SaveBooleanExprHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichBoolexpr
        )
    }

    public saveSound(parentKey: integer, childKey: integer, whichSound: Sound) {
        return SaveSoundHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichSound.getHandle
        )
    }

    public saveEffect(parentKey: integer, childKey: integer, whichEffect: SpecialEffect) {
        return SaveEffectHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichEffect.getHandle
        )
    }

    public saveUnitPool(parentKey: integer, childKey: integer, whichUnitpool: unitpool) {
        return SaveUnitPoolHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichUnitpool
        )
    }

    public saveItemPool(parentKey: integer, childKey: integer, whichItempool: itempool) {
        return SaveItemPoolHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichItempool
        )
    }

    public saveQuest(parentKey: integer, childKey: integer, whichQuest: Quest) {
        return SaveQuestHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichQuest.getHandle
        )
    }

    public saveQuestItem(parentKey: integer, childKey: integer, whichQuestitem: QuestItem) {
        return SaveQuestItemHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichQuestitem.getHandle
        )
    }

    public saveDefeatCondition(
        parentKey: integer,
        childKey: integer,
        whichDefeatcondition: defeatcondition
    ) {
        return SaveDefeatConditionHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichDefeatcondition
        )
    }

    public saveTimerDialog(parentKey: integer, childKey: integer, whichTimerdialog: TimerDialog) {
        return SaveTimerDialogHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichTimerdialog.getHandle
        )
    }

    public saveLeaderboard(parentKey: integer, childKey: integer, whichLeaderboard: LeaderBoard) {
        return SaveLeaderboardHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichLeaderboard.getHandle
        )
    }

    public saveMultiboard(parentKey: integer, childKey: integer, whichMultiboard: MultiBoard) {
        return SaveMultiboardHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichMultiboard.getHandle
        )
    }

    public saveMultiboardItem(
        parentKey: integer,
        childKey: integer,
        whichMultiboardItem: MultiboardItem
    ) {
        return SaveMultiboardItemHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichMultiboardItem.getHandle
        )
    }

    public saveTrackable(parentKey: integer, childKey: integer, whichTrackable: Trackable) {
        return SaveTrackableHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichTrackable.getHandle
        )
    }

    public saveDialog(parentKey: integer, childKey: integer, whichDialog: Dialog) {
        return SaveDialogHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichDialog.getHandle
        )
    }

    public saveButton(parentKey: integer, childKey: integer, whichButton: DialogButton) {
        return SaveButtonHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichButton.getHandle
        )
    }

    public saveTextTag(parentKey: integer, childKey: integer, whichTexttag: TextTag) {
        return SaveTextTagHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichTexttag.getHandle
        )
    }

    public saveLightning(parentKey: integer, childKey: integer, whichLightning: Lightning) {
        return SaveLightningHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichLightning.getHandle
        )
    }

    public saveImage(parentKey: integer, childKey: integer, whichImage: Image) {
        return SaveImageHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichImage.getHandle
        )
    }

    public saveUbersplat(parentKey: integer, childKey: integer, whichUbersplat: Ubersplat) {
        return SaveUbersplatHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichUbersplat.getHandle
        )
    }

    public saveRegion(parentKey: integer, childKey: integer, whichRegion: Region) {
        return SaveRegionHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichRegion.getHandle
        )
    }

    public saveFogState(parentKey: integer, childKey: integer, whichFogState: FogState) {
        return SaveFogStateHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichFogState.getHandle
        )
    }

    public saveFogModifier(parentKey: integer, childKey: integer, whichFogModifier: FogModifier) {
        return SaveFogModifierHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichFogModifier.getHandle
        )
    }

    public saveAgent(parentKey: integer, childKey: integer, whichAgent: agent) {
        return SaveAgentHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichAgent
        )
    }

    public saveHashtable(parentKey: integer, childKey: integer, whichHashtable: HashTable) {
        return SaveHashtableHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichHashtable.getHandle
        )
    }

    public saveFrame(parentKey: integer, childKey: integer, whichFrameHandle: Frame) {
        return SaveFrameHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey),
            whichFrameHandle.getHandle
        )
    }

    public loadInt(parentKey: integer, childKey: integer): integer {
        return LoadInteger(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public loadReal(parentKey: integer, childKey: integer): real {
        return LoadReal(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public loadBool(parentKey: integer, childKey: integer): boolean {
        return LoadBoolean(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public loadStr(parentKey: integer, childKey: integer): string {
        return LoadStr(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public loadPlayer(parentKey: integer, childKey: integer): MapPlayer {
        return MapPlayer.fromHandle(
            LoadPlayerHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadWidget(parentKey: integer, childKey: integer): Widget {
        return Widget.fromHandle(
            LoadWidgetHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadDestructable(parentKey: integer, childKey: integer): Destructable {
        return Destructable.fromHandle(
            LoadDestructableHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadItem(parentKey: integer, childKey: integer): Item {
        return Item.fromHandle(
            LoadItemHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadUnit(parentKey: integer, childKey: integer): Unit {
        return Unit.fromHandle(
            LoadUnitHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadAbility(parentKey: integer, childKey: integer): Ability {
        return Ability.fromHandle(
            LoadAbilityHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadTimer(parentKey: integer, childKey: integer): Timer {
        return Timer.fromHandle(
            LoadTimerHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadTrigger(parentKey: integer, childKey: integer): Trigger {
        return Trigger.fromHandle(
            LoadTriggerHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadTriggerCondition(parentKey: integer, childKey: integer): triggercondition {
        return LoadTriggerConditionHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey)
        )
    }

    public loadTriggerAction(parentKey: integer, childKey: integer): triggeraction {
        return LoadTriggerActionHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public loadTriggerEvent(parentKey: integer, childKey: integer): EventType | undefined {
        const handle = LoadTriggerEventHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey)
        )
        for (const events of ObjectOptions.values(Events)) {
            for (const event of ObjectOptions.values(events)) {
                if (event instanceof Event && Event.getHandle(event) === handle) {
                    return event
                }
            }
        }
        error("Не удалось найти подходящий объект Event", 2)
    }

    public loadForce(parentKey: integer, childKey: integer): Force {
        return Force.fromHandle(
            LoadForceHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadGroup(parentKey: integer, childKey: integer): Group {
        return Group.fromHandle(
            LoadGroupHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadLocation(parentKey: integer, childKey: integer): MapLocation {
        return MapLocation.fromHandle(
            LoadLocationHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadRect(parentKey: integer, childKey: integer): Rectangle {
        return Rectangle.fromHandle(
            LoadRectHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadBoolExpr(parentKey: integer, childKey: integer): boolexpr {
        return LoadBooleanExprHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public loadSound(parentKey: integer, childKey: integer): Sound {
        return Sound.fromHandle(
            LoadSoundHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadSpecialEffect(parentKey: integer, childKey: integer): SpecialEffect {
        return SpecialEffect.fromHandle(
            LoadEffectHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadSpellEffect(parentKey: integer, childKey: integer): SpellEffect {
        return SpellEffect.fromHandle(
            LoadEffectHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadUnitPool(parentKey: integer, childKey: integer): UnitPool {
        return UnitPool.fromHandle(
            LoadUnitPoolHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadItemPool(parentKey: integer, childKey: integer): ItemPool {
        return ItemPool.fromHandle(
            LoadItemPoolHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadQuest(parentKey: integer, childKey: integer): Quest {
        return Quest.fromHandle(LoadQuestHandle(this.getHandle, parentKey, childKey))
    }

    public loadDefeatCondition(parentKey: integer, childKey: integer): defeatcondition {
        return LoadDefeatConditionHandle(
            this.getHandle,
            Math.floor(parentKey),
            Math.floor(childKey)
        )
    }

    public loadTimerDialog(parentKey: integer, childKey: integer): TimerDialog {
        return TimerDialog.fromHandle(
            LoadTimerDialogHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadLeaderboard(parentKey: integer, childKey: integer): LeaderBoard {
        return LeaderBoard.fromHandle(
            LoadLeaderboardHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadMultiboard(parentKey: integer, childKey: integer): MultiBoard {
        return MultiBoard.fromHandle(
            LoadMultiboardHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadMultiboardItem(parentKey: integer, childKey: integer): MultiboardItem {
        return MultiboardItem.getObject(
            LoadMultiboardItemHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadTrackable(parentKey: integer, childKey: integer): Trackable {
        return Trackable.getObject(
            LoadTrackableHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadDialog(parentKey: integer, childKey: integer): Dialog {
        return Dialog.fromHandle(
            LoadDialogHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadButton(parentKey: integer, childKey: integer): DialogButton {
        return DialogButton.fromHandle(
            LoadButtonHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadTextTag(parentKey: integer, childKey: integer): TextTag {
        return TextTag.getObject(
            LoadTextTagHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadLightning(parentKey: integer, childKey: integer): Lightning {
        return Lightning.getObject(
            LoadLightningHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadImage(parentKey: integer, childKey: integer): Image {
        return Image.fromHandle(
            LoadImageHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadUbersplat(parentKey: integer, childKey: integer): Ubersplat {
        return Ubersplat.fromHandle(
            LoadUbersplatHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadRegion(parentKey: integer, childKey: integer): Region {
        return Region.fromHandle(
            LoadRegionHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadFogState(parentKey: integer, childKey: integer): FogState {
        return FogState.fromHandle(
            LoadFogStateHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadFogModifier(parentKey: integer, childKey: integer): FogModifier {
        return FogModifier.fromHandle(
            LoadFogModifierHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadHashtable(parentKey: integer, childKey: integer): HashTable {
        return HashTable.getObject(
            LoadHashtableHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public loadFrameHandle(parentKey: integer, childKey: integer): Frame {
        return Frame.fromHandle(
            LoadFrameHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        )
    }

    public haveInt(parentKey: integer, childKey: integer): boolean {
        return HaveSavedInteger(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public haveReal(parentKey: integer, childKey: integer): boolean {
        return HaveSavedReal(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public haveBool(parentKey: integer, childKey: integer): boolean {
        return HaveSavedBoolean(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public haveStr(parentKey: integer, childKey: integer): boolean {
        return HaveSavedString(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public haveHandle(parentKey: integer, childKey: integer): boolean {
        return HaveSavedHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
    }

    public removeInt(parentKey: integer, childKey: integer) {
        RemoveSavedInteger(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        return this
    }

    public removeReal(parentKey: integer, childKey: integer) {
        RemoveSavedReal(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        return this
    }

    public removeBool(parentKey: integer, childKey: integer) {
        RemoveSavedBoolean(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        return this
    }

    public removeStr(parentKey: integer, childKey: integer) {
        RemoveSavedString(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        return this
    }

    public removeHandle(parentKey: integer, childKey: integer) {
        RemoveSavedHandle(this.getHandle, Math.floor(parentKey), Math.floor(childKey))
        return this
    }

    public flush() {
        FlushParentHashtable(this.getHandle)
        return this
    }

    public flushChild(parentKey: integer) {
        FlushChildHashtable(this.getHandle, Math.floor(parentKey))
        return this
    }

    public static fromHandle(handle: hashtable): HashTable {
        return this.getObject(handle)
    }

    public static fromObject(object: HashTable): hashtable {
        return this.getHandle(object)
    }
}
