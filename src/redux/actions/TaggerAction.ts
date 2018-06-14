import GenericAction from "./GenericAction";
import TagModel from "../../components/tagcloud/model/TagModel";

export enum TaggerActionType {
	TAG_CLICKED = "TAG_CLICKED",
}

export interface TaggerActionPayload {
	clickedTag: TagModel;
}

export interface AnyTaggerAction extends GenericAction<TaggerActionPayload, TaggerActionType> {}

export const taggerAction = {
	updateSelectedTag: (tag: TagModel) => ({
		type: TaggerActionType.TAG_CLICKED,
		payload: {
			clickedTag: tag
		}
	})
};