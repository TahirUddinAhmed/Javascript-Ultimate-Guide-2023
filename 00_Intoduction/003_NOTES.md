# var VS let in javascript 
  1. Var is globally scoped while let & const are block scoped.
  2. var can be updated & re-declared within its scope.
  3. let can be updated but not re-declared.
  4. Const can neither be updated nor be re-declared.
  5. Var variables are initialized with undefined wheras let and const variables are not initialized.
  6. Const must be initialized during declaration unlike let and var. // const author; // NOT allowed

## When to use each type of variable: 
  1. Use 'let' when you need to reassign the value of the variable.
  2. Use 'const' when you want to decalre a constant that should not be reassigned..
  3. Minimize the use of 'var', and prefer 'let' or 'const' depending on the use case. 

'let' and 'const' are introduced in ES6(ECMAScript 6).