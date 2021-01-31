/** @noSelfInFile **/
// @ts-nocheck

declare function AutomationSetTestType(testType: string): void
declare function AutomationTestStart(testName: string): void
declare function AutomationTestEnd(): void
declare function AutomationTestingFinished(): void

export class AutomationTest {
    private constructor() {}

    static set type(testType: string) {
        AutomationSetTestType(testType)
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