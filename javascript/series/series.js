export class Series {
    constructor(str, subNum) {
        this.digits = str.split('').map(x => Number(x));
        this.subNum = subNum;
        this.str = str;
    }

    slices() {
        let subsArray = [];
        let sliceArray = this.str.split('');
        console.log(sliceArray);
        for (var i = 0; i < sliceArray.length; i++) {
            let newArray = sliceArray.slice(i, (i + this.subNum));
            subsArray.push(newArray.map(x => Number(x)));
        }
        return subsArray;
    };
}

    /*get digits() {
        //First split string of digits into an array, and then map through to turn each value into a number
        const strArray = this.str.split('').map(x => Number(x));
        return strArray;
    }*/
