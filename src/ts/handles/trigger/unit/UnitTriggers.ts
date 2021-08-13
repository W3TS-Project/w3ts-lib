/** @noSelfInFile **/
//@ts-nocheck

import { UnitEvent } from "../../../API/fields/events/UnitEvent"
import { UnitEvents } from "../../../fields/events/UnitEvents"
import { Unit } from "../../Unit"
import { PlayerUnitDecayEventResponse } from "../playerUnit/response/PlayerUnitDecayEventResponse"
import { Trigger } from "../Trigger"
import { UnitAcquiredTargetEventResponse } from "./response/UnitAcquiredTargetEventResponse"
import { UnitAttackedEventResponse } from "./response/UnitAttackedEventResponse"
import { UnitChangeOwnerEventResponse } from "./response/UnitChangeOwnerEventResponse"
import { UnitConstructCancelEventResponse } from "./response/UnitConstructCancelEventResponse"
import { UnitConstructFinishEventResponse } from "./response/UnitConstructFinishEventResponse"
import { UnitDamageEventResponse } from "./response/UnitDamageEventResponse"
import { UnitDeathEventResponse } from "./response/UnitDeathEventResponse"
import { UnitDetectedEventResponse } from "./response/UnitDetectedEventResponse"
import { UnitEventResponse } from "./response/UnitEventResponse"
import { UnitHeroLevelEventResponse } from "./response/UnitHeroLevelEventResponse"
import { UnitHeroRevivableEventResponse } from "./response/UnitHeroRevivableEventResponse"
import { UnitHeroReviveEventResponse } from "./response/UnitHeroReviveEventResponse"
import { UnitHeroSkillEventResponse } from "./response/UnitHeroSkillEventResponse"
import { UnitIssuedOrderEventResponse } from "./response/UnitIssuedOrderEventResponse"
import { UnitIssuedPointOrderEventResponse } from "./response/UnitIssuedPointOrderEventResponse"
import { UnitIssuedTargetOrderEventResponse } from "./response/UnitIssuedTargetOrderEventResponse"
import { UnitItemEventResponse } from "./response/UnitItemEventResponse"
import { UnitLoadedEventResponse } from "./response/UnitLoadedEventResponse"
import { UnitRescuedEventResponse } from "./response/UnitRescuedEventResponse"
import { UnitResearchEventResponse } from "./response/UnitResearchEventResponse"
import { UnitSellEventResponse } from "./response/UnitSellEventResponse"
import { UnitSellItemEventResponse } from "./response/UnitSellItemEventResponse"
import { UnitSpellEventResponse } from "./response/UnitSpellEventResponse"
import { UnitStateLimitEventResponse } from "./response/UnitStateLimitEventResponse"
import { UnitSummonEventResponse } from "./response/UnitSummonEventResponse"
import { UnitTargetInRangeEventResponse } from "./response/UnitTargetInRangeEventResponse"
import { UnitTrainEventResponse } from "./response/UnitTrainEventResponse"
import { UnitTrainFinishEventResponse } from "./response/UnitTrainFinishEventResponse"

declare function TriggerRegisterFilterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: unitevent,
    filter: boolexpr | null
): event

export class UnitFilterResponse {
    unit = Unit.fromFilter()
}

export type UnitFilterCallback = ((response: UnitFilterResponse) => boolean) | null | undefined

export const getUnitFilter = (func: UnitFilterCallback) => {
    let result
    if (func) result = Condition(() => func(new UnitFilterResponse()))
    else result = Condition(func)
    return result
}

const getUnitTriggerClass = <T extends UnitEventResponse, R extends (response: T) => void>(
    event: UnitEvent,
    func: () => T
) =>
    class extends Trigger {
        event: UnitEvent

        register(whichUnit: Unit, filterFunc?: UnitFilterCallback, callback?: R) {
            if (callback) {
                this.addEventListener(callback)
            }
            const filter = getUnitFilter(filterFunc)
            const result = UnitEvent.fromHandle(
                (<unknown>(
                    TriggerRegisterFilterUnitEvent(
                        this.getHandle() as trigger,
                        whichUnit.getHandle() as unit,
                        event.getHandle() as unitevent,
                        filter
                    )
                )) as unitevent
            )
            DestroyCondition(filter)
            return result
        }

        constructor(whichUnit: Unit, filterFunc?: UnitFilterCallback, callback?: R) {
            super()
            this.event = event
            this.register(whichUnit, filterFunc, callback)
        }

        addEventListener(callback: R) {
            this.addAction(() => callback(func()))
        }
    }

