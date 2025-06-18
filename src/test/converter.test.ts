import {PascalCaseConverter} from "@core/converter";

describe('PascalCaseConverter', () => {
    it('should return an empty string when input is empty', () => {
        const converter = new PascalCaseConverter('');
        expect(converter.convert()).toBe('');
    });
})
