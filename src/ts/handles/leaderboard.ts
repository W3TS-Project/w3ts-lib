/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../main"
import { Handle } from "./handle"
import { MapPlayer } from "./player"

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

export class Leaderboard extends Handle<leaderboard> {
    constructor() {
        super(Handle.initFromHandle() ? undefined : CreateLeaderboard())
    }

    destroy() {
        DestroyLeaderboard(this.handle)
    }

    display(flag: boolean = true) {
        LeaderboardDisplay(this.handle, flag)
        return this
    }

    get displayed() {
        return IsLeaderboardDisplayed(this.handle)
    }

    get itemCount() {
        return LeaderboardGetItemCount(this.handle)
    }

    set itemCount(count: integer) {
        LeaderboardSetSizeByItemCount(this.handle, count)
    }

    addItem(label: string, value: integer, p: MapPlayer) {
        LeaderboardAddItem(this.handle, label, value, p.handle)
        return this
    }

    removeItem(index: integer) {
        LeaderboardRemoveItem(this.handle, index)
        return this
    }

    removePlayerItem(p: MapPlayer) {
        LeaderboardRemovePlayerItem(this.handle, p.handle)
        return this
    }

    clear() {
        LeaderboardClear(this.handle)
        return this
    }

    sortByValue(asc: boolean = true) {
        LeaderboardSortItemsByValue(this.handle, asc)
        return this
    }

    sortByPlayer(asc: boolean = true) {
        LeaderboardSortItemsByPlayer(this.handle, asc)
        return this
    }

    sortByLabel(asc: boolean = true) {
        LeaderboardSortItemsByLabel(this.handle, asc)
        return this
    }

    hasPlayerItem(p: MapPlayer) {
        return LeaderboardHasPlayerItem(this.handle, p.handle)
    }

    getPlayerIndex(p: MapPlayer): integer {
        return LeaderboardGetPlayerIndex(this.handle, p.handle)
    }

    set label(value: string) {
        LeaderboardSetLabel(this.handle, value)
    }

    get label() {
        return LeaderboardGetLabelText(this.handle)
    }

    setLabelColor(red: integer, green: integer, blue: integer, alpha: integer) {
        LeaderboardSetLabelColor(this.handle, red, green, blue, alpha)
        return this
    }

    setValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        LeaderboardSetValueColor(this.handle, red, green, blue, alpha)
        return this
    }

    setStyle(
        showLabel: boolean = true,
        showNames: boolean = true,
        showValues: boolean = true,
        showIcons: boolean = true
    ) {
        LeaderboardSetStyle(this.handle, showLabel, showNames, showValues, showIcons)
        return this
    }

    setItemValue(item: integer, value: integer) {
        LeaderboardSetItemValue(this.handle, item, value)
        return this
    }

    setItemLabel(item: integer, label: string) {
        LeaderboardSetItemLabel(this.handle, item, label)
        return this
    }

    setItemStyle(
        item: integer,
        showLabel: boolean = true,
        showValues: boolean = true,
        showIcons: boolean = true
    ) {
        LeaderboardSetItemStyle(this.handle, item, showLabel, showValues, showIcons)
        return this
    }

    setItemLabelColor(
        item: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ) {
        LeaderboardSetItemLabelColor(this.handle, item, red, green, blue, alpha)
        return this
    }

    setItemValueColor(
        item: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ) {
        LeaderboardSetItemValueColor(this.handle, item, red, green, blue, alpha)
        return this
    }

    static fromHandle(handle: leaderboard): Leaderboard {
        return this.getObject(handle)
    }
}