const defaultResponse = () => new UnitEventResponse()

export const UnitAcquiredTargetTrigger = getUnitTriggerClass(
    UnitEvents.ACQUIRED_TARGET,
    () => new UnitAcquiredTargetEventResponse()
)
export const UnitAttackedTrigger = getUnitTriggerClass(
    UnitEvents.ATTACKED,
    () => new UnitAttackedEventResponse()
)
export const UnitChangeOwnerTrigger = getUnitTriggerClass(
    UnitEvents.CHANGE_OWNER,
    () => new UnitChangeOwnerEventResponse()
)
export const UnitConstructCancelTrigger = getUnitTriggerClass(
    UnitEvents.CONSTRUCT_CANCEL,
    () => new UnitConstructCancelEventResponse()
)
export const UnitConstructFinishTrigger = getUnitTriggerClass(
    UnitEvents.CONSTRUCT_FINISH,
    () => new UnitConstructFinishEventResponse()
)
export const UnitDamagedTrigger = getUnitTriggerClass(
    UnitEvents.DAMAGED,
    () => new UnitDamageEventResponse()
)
export const UnitDamagingTrigger = getUnitTriggerClass(
    UnitEvents.DAMAGING,
    () => new UnitDamageEventResponse()
)
export const UnitDeathTrigger = getUnitTriggerClass(
    UnitEvents.DEATH,
    () => new UnitDeathEventResponse()
)
export const UnitDecayTrigger = getUnitTriggerClass(
    UnitEvents.DECAY,
    () => new PlayerUnitDecayEventResponse()
)
export const UnitDeselectedTrigger = getUnitTriggerClass(UnitEvents.DESELECTED, defaultResponse)
export const UnitDetectedTrigger = getUnitTriggerClass(
    UnitEvents.DETECTED,
    () => new UnitDetectedEventResponse()
)
export const UnitDropItemTrigger = getUnitTriggerClass(
    UnitEvents.DROP_ITEM,
    () => new UnitItemEventResponse()
)
export const UnitHeroLevelTrigger = getUnitTriggerClass(
    UnitEvents.HERO_LEVEL,
    () => new UnitHeroLevelEventResponse()
)
export const UnitHeroRevivableTrigger = getUnitTriggerClass(
    UnitEvents.HERO_REVIVABLE,
    () => new UnitHeroRevivableEventResponse()
)
export const UnitHeroReviveStartTrigger = getUnitTriggerClass(
    UnitEvents.HERO_REVIVE_START,
    () => new UnitHeroReviveEventResponse()
)
export const UnitHeroReviveCancelTrigger = getUnitTriggerClass(
    UnitEvents.HERO_REVIVE_CANCEL,
    () => new UnitHeroReviveEventResponse()
)
export const UnitHeroReviveFinishTrigger = getUnitTriggerClass(
    UnitEvents.HERO_REVIVE_FINISH,
    () => new UnitHeroReviveEventResponse()
)
export const UnitHeroSkillTrigger = getUnitTriggerClass(
    UnitEvents.HERO_SKILL,
    () => new UnitHeroSkillEventResponse()
)
export const UnitHiddenTrigger = getUnitTriggerClass(UnitEvents.HIDDEN, defaultResponse)
export const UnitIssuedOrderTrigger = getUnitTriggerClass(
    UnitEvents.ISSUED_ORDER,
    () => new UnitIssuedOrderEventResponse()
)
export const UnitIssuedPointOrderTrigger = getUnitTriggerClass(
    UnitEvents.ISSUED_POINT_ORDER,
    () => new UnitIssuedPointOrderEventResponse()
)
export const UnitIssuedTargetOrderTrigger = getUnitTriggerClass(
    UnitEvents.ISSUED_TARGET_ORDER,
    () => new UnitIssuedTargetOrderEventResponse()
)
export const UnitLoadedTrigger = getUnitTriggerClass(
    UnitEvents.LOADED,
    () => new UnitLoadedEventResponse()
)
export const UnitPawnItemTrigger = getUnitTriggerClass(
    UnitEvents.PAWN_ITEM,
    () => new UnitSellItemEventResponse()
)
export const UnitPickupItemTrigger = getUnitTriggerClass(
    UnitEvents.PICK_UP_ITEM,
    () => new UnitItemEventResponse()
)
export const UnitRescuedTrigger = getUnitTriggerClass(
    UnitEvents.RESCUED,
    () => new UnitRescuedEventResponse()
)
export const UnitResearchStartTrigger = getUnitTriggerClass(
    UnitEvents.RESEARCH_START,
    () => new UnitResearchEventResponse()
)
export const UnitResearchCancelTrigger = getUnitTriggerClass(
    UnitEvents.RESEARCH_CANCEL,
    () => new UnitResearchEventResponse()
)
export const UnitResearchFinishTrigger = getUnitTriggerClass(
    UnitEvents.RESEARCH_FINISH,
    () => new UnitResearchEventResponse()
)
export const UnitSelectedTrigger = getUnitTriggerClass(UnitEvents.SELECTED, defaultResponse)
export const UnitSellTrigger = getUnitTriggerClass(
    UnitEvents.SELL,
    () => new UnitSellEventResponse()
)
export const UnitSellItemTrigger = getUnitTriggerClass(
    UnitEvents.SELL_ITEM,
    () => new UnitSellItemEventResponse()
)
export const UnitSpellCastTrigger = getUnitTriggerClass(
    UnitEvents.SPELL_CAST,
    () => new UnitSpellEventResponse()
)
export const UnitSpellChannelTrigger = getUnitTriggerClass(
    UnitEvents.SPELL_CHANNEL,
    () => new UnitSpellEventResponse()
)
export const UnitSpellEffectTrigger = getUnitTriggerClass(
    UnitEvents.SPELL_EFFECT,
    () => new UnitSpellEventResponse()
)
export const UnitSpellEndCastTrigger = getUnitTriggerClass(
    UnitEvents.SPELL_END_CAST,
    () => new UnitSpellEventResponse()
)
export const UnitSpellFinishTrigger = getUnitTriggerClass(
    UnitEvents.SPELL_FINISH,
    () => new UnitSpellEventResponse()
)
export const UnitStateLimitTrigger = getUnitTriggerClass(
    UnitEvents.STATE_LIMIT,
    () => new UnitStateLimitEventResponse()
)
export const UnitSummonTrigger = getUnitTriggerClass(
    UnitEvents.SUMMON,
    () => new UnitSummonEventResponse()
)
export const UnitTargetInRangeTrigger = getUnitTriggerClass(
    UnitEvents.TARGET_IN_RANGE,
    () => new UnitTargetInRangeEventResponse()
)
export const UnitTrainStartTrigger = getUnitTriggerClass(
    UnitEvents.TRAIN_START,
    () => new UnitTrainEventResponse()
)
export const UnitTrainCancelTrigger = getUnitTriggerClass(
    UnitEvents.TRAIN_CANCEL,
    () => new UnitTrainEventResponse()
)
export const UnitTrainFinishTrigger = getUnitTriggerClass(
    UnitEvents.TRAIN_FINISH,
    () => new UnitTrainFinishEventResponse()
)
export const UnitUpgradeStartTrigger = getUnitTriggerClass(
    UnitEvents.UPGRADE_START,
    defaultResponse
)
export const UnitUpgradeCancelTrigger = getUnitTriggerClass(
    UnitEvents.UPGRADE_CANCEL,
    defaultResponse
)
export const UnitUpgradeFinishTrigger = getUnitTriggerClass(
    UnitEvents.UPGRADE_FINISH,
    defaultResponse
)
export const UnitUseItemTrigger = getUnitTriggerClass(
    UnitEvents.USE_ITEM,
    () => new UnitItemEventResponse()
)
