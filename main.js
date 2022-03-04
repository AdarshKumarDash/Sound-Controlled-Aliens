//https://teachablemachine.withgoogle.com/models/rAhAqBC-v/

function record() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rAhAqBC-v/model.json", modelready);
}

function modelready() {
    console.log("Model Is Ready");
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        ran_r = Math.floor(Math.random()*255) + 1;
        ran_g = Math.floor(Math.random()*255) + 1;
        ran_b = Math.floor(Math.random()*255) + 1;
        document.getElementById("hearing").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = (result[0].confidence*100).toFixed(2) + "%";
        document.getElementById("hearing").style.color = "rgb("+ran_r+", "+ran_g+", "+ran_b+")";
        document.getElementById("accuracy").style.color = "rgb("+ran_r+", "+ran_g+", "+ran_b+")";
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if (result[0].label == "Clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        } else if (result[0].label == "Snap") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        } else if (result[0].label == "Bell") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        } else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}