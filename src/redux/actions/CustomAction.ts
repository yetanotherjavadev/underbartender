import { Action } from "redux";

export interface CustomAction<T> extends Action<T> {
	payload: T;
}