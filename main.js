noseX = 0;
noseY = 0;

function preload() {
    ClownNose = loadImage("https://i.postimg.cc/mgPTN7vD/Sem-t-tulo-removebg-preview-2.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();


    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses)
}

function modelloaded() {
    console.log("poseNet foi inicializado")
} 

function gotPoses(results) {
    if (results.length > 0) {
       console.log(results);
       noseX = results[0].pose.nose.x - 15;
       noseY = results[0].pose.nose.y - 15;
    }
}

function draw() {
    image(video, 0 , 0, 300, 300);
    image(ClownNose, noseX, noseY, 100 , 100)
}

function takeP() {
    save("image.png")
}
