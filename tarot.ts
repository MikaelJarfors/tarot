class Tarot {
    players: Map<string, Player>;
    constructor(players: Player[]) {
        this.players = new Map();
        for (const player of players) {
            this.players.set(player.name, player);
        }
    }

    getScore(playerName: string) {
        return this.players[playerName].score;
    }

    setPlayerBid(bid: BIDS, playerWithBid: Player, companion: Player | null) {
        const isBigGame = this.players.size > 4;
        if (isBigGame) {
            assert(companion, 'Companion');
        }

        for (const playerName in this.players) {
            const player = this.players.get(playerName);
            if (player === playerWithBid) {
                player?.setBid(bid);
            } else if (isBigGame && player === companion) {
                player?.setBid(bid);
            } else {
                player?.setBid(BIDS.NO_BID);
            }
        }
    }

    calculateScore(outcome: number, isPetitBout: Player): Player[] {
        for (const playerName in this.players) {
            const player = this.players.get(playerName);
            if (player) {
                player.score = this.calculatePlayerScore(player, player.bid, outcome, isPetitBout, player.chelem, player.poignee);
            }
            
        }

        return [...this.players.values()];
    }

    calculatePlayerScore(player: Player, bid: BIDS, outcome: number, isPetitBout: Player, chelem: CHELEM, poignee: POIGNEE): number {
        const baseScore = SCORES.BASE_SCORE;
        const petitBout = isPetitBout === player ? SCORES.PETIT_BOUT : 0;
        return ((baseScore + outcome + petitBout) * bid) + poignee + chelem;
    }

    calculateCardScores(cards: CARD_VALUES[]): number {
        return cards.reduce((aggregator, card) => aggregator += card, 0);
    }
}

function assert(companion: any, fieldName: string) {
    if (!companion) {
        throw new Error(`${fieldName} is required.`);
    }
}
