const reverseString = require ('./reverseString')

test("Reverstring func", () => {
    expect(reverseString).toBeDefined()
})

test("Reverstring string", () => {
    expect(reverseString('Hello')).toEqual('olleH')
})


