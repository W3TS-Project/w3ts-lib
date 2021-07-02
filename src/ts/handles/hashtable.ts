/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../Utils"
import { Ability } from "./ability"
import { Destructable } from "./destructable"
import { Dialog, DialogButton } from "./dialog"
import { Effect } from "./effect"
import { FogModifier } from "./fogmodifier"
import { Force } from "./force"
import { Frame } from "./frame"
import { Group } from "./group"
import { Handle } from "./handle"
import { Image } from "./image"
import { Item } from "./item"
import { Leaderboard } from "./leaderboard"
import { Lightning } from "./lightning"
import { MapLocation } from "./location"
import { Multiboard, MultiboardItem } from "./multiboard"
import { MapPlayer } from "./player"
import { Quest, QuestItem } from "./quest"
import { Rectangle } from "./rect"
import { Region } from "./region"
import { Sound } from "./sound"
import { TextTag } from "./textTag"
import { Timer } from "./timer"
import { TimerDialog } from "./timerDialog"
import { Trackable } from "./trackable"
import { Trigger } from "./trigger"
import { Ubersplat } from "./ubersplat"
import { Unit } from "./unit"
import { Widget } from "./widget"

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

export class Hashtable extends Handle<hashtable> {
    public constructor() {
        super(InitHashtable())
    }

    public saveInt(parentKey: integer, childKey: integer, value: integer) {
        SaveInteger(this.getHandle, parentKey, childKey, value)
        return this
    }

    public saveReal(parentKey: integer, childKey: integer, value: real) {
        SaveReal(this.getHandle, parentKey, childKey, value)
        return this
    }

    public saveBool(parentKey: integer, childKey: integer, value: boolean) {
        SaveBoolean(this.getHandle, parentKey, childKey, value)
        return this
    }

    public saveStr(parentKey: integer, childKey: integer, value: string) {
        return SaveStr(this.getHandle, parentKey, childKey, value)
    }

    public savePlayer(parentKey: integer, childKey: integer, whichPlayer: MapPlayer) {
        return SavePlayerHandle(this.getHandle, parentKey, childKey, whichPlayer.getHandle)
    }

    public saveWidget(parentKey: integer, childKey: integer, whichWidget: Widget) {
        return SaveWidgetHandle(this.getHandle, parentKey, childKey, whichWidget.getHandle)
    }

    public saveDestructable(
        parentKey: integer,
        childKey: integer,
        whichDestructable: Destructable
    ) {
        return SaveDestructableHandle(this.getHandle, parentKey, childKey, whichDestructable.getHandle)
    }

    public saveItem(parentKey: integer, childKey: integer, whichItem: Item) {
        return SaveItemHandle(this.getHandle, parentKey, childKey, whichItem.getHandle)
    }

    public saveUnit(parentKey: integer, childKey: integer, whichUnit: Unit) {
        return SaveUnitHandle(this.getHandle, parentKey, childKey, whichUnit.getHandle)
    }

    public saveAbility(parentKey: integer, childKey: integer, whichAbility: Ability) {
        return SaveAbilityHandle(this.getHandle, parentKey, childKey, whichAbility.getHandle)
    }

    public saveTimer(parentKey: integer, childKey: integer, whichTimer: Timer) {
        return SaveTimerHandle(this.getHandle, parentKey, childKey, whichTimer.getHandle)
    }

    public saveTrigger(parentKey: integer, childKey: integer, whichTrigger: Trigger) {
        return SaveTriggerHandle(this.getHandle, parentKey, childKey, whichTrigger.getHandle)
    }

    public saveConditionTrigger(
        parentKey: integer,
        childKey: integer,
        whichTriggercondition: triggercondition
    ) {
        return SaveTriggerConditionHandle(this.getHandle, parentKey, childKey, whichTriggercondition)
    }

