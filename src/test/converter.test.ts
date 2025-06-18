import {PascalCaseConverter} from "../core/converter";

interface TestCase {
    description: string;
    input: string;
    expected: string;
}

describe('PascalCaseConverter', () => {
    const cases: Array<TestCase> = [
        {description: 'should return an empty string when input is empty', input: '', expected: ''},
        {description: 'should convert a single word to PascalCase', input: 'hello', expected: 'Hello'},
        {description: 'should convert a multi-word string to PascalCase', input: 'hello world', expected: 'HelloWorld'},
        {description: 'should convert a string with hyphen to PascalCase', input: 'hello-world', expected: 'HelloWorld'},
        {description: 'should convert a string with underscores to PascalCase', input: 'hello_world', expected: 'HelloWorld'},
        {description: 'should convert a string with colon to PascalCase', input: 'hello:world', expected: 'HelloWorld'},
        {description: 'should convert a complex string to PascalCase', input: 'hello_world-test:case', expected: 'HelloWorldTestCase'},
    ];

    test.each(cases)('$description', ({input, expected}: TestCase) => {
        const converter = new PascalCaseConverter(input);

        const result = converter.convert();

        expect(result).toBe(expected);
    });
});