/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"

declare function CreateLeaderboard(): leaderboard
declare function DestroyLeaderboard(lb: leaderboard): void
declare function LeaderboardDisplay(lb: leaderboard, show: boolean): void
declare function IsLeaderboardDisplayed(lb: leaderboard): boolean
declare function LeaderboardGetItemCount(lb: leaderboard): integer
declare function LeaderboardSetSizeByItemCount(lb: leaderboard, count: integer): void
declare function LeaderboardAddItem(lb: leaderboard, label: string, value: integer, p: player): void
declare function LeaderboardRemoveItem(lb: leaderboard, index: integer): void
declare function LeaderboardRemovePlayerItem(lb: leaderboard, p: player): void
declare function LeaderboardClear(lb: leaderboard): void
declare function LeaderboardSortItemsByValue(lb: leaderboard, ascending: boolean): void
declare function LeaderboardSortItemsByPlayer(lb: leaderboard, ascending: boolean): void
declare function LeaderboardSortItemsByLabel(lb: leaderboard, ascending: boolean): void
declare function LeaderboardHasPlayerItem(lb: leaderboard, p: player): boolean
declare function LeaderboardGetPlayerIndex(lb: leaderboard, p: player): integer
declare function LeaderboardSetLabel(lb: leaderboard, label: string): void
declare function LeaderboardGetLabelText(lb: leaderboard): string
declare function LeaderboardSetLabelColor(
    lb: leaderboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function LeaderboardSetValueColor(
    lb: leaderboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function LeaderboardSetStyle(
    lb: leaderboard,
    showLabel: boolean,
    showNames: boolean,
    showValues: boolean,
    showIcons: boolean
): void
declare function LeaderboardSetItemValue(lb: leaderboard, whichItem: integer, val: integer): void
declare function LeaderboardSetItemLabel(lb: leaderboard, whichItem: integer, val: string): void
declare function LeaderboardSetItemStyle(
    lb: leaderboard,
    whichItem: integer,
    showLabel: boolean,
    showValue: boolean,
    showIcon: boolean
): void
declare function LeaderboardSetItemLabelColor(
    lb: leaderboard,
    whichItem: integer,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function LeaderboardSetItemValueColor(
    lb: leaderboard,
    whichItem: integer,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void

export class LeaderBoard extends Handle<leaderboard> {
    constructor() {
        super(CreateLeaderboard())
    }

    destroy() {
        DestroyLeaderboard(this.getHandle() as leaderboard)
        super.destroy()
    }

    display(flag: boolean = true) {
        LeaderboardDisplay(this.getHandle() as leaderboard, flag)
        return this
    }

    isDisplayed(): boolean {
        return IsLeaderboardDisplayed(this.getHandle() as leaderboard)
    }

    getItemCount(): integer {
        return LeaderboardGetItemCount(this.getHandle() as leaderboard)
    }

    setItemCount(count: integer) {
        LeaderboardSetSizeByItemCount(this.getHandle() as leaderboard, Math.floor(count))
        return this
    }

    addItem(label: string, value: integer, p: MapPlayer) {
        LeaderboardAddItem(
            this.getHandle() as leaderboard,
            label,
            Math.floor(value),
            p.getHandle() as player
        )
        return this
    }

    removeItem(index: integer) {
        LeaderboardRemoveItem(this.getHandle() as leaderboard, Math.floor(index))
        return this
    }

    removePlayerItem(p: MapPlayer) {
        LeaderboardRemovePlayerItem(this.getHandle() as leaderboard, p.getHandle() as player)
        return this
    }

    clear() {
        LeaderboardClear(this.getHandle() as leaderboard)
        return this
    }

    sortByValue(ascending: boolean = true) {
        LeaderboardSortItemsByValue(this.getHandle() as leaderboard, ascending)
        return this
    }

    sortByPlayer(ascending: boolean = true) {
        LeaderboardSortItemsByPlayer(this.getHandle() as leaderboard, ascending)
        return this
    }

    sortByLabel(ascending: boolean = true) {
        LeaderboardSortItemsByLabel(this.getHandle() as leaderboard, ascending)
        return this
    }

    hasPlayerItem(p: MapPlayer): boolean {
        return LeaderboardHasPlayerItem(this.getHandle() as leaderboard, p.getHandle() as player)
    }

    getPlayerIndex(p: MapPlayer): integer {
        return LeaderboardGetPlayerIndex(this.getHandle() as leaderboard, p.getHandle() as player)
    }

    setLabel(value: string) {
        LeaderboardSetLabel(this.getHandle() as leaderboard, value)
        return this
    }

    getLabelText(): string {
        return LeaderboardGetLabelText(this.getHandle() as leaderboard)
    }

    setLabelColor(red: integer, green: integer, blue: integer, alpha: integer) {
        LeaderboardSetLabelColor(
            this.getHandle() as leaderboard,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    setValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        LeaderboardSetValueColor(
            this.getHandle() as leaderboard,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    setStyle(
        showLabel: boolean = true,
        showNames: boolean = true,
        showValues: boolean = true,
        showIcons: boolean = true
    ) {
        LeaderboardSetStyle(
            this.getHandle() as leaderboard,
            showLabel,
            showNames,
            showValues,
            showIcons
        )
        return this
    }

    setItemValue(item: integer, value: integer) {
        LeaderboardSetItemValue(
            this.getHandle() as leaderboard,
            Math.floor(item),
            Math.floor(value)
        )
        return this
    }

    setItemLabel(item: integer, label: string) {
        LeaderboardSetItemLabel(this.getHandle() as leaderboard, Math.floor(item), label)
        return this
    }

    setItemStyle(
        item: integer,
        showLabel: boolean = true,
        showValues: boolean = true,
        showIcons: boolean = true
    ) {
        LeaderboardSetItemStyle(
            this.getHandle() as leaderboard,
            Math.floor(item),
            showLabel,
            showValues,
            showIcons
        )
        return this
    }

    setItemLabelColor(
        item: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ) {
        LeaderboardSetItemLabelColor(
            this.getHandle() as leaderboard,
            Math.floor(item),
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    setItemValueColor(
        item: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ) {
        LeaderboardSetItemValueColor(
            this.getHandle() as leaderboard,
            Math.floor(item),
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    static fromHandle(handle: leaderboard) {
        return this.getObject(handle) as LeaderBoard
    }
}
