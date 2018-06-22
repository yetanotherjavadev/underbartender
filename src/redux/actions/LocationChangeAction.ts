import { LOCATION_CHANGE } from "connected-react-router";

export class LocationChangeAction {
	type: string = LOCATION_CHANGE;
	payload: {location: Location};
}
