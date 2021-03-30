/** @noSelfInFile **/

const map: WeakMap<handle, any> = new WeakMap<handle, any>()

declare function GetHandleId(h: handle): number

export class Handle<T extends handle> {
    public readonly handle: T
    // private static initHandle: handle | undefined

    public constructor(handle: T) {
        this.handle = handle
        try {
            map.set(this.handle, this)
        } catch (error) {
            print("ОШИБКА: нулевой хендл! Объект: ", this)
            throw error
        }

        // if (handle === undefined) {
        //     this.handle = Handle.initHandle as T
        // } else {
        //     this.handle = handle
        // }
        // map.set(this.handle, this)
    }

    public get id() {
        return GetHandleId(this.handle)
    }

    // public static initFromHandle(): boolean {
    //     return Handle.initHandle !== undefined
    // }

    protected static getObject(handle: handle) {
        const obj = map.get(handle)
        if (obj !== undefined && obj !== null) {
            return obj
        } else {
            return new this(handle)
        }
        // Handle.initHandle = handle
        // const newObj = new this()
        // Handle.initHandle = undefined
        // return newObj
    }
}

// protected static initialized(handle: T): T | undefined {
//     if (Handle.initFromHandle()) {
//         return undefined
//     } else {
//         return handle
//     }
// }
