import GenericAction from "./GenericAction";
import { Liquid } from "../../model/Liquid";

export enum MixerActionType {
	MIXER_CHANGED = "MIXER_CHANGED",
	// TODO: probably should extend this to more granular actions
}

export interface MixerActionPayload {
	changedLiquids: Array<Liquid>;
}

export interface MixerAction extends GenericAction<MixerActionPayload, MixerActionType> {}

export const mixerActions = {
	mixerChanged: (changedLiquids: Array<Liquid>) => ({
		type: MixerActionType.MIXER_CHANGED,
		payload: {
			changedLiquids: changedLiquids
		}
	})
};