    public saveActionTrigger(
        parentKey: integer,
        childKey: integer,
        whichTriggeraction: triggeraction
    ) {
        return SaveTriggerActionHandle(this.getHandle, parentKey, childKey, whichTriggeraction)
    }

    public saveEventTrigger(parentKey: integer, childKey: integer, whichEvent: event) {
        return SaveTriggerEventHandle(this.getHandle, parentKey, childKey, whichEvent)
    }

    public saveForce(parentKey: integer, childKey: integer, whichForce: Force) {
        return SaveForceHandle(this.getHandle, parentKey, childKey, whichForce.getHandle)
    }

    public saveGroup(parentKey: integer, childKey: integer, whichGroup: Group) {
        return SaveGroupHandle(this.getHandle, parentKey, childKey, whichGroup.getHandle)
    }

    public saveLocation(parentKey: integer, childKey: integer, whichLocation: MapLocation) {
        return SaveLocationHandle(this.getHandle, parentKey, childKey, whichLocation.getHandle)
    }

    public saveRect(parentKey: integer, childKey: integer, whichRect: Rectangle) {
        return SaveRectHandle(this.getHandle, parentKey, childKey, whichRect.getHandle)
    }

    public saveBooleanExpr(parentKey: integer, childKey: integer, whichBoolexpr: boolexpr) {
        return SaveBooleanExprHandle(this.getHandle, parentKey, childKey, whichBoolexpr)
    }

    public saveSound(parentKey: integer, childKey: integer, whichSound: Sound) {
        return SaveSoundHandle(this.getHandle, parentKey, childKey, whichSound.getHandle)
    }

    public saveEffect(parentKey: integer, childKey: integer, whichEffect: Effect) {
        return SaveEffectHandle(this.getHandle, parentKey, childKey, whichEffect.getHandle)
    }

    public saveUnitPool(parentKey: integer, childKey: integer, whichUnitpool: unitpool) {
        return SaveUnitPoolHandle(this.getHandle, parentKey, childKey, whichUnitpool)
    }

    public saveItemPool(parentKey: integer, childKey: integer, whichItempool: itempool) {
        return SaveItemPoolHandle(this.getHandle, parentKey, childKey, whichItempool)
    }

    public saveQuest(parentKey: integer, childKey: integer, whichQuest: Quest) {
        return SaveQuestHandle(this.getHandle, parentKey, childKey, whichQuest.getHandle)
    }

    public saveQuestItem(parentKey: integer, childKey: integer, whichQuestitem: QuestItem) {
        return SaveQuestItemHandle(this.getHandle, parentKey, childKey, whichQuestitem.getHandle)
    }

    public saveDefeatCondition(
        parentKey: integer,
        childKey: integer,
        whichDefeatcondition: defeatcondition
    ) {
        return SaveDefeatConditionHandle(this.getHandle, parentKey, childKey, whichDefeatcondition)
    }

    public saveTimerDialog(parentKey: integer, childKey: integer, whichTimerdialog: TimerDialog) {
        return SaveTimerDialogHandle(this.getHandle, parentKey, childKey, whichTimerdialog.getHandle)
    }

    public saveLeaderboard(parentKey: integer, childKey: integer, whichLeaderboard: Leaderboard) {
        return SaveLeaderboardHandle(this.getHandle, parentKey, childKey, whichLeaderboard.getHandle)
    }

    public saveMultiboard(parentKey: integer, childKey: integer, whichMultiboard: Multiboard) {
        return SaveMultiboardHandle(this.getHandle, parentKey, childKey, whichMultiboard.getHandle)
    }

    public saveMultiboardItem(
        parentKey: integer,
        childKey: integer,
        whichMultiboardItem: MultiboardItem
    ) {
        return SaveMultiboardItemHandle(
            this.getHandle,
            parentKey,
            childKey,
            whichMultiboardItem.getHandle
        )
    }

    public saveTrackable(parentKey: integer, childKey: integer, whichTrackable: Trackable) {
        return SaveTrackableHandle(this.getHandle, parentKey, childKey, whichTrackable.getHandle)
    }

