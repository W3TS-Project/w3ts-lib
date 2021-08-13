export abstract class ErrorHandling {
    static getHandledCallback(callback: () => void) {
        return () => {
            const result = pcall(callback)
            if (!result[0]) {
                print(result[1])
            } else {
                return result[1]
            }
        }
    }

    static error(message: string) {
        error(message, 2)
    }
}