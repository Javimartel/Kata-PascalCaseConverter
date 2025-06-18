import {PascalCaseConverter} from "../core/converter";

describe('PascalCaseConverter', () => {
    it('should return an empty string when input is empty', () => {
        const converter = new PascalCaseConverter('');

        const result = converter.convert();

        expect(result).toBe('');
    });

    it('should convert a single word to PascalCase', () => {
        const converter = new PascalCaseConverter('hello');

        const result = converter.convert();

        expect(result).toBe('Hello');
    });

    it('should convert a multi-word string to PascalCase', () => {
        const converter = new PascalCaseConverter('hello world');

        const result = converter.convert();

        expect(result).toBe('HelloWorld');
    });

    it('should convert a string with hyphen to PascalCase', () => {
        const converter = new PascalCaseConverter('hello-world');

        const result = converter.convert();

        expect(result).toBe('HelloWorld');
    });

    it('should convert a string with underscores to PascalCase', () => {
        const converter = new PascalCaseConverter('hello_world');

        const result = converter.convert();

        expect(result).toBe('HelloWorld');
    });
})
