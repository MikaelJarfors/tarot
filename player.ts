class Player {
    
    name: string;
    chelem: CHELEM;
    poignee: POIGNEE;
    bid: BIDS;
    constructor(name: string) {
        this.name = name;
        this.score = 0;
        this.chelem = CHELEM.NO_BID;
        this.poignee = POIGNEE.NO_BID;
        this.bid = BIDS.NO_BID;
    }

    get score() {
        return this.score;
    }

    set score(amount) {
        this.score += amount;
    }

    setChelem(bid: CHELEM) {
        this.chelem = bid;
    }

    setPoignee(bid: POIGNEE) {
        this.poignee = bid
    }

    setBid(bid: BIDS) {
        this.bid = bid;
    }
}