    public saveDialog(parentKey: integer, childKey: integer, whichDialog: Dialog) {
        return SaveDialogHandle(this.getHandle, parentKey, childKey, whichDialog.getHandle)
    }

    public saveButton(parentKey: integer, childKey: integer, whichButton: DialogButton) {
        return SaveButtonHandle(this.getHandle, parentKey, childKey, whichButton.getHandle)
    }

    public saveTextTag(parentKey: integer, childKey: integer, whichTexttag: TextTag) {
        return SaveTextTagHandle(this.getHandle, parentKey, childKey, whichTexttag.getHandle)
    }

    public saveLightning(parentKey: integer, childKey: integer, whichLightning: Lightning) {
        return SaveLightningHandle(this.getHandle, parentKey, childKey, whichLightning.getHandle)
    }

    public saveImage(parentKey: integer, childKey: integer, whichImage: Image) {
        return SaveImageHandle(this.getHandle, parentKey, childKey, whichImage.getHandle)
    }

    public saveUbersplat(parentKey: integer, childKey: integer, whichUbersplat: Ubersplat) {
        return SaveUbersplatHandle(this.getHandle, parentKey, childKey, whichUbersplat.getHandle)
    }

    public saveRegion(parentKey: integer, childKey: integer, whichRegion: Region) {
        return SaveRegionHandle(this.getHandle, parentKey, childKey, whichRegion.getHandle)
    }

    public saveFogState(parentKey: integer, childKey: integer, whichFogState: fogstate) {
        return SaveFogStateHandle(this.getHandle, parentKey, childKey, whichFogState)
    }

    public saveFogModifier(parentKey: integer, childKey: integer, whichFogModifier: FogModifier) {
        return SaveFogModifierHandle(this.getHandle, parentKey, childKey, whichFogModifier.getHandle)
    }

    public saveAgent(parentKey: integer, childKey: integer, whichAgent: agent) {
        return SaveAgentHandle(this.getHandle, parentKey, childKey, whichAgent)
    }

    public saveHashtable(parentKey: integer, childKey: integer, whichHashtable: Hashtable) {
        return SaveHashtableHandle(this.getHandle, parentKey, childKey, whichHashtable.getHandle)
    }

    public saveFrame(parentKey: integer, childKey: integer, whichFrameHandle: Frame) {
        return SaveFrameHandle(this.getHandle, parentKey, childKey, whichFrameHandle.getHandle)
    }

    public loadInt(parentKey: integer, childKey: integer): integer {
        return LoadInteger(this.getHandle, parentKey, childKey)
    }

    public loadReal(parentKey: integer, childKey: integer): real {
        return LoadReal(this.getHandle, parentKey, childKey)
    }

    public loadBool(parentKey: integer, childKey: integer): boolean {
        return LoadBoolean(this.getHandle, parentKey, childKey)
    }

    public loadStr(parentKey: integer, childKey: integer): string {
        return LoadStr(this.getHandle, parentKey, childKey)
    }

    public loadPlayer(parentKey: integer, childKey: integer): MapPlayer {
        return MapPlayer.fromHandle(LoadPlayerHandle(this.getHandle, parentKey, childKey))
    }

    public loadWidget(parentKey: integer, childKey: integer): Widget {
        return Widget.fromHandle(LoadWidgetHandle(this.getHandle, parentKey, childKey))
    }

    public loadDestructable(parentKey: integer, childKey: integer): Destructable {
        return Destructable.fromHandle(LoadDestructableHandle(this.getHandle, parentKey, childKey))
    }

    public loadItem(parentKey: integer, childKey: integer): Item {
        return Item.fromHandle(LoadItemHandle(this.getHandle, parentKey, childKey))
    }

    public loadUnit(parentKey: integer, childKey: integer): Unit {
        return Unit.fromHandle(LoadUnitHandle(this.getHandle, parentKey, childKey))
    }

