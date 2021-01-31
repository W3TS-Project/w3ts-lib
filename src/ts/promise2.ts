// import { Timer } from "./handles/timer"

// const setTimeout = (time: number, callback: () => void) => new Timer().start(time, false, callback)

// let PENDING = 0
// let FULFILLED = 1
// let REJECTED = 2

// function MyPromise(fn: Function) {
//     let state = PENDING

//     let value: any = null

//     let handlers: any = []

//     function fulfill(result: any) {
//         state = FULFILLED
//         value = result
//         handlers.forEach(handle)
//         handlers = null
//     }

//     function reject(error: any) {
//         state = REJECTED
//         value = error
//         handlers.forEach(handle)
//         handlers = null
//     }

//     function resolve(result: any) {
//         try {
//             let then = getThen(result)
//             if (then) {
//                 doResolve(then.bind(result), resolve, reject)
//                 return
//             }
//             fulfill(result)
//         } catch (e) {
//             reject(e)
//         }
//     }

//     function handle(handler: any) {
//         if (state === PENDING) {
//             handlers.push(handler)
//         } else {
//             if (state === FULFILLED && typeof handler.onFulfilled === "function") {
//                 handler.onFulfilled(value)
//             }
//             if (state === REJECTED && typeof handler.onRejected === "function") {
//                 handler.onRejected(value)
//             }
//         }
//     }

//     this.done = function(onFulfilled: any, onRejected: any) {
//         setTimeout(0, function() {
//             handle({
//                 onFulfilled: onFulfilled,
//                 onRejected: onRejected
//             })
//         })
//     }

//     this.then = function(onFulfilled: Function, onRejected: Function) {
//         let self = this
//         return new MyPromise(function(resolve: Function, reject: Function) {
//             return self.done(
//                 function(result) {
//                     if (typeof inFulfilled === "function") {
//                         try {
//                             return resolve(onFulfilled(result))
//                         } catch (ex) {
//                             return reject(ex)
//                         }
//                     } else {
//                         return resolve(result)
//                     }
//                 },
//                 function(error) {
//                     if (typeof onRejected === "function") {
//                         try {
//                             return resolve(onRejected(error))
//                         } catch (ex) {
//                             return reject(ex)
//                         }
//                     } else {
//                         return reject(error)
//                     }
//                 }
//             )
//         })
//     }

//     doResolve(fn, resolve, reject)
// }

// function getThen(value: any) {
//     let t = typeof value
//     if (value && (t === "object" || t === "function")) {
//         let then = value.then
//         if (typeof then === "function") {
//             return then
//         }
//     }
//     return null
// }

// function doResolve(fn: Function, onFulfilled: Function, onRejected: Function) {
//     let done = false
//     try {
//         fn(
//             function(value: any) {
//                 if (done) return
//                 done = true
//                 onFulfilled(value)
//             },
//             function(reason: any) {
//                 if (done) return
//                 done = true
//                 onRejected(reason)
//             }
//         )
//     } catch (ex) {
//         if (done) return
//         done = true
//         onRejected(ex)
//     }
// }
