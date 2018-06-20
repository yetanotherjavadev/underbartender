// filterType defines the filter filterType (e.g. COUNTRY_OF_ORIGIN, COCKTAIL_COMPONENT, STRENGTH_GROUP, etc.)
export enum FilterType {
	COUNTRY_OF_ORIGIN = "COUNTRY_OF_ORIGIN",
	NUMBER_OF_COMPONENTS = "NUMBER_OF_COMPONENTS",
	COCKTAIL_COMPONENT = "COCKTAIL_COMPONENT",
	STRENGTH_GROUP = "STRENGTH_GROUP", // "strength group" is like 0-5, 6-10, 11-15, etc.
	COCKTAIL_TYPE = "COCKTAIL_TYPE", // like "male", "summer", "party", etc.
	QUICK_FILTER = "QUICK_FILTER"// special case of
}