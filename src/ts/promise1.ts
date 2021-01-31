// function noop() {}

// // interface MyPromiseLike<T> {
// //     /**
// //      * Attaches callbacks for the resolution and/or rejection of the Promise.
// //      * @param onfulfilled The callback to execute when the Promise is resolved.
// //      * @param onrejected The callback to execute when the Promise is rejected.
// //      * @returns A Promise for the completion of which ever callback is executed.
// //      */
// //     then<TResult1 = T, TResult2 = never>(
// //         onfulfilled?: ((value: T) => TResult1 | MyPromiseLike<TResult1>) | undefined | null,
// //         onrejected?: ((reason: any) => TResult2 | MyPromiseLike<TResult2>) | undefined | null
// //     ): MyPromiseLike<TResult1 | TResult2>
// // }

// type TResolve<T> = (value: T) => void
// type TReject<T> = (reason?: any) => void
// type TError = (e: any) => void

// export class MyPromise<T> {
//     queue: Function[] = []
//     errorHandler: TError = e => {
//         throw new Error(e)
//     }
//     finallyHandler = noop

//     constructor(executor: (resolve: TResolve<T>, reject: TReject<T>) => void) {
//         try {
//             executor.call({}, this.onResolve, this.onReject)
//         } catch (e) {
//             this.errorHandler(e)
//         } finally {
//             this.finallyHandler()
//         }
//     }

//     onResolve<T>(data: T) {
//         this.queue.forEach((callback: Function) => {
//             data = callback(data)
//         })

//         this.finallyHandler()
//     }

//     onReject<T>(error: TReject<T>) {
//         this.errorHandler(error)

//         this.finallyHandler()
//     }

//     then(fn: Function) {
//         this.queue.push(fn)
//         return this
//     }

//     catch(fn: TError) {
//         this.errorHandler = fn
//         return this
//     }

//     finally(fn: () => {}) {
//         this.finallyHandler = fn
//         return this
//     }
// }

export class TestPromise {
    private queue: ((...[]) => any)[] = []
    private errorHandler = (error: Error) => {}
    private finallyHandler = () => {}

    // constructor(executor: (resolve: (...[]) => void, reject: () => void) => void) {
    constructor(executor: any) {
        try {
            executor.call(this, TestPromise.onResolve(this), TestPromise.onReject(this))
        } catch (e) {
            this.errorHandler(e)
        } finally {
            this.finallyHandler()
        }
    }

    private static onResolve(promise: TestPromise): any {
        return (data: any[]) => {
            // print(promise.queue)
            for (let index = 0; index < promise.queue.length; index++) {
                promise.queue[index](data)
            }

            promise.finallyHandler()
        }
    }

    private static onReject(promise: TestPromise): any {
        return (error: Error) => {
            promise.errorHandler(error)
            promise.finallyHandler()
        }
    }

    then(fn: (...[]) => any) {
        this.queue.push(fn)
        return this
    }

    // catch(fn: (error: Error) => void) {
    catch(fn: any) {
        this.errorHandler = fn
        return this
    }

    // finally(fn: () => void) {
    finally(fn: any) {
        this.finallyHandler = fn
        return this
    }
}

// export const sleep = (time: number) => new TestPromise((r: any) => setTimeout(time, r))

// sleep(1).then(() => print('Hello world'))

// const promise = new TestPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("NgRx")
//     }, 150)
// })

// promise
//     .then(course => course.toUpperCase())
//     .then(title => console.log("Vladilen Promise:", title))
//     .catch(err => console.log("Error:", err))
//     .finally(() => console.log("Finally"))
