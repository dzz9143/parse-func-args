import { Node } from 'acorn';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface PatternNode extends Node {}

export interface IdentifierNode extends PatternNode {
    type: 'Identifier';
    name: string;
}

export interface PropertyNode extends Node {
    type: 'Property';
    key: IdentifierNode;
    value: PatternNode;
}

export interface AssignmentPatternNode extends PatternNode {
    type: 'AssignmentPattern';
    left: PatternNode;
}

export interface ObjectPatternNode extends PatternNode {
    type: 'ObjectPattern';
    properties: PropertyNode[];
}

export interface FunctionNode extends Node {
    id: IdentifierNode;
    params: PatternNode[];
}

export interface Arg {
    name: string;
    type: string;
}

// visitor
export type VisitorFunction = (node: Node, path: string[], c?: VisitorFunction) => void;

export type Visitor = {
    [nodeType: string]: VisitorFunction;
};
