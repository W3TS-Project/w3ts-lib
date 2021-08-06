/** @noSelfInFile **/
//@ts-nocheck

declare function BlzSendSyncData(prefix: string, data: string): boolean
declare function BlzGetTriggerSyncPrefix(): string
declare function BlzGetTriggerSyncData(): string

export abstract class Synchronizing {
    public static sendData(prefix: string, data: string) {
        return BlzSendSyncData(prefix, data)
    }

    public static getEventPrefix() {
        return BlzGetTriggerSyncPrefix()
    }

    public static getEventData() {
        return BlzGetTriggerSyncData()
    }
}