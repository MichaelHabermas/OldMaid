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

    // handle single w/ comma
    if (i !== lastIndex && secondChar === ',' && i + 1 != lastIndex) {
      i += 2;
      continue;
    }

    // is a 3-set, ex. "a-e" or "6-9,"
    if (lastIndex - i >= 2 && secondChar === '-') {
      const thirdChar: string = strToTest[i + 2];

      // either left of right side is NaN or alphabetic char
      if (!isEngAlphNumChar(firstChar) || !isEngAlphNumChar(thirdChar)) {
        return false;
      }

      // if the first and third chars are not both number strings or both alphabetic chars
      if (
        (isEnglishAlphaChar(firstChar) && !isEnglishAlphaChar(thirdChar)) ||
        (isNumberChar(firstChar) && !isNumberChar(thirdChar))
      ) {
        return false;
      }

      // returns false if first and third char are not is ascending order
      if (firstChar.charCodeAt(0) >= thirdChar.charCodeAt(0)) {
        return false;
      }

      // return false if 1st through 3rd is valid, && the string is not finished, && the next char is not a comma
      if (strToTest[i + 3] && strToTest[i + 3] !== ',') {
        return false;
      }

      // skip to next char after the comma
      i += 4;
      continue;
    }

    // last char
    if (i === lastIndex) {
      return true;
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
