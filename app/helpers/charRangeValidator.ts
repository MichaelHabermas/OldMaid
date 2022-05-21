export const charRangeEntryIsValid = (someStr: string): boolean => {
  let strToTest: string = someStr;
  strToTest = strToTest.replaceAll('\\,', '');
  strToTest = strToTest.replaceAll('\\,', '');
  strToTest = strToTest.replaceAll(',,', '');

  if (strToTest === '\\') {
    return true;
  }
  if (strToTest.length < 1) {
    return true;
  }

  const lastIndex: number = strToTest.length - 1;
  const oddChars: string = "*/:()_-+<>=!@#[]?&^{}$%.'";

  if (
    strToTest[0] === ',' ||
    (strToTest[lastIndex] === ',' && strToTest[lastIndex - 1] !== '\\') ||
    strToTest.includes(',,,')
  ) {
    return false;
  }

  if (strToTest === '\\') {
    return false;
  }
  if (strToTest.length === 1) {
    return true;
  }

  let i: number = 0;
  while (i < strToTest.length) {
    const firstChar: string = strToTest[i];
    const secondChar: string = strToTest[i + 1];

    // bad formatting
    if (isEngAlphNumChar(firstChar) && secondChar && secondChar !== ',' && secondChar !== '-') {
      return false;
    }

    // handles spaces (more)
    if (!isEngAlphNumChar(firstChar) && !oddChars.includes(firstChar)) {
      return false;
    } else if (!isEngAlphNumChar(firstChar) && oddChars.includes(firstChar)) {
      if (i !== lastIndex && secondChar !== ',') {
        return false;
      } else {
        i += 2;
        continue;
      }
    }

    // last char
    if (i === lastIndex) {
      return true;
    }

    // handle single w/ comma DONE
    if (i !== lastIndex && secondChar === ',' && i + 1 != lastIndex) {
      i += 2;
      continue;
    }

    // is a 3-set, ex. a-e or 6-9 DONE
    if (lastIndex - i >= 2 && secondChar === '-') {
      const thirdChar: string = strToTest[i + 2];

      if (
        (isEnglishAlphaChar(firstChar) && !isEnglishAlphaChar(thirdChar)) ||
        (isNumberChar(firstChar) && !isNumberChar(thirdChar))
      ) {
        return false;
      } else if (firstChar.charCodeAt(0) >= thirdChar.charCodeAt(0)) {
        return false;
      }

      i += 3;
      continue;
    }

    // end of iteration
    i++;
  }

  return true;
};

const isEnglishAlphaChar = (char: string = ''): boolean => {
  return /^[A-Za-z]*$/.test(char) && char.length === 1;
};

const isNumberChar = (char: string = ''): boolean => {
  return /^[0-9]*$/.test(char) && char.length === 1;
};

const isEngAlphNumChar = (char: string = ''): boolean => {
  return isEnglishAlphaChar(char) || isNumberChar(char);
};

// TODO may not need
const subStringCount = (main_str: string, sub_str: string): number => {
  main_str += '';
  sub_str += '';

  if (sub_str.length <= 0) {
    return main_str.length + 1;
  }

  const subStr: string = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
};

const test1: string = 'a'; // true
const test2: string = 'aa'; // false
const test3: string = 'A-G'; // true
const test4: string = 'a-e,1-7'; // true
const test5: string = 'a-e, 1-7'; // false
const test6: string = ',a'; // false
const test7: string = ','; // false
const test8: string = '\\'; // true ????
const test9: string = 'G-A'; // false
const test10: string = 'A-F,g-o,0-9,X,Y,Z,-,\\,,'; // true
const test11: string = ''; // true
const test12: string = 'a-7'; // false
const test13: string = '8-u'; // false
const test14: string = ' '; // true
const test15: string = 'a,7'; // true
const test16: string = '\\,'; // true
const test17: string = 'a,'; // false
const test18: string = '!,@,#,$,%,^,&,*,(,),_,+,-,=,[,],{,},|,<,>,?,.,/,:,",;'; // false
const test19: string = "*,/,:,(,),_,-,+,<,>,=,!,@,#,[,],?,&,^,{,},$,%,.,'"; // true
const test20: string = 'a-mz'; // false

// can see
// "*/:,()_-+<>=!@#[]?&^{}$%.'"

// console.log('1', charRangeEntryIsValid(test1), test1); // true
// console.log('2', charRangeEntryIsValid(test2), test2); // false
// console.log('3', charRangeEntryIsValid(test3), test3); // true
// console.log('4', charRangeEntryIsValid(test4), test4); // true
// console.log('5', charRangeEntryIsValid(test5), test5); // false
// console.log(' - - - ');
// console.log('6', charRangeEntryIsValid(test6), test6); // false
// console.log('7', charRangeEntryIsValid(test7), test7); // false
// console.log('8', charRangeEntryIsValid(test8), test8); // true ???
// console.log('9', charRangeEntryIsValid(test9), test9); // false
// console.log('10', charRangeEntryIsValid(test10), test10); // true ??? THIS
// console.log(' - - - ');
// console.log('11', charRangeEntryIsValid(test11), test11); // true
// console.log('12', charRangeEntryIsValid(test12), test12); // false
// console.log('13', charRangeEntryIsValid(test13), test13); // false
// console.log('14', charRangeEntryIsValid(test14), test14); // true
// console.log('15', charRangeEntryIsValid(test15), test15); // true
// console.log(' - - - ');
// console.log('16', charRangeEntryIsValid(test16), test16); // true
// console.log('17', charRangeEntryIsValid(test17), test17); // false
// console.log('18', charRangeEntryIsValid(test18), test18); // false
// console.log('19', charRangeEntryIsValid(test19), test19); // true
// console.log('20', charRangeEntryIsValid(test20), test20); // false
// console.log(' - - - ');
