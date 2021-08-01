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
        super(QuestCreateItem(whichQuest.getHandle() as quest))
    }

    public setDescription(description: string) {
        QuestItemSetDescription(this.getHandle() as questitem, description)
        return this
    }

    public isCompleted(): boolean {
        return IsQuestItemCompleted(this.getHandle() as questitem)
    }

    public setCompleted(completed: boolean) {
        QuestItemSetCompleted(this.getHandle() as questitem, completed)
        return this
    }

    public static fromHandle(handle: questitem) {
        return this.getObject(handle) as QuestItem
    }
}
