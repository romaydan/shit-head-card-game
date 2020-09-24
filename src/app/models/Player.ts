import CardModel from "./CardModel";

class Player {
    name: string;
    hiddenCards: CardModel[]= [];
    TopCards:CardModel[]= [];
    HandsCards:CardModel[]= [];

    constructor(name: string) {
        this.name = name;
    }

}
export default Player;