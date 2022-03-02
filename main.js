//https://teachablemachine.withgoogle.com/models/rAhAqBC-v/

function record() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rAhAqBC-v/model.json", modelready);
}

function modelready() {
    console.log("Model Is Ready");
    classifier.classify(gotResult);
}