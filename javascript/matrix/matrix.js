export class Matrix {
    constructor(str) {
        this.str = str;
        this.rows = (this.str.split(/[\n]/)).map(x => x.split(/\s/).map(x => (Number(x))));
    }

    /*
    get rows() {
        // split into an array of string digit groups separated by space [1 2 3, 4 5 6, 7 8 9]
        return this.str.split(/[\n]/)
            //next map through the array, splitting again on spaces in the strings to create new arrays [[1,2,3], [4,5,6],[7,8,9]]
            .map(x => x.split(/\s/)
                //next map through each new array and turn the string digit into a number
                .map(x => (Number(x))));
    }
    */

    //assuming each row is the same length, divide each row into an array and grab the same index in each to build a list
    get columns() {
        console.log(this.rows);
        //objective: iterate through the rowSpan array however many times is needed to make a new array of arrays of each index value

        const rowSpan = this.rows[0].length;
        // take this.rows = [[1,2,3], [3,4,5], [6,7,8]]

        //create a new array to collect new arrays create from index rows of 'rows'
        let colArr = [];
        //initialize the set number 'rowSpan' of empty arrays within the colArr array
        for (var i = 0; i <= rowSpan - 1; i++) {
            colArr[i] = [];
        }

        console.log(colArr);
        for (var i = 0; i <= this.rows.length - 1; i++) {
            console.log(this.rows);
            for (var j = 0; j <= this.rows[i].length - 1; j++) {
                console.log(this.rows[i]);
                console.log(colArr);
                colArr[j].push(this.rows[i][j]);
            }
        }

        return colArr;
    }
}