/** @noSelfInFile **/
//@ts-nocheck

declare function Preload(filename: string): void
declare function PreloadEnd(timeout: real): void
declare function PreloadStart(): void
declare function PreloadRefresh(): void
declare function PreloadEndEx(): void

declare function PreloadGenClear(): void
declare function PreloadGenStart(): void
declare function PreloadGenEnd(filename: string): void
declare function Preloader(filename: string): void

export abstract class MapPreload {
    static preload(filename: string) {
        Preload(filename)
        return this
    }

    static end(timeout: real) {
        PreloadEnd(timeout)
        return this
    }

    static start() {
        PreloadStart()
        return this
    }

    static refresh() {
        PreloadRefresh()
        return this
    }

    static endEx() {
        PreloadEndEx()
        return this
    }

    static genClear() {
        PreloadGenClear()
        return this
    }

    static genStart() {
        PreloadGenStart()
        return this
    }

    static genEnd(filename: string) {
        PreloadGenEnd(filename)
        return this
    }

    static preloader(filename: string) {
        Preloader(filename)
        return this
    }
}
