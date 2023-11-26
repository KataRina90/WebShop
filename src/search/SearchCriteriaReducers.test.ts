
import { ISearchCriteria } from "./SearchCriteria";
import {searchCriteriaReducer as reducer} from "./SearchCriteriaReducers"

let initState:ISearchCriteria = {
    colors:[],
    sizes:[]
}
describe('search criteria  reducer', () => {
    it('should handle "rangeFrom"',
    () => {
        expect(reducer(initState, {type:"rangeFrom", from:100}))
        .toEqual({
            priceRange:{
                from:100
            },
            colors:[],
            sizes:[]
        } as ISearchCriteria);
      });
    it('should handle "rangeTo"', () => {
        expect(reducer(initState, {type:"rangeFrom", from:100}))
        .toEqual({
            priceRange:{
                from:100
            },
            colors:[],
            sizes:[]
        } as ISearchCriteria);
      });
      /*
    it('should handle "addColor"');
    it('should handle "removeColor"');
    it('should handle "addColor"');
    it('should handle "removeColor"');
    */
  });

test('demo', () => {
    expect(true).toBe(true)
  })
