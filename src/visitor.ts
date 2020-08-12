import { Visitor, ObjectPatternNode, AssignmentPatternNode, PropertyNode, IdentifierNode } from './types';

export const visitor: Visitor = {};

visitor.ObjectPattern = (node: ObjectPatternNode, path, c): void => {
    node.properties.forEach((prop) => {
        c(prop, path, c);
    });
};

visitor.AssignmentPattern = (node: AssignmentPatternNode, path, c): void => {
    c(node.left, path, c);
};

visitor.Property = (node: PropertyNode, path, c): void => {
    path.push(node.key.name);
    c(node.value, path, c);
    path.pop();
};

visitor.Identifier = (node: IdentifierNode, path): void => {
    console.log('current path:', path, 'current value:', node.name);
};

// const c = (node: any, path: any, c: any) => {
//     const type = node.type;
//     if (typeof visitor[type] === 'function') {
//         visitor[type](node, path, c);
//     }
// };
