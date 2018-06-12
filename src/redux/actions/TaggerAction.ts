import GenericAction from "./GenericAction";
import TagModel from "../../components/tagcloud/model/TagModel";

export enum TaggerActionType {
	TAG_CLICKED = "TAG_CLICKED",
	CHANGE_AVAILABLE_TAG_SET = "CHANGE_AVAILABLE_TAG_SET",
}

export interface TaggerActionPayload {
	clickedTag: TagModel;
	availableTags: Array<TagModel>;
}

export interface TaggerAction extends GenericAction<TaggerActionPayload, TaggerActionType> {}

export const taggerActions = {
	updateSelectedTag: (tag: TagModel) => ({
		type: TaggerActionType.TAG_CLICKED,
		payload: {
			clickedTag: tag
		}
	}),
	updateAvailableTags: (tags: Array<TagModel>) => ({
		type: TaggerActionType.CHANGE_AVAILABLE_TAG_SET,
		payload: {
			availableTags: tags
		}
	})
};