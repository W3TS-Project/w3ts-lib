/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { Quest } from "./Quest"

declare function QuestCreateItem(whichQuest: quest): questitem
declare function QuestItemSetDescription(whichQuestItem: questitem, description: string): void
declare function QuestItemSetCompleted(whichQuestItem: questitem, completed: boolean): void
declare function IsQuestItemCompleted(whichQuestItem: questitem): boolean

export class QuestItem extends Handle<questitem> {
    constructor(whichQuest: Quest) {
        super(QuestCreateItem(whichQuest.getHandle))
    }

    public setDescription(description: string) {
        QuestItemSetDescription(this.getHandle, description)
        return this
    }

    public isCompleted(): boolean {
        return IsQuestItemCompleted(this.getHandle)
    }

    public setCompleted(completed: boolean) {
        QuestItemSetCompleted(this.getHandle, completed)
        return this
    }
}
