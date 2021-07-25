/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { QuestItem } from "./QuestItem"

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
declare function FlashQuestDialogButton(): void
declare function ForceQuestDialogUpdate(): void

export class Quest extends Handle<quest> {
    constructor() {
        super(CreateQuest())
    }

    public isCompleted(): boolean {
        return IsQuestCompleted(this.getHandle)
    }

    public setCompleted(completed: boolean) {
        QuestSetCompleted(this.getHandle, completed)
        return this
    }

    public isDiscovered(): boolean {
        return IsQuestDiscovered(this.getHandle)
    }

    public setDiscovered(discovered: boolean) {
        QuestSetDiscovered(this.getHandle, discovered)
        return this
    }

    public isEnabled(): boolean {
        return IsQuestEnabled(this.getHandle)
    }

    public setEnabled(enabled: boolean) {
        QuestSetEnabled(this.getHandle, enabled)
        return this
    }

    public isFailed(): boolean {
        return IsQuestFailed(this.getHandle)
    }

    public setFailed(failed: boolean) {
        QuestSetFailed(this.getHandle, failed)
        return this
    }

    public isRequired(): boolean {
        return IsQuestRequired(this.getHandle)
    }

    public setRequired(required: boolean) {
        QuestSetRequired(this.getHandle, required)
        return this
    }

    public addItem(description: string) {
        const questItem = new QuestItem(this)

        questItem.setDescription(description)

        return questItem
    }

    public destroy() {
        DestroyQuest(this.getHandle)
        return this
    }

    public setDescription(description: string) {
        QuestSetDescription(this.getHandle, description)
        return this
    }

    public setIconPath(iconPath: string) {
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
