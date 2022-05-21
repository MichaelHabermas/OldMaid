import { charRangeEntryIsValid } from './charRangeValidator';

describe('testing charRange validator', () => {
  test('sanity test', () => {
    expect(1).toEqual(1);
    expect(1).not.toEqual(2);
  });

  test('charRange validator', () => {
    expect(charRangeEntryIsValid('a')).toBe(true);
    expect(charRangeEntryIsValid(',')).toBe(false);
  });
});
