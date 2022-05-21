import { charRangeEntryIsValid } from './charRangeValidator';

// can see
// "*/:,()_-+<>=!@#[]?&^{}$%.'"

describe('testing charRange validator', () => {
  test('sanity test', () => {
    expect(1).toEqual(1);
    expect(1).not.toEqual(2);
  });

  test('charRange simple true', () => {
    expect(charRangeEntryIsValid('')).toBe(true);
    expect(charRangeEntryIsValid('a')).toBe(true);
    expect(charRangeEntryIsValid('a-f')).toBe(true);
    expect(charRangeEntryIsValid('D-P')).toBe(true);
    expect(charRangeEntryIsValid('2-8')).toBe(true);
    expect(charRangeEntryIsValid('F,2-8')).toBe(true);
    expect(charRangeEntryIsValid('a,t,E,O,j,3,0,@,!,x-z')).toBe(true);
    expect(charRangeEntryIsValid('0-9,a')).toBe(true);
    expect(charRangeEntryIsValid('a-f,0-9')).toBe(true);
    expect(charRangeEntryIsValid('d-h,3-8,A-F')).toBe(true);
    expect(charRangeEntryIsValid('d-h,3-5,X,Z,A-F,8,9')).toBe(true);
  });

  test('charRange simple false', () => {
    expect(charRangeEntryIsValid('aa')).toBe(false);
    expect(charRangeEntryIsValid('aa-p')).toBe(false);
    expect(charRangeEntryIsValid('a-ff')).toBe(false);
    expect(charRangeEntryIsValid('a-7')).toBe(false);
    expect(charRangeEntryIsValid('a-')).toBe(false);
    expect(charRangeEntryIsValid('-a-')).toBe(false);
    expect(charRangeEntryIsValid('-a')).toBe(false);
    expect(charRangeEntryIsValid('-a-7')).toBe(false);
    expect(charRangeEntryIsValid('a-7-')).toBe(false);
    expect(charRangeEntryIsValid('a-7,-')).toBe(false);
    expect(charRangeEntryIsValid('8-p')).toBe(false);
    expect(charRangeEntryIsValid('g-a')).toBe(false);
    expect(charRangeEntryIsValid('7-3')).toBe(false);
    expect(charRangeEntryIsValid('33,D-P')).toBe(false);
    expect(charRangeEntryIsValid('09,a')).toBe(false);
    expect(charRangeEntryIsValid('a-f, 0-9')).toBe(false);
    expect(charRangeEntryIsValid(' a-f,0-9')).toBe(false);
    expect(charRangeEntryIsValid('a-f,0-9 ')).toBe(false);
    expect(charRangeEntryIsValid('d-h,3-8,a-F,I,9,Z,0')).toBe(false);
  });

  test('charRange escape chars and commas true', () => {
    // expect(charRangeEntryIsValid('\\,')).toBe(true); // check
    expect(charRangeEntryIsValid('a-g,,,0-9')).toBe(true); // check
    expect(charRangeEntryIsValid('a-g,\\,0-9')).toBe(true);
    // expect(charRangeEntryIsValid('\\\\')).toBe(true); // what to do here?
  });

  test('charRange escape chars and comma false', () => {
    expect(charRangeEntryIsValid(',,')).toBe(false);
    expect(charRangeEntryIsValid('a,,,a')).toBe(false); // check
    expect(charRangeEntryIsValid('a,')).toBe(false);
    expect(charRangeEntryIsValid(',a')).toBe(false);
    expect(charRangeEntryIsValid('a-g,\\,,0-9')).toBe(false);
  });

  test('charRange oddballs true', () => {
    expect(charRangeEntryIsValid('*,/,:,(,),_,-,+,<,>,=,!,@,#,[,],?,&,^,{,},$,%,.')).toBe(true);
    expect(charRangeEntryIsValid("a,',b")).toBe(true);
    expect(charRangeEntryIsValid('a,",b')).toBe(true); // eyes
  });

  test('charRange oddballs false', () => {
    expect(charRangeEntryIsValid('a-*')).toBe(false);
    expect(charRangeEntryIsValid('*-*')).toBe(false);
    expect(charRangeEntryIsValid('*-a')).toBe(false);
  });

  test('charRange spaces and other questions', () => {
    expect(charRangeEntryIsValid(' ')).toBe(false);
    expect(charRangeEntryIsValid(' ')).toEqual(charRangeEntryIsValid('a, ,a'));
    expect(charRangeEntryIsValid('a, ')).toEqual(charRangeEntryIsValid(' ,a'));
    expect(charRangeEntryIsValid('\\,d-p, ,,')).toBe(false);
  });
});