    public loadAbility(parentKey: integer, childKey: integer): Ability {
        return Ability.fromHandle(LoadAbilityHandle(this.getHandle, parentKey, childKey))
    }

    public loadTimer(parentKey: integer, childKey: integer): Timer {
        return Timer.fromHandle(LoadTimerHandle(this.getHandle, parentKey, childKey))
    }

    public loadTrigger(parentKey: integer, childKey: integer): Trigger {
        return Trigger.fromHandle(LoadTriggerHandle(this.getHandle, parentKey, childKey))
    }

    public loadTriggerCondition(parentKey: integer, childKey: integer): triggercondition {
        return LoadTriggerConditionHandle(this.getHandle, parentKey, childKey)
    }

    public loadTriggerAction(parentKey: integer, childKey: integer): triggeraction {
        return LoadTriggerActionHandle(this.getHandle, parentKey, childKey)
    }

    public loadTriggerEvent(parentKey: integer, childKey: integer): event {
        return LoadTriggerEventHandle(this.getHandle, parentKey, childKey)
    }

    public loadForce(parentKey: integer, childKey: integer): Force {
        return Force.fromHandle(LoadForceHandle(this.getHandle, parentKey, childKey))
    }

    public loadGroup(parentKey: integer, childKey: integer): Group {
        return Group.fromHandle(LoadGroupHandle(this.getHandle, parentKey, childKey))
    }

    public loadLocation(parentKey: integer, childKey: integer): MapLocation {
        return MapLocation.fromHandle(LoadLocationHandle(this.getHandle, parentKey, childKey))
    }

    public loadRect(parentKey: integer, childKey: integer): Rectangle {
        return Rectangle.fromHandle(LoadRectHandle(this.getHandle, parentKey, childKey))
    }

    public loadBoolExpr(parentKey: integer, childKey: integer): boolexpr {
        return LoadBooleanExprHandle(this.getHandle, parentKey, childKey)
    }

    public loadSound(parentKey: integer, childKey: integer): Sound {
        return Sound.fromHandle(LoadSoundHandle(this.getHandle, parentKey, childKey))
    }

    public loadEffect(parentKey: integer, childKey: integer): Effect {
        return Effect.fromHandle(LoadEffectHandle(this.getHandle, parentKey, childKey))
    }

    public loadUnitPool(parentKey: integer, childKey: integer): unitpool {
        return LoadUnitPoolHandle(this.getHandle, parentKey, childKey)
    }

    public loadItemPool(parentKey: integer, childKey: integer): itempool {
        return LoadItemPoolHandle(this.getHandle, parentKey, childKey)
    }

    public loadQuest(parentKey: integer, childKey: integer): Quest {
        return Quest.fromHandle(LoadQuestHandle(this.getHandle, parentKey, childKey))
    }

    public loadDefeatCondition(parentKey: integer, childKey: integer): defeatcondition {
        return LoadDefeatConditionHandle(this.getHandle, parentKey, childKey)
    }

    public loadTimerDialog(parentKey: integer, childKey: integer): TimerDialog {
        return TimerDialog.fromHandle(LoadTimerDialogHandle(this.getHandle, parentKey, childKey))
    }

    public loadLeaderboard(parentKey: integer, childKey: integer): Leaderboard {
        return Leaderboard.fromHandle(LoadLeaderboardHandle(this.getHandle, parentKey, childKey))
    }

    public loadMultiboard(parentKey: integer, childKey: integer): Multiboard {
        return Multiboard.fromHandle(LoadMultiboardHandle(this.getHandle, parentKey, childKey))
    }

    public loadMultiboardItem(parentKey: integer, childKey: integer): MultiboardItem {
        return MultiboardItem.getObject(LoadMultiboardItemHandle(this.getHandle, parentKey, childKey))
    }

    public loadTrackable(parentKey: integer, childKey: integer): Trackable {
        return Trackable.getObject(LoadTrackableHandle(this.getHandle, parentKey, childKey))
    }

