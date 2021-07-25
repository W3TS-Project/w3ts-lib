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
    public constructor() {
        super(CreateLeaderboard())
    }

    public destroy() {
        DestroyLeaderboard(this.getHandle)
        return this
    }

    public display(flag: boolean = true) {
        LeaderboardDisplay(this.getHandle, flag)
        return this
    }

    public isDisplayed(): boolean {
        return IsLeaderboardDisplayed(this.getHandle)
    }

    public getItemCount(): integer {
        return LeaderboardGetItemCount(this.getHandle)
    }

    public setItemCount(count: integer) {
        LeaderboardSetSizeByItemCount(this.getHandle, Math.floor(count))
        return this
    }

    public addItem(label: string, value: integer, p: MapPlayer) {
        LeaderboardAddItem(this.getHandle, label, Math.floor(value), p.getHandle)
        return this
    }

    public removeItem(index: integer) {
        LeaderboardRemoveItem(this.getHandle, Math.floor(index))
        return this
    }

    public removePlayerItem(p: MapPlayer) {
        LeaderboardRemovePlayerItem(this.getHandle, p.getHandle)
        return this
    }

    public clear() {
        LeaderboardClear(this.getHandle)
        return this
    }

    public sortByValue(ascending: boolean = true) {
        LeaderboardSortItemsByValue(this.getHandle, ascending)
        return this
    }

    public sortByPlayer(ascending: boolean = true) {
        LeaderboardSortItemsByPlayer(this.getHandle, ascending)
        return this
    }

    public sortByLabel(ascending: boolean = true) {
        LeaderboardSortItemsByLabel(this.getHandle, ascending)
        return this
    }

    public hasPlayerItem(p: MapPlayer): boolean {
        return LeaderboardHasPlayerItem(this.getHandle, p.getHandle)
    }

    public getPlayerIndex(p: MapPlayer): integer {
        return LeaderboardGetPlayerIndex(this.getHandle, p.getHandle)
    }

    public setLabel(value: string) {
        LeaderboardSetLabel(this.getHandle, value)
        return this
    }

    public getLabelText(): string {
        return LeaderboardGetLabelText(this.getHandle)
    }

    public setLabelColor(red: integer, green: integer, blue: integer, alpha: integer) {
        LeaderboardSetLabelColor(
            this.getHandle,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public setValueColor(red: integer, green: integer, blue: integer, alpha: integer) {
        LeaderboardSetValueColor(
            this.getHandle,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public setStyle(
        showLabel: boolean = true,
        showNames: boolean = true,
        showValues: boolean = true,
        showIcons: boolean = true
    ) {
        LeaderboardSetStyle(this.getHandle, showLabel, showNames, showValues, showIcons)
        return this
    }

    public setItemValue(item: integer, value: integer) {
        LeaderboardSetItemValue(this.getHandle, Math.floor(item), Math.floor(value))
        return this
    }

    public setItemLabel(item: integer, label: string) {
        LeaderboardSetItemLabel(this.getHandle, Math.floor(item), label)
        return this
    }

    public setItemStyle(
        item: integer,
        showLabel: boolean = true,
        showValues: boolean = true,
        showIcons: boolean = true
    ) {
        LeaderboardSetItemStyle(this.getHandle, Math.floor(item), showLabel, showValues, showIcons)
        return this
    }

    public setItemLabelColor(
        item: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ) {
        LeaderboardSetItemLabelColor(
            this.getHandle,
            Math.floor(item),
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public setItemValueColor(
        item: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ) {
        LeaderboardSetItemValueColor(
            this.getHandle,
            Math.floor(item),
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public static fromHandle(handle: leaderboard): LeaderBoard {
        return this.getObject(handle)
    }

    public static fromObject(object: LeaderBoard): leaderboard {
        return this.getHandle(object)
    }
}
