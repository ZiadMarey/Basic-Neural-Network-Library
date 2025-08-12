let r,g,b;
let brain

let which = "black";



function colorPredictor(r,g,b){
    let inputs = [r/255, g/255, b/255];
    let outputs = brain.feedforward(inputs);
    console.log(outputs);

    if(outputs[0] > outputs[1]){
        return "black";
    }else{
        return "white";
    }
}

function pickColor(){
    r = random(255);
    g = random(255);
    b = random(255);
    redraw();
}

function setup(){
    createCanvas(600,360);
    noLoop();
    brain = new NeuralNetwork(3,3,2);
    pickColor();    
}

function mousePressed(){
    pickColor();
    
}

function draw(){
    background(r,g,b);

    textSize(64);
    noStroke();
    fill(0);
    textAlign(CENTER , CENTER);
    text("black", 200, 100);
    fill(255);
    text("white", 400, 100);

    let which = colorPredictor(r,g,b);
    if (which === "black"){
        fill(0);
        ellipse(200, 200, 60);
    }else{
        fill(255);
        ellipse(400, 200, 60);
    }
}

