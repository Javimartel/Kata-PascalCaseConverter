export class PascalCaseConverter {
    private text: string

    constructor(textToConvert: string) {
        this.text = textToConvert;
    }

    convert() {
        const words = this.text.split(/[ -]/);

        return words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }
}