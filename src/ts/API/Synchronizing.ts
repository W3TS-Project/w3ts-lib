/** @noSelfInFile **/
//@ts-nocheck

declare function BlzSendSyncData(prefix: string, data: string): boolean
declare function BlzGetTriggerSyncPrefix(): string
declare function BlzGetTriggerSyncData(): string

export abstract class Synchronizing {
    static sendData(prefix: string, data: string) {
        return BlzSendSyncData(prefix, data)
    }

    static getEventPrefix() {
        return BlzGetTriggerSyncPrefix()
    }

    static getEventData() {
        return BlzGetTriggerSyncData()
    }
}
