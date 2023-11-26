
import { ifAnySatsifies } from "./SearchCriteria"


describe('test search criteria for size and color', () => {

  it('should return true for no selected colors', () => {
    expect(ifAnySatsifies([], ['yellow', 'green'])).toBe(true)
  });

  it('should return true',
    () => {

      expect(ifAnySatsifies(['red', 'green'], ['yellow', 'green'])).toBe(true)

    });

  it('should return false',
    () => {

      expect(ifAnySatsifies(['red', 'black'], ['yellow', 'green'])).toBe(false)

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