    public loadDialog(parentKey: integer, childKey: integer): Dialog {
        return Dialog.fromHandle(LoadDialogHandle(this.getHandle, parentKey, childKey))
    }

    public loadButton(parentKey: integer, childKey: integer): DialogButton {
        return DialogButton.fromHandle(LoadButtonHandle(this.getHandle, parentKey, childKey))
    }

    public loadTextTag(parentKey: integer, childKey: integer): TextTag {
        return TextTag.getObject(LoadTextTagHandle(this.getHandle, parentKey, childKey))
    }

    public loadLightning(parentKey: integer, childKey: integer): Lightning {
        return Lightning.getObject(LoadLightningHandle(this.getHandle, parentKey, childKey))
    }

    public loadImage(parentKey: integer, childKey: integer): Image {
        return Image.fromHandle(LoadImageHandle(this.getHandle, parentKey, childKey))
    }

    public loadUbersplat(parentKey: integer, childKey: integer): ubersplat {
        return LoadUbersplatHandle(this.getHandle, parentKey, childKey)
    }

    public loadRegion(parentKey: integer, childKey: integer): Region {
        return Region.fromHandle(LoadRegionHandle(this.getHandle, parentKey, childKey))
    }

    public loadFogState(parentKey: integer, childKey: integer): fogstate {
        return LoadFogStateHandle(this.getHandle, parentKey, childKey)
    }

    public loadFogModifier(parentKey: integer, childKey: integer): FogModifier {
        return FogModifier.fromHandle(LoadFogModifierHandle(this.getHandle, parentKey, childKey))
    }

    public loadHashtable(parentKey: integer, childKey: integer): Hashtable {
        return Hashtable.getObject(LoadHashtableHandle(this.getHandle, parentKey, childKey))
    }

    public loadFrameHandle(parentKey: integer, childKey: integer): Frame {
        return Frame.fromHandle(LoadFrameHandle(this.getHandle, parentKey, childKey))
    }

    public haveInt(parentKey: integer, childKey: integer): boolean {
        return HaveSavedInteger(this.getHandle, parentKey, childKey)
    }

    public haveReal(parentKey: integer, childKey: integer): boolean {
        return HaveSavedReal(this.getHandle, parentKey, childKey)
    }

    public haveBool(parentKey: integer, childKey: integer): boolean {
        return HaveSavedBoolean(this.getHandle, parentKey, childKey)
    }

    public haveStr(parentKey: integer, childKey: integer): boolean {
        return HaveSavedString(this.getHandle, parentKey, childKey)
    }

    public haveHandle(parentKey: integer, childKey: integer): boolean {
        return HaveSavedHandle(this.getHandle, parentKey, childKey)
    }

    public removeInt(parentKey: integer, childKey: integer) {
        RemoveSavedInteger(this.getHandle, parentKey, childKey)
        return this
    }

    public removeReal(parentKey: integer, childKey: integer) {
        RemoveSavedReal(this.getHandle, parentKey, childKey)
        return this
    }

    public removeBool(parentKey: integer, childKey: integer) {
        RemoveSavedBoolean(this.getHandle, parentKey, childKey)
        return this
    }

    public removeStr(parentKey: integer, childKey: integer) {
        RemoveSavedString(this.getHandle, parentKey, childKey)
        return this
    }

    public removeHandle(parentKey: integer, childKey: integer) {
        RemoveSavedHandle(this.getHandle, parentKey, childKey)
        return this
    }

    public flush() {
        FlushParentHashtable(this.getHandle)
        return this
    }

    public flushChild(parentKey: integer) {
        FlushChildHashtable(this.getHandle, parentKey)
        return this
    }

    public static fromHandle(handle: hashtable): Hashtable {
        return this.getObject(handle)
    }

    public static fromObject(object: Hashtable): hashtable {
        return this.getHandle(object)
    }
}
