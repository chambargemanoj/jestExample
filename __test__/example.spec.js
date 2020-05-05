require("../example");
const example = window.example;

beforeAll (() => {
console.log ("Before all called ")
});

afterAll (() => {
    console.log ("After all  called ")
    });

beforeEach (()=> {
console.log ("Before Each")
});

afterEach (()=> {
    console.log ("After Each")
    });
    
describe("Example Test", () => {
    xit("Should be defined", () => { 
        expect(example).toBeDefined();
    });

    xit("Should be defined", () => { 
        expect(typeof example).toEqual("object");
    });

})