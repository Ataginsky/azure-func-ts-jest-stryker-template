# Template for Azure Function in TypeScript with jest and Stryker

- Write functions in [TypeScript](https://www.typescriptlang.org)
- Write tests in TypeScript with type check ([ts-jest](https://kulshekhar.github.io/ts-jest/)) and run with [jest](https://jestjs.io/docs/configuration)
- Run mutation test with [Stryker](https://stryker-mutator.io/docs/stryker/introduction)

## Install
- `npm i`

## Build
- Azure do it for you
- Jest run `npm run build` before running test suites
- Idem with Stryker

## Test
- `npm run test`: To run your **jest** test suites
- `npm run test:mutation`: To run mutation test with **Stryker**
> If you have problem running Stryker, try `npm i --save-dev @stryker-mutator/core`

## License
- [MIT Licence](LICENSE)