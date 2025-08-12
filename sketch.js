
function setup(){
    let nn = new NeuralNetwork(2,2,2);
    let input = [1,0];
    let targets = [1,0];
    // let output = nn.feedforward(input);

    nn.train(input, targets)
    // console.log(output);

}

function draw(){

}