import { createContext } from "react";
import { iSearchCriteria } from "./SearchCriteria";
import { Color, Size } from "../Products/Product";
import Colors from "./Colors";

const searchCriteriaContext = createContext<iSearchCriteria>({
  colors: [],
  sizes: [],
});

export default function SearchCriteriaProvider(children) {
  return;
}

export type SearchCriteriaAction =
  | { type: "rangeFrom"; from: number }
  | { type: "rangeTo"; to: number }
  | { type: "addColor"; color: Color }
  | { type: "removeColor"; color: Color }
  | { type: "addSize"; size: Size }
  | { type: "removeSize"; size: Size };

export function searchCriteriaReducer(
  oldCriteria: iSearchCriteria,
  action: SearchCriteriaAction
): iSearchCriteria {
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
