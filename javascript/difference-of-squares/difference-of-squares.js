export class Squares {

    constructor(n) {
        //Declare the input with this.
        this.n = n;
    }

    //Use get to pass in a block of code
    get squareOfSum() {
        //Employ formula to determine square of the sum
        return (Math.pow((this.n * (this.n + 1)) / 2, 2));
    }

    get sumOfSquares() {
        return this.n * (this.n + 1) * (2 * this.n + 1) / 6;
    }

    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}

/* Friend's code for future reference:

class Squares {
    constructor(num) {
        this.squareOfSum = (Math.pow((num * (num + 1)) / 2, 2))
        this.sumOfSquares = num * (num + 1) * (2 * num + 1) / 6;
        this.difference = (Math.abs(this.squareOfSum - this.sumOfSquares));
    }
}

export default Squares;

*/

