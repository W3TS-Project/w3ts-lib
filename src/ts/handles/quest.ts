/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./handle"

declare function CreateQuest(): quest
declare function DestroyQuest(whichQuest: quest): void
declare function QuestSetTitle(whichQuest: quest, title: string): void
declare function QuestSetDescription(whichQuest: quest, description: string): void
declare function QuestSetIconPath(whichQuest: quest, iconPath: string): void
declare function QuestSetRequired(whichQuest: quest, required: boolean): void
declare function QuestSetCompleted(whichQuest: quest, completed: boolean): void
declare function QuestSetDiscovered(whichQuest: quest, discovered: boolean): void
declare function QuestSetFailed(whichQuest: quest, failed: boolean): void
declare function QuestSetEnabled(whichQuest: quest, enabled: boolean): void
declare function IsQuestRequired(whichQuest: quest): boolean
declare function IsQuestCompleted(whichQuest: quest): boolean
declare function IsQuestDiscovered(whichQuest: quest): boolean
declare function IsQuestFailed(whichQuest: quest): boolean
declare function IsQuestEnabled(whichQuest: quest): boolean
declare function QuestCreateItem(whichQuest: quest): questitem
declare function QuestItemSetDescription(whichQuestItem: questitem, description: string): void
declare function QuestItemSetCompleted(whichQuestItem: questitem, completed: boolean): void
declare function IsQuestItemCompleted(whichQuestItem: questitem): boolean
declare function FlashQuestDialogButton(): void
declare function ForceQuestDialogUpdate(): void

export class QuestItem extends Handle<questitem> {
    constructor(whichQuest: Quest) {
        super(QuestCreateItem(whichQuest.getHandle))
    }

    public setDescription(description: string) {
        QuestItemSetDescription(this.getHandle, description)
        return this
    }

    public get completed(): boolean {
        return IsQuestItemCompleted(this.getHandle)
    }

    public set completed(completed: boolean) {
        QuestItemSetCompleted(this.getHandle, completed)
    }
}

export class Quest extends Handle<quest> {
    constructor() {
        super(CreateQuest())
    }

    public get completed(): boolean {
        return IsQuestCompleted(this.getHandle)
    }

    public set completed(completed: boolean) {
        QuestSetCompleted(this.getHandle, completed)
    }

    public get discovered(): boolean {
        return IsQuestDiscovered(this.getHandle)
    }

    public set discovered(discovered: boolean) {
        QuestSetDiscovered(this.getHandle, discovered)
    }

    public get enabled(): boolean {
        return IsQuestEnabled(this.getHandle)
    }

    public set enabled(enabled: boolean) {
        QuestSetEnabled(this.getHandle, enabled)
    }

    public get failed(): boolean {
        return IsQuestFailed(this.getHandle)
    }

    public set failed(failed: boolean) {
        QuestSetFailed(this.getHandle, failed)
    }

    public get required(): boolean {
        return IsQuestRequired(this.getHandle)
    }

    public set required(required: boolean) {
        QuestSetRequired(this.getHandle, required)
    }

    public addItem(description: string) {
        const questItem = new QuestItem(this)

        questItem.setDescription(description)

        return questItem
    }

    public destroy() {
        DestroyQuest(this.getHandle)
    }

    public setDescription(description: string) {
        QuestSetDescription(this.getHandle, description)
        return this
    }

    public setIcon(iconPath: string) {
        QuestSetIconPath(this.getHandle, iconPath)
        return this
    }

    public setTitle(title: string) {
        QuestSetTitle(this.getHandle, title)
        return this
    }

    public static flashQuestDialogButton() {
        FlashQuestDialogButton()
        return this
    }

    public static forceQuestDialogUpdate() {
        ForceQuestDialogUpdate()
        return this
    }

    public static fromHandle(handle: quest): Quest {
        return this.getObject(handle)
    }

    public static fromObject(object: Quest): quest {
        return this.getHandle(object)
    }
}
