class levenshtein {
    /**
     * Calculate levenshtein distance of the two strings.
     * @param {string} str1
     * @param {string} str2
     * @emit this.value: Integer the levenshtein distance (>=0).
     */
    constructor(str1, str2) {
        this.str1 = str2;
        this.str2 = str1;
        this.matrix = [];
        for (let i = 0; i <= this.str1.length; i++) {
            this.matrix[i] = [];
        }
        this.value = this.matrix[this.str1.length][this.str2.length] = this.D(this.str1.length, this.str2.length);
    }
    Matrix(i, j) {
        if (typeof (this.matrix[i][j]) == 'undefined') {
            this.matrix[i][j] = this.D(i, j);
        }
        return this.matrix[i][j];
    }
    D(i, j) {
        if (i == 0 && j == 0) {
            return 0;
        } else if (i > 0 && j == 0) {
            return i;
        } else if (i == 0 && j > 0) {
            return j;
        } else {
            let v1 = this.Matrix(i, j - 1) + 1;
            let v2 = this.Matrix(i - 1, j) + 1;
            let v3 = this.Matrix(i - 1, j - 1) + +(this.str1[i - 1] != this.str2[j - 1]);
            let v = Math.min(
                v1,
                v2,
                v3
            );
            return v;
        }
    }
    showMatrix(width) {
        this.str1 = ' ' + this.str1;
        this.str2 = ' ' + this.str2;
        let str = ''.padStart(width, ' ');
        for (let c of this.str2) {
            str += c.padStart(width, ' ');
        }
        console.log(str + '\r\n');
        for (let i = 0; i < this.matrix.length; i++) {
            str = this.str1[i].padStart(width, ' ');
            for (let j = 0; j < this.matrix[i].length; j++) {
                let localWidth = width
                let closing = '';
                if(j >= this.matrix[i].length - 1 && i >= this.matrix.length - 1) {
                    localWidth /= 2;
                    str += '|'.padStart(localWidth, ' ');
                    closing = '|'.padStart(localWidth, ' ');
                }
                str += this.matrix[i][j].toString(10).padStart(localWidth, ' ') + closing;
            }
            str += '\r\n';
            if (i >= this.matrix.length - 2) {
                for (let k = 0; k < this.matrix[i].length; k++) {
                    str += ''.padStart(width, ' ');
                }
                str += '+'.padStart(width / 2, ' ') + '+'.padStart(width, '–');
            }
            console.log(str);
        }
    }
}


module.exports = { levenshtein }