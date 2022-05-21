export const charRangeEntryIsValid = (someStr: string): boolean => {
  let strToTest: string = someStr;
  //   strToTest = strToTest.replaceAll('\\,', '');
  //   strToTest = strToTest.replaceAll('\\,', '');
  //   strToTest = strToTest.replaceAll(',,', '');

  //   if (strToTest === '\\') {
  //     return true;
  //   }
  //   if (strToTest.length < 1) {
  //     return true;
  //   }

  // tests for, and fails on, finding a space char. Remove if you want to allow spaces in char ranges.
  if (someStr.includes(' ')) {
    return false;
  }

  const lastIndex: number = strToTest.length - 1;

  // various edge cases
  if (
    strToTest[0] === ',' ||
    (strToTest[lastIndex] === ',' && strToTest[lastIndex - 1] !== '\\') ||
    strToTest.includes(',,,') ||
    (strToTest[lastIndex] === '-' && isValidSingleChar(strToTest[lastIndex - 1]))
  ) {
    return false;
  }

  if (strToTest === '\\') {
    return false;
  }
  if (strToTest.length === 1) {
    return true;
  }

  let i: number = 0; // WHILE STARTS HERE
  while (i < strToTest.length) {
    const firstChar: string = strToTest[i];
    const secondChar: string = strToTest[i + 1];
    const notLastIdx: boolean = i !== lastIndex;

    // bad formatting
    if (isValidSingleChar(firstChar) && secondChar && secondChar !== ',' && secondChar !== '-') {
      return false;
    }

    // handles spaces (more) FIX THESE
    if (!isValidSingleChar(firstChar)) {
      return false;
    }
    if (isOddChar(firstChar)) {
      if (notLastIdx && secondChar !== ',') {
        return false;
      } else {
        i += 2;
        continue;
      }
    }

    // handle escape chars

    // handle single w/ comma
    if (notLastIdx && secondChar === ',' && i + 1 !== lastIndex) {
      i += 2;
      continue;
    }

    // is a 3-set, ex. "a-e" or "6-9,"
    if (lastIndex - i >= 2 && secondChar === '-') {
      const thirdChar: string = strToTest[i + 2];

      if (!isEngAlphNumChar(firstChar) || !isEngAlphNumChar(thirdChar)) {
        // either left of right side is not a number or alphabetic char
        return false;
      } else if (
        // if the first and third chars are not both number strings or both alphabetic chars
        (isEnglishAlphaChar(firstChar) && !isEnglishAlphaChar(thirdChar)) ||
        (isNumberChar(firstChar) && !isNumberChar(thirdChar))
      ) {
        return false;
      } else if (firstChar.charCodeAt(0) >= thirdChar.charCodeAt(0)) {
        // returns false if first and third char are not is ascending order
        return false;
      } else if (strToTest[i + 3] && strToTest[i + 3] !== ',') {
        // return false if 1st through 3rd is valid, && the string is not finished, && the next char is not a comma
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

    // end of While iteration
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

const isOddChar = (char: string = ''): boolean => {
  return '*/:()_-+<>=!@#[]?&^{}$%\'."'.includes(char);
};

const isValidSingleChar = (char: string = ''): boolean => {
  return isEngAlphNumChar(char) || isOddChar(char);
};
