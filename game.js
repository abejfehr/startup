class Game {

    constructor () {
        this.points = 0;

        document.body.addEventListener('click', () => {
            ++this.points;
            this.writePoints();
        });
    }

    writePoints () {
        document.getElementById('points').innerText = this.points;
    }

}

var game = new Game();
