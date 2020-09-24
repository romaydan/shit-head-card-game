 class CardModel {
    suit: string;
    type: string;
    value: number;
    suitImageUrl: string="";
    isHidden:boolean= false;
    constructor(suit: string, type: string) {
        this.suit = suit;
        this.type = type;
        switch (type) {
            case 'j':
                this.value = 11;

                break;
            case 'q':
                this.value = 12;

                break;
            case 'k':
                this.value = 13;

                break;
            case 'a':
                this.value = 14;

                break;

            default:
                this.value = parseInt(type);
                break;
        }
        switch (suit) {
            case 'Spades':
                this.suitImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/5b/SuitSpades.svg';
                break;
            case 'Clubs':
                this.suitImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/8/8a/SuitClubs.svg';
                break;
            case 'Hearts':
                this.suitImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Suit_Hearts.svg';
                break;
            case 'Diamonds':
                this.suitImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/db/SuitDiamonds.svg';
                break;
        }
    }
}
export default CardModel;