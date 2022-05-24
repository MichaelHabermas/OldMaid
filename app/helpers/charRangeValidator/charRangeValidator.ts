export const charRangeEntryIsValid = (someStr: string): boolean => {
   let arrayToTest: string[] = someStr.split('');

   // tests for, and fails on, finding a space char. Remove if you want to allow spaces in char ranges.
   if (someStr.includes(' ')) return false;

   const lastIndex: number = arrayToTest.length - 1;

   // various edge cases
   if (
      arrayToTest[0] === ',' ||
      (arrayToTest[lastIndex] === ',' && arrayToTest[lastIndex - 1] !== '\\') ||
      arrayToTest.includes(',,,') ||
      (arrayToTest[lastIndex] === '-' && isValidSingleChar(arrayToTest[lastIndex - 1]))
   ) {
      return false;
   }

   //   if (arrayToTest === '\\') return false;
   if (arrayToTest.length === 1) return true;

   let i: number = 0; //  - - - - - - - - - - - - - - - WHILE STARTS HERE
   while (i < arrayToTest.length) {
      const firstChar: string = arrayToTest[i];
      const secondChar: string = arrayToTest[i + 1];
      const notLastIdx: boolean = i !== lastIndex;

      // bad formatting
      if (isValidSingleChar(firstChar) && secondChar && secondChar !== ',' && secondChar !== '-') {
         return false;
      }

      // handles spaces (more) FIX THESE
      if (!isValidSingleChar(firstChar)) return false;

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
         const thirdChar: string = arrayToTest[i + 2];

         // either left of right side is not a number or alphabetic char
         if (!isEngAlphNumChar(firstChar) || !isEngAlphNumChar(thirdChar)) return false;
         // the first and third chars are not both number strings or both alphabetic chars
         else if (
            (isEnglishAlphaChar(firstChar) && !isEnglishAlphaChar(thirdChar)) ||
            (isNumberChar(firstChar) && !isNumberChar(thirdChar))
         )
            return false;
         // the first and third char are not equal or in ascending order
         else if (firstChar.charCodeAt(0) > thirdChar.charCodeAt(0)) return false;
         // the 1st through 3rd chars are valid, && the string is not finished, && the next char is not a comma
         else if (arrayToTest[i + 3] && arrayToTest[i + 3] !== ',') return false;

         // skip to next char after the comma
         i += 4;
         continue;
      }

      // last char
      if (i === lastIndex) return true;

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
