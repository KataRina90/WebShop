import { ISearchCriteria } from "./SearchCriteria";

export type SearchCriteriaAction =
  | { type: "rangeFrom"; from: number }
  | { type: "rangeTo"; to: number }
  | { type: "addColor"; color: string }
  | { type: "removeColor"; color: string }
  | { type: "addSize"; size: string }
  | { type: "removeSize"; size: string };

export function searchCriteriaReducer(
  oldCriteria: ISearchCriteria,
  action: SearchCriteriaAction
): ISearchCriteria {
  switch (action.type) {
    case "rangeFrom": {
      return {
        ...oldCriteria,
        priceRange: { ...oldCriteria.priceRange, from: action.from },
      };
    }
    case "rangeTo": {
      return {
        ...oldCriteria,
        priceRange: { ...oldCriteria.priceRange, to: action.to },
      };
    }
    case "addColor": {
      return {
        ...oldCriteria,
        colors: [...oldCriteria.colors, action.color],
      };
    }

    case "removeColor":
      return {
        ...oldCriteria,
        colors: oldCriteria.colors.filter((color) => color !== action.color),
      };
    case "addSize": {
      return {
        ...oldCriteria,
        sizes: [...oldCriteria.sizes, action.size],
      };
    }

    case "removeSize":
      return {
        ...oldCriteria,
        sizes: oldCriteria.sizes.filter((size) => size !== action.size),
      };

    default:
      return oldCriteria;
  }
}
