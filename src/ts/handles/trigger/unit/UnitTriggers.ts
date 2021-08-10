/** @noSelfInFile **/
//@ts-nocheck

import { UnitEvent } from "../../../API/fields/events/UnitEvent"
import { UnitEvents } from "../../../fields/events/UnitEvents"
import { Unit } from "../../Unit"
import { PlayerUnitDecayEventResponse } from "../playerUnit/response/PlayerUnitDecayEventResponse"
import { Trigger } from "../Trigger"
import { UnitAcquiredTargetEventResponse } from "./UnitAcquiredTargetEventResponse"
import { UnitAttackedEventResponse } from "./UnitAttackedEventResponse"
import { UnitChangeOwnerEventResponse } from "./UnitChangeOwnerEventResponse"
import { UnitConstructCancelEventResponse } from "./UnitConstructCancelEventResponse"
import { UnitConstructFinishEventResponse } from "./UnitConstructFinishEventResponse"
import { UnitDamageEventResponse } from "./UnitDamageEventResponse"
import { UnitDeathEventResponse } from "./UnitDeathEventResponse"
import { UnitDetectedEventResponse } from "./UnitDetectedEventResponse"
import { UnitEventResponse } from "./UnitEventResponse"
import { UnitHeroLevelEventResponse } from "./UnitHeroLevelEventResponse"
import { UnitHeroRevivableEventResponse } from "./UnitHeroRevivableEventResponse"
import { UnitHeroReviveEventResponse } from "./UnitHeroReviveEventResponse"
import { UnitHeroSkillEventResponse } from "./UnitHeroSkillEventResponse"
import { UnitIssuedOrderEventResponse } from "./UnitIssuedOrderEventResponse"
import { UnitIssuedPointOrderEventResponse } from "./UnitIssuedPointOrderEventResponse"
import { UnitIssuedTargetOrderEventResponse } from "./UnitIssuedTargetOrderEventResponse"
import { UnitItemEventResponse } from "./UnitItemEventResponse"
import { UnitLoadedEventResponse } from "./UnitLoadedEventResponse"
import { UnitRescuedEventResponse } from "./UnitRescuedEventResponse"
import { UnitResearchEventResponse } from "./UnitResearchEventResponse"
import { UnitSellEventResponse } from "./UnitSellEventResponse"
import { UnitSellItemEventResponse } from "./UnitSellItemEventResponse"
import { UnitSpellEventResponse } from "./UnitSpellEventResponse"
import { UnitStateLimitEventResponse } from "./UnitStateLimitEventResponse"
import { UnitSummonEventResponse } from "./UnitSummonEventResponse"
import { UnitTargetInRangeEventResponse } from "./UnitTargetInRangeEventResponse"
import { UnitTrainEventResponse } from "./UnitTrainEventResponse"
import { UnitTrainFinishEventResponse } from "./UnitTrainFinishEventResponse"

declare function TriggerRegisterFilterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: unitevent,
    filter: boolexpr | null
): event

const getUnitTriggerClass = <T extends UnitEventResponse, R extends (response: T) => void>(
    event: UnitEvent,
    func: () => T
) =>
    class extends Trigger {
        event: UnitEvent

        register(whichUnit: Unit, filterFunc?: codeboolexpr, callback?: R) {
            if (callback) {
                this.addEventListener(callback)
            }
            const filter = Condition(filterFunc)
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

        constructor(whichUnit?: Unit, filterFunc?: codeboolexpr, callback?: R) {
            super()
            this.event = event
            if (whichUnit && callback) {
                this.register(whichUnit, filterFunc, callback)
            }
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
