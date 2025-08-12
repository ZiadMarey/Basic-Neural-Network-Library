# Basic Neural Network Library

This is a very basic Javascript Neural Network library based on the one built by Daniel Shiffman in [this](https://www.youtube.com/watch?v=XJ7HLz9VYz0&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh) playlist using Javascript.


## Features

- Neural Network with variable amounts of inputs, hidden nodes and outputs
- Activation functions
- Adjustable learning rate
- Fully connected


## Use the library

Constructors:
```javascript
// Neural network with 2 inputs, 1 hidden layer, 2 hidden nodes and 1 output
let nn = new NeuralNetwork(2,2,1);

```

Train and guess:
```javascript
// Train the neural network with a training dataset (inputs and expected outputs)
nn.train(trainingDataInputs, trainingDataTargets);

// Guess for the given testing data is returned as an array (double[])
nn.guess(testingData);
```

## Example:
Example Input data:
```
training_data = [
    {
        inputs: [0,1],
        targets: [1]
    },
    {
        inputs: [1,0],
        targets: [1]
    },
    {
        inputs: [1,1],
        targets: [0]
    },
    {
        inputs: [0,0],
        targets: [0]
    }
```

Example Output data:
```
[0.9657041080520701]
[0.9657169915890613]
[0.031643792734093526]
[0.031532069620372874]
```
