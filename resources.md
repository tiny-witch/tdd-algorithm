[mocha tdd](https://www.swtestacademy.com/node-js-unit-testing-with-mocha/)

[compare algos](https://www.toptal.com/developers/sorting-algorithms)

```js 
function multiplyNumbers(x, y) {
    return x * y;
}
module.exports = {
    multiplyNumbers : multiplyNumbers
}
```
test file:
```js

const expect = require('chai').expect;
const multiplyNumbers = require('../index.js').multiplyNumbers;
describe('Index', function () {
    describe('#multiplyNumbers()', function () {
        it('should return the result of multiplication', function () {
            let result = multiplyNumbers(4, 6);
            expect(result).to.equal(24);
        });
    });
});
```

