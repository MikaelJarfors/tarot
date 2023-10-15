
const steve = new Player('Steve');
const malle = new Player('Malle');
const micke = new Player('Micke');
const emma = new Player('Emma');

const tarotGame = new Tarot([steve, malle, micke, emma]);
tarotGame.setPlayerBid(BIDS.petite, emma, null);
console.log(tarotGame.calculateScore(49, micke));