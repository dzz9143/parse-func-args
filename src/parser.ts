import { parse } from 'acorn';
import { recursive } from 'acorn-walk';
import debug from 'debug';
import { FunctionNode, Arg } from './types';

const dlog = debug('func-arg-parser');

function parseFuncArgs(func: Function): Arg[] {
    if (typeof func !== 'function') {
        throw new TypeError('parse: input func must be a function type');
    }

    const ast = parse(func.toString());
    const state = {
        result: [] as Arg[],
    };
    recursive(ast, state, {
        // Only care about first Function node
        Function(func: FunctionNode, state) {
            for (const param of func.params) {
                console.log('param:', param);
                switch (param.type) {
                    case 'Identifier':
                    // {
                    //     const p = param as IdentifierNode;
                    //     state.result.push({
                    //         name: p.name,
                    //         type: 'simple',
                    //     });
                    // }
                    // break;
                    case 'ObjectPattern':
                    case 'AssignmentPattern':
                    // c(param, [], c);
                    // {
                    //     const p = param as any;
                    //     p.properties.forEach((n: any) => {
                    //         dlog('key: ', n.key);
                    //         dlog('value:', n.value);
                    //     });
                    // }
                    // break;
                    default:
                        state.result.push({
                            name: undefined,
                            type: 'unknown',
                        });
                }
            }
        },
    });
    return state.result;
}

export { parseFuncArgs };
