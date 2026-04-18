## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
        Answer: A sequence of commands. Running a program means executing the commands in order.
   1. [5 points] Object Oriented
        Answer: The program is built using objects, each one contains fields and methods.
                Running a program means creating objects and using their methods.
   1. [5 points] Functional
        Answer: Every program is a series of expressions. Running a program means calculating these expressions
                based on certain rules and returning the final value.
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
        Answer: OOP improves over the imperative paradigm by organizing the code and making it more modular,
                readable and easier to maintain.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?
        Answer: Functional paradigm improves over OOP by being based on pure functions without side-effects,
                which leads to the code being easier to test and type-check. Also, it prevents concurrency 
                issues by immutability.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
    name: string;
    price: number;
    discounted: boolean;
}

const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {

    const filtered_inventory = inventory.filter((p : Product) => p.discounted);

    const discountedPriceSum = filtered_inventory.reduce((acc : number, cur : Product) => acc + cur.price, 0);

    const discountedProductsCount = filtered_inventory.length;

    return discountedProductsCount === 0 ? 0 : discountedPriceSum / discountedProductsCount;
}
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)` 
    Answer = <T1>(x: T1[], y : (t: T1) => boolean) => boolean

2. [3 points] `x => x.map(y => y * 2)`
    Answer = (x : number[]) => number[]

3. [3 points] `(x, y) => x.filter(y)`
    Answer = <T1>(x: T1[], y : (t: T1) => boolean) => T1[]

4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
    Answer = (x : number[]) => number

5. [3 points] `(x, y) => x ? y[0] : y[1]`
    Answer = <T1>(x : boolean, y : T1[]) => T1

6. [3 points] `(f,g) => x => f(g(x+1))`
    Answer = x : number, g : <T1>(func: (t: number) => T1), f : <T1,T2>(func: (t: T1) => T2)
    <T1,T2>(f: (t: T1) => T2, g: (x: number) => T1) => ((x: number) => T2)
