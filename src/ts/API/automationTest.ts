/** @noSelfInFile **/
// @ts-nocheck

declare function AutomationSetTestType(testType: string): void
declare function AutomationTestStart(testName: string): void
declare function AutomationTestEnd(): void
declare function AutomationTestingFinished(): void

export const AutomationTest = {
    setType(testType: string) {
        AutomationSetTestType(testType)
    },

    start(testName: string) {
        AutomationTestStart(testName)
    },

    end() {
        AutomationTestEnd()
    },

    finish() {
        AutomationTestingFinished()
    }
}
