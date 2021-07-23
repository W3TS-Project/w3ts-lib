import { ObjectOptions } from "./ObjectOptions"

export abstract class IterableClass {
    static *[Symbol.iterator]() {
        const entries = ObjectOptions.entries(this)
        let index = 0

        return {
            next() {
                if (index < entries.length) {
                    return { value: entries[++index], done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}
