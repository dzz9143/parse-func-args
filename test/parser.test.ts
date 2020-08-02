import { parseFuncArgs } from '../src/';

describe('parse should', () => {
    it('be able to get the argument list from a function declaration', () => {
        function test(a: number, b: number, c: number): number {
            return a + b + c;
        }

        parseFuncArgs(test);
    });

    it('be able to get the argument list from a arrow function', () => {
        const test = (a: number, b: number, c: number): number => {
            return a + b + c;
        };
        parseFuncArgs(test);
    });

    it('be able to get the argument list from function expression', () => {
        const test = function foo(a: number, b: number, c: number): number {
            return a + b + c;
        };
        parseFuncArgs(test);
    });

    it('be able to get the argument list from class contructor function', () => {
        class Test {
            constructor(a, b, c) {
                return a + b + c;
            }
        }
        parseFuncArgs(Test);
    });
});
