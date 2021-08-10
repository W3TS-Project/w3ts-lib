// /** @noSelfInFile **/
// //@ts-nocheck

import { PlayerUnitEvent } from "../../../API/fields/events/PlayerUnitEvent"
import { PlayerUnitEvents } from "../../../fields/events/PlayerUnitEvents"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { PlayerUnitAttackedEventResponse } from "./response/PlayerUnitAttackedEventResponse"
import { PlayerUnitChangeOwnerEventResponse } from "./response/PlayerUnitChangeOwnerEventResponse"
import { PlayerUnitConstructCancelEventResponse } from "./response/PlayerUnitConstructCancelEventResponse"
import { PlayerUnitConstructFinishEventResponse } from "./response/PlayerUnitConstructFinishEventResponse"
import { PlayerUnitConstructStartEventResponse } from "./response/PlayerUnitConstructStartEventResponse"
import { PlayerUnitDamageEventResponse } from "./response/PlayerUnitDamageEventResponse"
import { PlayerUnitDeathEventResponse } from "./response/PlayerUnitDeathEventResponse"
import { PlayerUnitDecayEventResponse } from "./response/PlayerUnitDecayEventResponse"
import { PlayerUnitDetectedEventResponse } from "./response/PlayerUnitDetectedEventResponse"
import { PlayerUnitEventResponse } from "./response/PlayerUnitEventResponse"
import { PlayerUnitHeroLevelEventResponse } from "./response/PlayerUnitHeroLevelEventResponse"
import { PlayerUnitHeroRevivableEventResponse } from "./response/PlayerUnitHeroRevivableEventResponse"
import { PlayerUnitHeroReviveEventResponse } from "./response/PlayerUnitHeroReviveEventResponse"
import { PlayerUnitHeroSkillEventResponse } from "./response/PlayerUnitHeroSkillEventResponse"
import { PlayerUnitIssuedOrderEventResponse } from "./response/PlayerUnitIssuedOrderEventResponse"
import { PlayerUnitIssuedPointOrderEventResponse } from "./response/PlayerUnitIssuedPointOrderEventResponse"
import { PlayerUnitIssuedTargetOrderEventResponse } from "./response/PlayerUnitIssuedTargetOrderEventResponse"
import { PlayerUnitItemEventResponse } from "./response/PlayerUnitItemEventResponse"
import { PlayerUnitLoadedEventResponse } from "./response/PlayerUnitLoadedEventResponse"
import { PlayerUnitRescuedEventResponse } from "./response/PlayerUnitRescuedEventResponse"
import { PlayerUnitResearchEventResponse } from "./response/PlayerUnitResearchEventResponse"
import { PlayerUnitSellEventResponse } from "./response/PlayerUnitSellEventResponse"
import { PlayerUnitSellItemEventResponse } from "./response/PlayerUnitSellItemEventResponse"
import { PlayerUnitSpellEventResponse } from "./response/PlayerUnitSpellEventResponse"
import { PlayerUnitSummonEventResponse } from "./response/PlayerUnitSummonEventResponse"
import { PlayerUnitTrainEventResponse } from "./response/PlayerUnitTrainEventResponse"
import { PlayerUnitTrainFinishEventResponse } from "./response/PlayerUnitTrainFinishEventResponse"

declare function TriggerRegisterPlayerUnitEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerUnitEvent: playerunitevent,
    filter: boolexpr | null
): event

const getPlayerUnitTriggerClass = <
    T extends PlayerUnitEventResponse,
    R extends (response: T) => void
>(
    event: PlayerUnitEvent,
    func: () => T
) =>
    class extends Trigger {
        protected event: PlayerUnitEvent

        public register(whichPlayer: MapPlayer, filterFunc?: codeboolexpr, callback?: R) {
            if (callback) {
                this.addEventListener(callback)
            }
            const filter = Condition(filterFunc)
            const result = PlayerUnitEvent.fromHandle(
                (<unknown>(
                    TriggerRegisterPlayerUnitEvent(
                        this.getHandle() as trigger,
                        whichPlayer.getHandle() as player,
                        event.getHandle() as playerunitevent,
                        filter
                    )
                )) as playerunitevent
            )
            DestroyCondition(filter)
            return result
        }

        public constructor(whichPlayer: MapPlayer, filterFunc?: codeboolexpr, callback?: R) {
            super()
            this.event = event
            if (callback) {
                this.register(whichPlayer, filterFunc, callback)
            }
        }

        public getEvent() {
            return this.event
        }

        public addEventListener(callback: R) {
            this.addAction(() => callback(func()))
        }
    }

const defaultResponse = () => new PlayerUnitEventResponse()

export const PlayerUnitHeroLevelTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.HERO_LEVEL,
    () => new PlayerUnitHeroLevelEventResponse()
)
export const PlayerUnitHeroSkillTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.HERO_SKILL,
    () => new PlayerUnitHeroSkillEventResponse()
)
export const PlayerUnitHeroRevivableTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.HERO_REVIVABLE,
    () => new PlayerUnitHeroRevivableEventResponse()
)
export const PlayerUnitHeroReviveStartTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.HERO_REVIVE_START,
    () => new PlayerUnitHeroReviveEventResponse()
)
export const PlayerUnitHeroReviveCancelTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.HERO_REVIVE_CANCEL,
    () => new PlayerUnitHeroReviveEventResponse()
)
export const PlayerUnitHeroReviveFinishTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.HERO_REVIVE_FINISH,
    () => new PlayerUnitHeroReviveEventResponse()
)
export const PlayerUnitAttackedTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.ATTACKED,
    () => new PlayerUnitAttackedEventResponse()
)
export const PlayerUnitRescuedTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.RESCUED,
    () => new PlayerUnitRescuedEventResponse()
)
export const PlayerUnitDeathTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.DEATH,
    () => new PlayerUnitDeathEventResponse()
)
export const PlayerUnitDecayTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.DECAY,
    () => new PlayerUnitDecayEventResponse()
)
export const PlayerUnitSelectedTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SELECTED,
    defaultResponse
)
export const PlayerUnitConstructStartTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.CONSTRUCT_START,
    () => new PlayerUnitConstructStartEventResponse()
)
export const PlayerUnitConstructCancelTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.CONSTRUCT_CANCEL,
    () => new PlayerUnitConstructCancelEventResponse()
)
export const PlayerUnitConstructFinishTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.CONSTRUCT_FINISH,
    () => new PlayerUnitConstructFinishEventResponse()
)
export const PlayerUnitResearchStartTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.RESEARCH_START,
    () => new PlayerUnitResearchEventResponse()
)
export const PlayerUnitResearchCancelTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.RESEARCH_CANCEL,
    () => new PlayerUnitResearchEventResponse()
)
export const PlayerUnitResearchFinishTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.RESEARCH_FINISH,
    () => new PlayerUnitResearchEventResponse()
)
export const PlayerUnitTrainStartTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.TRAIN_START,
    () => new PlayerUnitTrainEventResponse()
)
export const PlayerUnitTrainCancelTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.TRAIN_CANCEL,
    () => new PlayerUnitTrainEventResponse()
)
export const PlayerUnitTrainFinishTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.TRAIN_FINISH,
    () => new PlayerUnitTrainFinishEventResponse()
)
export const PlayerUnitDetectedTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.DETECTED,
    () => new PlayerUnitDetectedEventResponse()
)
export const PlayerUnitSummonTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SUMMON,
    () => new PlayerUnitSummonEventResponse()
)
export const PlayerUnitLoadedTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.LOADED,
    () => new PlayerUnitLoadedEventResponse()
)
export const PlayerUnitSellTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SELL,
    () => new PlayerUnitSellEventResponse()
)
export const PlayerUnitSellItemTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SELL_ITEM,
    () => new PlayerUnitSellItemEventResponse()
)
export const PlayerUnitChangeOwnerTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.CHANGE_OWNER,
    () => new PlayerUnitChangeOwnerEventResponse()
)
export const PlayerUnitDropItemTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.DROP_ITEM,
    () => new PlayerUnitItemEventResponse()
)
export const PlayerUnitPickupItemTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.PICK_UP_ITEM,
    () => new PlayerUnitItemEventResponse()
)
export const PlayerUnitUseItemTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.USE_ITEM,
    () => new PlayerUnitItemEventResponse()
)
export const PlayerUnitIssuedOrderTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.ISSUED_ORDER,
    () => new PlayerUnitIssuedOrderEventResponse()
)
export const PlayerUnitIssuedPointOrderTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.ISSUED_POINT_ORDER,
    () => new PlayerUnitIssuedPointOrderEventResponse()
)
export const PlayerUnitIssuedTargetOrderTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.ISSUED_TARGET_ORDER,
    () => new PlayerUnitIssuedTargetOrderEventResponse()
)
export const PlayerUnitSpellChannelTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SPELL_CHANNEL,
    () => new PlayerUnitSpellEventResponse()
)
export const PlayerUnitSpellCastTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SPELL_CAST,
    () => new PlayerUnitSpellEventResponse()
)
export const PlayerUnitSpellEffectTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SPELL_EFFECT,
    () => new PlayerUnitSpellEventResponse()
)
export const PlayerUnitSpellFinishTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SPELL_FINISH,
    () => new PlayerUnitSpellEventResponse()
)
export const PlayerUnitSpellEndCastTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.SPELL_END_CAST,
    () => new PlayerUnitSpellEventResponse()
)
export const PlayerUnitDamagedTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.DAMAGED,
    () => new PlayerUnitDamageEventResponse()
)
export const PlayerUnitDamagingTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.DAMAGING,
    () => new PlayerUnitDamageEventResponse()
)
export const PlayerUnitDeselectedTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.DESELECTED,
    defaultResponse
)
export const PlayerUnitHiddenTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.HIDDEN,
    defaultResponse
)
export const PlayerUnitPawnItemTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.PAWN_ITEM,
    () => new PlayerUnitSellItemEventResponse()
)
export const PlayerUnitUpgradeStartTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.UPGRADE_START,
    defaultResponse
)
export const PlayerUnitUpgradeCancelTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.UPGRADE_CANCEL,
    defaultResponse
)
export const PlayerUnitUpgradeFinishTrigger = getPlayerUnitTriggerClass(
    PlayerUnitEvents.UPGRADE_FINISH,
    defaultResponse
)
