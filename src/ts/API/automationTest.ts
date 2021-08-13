/** @noSelfInFile **/
// @ts-nocheck

declare function AutomationSetTestType(testType: string): void
declare function AutomationTestStart(testName: string): void
declare function AutomationTestEnd(): void
declare function AutomationTestingFinished(): void

export abstract class AutomationTest {
    static setType(testType: string) {
        AutomationSetTestType(testType)
        return this
    }

    static start(testName: string) {
        AutomationTestStart(testName)
        return this
    }

    static end() {
        AutomationTestEnd()
        return this
    }

    static finish() {
        AutomationTestingFinished()
        return this
    }
}
