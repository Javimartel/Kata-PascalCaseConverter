export class PascalCaseConverter {
    private text: string

    constructor(textToConvert: string) {
        this.text = textToConvert;
    }

    convert() {
        return this.text.charAt(0).toUpperCase() + this.text.slice(1);
    }
}