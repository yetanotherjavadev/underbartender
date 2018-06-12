import { Action } from "redux";

/**
 * Generic action that is parametrized via payload and type
 *
 * Every custom Action should extend this GenericAction with appropriate data type
 *
 * Payload - type of action payload.
 * Type - action type (usually just a string identifier as described in Redux docs)
 */
export default interface GenericAction<Payload, Type> extends Action<Type> {
	payload: Payload;
	error?: string;
}