

 mustacheX = 0;
 mustacheY = 0;



function preload() {
    mustache = loadImage("A-Mustache-Looks-Like-a-Big-Hairy-Smile (1).png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('PoseNet initialiazed');
}





function gotPoses(results)
{
    if(results.length > 0)
{
    console.log(results);
    mustacheX = results[0].pose.nose.x;
    mustacheY = results[0].pose.nose.y;

}
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX-33, mustacheY-15, 70, 70);

}

function click_snapshot9(){
    save('myFilterImage.png');
}