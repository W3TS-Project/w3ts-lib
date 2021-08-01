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
        return IsQuestCompleted(this.getHandle() as quest)
    }

    public setCompleted(completed: boolean) {
        QuestSetCompleted(this.getHandle() as quest, completed)
        return this
    }

    public isDiscovered(): boolean {
        return IsQuestDiscovered(this.getHandle() as quest)
    }

    public setDiscovered(discovered: boolean) {
        QuestSetDiscovered(this.getHandle() as quest, discovered)
        return this
    }

    public isEnabled(): boolean {
        return IsQuestEnabled(this.getHandle() as quest)
    }

    public setEnabled(enabled: boolean) {
        QuestSetEnabled(this.getHandle() as quest, enabled)
        return this
    }

    public isFailed(): boolean {
        return IsQuestFailed(this.getHandle() as quest)
    }

    public setFailed(failed: boolean) {
        QuestSetFailed(this.getHandle() as quest, failed)
        return this
    }

    public isRequired(): boolean {
        return IsQuestRequired(this.getHandle() as quest)
    }

    public setRequired(required: boolean) {
        QuestSetRequired(this.getHandle() as quest, required)
        return this
    }

    public addItem(description: string) {
        const questItem = new QuestItem(this)

        questItem.setDescription(description)

        return questItem
    }

    public destroy() {
        DestroyQuest(this.getHandle() as quest)
        return this
    }

    public setDescription(description: string) {
        QuestSetDescription(this.getHandle() as quest, description)
        return this
    }

    public setIconPath(iconPath: string) {
        QuestSetIconPath(this.getHandle() as quest, iconPath)
        return this
    }

    public setTitle(title: string) {
        QuestSetTitle(this.getHandle() as quest, title)
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

    public static fromHandle(handle: quest) {
        return this.getObject(handle) as Quest
    }
}
