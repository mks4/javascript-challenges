const sum = require('./sum')

test('1+2=3', function()
{
    expect(sum(1,2)).toBe(3)
})