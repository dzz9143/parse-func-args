Not usable right now, in development

## ToDo
- [ ] Do the type augment for `Function` & `Identifier` type for acorn
- [ ] State type describe for recursive walk
- [ ] Jest should use native javascript to run all the test(should change npm script accordingly)

## NodeType
```
Destructuring binding and assignment are not part of ES5, but all binding positions accept Pattern to allow for destructuring in ES6. Nevertheless, for ES5, the only Pattern subtype is Identifier.
```

```javascript
function test({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}

// displayName - displayName
// name - fullName.firstName
```

for `ObjectPattern`:
    - `properties`

for `Property`:
    - `key`
    - `value`


## Reference
1. [ESTree Spec](https://github.com/estree/estree)
2. [ES5 Spec](https://github.com/estree/estree/blob/master/es5.md)
3. [ES2015 Spec](https://github.com/estree/estree/blob/master/es2015.md)
4. [Acorn](https://github.com/acornjs/acorn)
5. [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

