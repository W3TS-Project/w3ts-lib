/** @noSelfInFile **/
//@ts-nocheck

const map: WeakMap<handle, any> = new WeakMap<handle, any>()

declare function GetHandleId(h: handle): integer

export class Handle<T extends handle> {
    protected readonly handle: T | 0
    protected id: integer = 0

    protected constructor(handle: T) {
        if (handle === null || handle === undefined) {
            this.handle = 0
        }
        this.handle = handle
        map.set(handle, this)
    }

    protected destroy() {
        map.delete(this.handle)
    }

    getHandleId(): integer {
        return GetHandleId(this.getHandle)
    }

    static getObject<T extends handle, R extends Handle<T>>(handle: T): R {
        const obj = map.get(handle)
        if (obj !== undefined && obj !== null) {
            return obj
        } else {
            return new this(handle) as R
        }
    }

    getHandle() {
        return this.handle
    }
}
