import { Action } from "redux";

/**
 * Generic action that is parametrized via payload and typeId
 *
 * Every custom Action should extend this GenericAction with appropriate data typeId
 *
 * Payload - typeId of action payload.
 * Type - action typeId (usually just a string identifier as described in Redux docs)
 */
export default interface GenericAction<Payload, Type> extends Action<Type> {
	payload: Payload;
	error?: string;
}