import type { Config } from '@jest/types';

// Sync object
// const config: Config.InitialOptions = {
//   transform: {
//     '.(ts|tsx)': 'ts-jest',
//   },
//   testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
//   moduleFileExtensions: ['ts', 'tsx', 'js'],
//   verbose: true,
// };
// export default config;

// Or async function
export default async (): Promise<Config.InitialOptions> => {
   return {
      transform: {
         '.(ts|tsx)': 'ts-jest',
      },
      testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
      verbose: true,
   };
};
