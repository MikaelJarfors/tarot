enum CARD_VALUES {
    BOUT = 4.5,
    KING =  4.5,
    QUEEN = 3.5,
    JACK = 1.5,
    OTHER = 0.5,
}


enum SCORES {
    PETIT_BOUT = 10,
    BASE_SCORE = 25
};

enum POIGNEE {
    NO_BID = 0,
    SINGLE = 20,
    DOUBLE = 30,
    TRIPLE = 40
};

enum CHELEM {
    NO_BID = 0,
    WIN = 400,
    LOSE = -200,
}

enum BIDS {
    NO_BID = 0,
    petite = 1,
    garde = 2,
    gardeSansLeChien = 4,
    gardeContreLeChien = 6
}