// /** @noSelfInFile **/
// //@ts-nocheck

import { integer } from "../Utils"

const map: WeakMap<handle, any> = new WeakMap<handle, any>()

declare function GetHandleId(h: handle): number

export class Handle<T extends handle> {
    protected readonly handle: T

    protected constructor(handle: T) {
        this.handle = handle
        map.set(this.getHandle, this)
    }

    public getHandleId(): integer {
        return GetHandleId(this.getHandle)
    }

    protected static getObject(handle: handle) {
        const obj = map.get(handle)
        if (obj !== undefined && obj !== null) {
            return obj
        } else {
            return new this(handle)
        }
    }

    public get getHandle() {
        return Handle.getHandle(this)
    }

    protected static getHandle(handleObject: any) {
        let handle = handleObject.handle
        if (handle === null || handle === undefined) {
            handle = 0
        }
        return handle
    }
}
