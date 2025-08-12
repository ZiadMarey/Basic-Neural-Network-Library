class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for (var i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (var j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }


    }

    // Converts Array into Matrix
    static fromArray(arr){
        let m = new Matrix(arr.length, 1);
        for(let i=0; i<arr.length;i++){
            m.data[i][0]=arr[i];
        }
        
        return m;
    }

    //Converts Matrix into Array
    toArray(){
        let arr = [];
        let m = new Matrix(arr.length, 1);
        for(let i=0; i<this.rows;i++){
            for(let j=0; j<this.cols;j++){
                arr.push(this.data[i][j]);
            }
        }
        return arr;
    }
    
    randomize(){
        return this.map(e => Math.random() * 2 - 1);
    }

    randomize_matrix() {
        return this.map(e => Math.floor(Math.random()*10));
    }


    multiply(n) {            
        if (n instanceof Matrix) {
      if (this.rows !== n.rows || this.cols !== n.cols) {
        console.log('Columns and Rows of A must match Columns and Rows of B.');
        return;
      }

      return this.map((e, i, j) => e * n.data[i][j]);
    } else {
      // Scalar product
      return this.map(e => e * n);
    }
    }

    
    static multiply (a, b){
        if (a.cols !== b.rows) {
        console.log('Columns of A must match rows of B.');
        return;
        }

        return new Matrix(a.rows, b.cols)
        .map((e, i, j) => {
            
            let sum = 0;
            for (let k = 0; k < a.cols; k++) {
            sum += a.data[i][k] * b.data[k][j];
            }
            return sum;
        });

    }

    static transpose(matrix){
        return new Matrix(matrix.cols, matrix.rows)
            .map((_, i, j) => matrix.data[j][i]);
    }
    add(n) {

        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                console.log('Columns and Rows of A must match Columns and Rows of B.');
                return;
            }
            return this.map((e, i, j) => e + n.data[i][j]);
        } else {
            return this.map(e => e + n);
        }

    }

    static subtract(a, b) {
        if (a.rows !== b.rows || a.cols !== b.cols) {
            console.log('Columns and Rows of A must match Columns and Rows of B.');
            return;
        }

        return new Matrix(a.rows, a.cols)
        .map((_, i, j) => a.data[i][j] - b.data[i][j]);
    }

    print(){
        console.table(this.data);
    }   

    map(func){
        for(var i =0; i<this.rows;i++){
            for(var j=0; j< this.cols; j++){
                let val = this.data[i][j];
                this.data[i][j]=func(val,i,j);
            }
        }
        return this;
    }

    static map(matrix, func) {
    
    return new Matrix(matrix.rows, matrix.cols)
      .map((e, i, j) => func(matrix.data[i][j], i, j));
  }
}


    


