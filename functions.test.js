const functions = require ("./functions")

test('ToBe', () =>  {
    expect(functions.add(2, 2)).toBe(4)
})

test('Not to Be', () =>  {
    expect(functions.add(2, 2)).not.toBe(6)
})

test('IsNull', () =>  {
    expect(functions.isNull()).toBeNull()
})

test('falsy', () =>  {
    expect(functions.checkValue(null)).toBeFalsy()
})

test('not toEqual', () =>  {
    expect(functions.createUser()).not.toEqual({
        fistName: 'manoj', 
        lastname: 'Chambarge'
    })
})

test('tobeLessthanOrEqual', () =>  {
    const value1 = 1000
    const value2 = 500 
    expect(value1 + value2).toBeLessThanOrEqual(1600)
})

test('Regex toMatch', () =>  {
    expect('Manoj').toMatch(/j/)
})

test('contains', () =>  {
    userNames = ['manoj', 'manju']
    expect(userNames).toContain('manoj')
})

