let rightWristX = 0;
let rightWristY = 0;
let leftWristX = 0;
let leftWristY = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(720);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet good to go!');
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log('left wrist x is working','left wrist y is working too');
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log('right wrist x is working','right wrist y is working too');
    }
}

function draw(){
    image(video,0,0,500,500);
}