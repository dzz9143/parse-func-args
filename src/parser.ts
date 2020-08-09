import { parse, Node } from 'acorn';
import { recursive } from 'acorn-walk';
import debug from 'debug';

const dlog = debug('func-arg-parser');

/* eslint-disable @typescript-eslint/no-empty-interface */
interface PatternNode extends Node {}

interface IdentifierNode extends PatternNode {
    type: 'Identifier';
    name: string;
}

interface FunctionNode extends Node {
    id: IdentifierNode;
    params: PatternNode[];
}

export interface Arg {
    name: string;
    type: string;
}

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
                dlog('param node:', param);
                switch (param.type) {
                    case 'Identifier':
                        const p = param as IdentifierNode;
                        state.result.push({
                            name: p.name,
                            type: 'simple',
                        });
                        break;
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
