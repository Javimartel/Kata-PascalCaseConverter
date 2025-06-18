export class PascalCaseConverter {
    private text: string

    constructor(textToConvert: string) {
        this.text = textToConvert;
    }

    convert(): string {
        return this.text
            .split(/[ _:\-]+/)
            .filter(Boolean)
            .map(this.capitalize)
            .join('');
    }

    private capitalize(word: string): string {
        return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : '';
    }
}