const test = 'test';
const count = 1;
// 型は:xxxでかく
const test2 = (a: string, b: string) => {
    return a + b;
};
console.log(test2(test, String(count)));
