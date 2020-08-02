import { parse } from 'acorn';
import { recursive } from 'acorn-walk';

function parseFuncArgs(func: Function): string[] {
    if (typeof func !== 'function') {
        throw new TypeError('parse: input func must be a function type');
    }

    const ast = parse(func.toString());
    const state: any = { args: [] };
    recursive(ast, state, {
        // we only care about first Function node
        Function(node: any, state) {
            for (const param of node.params) {
                state.args.push(param.name);
            }
        },
    });
    console.debug('args:', state.args);
    return state.args;
}

export { parseFuncArgs };
