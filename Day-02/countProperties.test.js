const countProperties = require('./countProperties') 

describe('Count Number of properties Test', () => {
test.each([
    [{a:1, b:2, c:3}, 3],
    [{d:1, e:2, f:3, g:4}, 4]
])("Test these", (input, expected) =>{
    expect(countProperties(input)).toBe(expected);
})
})