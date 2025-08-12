function sigmoid(x){
    return 1/(1+Math.exp(-x));
}

function dsigmoid(sigmoid){

    return sigmoid * (1-sigmoid);
}

class NeuralNetwork {
    constructor(numI, numH, numO) {
        this.input_nodes = numI;
        this.hidden_nodes = numH;
        this.output_nodes = numO;

        this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
        this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
        
        this.weights_ih.randomize();
        this.weights_ho.randomize();
        
        this.bias_h = new Matrix(this.hidden_nodes, 1);
        this.bias_o = new Matrix(this.output_nodes,1); 
        this.bias_h.randomize();
        this.bias_o.randomize();
        this.learning_rate = 0.1;
    }

    feedforward(input){

        let inputs = Matrix.fromArray(input)

        //Generating The Hidden Outputs
        let hidden = Matrix.multiply(this.weights_ih , inputs);
        hidden.add(this.bias_h);
        hidden.map(sigmoid);

        //Generating The Output
        let output = Matrix.multiply(this.weights_ho,inputs);
        output.add(this.bias_o);
        output.map(sigmoid);

        return output.toArray();

    }

    train(inputs,targets ){
        
        //Generating The Hidden Outputs
        let hidden = Matrix.multiply(this.weights_ih , inputs);
        hidden.add(this.bias_h);
        hidden.map(sigmoid);

        //Generating The Output
        let outputs = Matrix.multiply(this.weights_ho,inputs);
        outputs.add(this.bias_o);
        outputs.map(sigmoid);

        targets = Matrix.fromArray(targets);

        //Calculate the error in Hidden-Output
        //Error = Targets - Outputs
        let output_errors = Matrix.subtract(targets,outputs);

        //let gradient = output*(1-outputs);
        //Calculate y=m x + b , with m = l_r*gradient*err

        let gradients = Matrix.map(outputs, dsigmoid) //gradient
        gradients.multiply(output_errors); //error
        gradients.multiply(this.learning_rate)// l_r

        //Calculate the x (which is hidden transposed) then * m
        let hidden_T = Matrix.transpose(hidden);
        let weights_ho_deltas = Matrix.multiply(gradients, hidden_T) 
        
        this.weights_ho.add(weights_ho_deltas);


        let weight_ho_t = Matrix.transpose(this.weights_ho);
        let hidden_errors = Matrix.multiply(weight_ho_t, output_errors);
        
        //Calculate the error in Input-Hidden
        let hidden_gradient = Matrix.map(hidden,dsigmoid);
        hidden_gradient.multiply(hidden_errors);
        hidden_gradient.multiply(this.learning_rate);

        let inputs_T = Matrix.transpose(inputs);
        let weights_ih_deltas = Matrix.multiply(hidden_gradient,inputs_T);

        this.weights_ih.add(weights_ih_deltas);

        // outputs.print();
        // targets.print();
        // error.print();
    }
}