function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8u0vYrt2E/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

gotResults(error, results){
console.log('Got Result')
}