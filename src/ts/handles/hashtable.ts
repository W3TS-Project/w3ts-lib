//@ts-nocheck

import { integer, real } from "../main"
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
import { Location } from "./location"
import { Multiboard, MultiboardItem } from "./multiboard"
import { MapPlayer } from "./player"
import { Quest, QuestItem } from "./quest"
import { Rectangle } from "./rect"
import { Region } from "./region"
import { Sound } from "./sound"
import { TextTag } from "./textTag"
import { Timer } from "./timer"
import { TimerDialog } from "./timerdialog"
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
    // constructor() {
    //     super(Handle.initFromHandle() ? undefined : InitHashtable())
    // }

    saveInt(parentKey: integer, childKey: integer, value: integer) {
        SaveInteger(this.handle, parentKey, childKey, value)
        return this
    }

    saveReal(parentKey: integer, childKey: integer, value: real) {
        SaveReal(this.handle, parentKey, childKey, value)
        return this
    }

    saveBool(parentKey: integer, childKey: integer, value: boolean) {
        SaveBoolean(this.handle, parentKey, childKey, value)
        return this
    }

    saveStr(parentKey: integer, childKey: integer, value: string) {
        return SaveStr(this.handle, parentKey, childKey, value)
    }

    savePlayer(parentKey: integer, childKey: integer, whichPlayer: MapPlayer) {
        return SavePlayerHandle(this.handle, parentKey, childKey, whichPlayer.handle)
    }

    saveWidget(parentKey: integer, childKey: integer, whichWidget: Widget) {
        return SaveWidgetHandle(this.handle, parentKey, childKey, whichWidget.handle)
    }

    saveDestructable(parentKey: integer, childKey: integer, whichDestructable: Destructable) {
        return SaveDestructableHandle(this.handle, parentKey, childKey, whichDestructable.handle)
    }

    saveItem(parentKey: integer, childKey: integer, whichItem: Item) {
        return SaveItemHandle(this.handle, parentKey, childKey, whichItem.handle)
    }

    saveUnit(parentKey: integer, childKey: integer, whichUnit: Unit) {
        return SaveUnitHandle(this.handle, parentKey, childKey, whichUnit.handle)
    }

    saveAbility(parentKey: integer, childKey: integer, whichAbility: Ability) {
        return SaveAbilityHandle(this.handle, parentKey, childKey, whichAbility.handle)
    }

    saveTimer(parentKey: integer, childKey: integer, whichTimer: Timer) {
        return SaveTimerHandle(this.handle, parentKey, childKey, whichTimer.handle)
    }

    saveTrigger(parentKey: integer, childKey: integer, whichTrigger: Trigger) {
        return SaveTriggerHandle(this.handle, parentKey, childKey, whichTrigger.handle)
    }

    saveConditionTrigger(
        parentKey: integer,
        childKey: integer,
        whichTriggercondition: triggercondition
    ) {
        return SaveTriggerConditionHandle(this.handle, parentKey, childKey, whichTriggercondition)
    }

    saveActionTrigger(parentKey: integer, childKey: integer, whichTriggeraction: triggeraction) {
        return SaveTriggerActionHandle(this.handle, parentKey, childKey, whichTriggeraction)
    }

    saveEventTrigger(parentKey: integer, childKey: integer, whichEvent: event) {
        return SaveTriggerEventHandle(this.handle, parentKey, childKey, whichEvent)
    }

    saveForce(parentKey: integer, childKey: integer, whichForce: Force) {
        return SaveForceHandle(this.handle, parentKey, childKey, whichForce.handle)
    }

    saveGroup(parentKey: integer, childKey: integer, whichGroup: Group) {
        return SaveGroupHandle(this.handle, parentKey, childKey, whichGroup.handle)
    }

    saveLocation(parentKey: integer, childKey: integer, whichLocation: Location) {
        return SaveLocationHandle(this.handle, parentKey, childKey, whichLocation.handle)
    }

    saveRect(parentKey: integer, childKey: integer, whichRect: Rectangle) {
        return SaveRectHandle(this.handle, parentKey, childKey, whichRect.handle)
    }

    saveBooleanExpr(parentKey: integer, childKey: integer, whichBoolexpr: boolexpr) {
        return SaveBooleanExprHandle(this.handle, parentKey, childKey, whichBoolexpr)
    }

    saveSound(parentKey: integer, childKey: integer, whichSound: Sound) {
        return SaveSoundHandle(this.handle, parentKey, childKey, whichSound.handle)
    }

    saveEffect(parentKey: integer, childKey: integer, whichEffect: Effect) {
        return SaveEffectHandle(this.handle, parentKey, childKey, whichEffect.handle)
    }

    saveUnitPool(parentKey: integer, childKey: integer, whichUnitpool: unitpool) {
        return SaveUnitPoolHandle(this.handle, parentKey, childKey, whichUnitpool)
    }

    saveItemPool(parentKey: integer, childKey: integer, whichItempool: itempool) {
        return SaveItemPoolHandle(this.handle, parentKey, childKey, whichItempool)
    }

    saveQuest(parentKey: integer, childKey: integer, whichQuest: Quest) {
        return SaveQuestHandle(this.handle, parentKey, childKey, whichQuest.handle)
    }

    saveQuestItem(parentKey: integer, childKey: integer, whichQuestitem: QuestItem) {
        return SaveQuestItemHandle(this.handle, parentKey, childKey, whichQuestitem.handle)
    }

    saveDefeatCondition(
        parentKey: integer,
        childKey: integer,
        whichDefeatcondition: defeatcondition
    ) {
        return SaveDefeatConditionHandle(this.handle, parentKey, childKey, whichDefeatcondition)
    }

    saveTimerDialog(parentKey: integer, childKey: integer, whichTimerdialog: TimerDialog) {
        return SaveTimerDialogHandle(this.handle, parentKey, childKey, whichTimerdialog.handle)
    }

    saveLeaderboard(parentKey: integer, childKey: integer, whichLeaderboard: Leaderboard) {
        return SaveLeaderboardHandle(this.handle, parentKey, childKey, whichLeaderboard.handle)
    }

    saveMultiboard(parentKey: integer, childKey: integer, whichMultiboard: Multiboard) {
        return SaveMultiboardHandle(this.handle, parentKey, childKey, whichMultiboard.handle)
    }

    saveMultiboardItem(parentKey: integer, childKey: integer, whichMultiboardItem: MultiboardItem) {
        return SaveMultiboardItemHandle(
            this.handle,
            parentKey,
            childKey,
            whichMultiboardItem.handle
        )
    }

    saveTrackable(parentKey: integer, childKey: integer, whichTrackable: Trackable) {
        return SaveTrackableHandle(this.handle, parentKey, childKey, whichTrackable.handle)
    }

    saveDialog(parentKey: integer, childKey: integer, whichDialog: Dialog) {
        return SaveDialogHandle(this.handle, parentKey, childKey, whichDialog.handle)
    }

    saveButton(parentKey: integer, childKey: integer, whichButton: DialogButton) {
        return SaveButtonHandle(this.handle, parentKey, childKey, whichButton.handle)
    }

    saveTextTag(parentKey: integer, childKey: integer, whichTexttag: TextTag) {
        return SaveTextTagHandle(this.handle, parentKey, childKey, whichTexttag.handle)
    }

    saveLightning(parentKey: integer, childKey: integer, whichLightning: Lightning) {
        return SaveLightningHandle(this.handle, parentKey, childKey, whichLightning.handle)
    }

    saveImage(parentKey: integer, childKey: integer, whichImage: Image) {
        return SaveImageHandle(this.handle, parentKey, childKey, whichImage.handle)
    }

    saveUbersplat(parentKey: integer, childKey: integer, whichUbersplat: Ubersplat) {
        return SaveUbersplatHandle(this.handle, parentKey, childKey, whichUbersplat.handle)
    }

    saveRegion(parentKey: integer, childKey: integer, whichRegion: Region) {
        return SaveRegionHandle(this.handle, parentKey, childKey, whichRegion.handle)
    }

    saveFogState(parentKey: integer, childKey: integer, whichFogState: fogstate) {
        return SaveFogStateHandle(this.handle, parentKey, childKey, whichFogState)
    }

    saveFogModifier(parentKey: integer, childKey: integer, whichFogModifier: FogModifier) {
        return SaveFogModifierHandle(this.handle, parentKey, childKey, whichFogModifier.handle)
    }

    saveAgent(parentKey: integer, childKey: integer, whichAgent: agent) {
        return SaveAgentHandle(this.handle, parentKey, childKey, whichAgent)
    }

    saveHashtable(parentKey: integer, childKey: integer, whichHashtable: Hashtable) {
        return SaveHashtableHandle(this.handle, parentKey, childKey, whichHashtable.handle)
    }

    saveFrame(parentKey: integer, childKey: integer, whichFrameHandle: Frame) {
        return SaveFrameHandle(this.handle, parentKey, childKey, whichFrameHandle.handle)
    }

    loadInt(parentKey: integer, childKey: integer): integer {
        return LoadInteger(this.handle, parentKey, childKey)
    }

    loadReal(parentKey: integer, childKey: integer): real {
        return LoadReal(this.handle, parentKey, childKey)
    }

    loadBool(parentKey: integer, childKey: integer): boolean {
        return LoadBoolean(this.handle, parentKey, childKey)
    }

    loadStr(parentKey: integer, childKey: integer): string {
        return LoadStr(this.handle, parentKey, childKey)
    }

    loadPlayer(parentKey: integer, childKey: integer): MapPlayer {
        return MapPlayer.fromHandle(LoadPlayerHandle(this.handle, parentKey, childKey))
    }

    loadWidget(parentKey: integer, childKey: integer): Widget {
        return Widget.fromHandle(LoadWidgetHandle(this.handle, parentKey, childKey))
    }

    loadDestructable(parentKey: integer, childKey: integer): Destructable {
        return Destructable.fromHandle(LoadDestructableHandle(this.handle, parentKey, childKey))
    }

    loadItem(parentKey: integer, childKey: integer): Item {
        return Item.fromHandle(LoadItemHandle(this.handle, parentKey, childKey))
    }

    loadUnit(parentKey: integer, childKey: integer): Unit {
        return Unit.fromHandle(LoadUnitHandle(this.handle, parentKey, childKey))
    }

    loadAbility(parentKey: integer, childKey: integer): Ability {
        return Ability.fromHandle(LoadAbilityHandle(this.handle, parentKey, childKey))
    }

    loadTimer(parentKey: integer, childKey: integer): Timer {
        return Timer.fromHandle(LoadTimerHandle(this.handle, parentKey, childKey))
    }

    loadTrigger(parentKey: integer, childKey: integer): Trigger {
        return Trigger.fromHandle(LoadTriggerHandle(this.handle, parentKey, childKey))
    }

    loadTriggerCondition(parentKey: integer, childKey: integer): triggercondition {
        return LoadTriggerConditionHandle(this.handle, parentKey, childKey)
    }

    loadTriggerAction(parentKey: integer, childKey: integer): triggeraction {
        return LoadTriggerActionHandle(this.handle, parentKey, childKey)
    }

    loadTriggerEvent(parentKey: integer, childKey: integer): event {
        return LoadTriggerEventHandle(this.handle, parentKey, childKey)
    }

    loadForce(parentKey: integer, childKey: integer): Force {
        return Force.fromHandle(LoadForceHandle(this.handle, parentKey, childKey))
    }

    loadGroup(parentKey: integer, childKey: integer): Group {
        return Group.fromHandle(LoadGroupHandle(this.handle, parentKey, childKey))
    }

    loadLocation(parentKey: integer, childKey: integer): Location {
        return Location.fromHandle(LoadLocationHandle(this.handle, parentKey, childKey))
    }

    loadRect(parentKey: integer, childKey: integer): Rectangle {
        return Rectangle.fromHandle(LoadRectHandle(this.handle, parentKey, childKey))
    }

    loadBoolExpr(parentKey: integer, childKey: integer): boolexpr {
        return LoadBooleanExprHandle(this.handle, parentKey, childKey)
    }

    loadSound(parentKey: integer, childKey: integer): Sound {
        return Sound.fromHandle(LoadSoundHandle(this.handle, parentKey, childKey))
    }

    loadEffect(parentKey: integer, childKey: integer): Effect {
        return Effect.fromHandle(LoadEffectHandle(this.handle, parentKey, childKey))
    }

    loadUnitPool(parentKey: integer, childKey: integer): unitpool {
        return LoadUnitPoolHandle(this.handle, parentKey, childKey)
    }

    loadItemPool(parentKey: integer, childKey: integer): itempool {
        return LoadItemPoolHandle(this.handle, parentKey, childKey)
    }

    loadQuest(parentKey: integer, childKey: integer): Quest {
        return Quest.fromHandle(LoadQuestHandle(this.handle, parentKey, childKey))
    }

    loadDefeatCondition(parentKey: integer, childKey: integer): defeatcondition {
        return LoadDefeatConditionHandle(this.handle, parentKey, childKey)
    }

    loadTimerDialog(parentKey: integer, childKey: integer): TimerDialog {
        return TimerDialog.fromHandle(LoadTimerDialogHandle(this.handle, parentKey, childKey))
    }

    loadLeaderboard(parentKey: integer, childKey: integer): Leaderboard {
        return Leaderboard.fromHandle(LoadLeaderboardHandle(this.handle, parentKey, childKey))
    }

    loadMultiboard(parentKey: integer, childKey: integer): Multiboard {
        return Multiboard.fromHandle(LoadMultiboardHandle(this.handle, parentKey, childKey))
    }

    loadMultiboardItem(parentKey: integer, childKey: integer): MultiboardItem {
        return MultiboardItem.getObject(LoadMultiboardItemHandle(this.handle, parentKey, childKey))
    }

    loadTrackable(parentKey: integer, childKey: integer): Trackable {
        return Trackable.getObject(LoadTrackableHandle(this.handle, parentKey, childKey))
    }

    loadDialog(parentKey: integer, childKey: integer): Dialog {
        return Dialog.fromHandle(LoadDialogHandle(this.handle, parentKey, childKey))
    }

    loadButton(parentKey: integer, childKey: integer): DialogButton {
        return DialogButton.fromHandle(LoadButtonHandle(this.handle, parentKey, childKey))
    }

    loadTextTag(parentKey: integer, childKey: integer): TextTag {
        return TextTag.getObject(LoadTextTagHandle(this.handle, parentKey, childKey))
    }

    loadLightning(parentKey: integer, childKey: integer): Lightning {
        return Lightning.getObject(LoadLightningHandle(this.handle, parentKey, childKey))
    }

    loadImage(parentKey: integer, childKey: integer): Image {
        return Image.fromHandle(LoadImageHandle(this.handle, parentKey, childKey))
    }

    loadUbersplat(parentKey: integer, childKey: integer): ubersplat {
        return LoadUbersplatHandle(this.handle, parentKey, childKey)
    }

    loadRegion(parentKey: integer, childKey: integer): Region {
        return Region.fromHandle(LoadRegionHandle(this.handle, parentKey, childKey))
    }

    loadFogState(parentKey: integer, childKey: integer): fogstate {
        return LoadFogStateHandle(this.handle, parentKey, childKey)
    }

    loadFogModifier(parentKey: integer, childKey: integer): FogModifier {
        return FogModifier.fromHandle(LoadFogModifierHandle(this.handle, parentKey, childKey))
    }

    loadHashtable(parentKey: integer, childKey: integer): Hashtable {
        return Hashtable.getObject(LoadHashtableHandle(this.handle, parentKey, childKey))
    }

    loadFrameHandle(parentKey: integer, childKey: integer): Frame {
        return Frame.fromHandle(LoadFrameHandle(this.handle, parentKey, childKey))
    }

    haveInt(parentKey: integer, childKey: integer): boolean {
        return HaveSavedInteger(this.handle, parentKey, childKey)
    }

    haveReal(parentKey: integer, childKey: integer): boolean {
        return HaveSavedReal(this.handle, parentKey, childKey)
    }

    haveBool(parentKey: integer, childKey: integer): boolean {
        return HaveSavedBoolean(this.handle, parentKey, childKey)
    }

    haveStr(parentKey: integer, childKey: integer): boolean {
        return HaveSavedString(this.handle, parentKey, childKey)
    }

    haveHandle(parentKey: integer, childKey: integer): boolean {
        return HaveSavedHandle(this.handle, parentKey, childKey)
    }

    removeInt(parentKey: integer, childKey: integer) {
        RemoveSavedInteger(this.handle, parentKey, childKey)
        return this
    }

    removeReal(parentKey: integer, childKey: integer) {
        RemoveSavedReal(this.handle, parentKey, childKey)
        return this
    }

    removeBool(parentKey: integer, childKey: integer) {
        RemoveSavedBoolean(this.handle, parentKey, childKey)
        return this
    }

    removeStr(parentKey: integer, childKey: integer) {
        RemoveSavedString(this.handle, parentKey, childKey)
        return this
    }

    removeHandle(parentKey: integer, childKey: integer) {
        RemoveSavedHandle(this.handle, parentKey, childKey)
        return this
    }

    flush() {
        FlushParentHashtable(this.handle)
        return this
    }

    flushChild(parentKey: integer) {
        FlushChildHashtable(this.handle, parentKey)
        return this
    }
}
